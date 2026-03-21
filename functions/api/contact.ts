interface Env {
  DB: D1Database;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const ensureContactTable = async (db: D1Database) => {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      inquiry_type TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
};

export async function onRequestGet(context: { request: Request; env: Env }) {
  try {
    await ensureContactTable(context.env.DB);
    const { results } = await context.env.DB.prepare(`
      SELECT
        id,
        first_name AS firstName,
        last_name AS lastName,
        email, phone, company,
        inquiry_type AS inquiryType,
        message,
        created_at AS createdAt
      FROM contact_submissions
      ORDER BY created_at DESC
    `).all();
    return json({ ok: true, data: results });
  } catch (error) {
    return json({ error: 'Failed to fetch submissions' }, 500);
  }
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    if (!context.env.DB) return json({ error: 'Database not configured' }, 500);

    const body = await context.request.json() as {
      firstName?: string; lastName?: string; email?: string;
      phone?: string; company?: string; inquiryType?: string; message?: string;
    };

    const { firstName = '', lastName = '', email = '', phone = '', company = '', inquiryType = '', message = '' } = body;

    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return json({ error: 'Missing required fields' }, 400);
    }

    await ensureContactTable(context.env.DB);
    await context.env.DB.prepare(
      `INSERT INTO contact_submissions
       (first_name, last_name, email, phone, company, inquiry_type, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(firstName.trim(), lastName.trim(), email.trim(), phone.trim(), company.trim(), inquiryType.trim(), message.trim()).run();

    return json({ ok: true }, 201);
  } catch (error) {
    return json({ error: 'Failed to save submission', details: error instanceof Error ? error.message : String(error) }, 500);
  }
}
