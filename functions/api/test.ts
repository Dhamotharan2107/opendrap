interface Env {
  DB: D1Database;
}

export async function onRequestGet(context: { env: Env }) {
  try {
    if (!context.env.DB) {
      return new Response(JSON.stringify({ error: 'DB binding missing' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await context.env.DB.prepare('SELECT 1 as test').first();
    
    return new Response(JSON.stringify({ ok: true, db_works: true, result }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'DB test failed', 
      details: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
