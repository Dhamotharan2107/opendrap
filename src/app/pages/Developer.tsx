import { FormEvent, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

type ContactSubmission = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  company: string | null;
  inquiryType: string;
  message: string;
  createdAt: string;
};

const VALID_USERNAME = "developer@opendrap.ai";
const VALID_PASSWORD = "Qwerty@123";

export function Developer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [data, setData] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadSubmissions = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact");
      const payload = (await response.json()) as {
        ok?: boolean;
        data?: ContactSubmission[];
        error?: string;
      };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Failed to load submissions");
      }

      setData(payload.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setIsAuthenticated(true);
      return;
    }

    setAuthError("Invalid username or password.");
  };

  if (!isAuthenticated) {
    return (
      <section className="py-16 bg-gray-50 min-h-[calc(100vh-8rem)]">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl">Developer Login</CardTitle>
              <CardDescription>Sign in to view contact submissions.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="developer-username">Username</Label>
                  <Input
                    id="developer-username"
                    type="email"
                    placeholder="developer@opendrap.ai"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="developer-password">Password</Label>
                  <Input
                    id="developer-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {authError && <p className="text-sm text-red-600">{authError}</p>}
                <Button type="submit" className="w-full bg-[#002E6E] hover:bg-[#001f4d]">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50 min-h-[calc(100vh-8rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">Developer Contact Submissions</CardTitle>
              <CardDescription>All contact form data saved in TiDB.</CardDescription>
            </div>
            <Button onClick={loadSubmissions} disabled={loading} className="bg-[#002E6E] hover:bg-[#001f4d]">
              {loading ? "Loading..." : "Refresh"}
            </Button>
          </CardHeader>
          <CardContent>
            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Inquiry</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!loading && data.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-gray-500 py-8">
                      No submissions yet.
                    </TableCell>
                  </TableRow>
                )}
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
                    <TableCell>{row.firstName} {row.lastName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phone || "-"}</TableCell>
                    <TableCell>{row.company || "-"}</TableCell>
                    <TableCell>{row.inquiryType}</TableCell>
                    <TableCell className="max-w-xs whitespace-normal break-words">{row.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
