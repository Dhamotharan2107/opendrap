const TOKEN_KEY = 'dev_token';
const BASE = import.meta.env.VITE_API_URL ?? '';

export const authService = {
  async login(email: string, password: string): Promise<{ ok: boolean; error?: string }> {
    const res = await fetch(`${BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok && data.token) {
      localStorage.setItem(TOKEN_KEY, data.token);
      return { ok: true };
    }
    return { ok: false, error: data.error || 'Login failed' };
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  authHeaders(): Record<string, string> {
    const token = this.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  },
};
