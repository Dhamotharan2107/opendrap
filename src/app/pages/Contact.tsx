import React from "react";
import { SEO } from "../../components/common/SEO";
import { SEO_CONFIG } from "../../constants";
import { generateBreadcrumbSchema } from "../../utils/seo";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";

const P = "#1E90FF";   // primary blue
const A = "#00FFC6";   // accent cyan
const BG = "#0B0F1A";   // dark navy
const S = "#111827";   // surface card

const contactCards = [
  { icon: Mail, title: "Email Us", content: "info@opendrap.website", description: "We'll respond within 24 hours", grad: `linear-gradient(135deg, ${P}, ${A})` },
  { icon: Phone, title: "Call Us", content: "8072620523", description: "Mon-Sat, 9am-7pm IST", grad: "linear-gradient(135deg, #8b5cf6, #a78bfa)" },
  { icon: MapPin, title: "Visit Us", content: "Chennai", description: "Tamil Nadu, India", grad: "linear-gradient(135deg, #10b981, #34d399)" },
  { icon: Clock, title: "Support Hours", content: "24/7 Support", description: "AI platform always on", grad: "linear-gradient(135deg, #f59e0b, #fbbf24)" },
];

const whyUs = [
  { emoji: "⚡", title: "24-Hour Response", desc: "We start your audit within 24 hours of contact — no waiting weeks for a quote." },
  { emoji: "🔒", title: "Zero Risk Trial", desc: "7 days free, no credit card, no contract. You only pay if you love the results." },
  { emoji: "🤖", title: "Real AI, Real Results", desc: "Our WhatsApp AI agents handle thousands of conversations daily with 98%+ resolution." },
  { emoji: "📍", title: "Chennai-Based Team", desc: "Local developers who understand Indian businesses, available Mon–Sat 9am–7pm IST." },
  { emoji: "📈", title: "Measurable Outcomes", desc: "Every engagement comes with a monthly progress report showing exactly what improved." },
];

