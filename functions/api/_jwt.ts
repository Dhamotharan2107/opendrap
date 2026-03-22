export async function verifyToken(request: Request, secret: string): Promise<boolean> {
  const auth = request.headers.get('Authorization') ?? '';
  if (!auth.startsWith('Bearer ')) return false;
  const [header, payload, sig] = auth.slice(7).split('.');
  if (!header || !payload || !sig) return false;

  try {
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify'],
    );

    const sigBytes = Uint8Array.from(
      atob(sig.replace(/-/g, '+').replace(/_/g, '/')),
      (c) => c.charCodeAt(0),
    );

    const valid = await crypto.subtle.verify(
      'HMAC',
      key,
      sigBytes,
      new TextEncoder().encode(`${header}.${payload}`),
    );

    if (!valid) return false;

    const { exp } = JSON.parse(atob(payload)) as { exp: number };
    return Math.floor(Date.now() / 1000) < exp;
  } catch {
    return false;
  }
}
