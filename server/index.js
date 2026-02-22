import "dotenv/config";
import cors from "cors";
import express from "express";
import mysql from "mysql2/promise";

const app = express();
const port = Number(process.env.API_PORT || 4001);

const requiredEnv = [
  "TIDB_HOST",
  "TIDB_PORT",
  "TIDB_USER",
  "TIDB_PASSWORD",
  "TIDB_DATABASE",
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}

const pool = mysql.createPool({
  host: process.env.TIDB_HOST,
  port: Number(process.env.TIDB_PORT),
  user: process.env.TIDB_USER,
  password: process.env.TIDB_PASSWORD,
  database: process.env.TIDB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    minVersion: "TLSv1.2",
  },
});

app.use(cors());
app.use(express.json());

const ensureContactTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NULL,
      company VARCHAR(255) NULL,
      inquiry_type VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true });
  } catch (error) {
    console.error("Health check failed", error);
    res.status(500).json({ ok: false });
  }
});

app.get("/api/contact", async (_req, res) => {
  try {
    await ensureContactTable();
    const [rows] = await pool.query(
      `
      SELECT
        id,
        first_name AS firstName,
        last_name AS lastName,
        email,
        phone,
        company,
        inquiry_type AS inquiryType,
        message,
        created_at AS createdAt
      FROM contact_submissions
      ORDER BY created_at DESC
      `,
    );

    return res.json({ ok: true, data: rows });
  } catch (error) {
    console.error("Failed to fetch contact submissions", error);
    return res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

app.post("/api/contact", async (req, res) => {
  const {
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    company = "",
    inquiryType = "",
    message = "",
  } = req.body || {};

  if (!firstName || !lastName || !email || !inquiryType || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await ensureContactTable();

    await pool.execute(
      `
      INSERT INTO contact_submissions
      (first_name, last_name, email, phone, company, inquiry_type, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        firstName.trim(),
        lastName.trim(),
        email.trim(),
        phone.trim(),
        company.trim(),
        inquiryType.trim(),
        message.trim(),
      ],
    );

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error("Failed to save contact submission", error);
    return res.status(500).json({ error: "Failed to save submission" });
  }
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
