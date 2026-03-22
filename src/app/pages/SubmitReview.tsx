import { useState, useCallback } from "react";
import { Link } from "react-router";
import { Star, Send, CheckCircle2, ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

const BASE = import.meta.env.VITE_API_URL ?? "";

export function SubmitReview() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${BASE}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), role: role.trim(), rating, message: message.trim() }),
      });
      const payload = await res.json();
      if (!res.ok || !payload.ok) throw new Error(payload.error || "Failed to submit");
      setSubmitted(true);
      toast.success("Review submitted! It will appear after approval.", { duration: 5000, position: "top-center" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(msg, { duration: 5000, position: "top-center" });
    } finally {
      setSubmitting(false);
    }
  }, [name, role, rating, message]);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #000d1a 0%, #001428 50%, #001f3f 100%)" }}>

      {/* Grid overlay */}
      <div className="fixed inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,185,241,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,185,241,0.03) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#25D366]/6 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-[#002E6E]/50 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 py-16">

        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors duration-200 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.3)]" style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}>
            <MessageSquare className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-black text-white mb-3">Share Your Experience</h1>
          <p className="text-white/45 text-base max-w-sm mx-auto leading-relaxed">
            Loved working with us? Let others know. Your review helps us grow and serve better.
          </p>
        </div>

        {submitted ? (
          /* ── Success State ── */
          <div className="text-center py-16 rounded-3xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(37,211,102,0.2)" }}>
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_40px_rgba(37,211,102,0.4)]" style={{ background: "linear-gradient(135deg, #128C7E, #25D366)" }}>
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-black text-white mb-3">Thank You! 🎉</h2>
            <p className="text-white/50 text-base max-w-xs mx-auto leading-relaxed mb-8">
              Your review has been submitted. It will appear on our website once approved by our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold"
                onClick={() => { setSubmitted(false); setName(""); setRole(""); setMessage(""); setRating(5); }}
              >
                Submit Another Review
              </Button>
              <Button variant="outline" className="border-white/20 text-white/70 hover:text-white hover:bg-white/5" asChild>
                <Link to="/">Go to Home</Link>
              </Button>
            </div>
          </div>
        ) : (
          /* ── Form ── */
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl p-8 md:p-10 space-y-7"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Star rating */}
            <div>
              <Label className="text-white/70 text-sm mb-3 block">Your Rating *</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-all duration-150 hover:scale-110 active:scale-95"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      className="h-9 w-9 transition-colors duration-150"
                      style={{
                        color: star <= (hoverRating || rating) ? "#f59e0b" : "rgba(255,255,255,0.15)",
                        fill: star <= (hoverRating || rating) ? "#f59e0b" : "rgba(255,255,255,0.08)",
                      }}
                    />
                  </button>
                ))}
                <span className="ml-3 text-white/40 text-sm self-center">
                  {["", "Poor", "Fair", "Good", "Great", "Excellent"][hoverRating || rating]}
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="rv-name" className="text-white/70 text-sm">Your Name *</Label>
              <Input
                id="rv-name"
                placeholder="Rajesh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 bg-white/6 border-white/12 text-white placeholder:text-white/25 focus:border-[#25D366] focus:ring-0 rounded-xl"
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label htmlFor="rv-role" className="text-white/70 text-sm">
                Your Role / Company
                <span className="text-white/30 ml-2 font-normal">(optional)</span>
              </Label>
              <Input
                id="rv-role"
                placeholder="CEO, TechStartup Chennai"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="h-12 bg-white/6 border-white/12 text-white placeholder:text-white/25 focus:border-[#25D366] focus:ring-0 rounded-xl"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="rv-message" className="text-white/70 text-sm">Your Review *</Label>
              <Textarea
                id="rv-message"
                placeholder="Tell us about your experience with OPENDRAP — what we helped you achieve, what you loved, and what made the difference…"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-white/6 border-white/12 text-white placeholder:text-white/25 focus:border-[#25D366] focus:ring-0 rounded-xl resize-none"
              />
              <div className="text-right text-white/25 text-xs">{message.length} chars</div>
            </div>

            {/* Note */}
            <p className="text-white/25 text-xs leading-relaxed flex gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366] flex-shrink-0 mt-0.5" />
              Your review will be visible after a quick approval by our team. We review all submissions within 24 hours.
            </p>

            <Button
              type="submit"
              size="lg"
              disabled={submitting || !name.trim() || !message.trim()}
              className="w-full h-[52px] font-bold text-base transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #128C7E, #25D366)", boxShadow: "0 0 24px rgba(37,211,102,0.3)" }}
            >
              {submitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Submit Review
                </span>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