export const Contact: React.FC = () => {
  const { formData, errors, isSubmitting, submitted, submitError, handleChange, handleSubmit } = useContactForm();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SEO_CONFIG.siteUrl },
    { name: "Contact", url: `${SEO_CONFIG.siteUrl}/contact` },
  ]);

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with OPENDRAP"
        description="Contact OPENDRAP for AI-powered business automation solutions. Get expert consultation on WhatsApp AI agents, voice AI, and business automation. Available 24/7."
        url="/contact"
        keywords={[...SEO_CONFIG.keywords, "contact", "support", "consultation", "demo"]}
        schemaMarkup={breadcrumbSchema}
      />

      <div style={{ background: BG, minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <header className="relative overflow-hidden py-28" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #0d1526 50%, #0f1d3a 100%)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(30,144,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.05) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(30,144,255,0.08)" }} />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-float" style={{ background: "rgba(0,255,198,0.05)" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6" style={{ background: `rgba(30,144,255,0.12)`, border: `1px solid rgba(30,144,255,0.25)`, color: A }}>
              <span className="w-2 h-2 rounded-full animate-pulse block" style={{ background: A }} />
              Start Your Free 7-Day Trial Today
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>
              Have questions? Ready to start? Send us a message and our team responds within{" "}
              <span className="font-semibold" style={{ color: A }}>24 hours</span>.
            </p>
          </div>
        </header>

        {/* ── INFO CARDS ── */}
        <section className="py-16 -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactCards.map(({ icon: Icon, title, content, description, grad }) => (
                <div key={title} className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 spotlight-card" style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.3)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: grad }}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="font-medium mb-1 text-sm" style={{ color: A }}>{content}</p>
                  <p className="text-xs" style={{ color: "#B0B0B0" }}>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM + WHY US ── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="rounded-2xl p-10 text-center" style={{ background: S, border: `1px solid rgba(0,255,198,0.2)` }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p style={{ color: "#B0B0B0" }}>Your message has been sent. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <div className="rounded-2xl p-8" style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { id: "firstName", label: "First Name *", placeholder: "Rajesh" },
                          { id: "lastName", label: "Last Name *", placeholder: "Kumar" },
                        ].map(({ id, label, placeholder }) => (
                          <div key={id} className="space-y-1">
                            <Label htmlFor={id} className="text-sm font-medium" style={{ color: "#B0B0B0" }}>{label}</Label>
                            <Input
                              id={id}
                              placeholder={placeholder}
                              value={formData[id as keyof typeof formData]}
                              onChange={e => handleChange(id, e.target.value)}
                              className="h-11 rounded-xl border text-white placeholder:text-white/25 focus-visible:ring-1"
                              style={{ background: "rgba(255,255,255,0.05)", borderColor: errors[id as keyof typeof errors] ? "rgba(239,68,68,0.6)" : "rgba(30,144,255,0.2)", "--tw-ring-color": A } as React.CSSProperties}
                            />
                            {errors[id as keyof typeof errors] && <p className="text-xs text-red-400">{errors[id as keyof typeof errors]}</p>}
                          </div>
                        ))}
                      </div>

                      {[
                        { id: "email", label: "Email *", type: "email", placeholder: "rajesh@company.com" },
                        { id: "phone", label: "Phone Number", type: "tel", placeholder: "8072620523" },
                        { id: "company", label: "Company", type: "text", placeholder: "Your Company Name" },
                      ].map(({ id, label, type, placeholder }) => (
                        <div key={id} className="space-y-1">
                          <Label htmlFor={id} className="text-sm font-medium" style={{ color: "#B0B0B0" }}>{label}</Label>
                          <Input
                            id={id}
                            type={type}
                            placeholder={placeholder}
                            value={formData[id as keyof typeof formData]}
                            onChange={e => {
                              const val = id === 'phone' ? e.target.value.replace(/\D/g, '').slice(0, 10) : e.target.value;
                              handleChange(id, val);
                            }}
                            maxLength={id === 'phone' ? 10 : undefined}
                            className="h-11 rounded-xl border text-white placeholder:text-white/25 focus-visible:ring-1"
                            style={{ background: "rgba(255,255,255,0.05)", borderColor: errors[id as keyof typeof errors] ? "rgba(239,68,68,0.6)" : "rgba(30,144,255,0.2)" }}
                          />
                          {errors[id as keyof typeof errors] && <p className="text-xs text-red-400">{errors[id as keyof typeof errors]}</p>}
                        </div>
                      ))}

                      <div className="space-y-1">
                        <Label htmlFor="inquiryType" className="text-sm font-medium" style={{ color: "#B0B0B0" }}>Inquiry Type *</Label>
                        <Select value={formData.inquiryType} onValueChange={v => handleChange("inquiryType", v)}>
                          <SelectTrigger id="inquiryType" className="h-11 rounded-xl border text-white" style={{ background: "rgba(255,255,255,0.05)", borderColor: errors.inquiryType ? "rgba(239,68,68,0.6)" : "rgba(30,144,255,0.2)" }}>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent style={{ background: "#131929", borderColor: "rgba(30,144,255,0.2)" }}>
                            {["sales", "support", "partnership", "demo", "other"].map(v => (
                              <SelectItem key={v} value={v} className="text-white capitalize hover:bg-white/5">{v.charAt(0).toUpperCase() + v.slice(1).replace("-", " ")}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.inquiryType && <p className="text-xs text-red-400">{errors.inquiryType}</p>}
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="message" className="text-sm font-medium" style={{ color: "#B0B0B0" }}>Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your needs..."
                          rows={5}
                          value={formData.message}
                          onChange={e => handleChange("message", e.target.value)}
                          className="rounded-xl border text-white placeholder:text-white/25 resize-none focus-visible:ring-1"
                          style={{ background: "rgba(255,255,255,0.05)", borderColor: errors.message ? "rgba(239,68,68,0.6)" : "rgba(30,144,255,0.2)" }}
                        />
                        {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                      </div>

                      {submitError && (
                        <div className="text-sm text-red-400 text-center p-3 rounded-xl" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }} role="alert">
                          {submitError}
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-white font-bold h-[52px] rounded-xl magnetic-btn border-0"
                        style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 24px rgba(30,144,255,0.35)` }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? <LoadingSpinner size="sm" text="Sending..." /> : <><ArrowRight className="mr-2 h-5 w-5" />Send Message</>}
                      </Button>
                      <p className="text-xs text-center" style={{ color: "#B0B0B0" }}>By submitting this form, you agree to our privacy policy.</p>
                    </form>
                  </div>
                )}
              </div>

              {/* Why Us */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose OPENDRAP?</h2>
                <div className="rounded-2xl p-8 space-y-5" style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}>
                  {whyUs.map(({ emoji, title, desc }) => (
                    <div key={title} className="flex gap-4 p-4 rounded-xl transition-colors duration-200" style={{ background: "rgba(30,144,255,0.04)" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(30,144,255,0.09)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(30,144,255,0.04)"}
                    >
                      <span className="text-2xl flex-shrink-0">{emoji}</span>
                      <div>
                        <div className="font-semibold text-white text-sm mb-1">{title}</div>
                        <div className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B0F1A 0%, #0d1526 50%, #0f1d3a 100%)" }}>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(30,144,255,0.07)" }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,255,198,0.05)" }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Need Immediate Help?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>
              Reach us directly via phone or email. Our developers are ready to assist you right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918072620523"
                className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-xl font-bold text-white text-base transition-all duration-300 magnetic-btn"
                style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: "0 0 25px rgba(30,144,255,0.35)" }}
              >
                <Phone className="h-5 w-5" />Call +91 807-262-0523
              </a>
              <a
                href="mailto:info@opendrap.website"
                className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-xl font-semibold text-white text-base transition-all duration-200"
                style={{ border: `2px solid rgba(30,144,255,0.3)` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(30,144,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = `rgba(0,255,198,0.5)`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.3)"; }}
              >
                <Mail className="h-5 w-5" />Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
