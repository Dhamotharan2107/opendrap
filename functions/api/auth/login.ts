interface Env {
  JWT_SECRET: string;
  DEV_EMAIL: string;
  DEV_PASSWORD: string;
}

async function createToken(email: string, secret: string): Promise<string> {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).replace(/=/g, '');
  const payload = btoa(JSON.stringify({
    sub: email,
    exp: Math.floor(Date.now() / 1000) + 8 * 60 * 60,
  })).replace(/=/g, '');

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );

  const sig = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(`${header}.${payload}`),
  );

  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

  return `${header}.${payload}.${sigB64}`;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export async function onRequestPost(context: { request: Request; env: Env }) {
  const body = await context.request.json() as { email?: string; password?: string };
  const email = (body.email ?? '').trim();
  const password = body.password ?? '';

  const devEmail = context.env.DEV_EMAIL ?? 'developer@opendrap.ai';
  const devPassword = context.env.DEV_PASSWORD ?? 'Qwerty@123';
  const secret = context.env.JWT_SECRET ?? 'dev-secret';

  if (email !== devEmail || password !== devPassword) {
    return json({ error: 'Invalid email or password' }, 401);
  }

  const token = await createToken(email, secret);
  return json({ ok: true, token, email });
}
