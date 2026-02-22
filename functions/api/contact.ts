interface Env {
  DB: D1Database;
}

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

export async function onRequestGet(context: { env: Env }) {
  try {
    await ensureContactTable(context.env.DB);
    const { results } = await context.env.DB.prepare(`
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
    `).all();
    return new Response(JSON.stringify({ ok: true, data: results }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch submissions' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    if (!context.env.DB) {
      return new Response(JSON.stringify({ error: 'Database not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await context.request.json() as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      company?: string;
      inquiryType?: string;
      message?: string;
    };

    const { firstName = '', lastName = '', email = '', phone = '', company = '', inquiryType = '', message = '' } = body;

    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await ensureContactTable(context.env.DB);
    await context.env.DB.prepare(
      `INSERT INTO contact_submissions
       (first_name, last_name, email, phone, company, inquiry_type, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).bind(firstName.trim(), lastName.trim(), email.trim(), phone.trim(), company.trim(), inquiryType.trim(), message.trim()).run();

    return new Response(JSON.stringify({ ok: true }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving submission:', error);
    return new Response(JSON.stringify({ error: 'Failed to save submission', details: error instanceof Error ? error.message : String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
