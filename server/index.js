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

/* ──────────────────────────────────
   REVIEWS
────────────────────────────────── */
const ensureReviewsTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS reviews (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(150) NOT NULL,
      role VARCHAR(200) NULL,
      rating TINYINT NOT NULL DEFAULT 5,
      message TEXT NOT NULL,
      approved TINYINT NOT NULL DEFAULT 0,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

// Public: submit a review
app.post("/api/reviews", async (req, res) => {
  const { name = "", role = "", rating = 5, message = "" } = req.body || {};
  if (!name || !message) return res.status(400).json({ error: "Name and message are required" });
  const safeRating = Math.min(5, Math.max(1, Number(rating) || 5));
  try {
    await ensureReviewsTable();
    await pool.execute(
      `INSERT INTO reviews (name, role, rating, message) VALUES (?, ?, ?, ?)`,
      [name.trim(), role.trim(), safeRating, message.trim()]
    );
    return res.status(201).json({ ok: true });
  } catch (err) {
    console.error("Failed to save review", err);
    return res.status(500).json({ error: "Failed to save review" });
  }
});

// Public: get approved reviews only
app.get("/api/reviews/public", async (_req, res) => {
  try {
    await ensureReviewsTable();
    const [rows] = await pool.query(
      `SELECT id, name, role, rating, message, created_at AS createdAt
       FROM reviews WHERE approved = 1 ORDER BY created_at DESC LIMIT 20`
    );
    return res.json({ ok: true, data: rows });
  } catch (err) {
    console.error("Failed to fetch reviews", err);
    return res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// Authenticated: get all reviews
app.get("/api/reviews", async (_req, res) => {
  try {
    await ensureReviewsTable();
    const [rows] = await pool.query(
      `SELECT id, name, role, rating, message, approved, created_at AS createdAt
       FROM reviews ORDER BY created_at DESC`
    );
    return res.json({ ok: true, data: rows });
  } catch (err) {
    console.error("Failed to fetch all reviews", err);
    return res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// Authenticated: approve a review
app.patch("/api/reviews/:id/approve", async (req, res) => {
  const { id } = req.params;
  const { approved } = req.body;
  try {
    await pool.execute(`UPDATE reviews SET approved = ? WHERE id = ?`, [approved ? 1 : 0, id]);
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to update review" });
  }
});

// Authenticated: delete a review
app.delete("/api/reviews/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.execute(`DELETE FROM reviews WHERE id = ?`, [id]);
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to delete review" });
  }
});

/* ──────────────────────────────────
   CLIENTS
────────────────────────────────── */
const ensureClientsTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS clients (
      id BIGINT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(200) NOT NULL,
      company VARCHAR(200) NULL,
      industry VARCHAR(150) NULL,
      website VARCHAR(300) NULL,
      logo MEDIUMTEXT NULL,
      notes TEXT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  // Add logo column if table existed before this migration
  await pool.query(`
    ALTER TABLE clients ADD COLUMN IF NOT EXISTS logo MEDIUMTEXT NULL
  `).catch(() => {});
};

// Authenticated: list all clients
app.get("/api/clients", async (_req, res) => {
  try {
    await ensureClientsTable();
    const [rows] = await pool.query(
      `SELECT id, name, company, industry, website, logo, notes, created_at AS createdAt
       FROM clients ORDER BY created_at DESC`
    );
    return res.json({ ok: true, data: rows });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch clients" });
  }
});

// Authenticated: add a client
app.post("/api/clients", async (req, res) => {
  const { name = "", company = "", industry = "", website = "", logo = "", notes = "" } = req.body || {};
  if (!name) return res.status(400).json({ error: "Client name is required" });
  try {
    await ensureClientsTable();
    await pool.execute(
      `INSERT INTO clients (name, company, industry, website, logo, notes) VALUES (?, ?, ?, ?, ?, ?)`,
      [name.trim(), company.trim(), industry.trim(), website.trim(), logo || null, notes.trim()]
    );
    return res.status(201).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to add client" });
  }
});

// Authenticated: delete a client
app.delete("/api/clients/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.execute(`DELETE FROM clients WHERE id = ?`, [id]);
    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to delete client" });
  }
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
