<<<<<<< HEAD
import { FormEvent, useEffect, useRef, useState } from "react";
=======
import { FormEvent, useEffect, useState } from "react";
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
<<<<<<< HEAD
import { Textarea } from "../components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import { authService } from "../../services/auth";
import {
  Users, MessageSquare, Star, UserPlus, RefreshCw,
  Trash2, CheckCircle2, XCircle, LogOut, Plus, Globe, ImagePlus, X as XIcon
} from "lucide-react";
=======
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { authService } from "../../services/auth";
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926

const BASE = import.meta.env.VITE_API_URL ?? '';

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

<<<<<<< HEAD
type Review = {
  id: number;
  name: string;
  role: string | null;
  rating: number;
  message: string;
  approved: number;
  createdAt: string;
};

type Client = {
  id: number;
  name: string;
  company: string | null;
  industry: string | null;
  website: string | null;
  logo: string | null;
  notes: string | null;
  createdAt: string;
};

type Tab = "contacts" | "reviews" | "clients";

/* ── Login Screen ── */
function LoginScreen({
  onLogin,
}: {
  onLogin: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await onLogin(email, password);
    setLoading(false);
    if (!result.ok) setError(result.error || "Invalid credentials.");
  };

  return (
    <section
      className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-16"
      style={{ background: "linear-gradient(135deg, #000d1a 0%, #001428 50%, #001f3f 100%)" }}
    >
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(0,185,241,0.3)]">
            <span className="text-white font-black text-2xl">O</span>
          </div>
          <h1 className="text-2xl font-black text-white mb-1">Developer Console</h1>
          <p className="text-white/40 text-sm">Sign in to access the admin dashboard</p>
        </div>
        <div className="bg-white/7 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="dev-email" className="text-white/70 text-sm">Email</Label>
              <Input
                id="dev-email"
                type="email"
                placeholder="developer@opendrap.ai"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/8 border-white/15 text-white placeholder:text-white/25 focus:border-[#00B9F1]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dev-password" className="text-white/70 text-sm">Password</Label>
              <Input
                id="dev-password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/8 border-white/15 text-white placeholder:text-white/25 focus:border-[#00B9F1]"
              />
            </div>
            {error && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2">
                {error}
              </p>
            )}
            <Button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-[48px]"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Main Dashboard ── */
export function Developer() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!authService.getToken());
  const [activeTab, setActiveTab] = useState<Tab>("contacts");

  // Contact submissions
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [contactsLoading, setContactsLoading] = useState(false);
  const [contactsError, setContactsError] = useState<string | null>(null);

  // Reviews
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewsError, setReviewsError] = useState<string | null>(null);

  // Clients
  const [clients, setClients] = useState<Client[]>([]);
  const [clientsLoading, setClientsLoading] = useState(false);
  const [clientsError, setClientsError] = useState<string | null>(null);

  // Add client form
  const [clientForm, setClientForm] = useState({ name: "", company: "", industry: "", website: "", notes: "" });
  const [clientLogo, setClientLogo] = useState<string>("");
  const logoInputRef = useRef<HTMLInputElement>(null);
  const [addingClient, setAddingClient] = useState(false);
  const [addClientMsg, setAddClientMsg] = useState<string | null>(null);
  const [showAddClient, setShowAddClient] = useState(false);

  const authHeaders = () => authService.authHeaders();

  const handleLogin = async (email: string, password: string) => {
    const result = await authService.login(email, password);
    if (result.ok) setIsAuthenticated(true);
    return result;
=======
export function Developer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(!!authService.getToken());
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const [data, setData] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE}/api/contact`, { headers: authService.authHeaders() });
      if (res.status === 401) {
        authService.logout();
        setIsAuthenticated(false);
        return;
      }
      const payload = await res.json() as { ok?: boolean; data?: ContactSubmission[]; error?: string };
      if (!res.ok || !payload.ok) throw new Error(payload.error || "Failed to load submissions");
      setData(payload.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) loadSubmissions();
  }, [isAuthenticated]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);
    const result = await authService.login(email, password);
    setAuthLoading(false);
    if (result.ok) {
      setIsAuthenticated(true);
    } else {
      setAuthError(result.error || "Invalid email or password.");
    }
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
  };

  const handleLogout = () => {
    authService.logout();
    setIsAuthenticated(false);
<<<<<<< HEAD
    setContacts([]);
    setReviews([]);
    setClients([]);
  };

  const loadContacts = async () => {
    setContactsLoading(true);
    setContactsError(null);
    try {
      const res = await fetch(`${BASE}/api/contact`, { headers: authHeaders() });
      if (res.status === 401) { authService.logout(); setIsAuthenticated(false); return; }
      const payload = await res.json();
      if (!res.ok || !payload.ok) throw new Error(payload.error || "Failed to load");
      setContacts(payload.data || []);
    } catch (err) {
      setContactsError(err instanceof Error ? err.message : "Failed to load contacts");
    } finally {
      setContactsLoading(false);
    }
  };

  const loadReviews = async () => {
    setReviewsLoading(true);
    setReviewsError(null);
    try {
      const res = await fetch(`${BASE}/api/reviews`, { headers: authHeaders() });
      if (res.status === 401) { authService.logout(); setIsAuthenticated(false); return; }
      const payload = await res.json();
      if (!res.ok || !payload.ok) throw new Error(payload.error || "Failed to load");
      setReviews(payload.data || []);
    } catch (err) {
      setReviewsError(err instanceof Error ? err.message : "Failed to load reviews");
    } finally {
      setReviewsLoading(false);
    }
  };

  const loadClients = async () => {
    setClientsLoading(true);
    setClientsError(null);
    try {
      const res = await fetch(`${BASE}/api/clients`, { headers: authHeaders() });
      if (res.status === 401) { authService.logout(); setIsAuthenticated(false); return; }
      const payload = await res.json();
      if (!res.ok || !payload.ok) throw new Error(payload.error || "Failed to load");
      setClients(payload.data || []);
    } catch (err) {
      setClientsError(err instanceof Error ? err.message : "Failed to load clients");
    } finally {
      setClientsLoading(false);
    }
  };

  const toggleApproveReview = async (id: number, currentApproved: number) => {
    try {
      await fetch(`${BASE}/api/reviews/${id}/approve`, {
        method: "PATCH",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ approved: currentApproved === 0 }),
      });
      setReviews((prev) => prev.map((r) => r.id === id ? { ...r, approved: currentApproved === 0 ? 1 : 0 } : r));
    } catch {}
  };

  const deleteReview = async (id: number) => {
    if (!confirm("Delete this review?")) return;
    try {
      await fetch(`${BASE}/api/reviews/${id}`, { method: "DELETE", headers: authHeaders() });
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch {}
  };

  const deleteClient = async (id: number) => {
    if (!confirm("Delete this client?")) return;
    try {
      await fetch(`${BASE}/api/clients/${id}`, { method: "DELETE", headers: authHeaders() });
      setClients((prev) => prev.filter((c) => c.id !== id));
    } catch {}
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 500 * 1024) {
      setAddClientMsg("Logo must be under 500 KB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setClientLogo(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleAddClient = async (e: FormEvent) => {
    e.preventDefault();
    setAddingClient(true);
    setAddClientMsg(null);
    try {
      const res = await fetch(`${BASE}/api/clients`, {
        method: "POST",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ ...clientForm, logo: clientLogo }),
      });
      const payload = await res.json();
      if (!res.ok || !payload.ok) throw new Error(payload.error || "Failed to add client");
      setAddClientMsg("Client added successfully!");
      setClientForm({ name: "", company: "", industry: "", website: "", notes: "" });
      setClientLogo("");
      setShowAddClient(false);
      loadClients();
    } catch (err) {
      setAddClientMsg(err instanceof Error ? err.message : "Failed to add client");
    } finally {
      setAddingClient(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    loadContacts();
    loadReviews();
    loadClients();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const tabs: { id: Tab; label: string; icon: React.ElementType; count?: number }[] = [
    { id: "contacts", label: "Contact Submissions", icon: MessageSquare, count: contacts.length },
    { id: "reviews",  label: "Reviews",             icon: Star,          count: reviews.length  },
    { id: "clients",  label: "Our Clients",         icon: Users,         count: clients.length  },
  ];

  return (
    <section
      className="min-h-[calc(100vh-8rem)] py-10"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Developer Console</h1>
            <p className="text-gray-500 text-sm mt-0.5">Manage contacts, reviews, and clients</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-gray-200 text-gray-600 hover:text-red-600 hover:border-red-200 gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white border border-gray-100 rounded-2xl p-1.5 w-fit shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#002E6E] text-white shadow-md"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
                {tab.count !== undefined && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      activeTab === tab.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── CONTACTS TAB ── */}
        {activeTab === "contacts" && (
          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between gap-4 pb-4">
              <div>
                <CardTitle className="text-lg">Contact Form Submissions</CardTitle>
                <CardDescription>All messages received from the contact form</CardDescription>
              </div>
              <Button
                onClick={loadContacts}
                disabled={contactsLoading}
                size="sm"
                className="bg-[#002E6E] hover:bg-[#001f4d] gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${contactsLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </CardHeader>
            <CardContent>
              {contactsError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-4">
                  {contactsError}
                </p>
              )}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/80">
                      <TableHead className="text-xs">Date</TableHead>
                      <TableHead className="text-xs">Name</TableHead>
                      <TableHead className="text-xs">Email</TableHead>
                      <TableHead className="text-xs">Phone</TableHead>
                      <TableHead className="text-xs">Company</TableHead>
                      <TableHead className="text-xs">Inquiry</TableHead>
                      <TableHead className="text-xs">Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactsLoading && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center text-gray-400 py-10">
                          Loading...
                        </TableCell>
                      </TableRow>
                    )}
                    {!contactsLoading && contacts.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center text-gray-400 py-10">
                          No submissions yet.
                        </TableCell>
                      </TableRow>
                    )}
                    {contacts.map((row) => (
                      <TableRow key={row.id} className="hover:bg-gray-50/50">
                        <TableCell className="text-xs text-gray-500 whitespace-nowrap">
                          {new Date(row.createdAt).toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" })}
                        </TableCell>
                        <TableCell className="font-medium text-sm">{row.firstName} {row.lastName}</TableCell>
                        <TableCell className="text-sm">{row.email}</TableCell>
                        <TableCell className="text-sm text-gray-500">{row.phone || "—"}</TableCell>
                        <TableCell className="text-sm text-gray-500">{row.company || "—"}</TableCell>
                        <TableCell>
                          <Badge className="bg-[#002E6E]/8 text-[#002E6E] border-0 text-xs capitalize">
                            {row.inquiryType}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-xs text-sm text-gray-600 whitespace-normal break-words">
                          {row.message}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── REVIEWS TAB ── */}
        {activeTab === "reviews" && (
          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between gap-4 pb-4">
              <div>
                <CardTitle className="text-lg">Customer Reviews</CardTitle>
                <CardDescription>Approve reviews to show them publicly on the website</CardDescription>
              </div>
              <Button
                onClick={loadReviews}
                disabled={reviewsLoading}
                size="sm"
                className="bg-[#002E6E] hover:bg-[#001f4d] gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${reviewsLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </CardHeader>
            <CardContent>
              {reviewsError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-4">
                  {reviewsError}
                </p>
              )}
              {!reviewsLoading && reviews.length === 0 && (
                <div className="text-center text-gray-400 py-16">
                  <Star className="h-10 w-10 mx-auto mb-3 opacity-20" />
                  <p>No reviews submitted yet.</p>
                </div>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((r) => (
                  <div
                    key={r.id}
                    className={`border rounded-2xl p-5 transition-all duration-200 ${
                      r.approved ? "border-[#25D366]/30 bg-[#25D366]/3" : "border-gray-100 bg-white"
                    }`}
                  >
                    {/* Stars */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < r.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
                          />
                        ))}
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          r.approved ? "bg-[#25D366]/15 text-[#128C7E]" : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {r.approved ? "✓ Approved" : "Pending"}
                      </span>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">&ldquo;{r.message}&rdquo;</p>

                    <div className="mb-4">
                      <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                      {r.role && <div className="text-gray-400 text-xs">{r.role}</div>}
                      <div className="text-gray-300 text-xs mt-0.5">
                        {new Date(r.createdAt).toLocaleDateString("en-IN")}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleApproveReview(r.id, r.approved)}
                        className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-xl border transition-all duration-200 ${
                          r.approved
                            ? "border-orange-200 text-orange-600 hover:bg-orange-50"
                            : "border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366]/8"
                        }`}
                      >
                        {r.approved ? (
                          <><XCircle className="h-3.5 w-3.5" /> Unapprove</>
                        ) : (
                          <><CheckCircle2 className="h-3.5 w-3.5" /> Approve</>
                        )}
                      </button>
                      <button
                        onClick={() => deleteReview(r.id)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition-all duration-200"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* ── CLIENTS TAB ── */}
        {activeTab === "clients" && (
          <div className="space-y-5">

            {/* Add client button / form */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Our Clients</h2>
                <p className="text-gray-500 text-sm">Manually manage your client records</p>
              </div>
              <Button
                onClick={() => setShowAddClient((v) => !v)}
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Add Client
              </Button>
            </div>

            {/* Add client form (collapsible) */}
            {showAddClient && (
              <Card className="border-[#25D366]/20 bg-[#25D366]/3 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-gray-900 flex items-center gap-2">
                    <Plus className="h-4 w-4 text-[#25D366]" />
                    Add New Client
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddClient} className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="cl-name" className="text-sm">Client Name *</Label>
                      <Input
                        id="cl-name"
                        placeholder="Rajesh Kumar"
                        value={clientForm.name}
                        onChange={(e) => setClientForm((p) => ({ ...p, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="cl-company" className="text-sm">Company</Label>
                      <Input
                        id="cl-company"
                        placeholder="Acme Pvt Ltd"
                        value={clientForm.company}
                        onChange={(e) => setClientForm((p) => ({ ...p, company: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="cl-industry" className="text-sm">Industry</Label>
                      <Input
                        id="cl-industry"
                        placeholder="E-commerce, Healthcare..."
                        value={clientForm.industry}
                        onChange={(e) => setClientForm((p) => ({ ...p, industry: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="cl-website" className="text-sm">Website</Label>
                      <Input
                        id="cl-website"
                        placeholder="https://example.com"
                        value={clientForm.website}
                        onChange={(e) => setClientForm((p) => ({ ...p, website: e.target.value }))}
                      />
                    </div>

                    {/* Logo upload */}
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label className="text-sm">Client Logo <span className="text-gray-400 font-normal">(optional, max 500 KB)</span></Label>
                      <input
                        ref={logoInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleLogoChange}
                      />
                      {clientLogo ? (
                        <div className="flex items-center gap-4 p-3 rounded-xl border border-[#25D366]/20 bg-[#25D366]/3">
                          <img src={clientLogo} alt="Logo preview" className="w-14 h-14 object-contain rounded-lg border border-gray-100 bg-white p-1" />
                          <div className="flex-1">
                            <p className="text-sm text-gray-700 font-medium">Logo selected</p>
                            <p className="text-xs text-gray-400 mt-0.5">Click remove to change</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => { setClientLogo(""); if (logoInputRef.current) logoInputRef.current.value = ""; }}
                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          >
                            <XIcon className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => logoInputRef.current?.click()}
                          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/3 transition-all duration-200 text-sm font-medium"
                        >
                          <ImagePlus className="h-5 w-5" />
                          Click to upload logo
                        </button>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor="cl-notes" className="text-sm">Notes</Label>
                      <Textarea
                        id="cl-notes"
                        placeholder="Additional notes about the client..."
                        rows={3}
                        value={clientForm.notes}
                        onChange={(e) => setClientForm((p) => ({ ...p, notes: e.target.value }))}
                      />
                    </div>
                    {addClientMsg && (
                      <p className={`sm:col-span-2 text-sm ${addClientMsg.includes("success") ? "text-[#128C7E]" : "text-red-600"}`}>
                        {addClientMsg}
                      </p>
                    )}
                    <div className="sm:col-span-2 flex gap-3">
                      <Button
                        type="submit"
                        disabled={addingClient}
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold"
                      >
                        {addingClient ? "Adding..." : "Add Client"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => { setShowAddClient(false); setClientLogo(""); setAddClientMsg(null); }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Clients list */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="pt-5">
                {clientsError && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-4">
                    {clientsError}
                  </p>
                )}
                {!clientsLoading && clients.length === 0 && (
                  <div className="text-center text-gray-400 py-16">
                    <Users className="h-10 w-10 mx-auto mb-3 opacity-20" />
                    <p>No clients added yet. Use the button above to add your first client.</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {clients.map((c) => (
                    <div key={c.id} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all duration-200 group">
                      <div className="flex items-start justify-between mb-3">
                        {c.logo ? (
                          <div className="w-14 h-14 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0 p-1">
                            <img src={c.logo} alt={`${c.name} logo`} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-xl flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                            {c.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <button
                          onClick={() => deleteClient(c.id)}
                          className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="font-bold text-gray-900 text-sm mb-0.5">{c.name}</div>
                      {c.company && <div className="text-gray-600 text-sm">{c.company}</div>}
                      {c.industry && (
                        <Badge className="mt-2 bg-[#002E6E]/8 text-[#002E6E] border-0 text-xs">
                          {c.industry}
                        </Badge>
                      )}
                      {c.website && (
                        <a
                          href={c.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[#00B9F1] text-xs mt-2 hover:underline"
                        >
                          <Globe className="h-3 w-3" />
                          {c.website.replace(/^https?:\/\//, "")}
                        </a>
                      )}
                      {c.notes && <p className="text-gray-400 text-xs mt-2 leading-relaxed">{c.notes}</p>}
                      <div className="text-gray-300 text-xs mt-3">
                        Added {new Date(c.createdAt).toLocaleDateString("en-IN")}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button
                onClick={loadClients}
                disabled={clientsLoading}
                size="sm"
                variant="outline"
                className="gap-2 text-gray-500"
              >
                <RefreshCw className={`h-4 w-4 ${clientsLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>
        )}
=======
    setData([]);
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
                  <Label htmlFor="developer-email">Email</Label>
                  <Input
                    id="developer-email"
                    type="email"
                    placeholder="developer@opendrap.ai"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <Button type="submit" className="w-full bg-[#002E6E] hover:bg-[#001f4d]" disabled={authLoading}>
                  {authLoading ? "Signing in..." : "Login"}
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
            <div className="flex gap-2">
              <Button onClick={loadSubmissions} disabled={loading} className="bg-[#002E6E] hover:bg-[#001f4d]">
                {loading ? "Loading..." : "Refresh"}
              </Button>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
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
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
      </div>
    </section>
  );
}
