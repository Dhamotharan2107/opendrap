import { useState } from "react";
import { Link } from "react-router";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  ExternalLink, ArrowRight, Stethoscope,
  Tv, ShoppingBag, CheckCircle2,
} from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";

const P = "#1E90FF";
const A = "#00FFC6";
const BG = "#0B0F1A";
const S = "#111827";
const S2 = "#0d1526";

const works = [
  {
    id: "dental-clinic",
    icon: Stethoscope,
    tag: "Healthcare",
    tagColor: "#0d9488",
    title: "The Tooth Fairy",
    subtitle: "Premium Family Dental Clinic",
    description:
      "Full-featured dental clinic site with online booking, patient blog, admin analytics dashboard, and a live AI chatbot — delivered in one polished product.",
    url: "https://toothfairy-opendrap.pages.dev/",
    gradient: "linear-gradient(135deg, #0d9488, #0f766e)",
    glow: "rgba(13,148,136,0.4)",
    accentColor: "#0d9488",
    features: [
      "Online appointment booking",
      "Patient blog & news feed",
      "Admin dashboard + analytics",
      "Live AI chatbot assistant",
      "Doctor profiles & services",
    ],
    stack: ["React", "Tailwind CSS", "AI Chatbot"],
    mockupBg: "linear-gradient(135deg, #0f2027, #134e4a, #0d9488)",
    mockupAccent: "#14b8a6",
  },
  {
    id: "tv-repair",
    icon: Tv,
    tag: "Local Business",
    tagColor: "#f59e0b",
    title: "TV Repair Service",
    subtitle: "Local Electronics Repair Website",
    description:
      "Conversion-focused site for a local TV repair shop. Built to rank locally, capture leads, and build trust with a clean professional design.",
    url: "https://tv-repair-site.pages.dev/",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    glow: "rgba(245,158,11,0.35)",
    accentColor: "#f59e0b",
    features: [
      "Service listings with pricing",
      "Lead capture contact form",
      "Local SEO optimised",
      "Fast-loading & mobile-first",
      "Trust signals & testimonials",
    ],
    stack: ["React", "Tailwind CSS", "SEO"],
    mockupBg: "linear-gradient(135deg, #1c1200, #451a03, #f59e0b)",
    mockupAccent: "#fbbf24",
  },
  {
    id: "digistore",
    icon: ShoppingBag,
    tag: "E-Commerce",
    tagColor: P,
    title: "DigiStore",
    subtitle: "Digital Products Storefront",
    description:
      "Modern digital storefront for selling products online. Clean UI, fast checkout flow, and a personalised user greeting system.",
    url: "https://digistore.pages.dev/",
    gradient: `linear-gradient(135deg, ${P}, #00B9F1)`,
    glow: "rgba(30,144,255,0.35)",
    accentColor: P,
    features: [
      "Digital product listings",
      "Personalised user greetings",
      "Clean checkout experience",
      "Responsive storefront design",
      "Fast & lightweight build",
    ],
    stack: ["React", "Tailwind CSS", "Vite"],
    mockupBg: `linear-gradient(135deg, #000d1a, #001f3f, ${P})`,
    mockupAccent: "#00B9F1",
  },
];

/* ── Browser Mockup ── */
function BrowserMockup({ work }: { work: typeof works[0] }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#1a1f2e", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#0f1219", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-3 px-3 py-1 rounded-md text-[11px] font-mono flex items-center gap-2" style={{ background: "rgba(255,255,255,0.05)", color: "#6b7280" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: work.accentColor }} />
          {work.url.replace("https://", "")}
        </div>
        <a href={work.url} target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-white/10 transition-colors" aria-label={`Open ${work.title} in new tab`}>
          <ExternalLink className="h-3.5 w-3.5" style={{ color: "#6b7280" }} />
        </a>
      </div>
      {/* Viewport — always live */}
      <div className="relative overflow-hidden" style={{ height: "380px" }}>
        <iframe
          src={work.url}
          title={`${work.title} preview`}
          className="border-0"
          style={{ height: "760px", transform: "scale(0.5)", transformOrigin: "top left", width: "200%" }}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
}

/* ── Main Page ── */
export function OurWork() {
  const [active, setActive] = useState(0);
  const work = works[active];

  return (
    <div style={{ background: BG }} className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden py-24" style={{ background: `linear-gradient(135deg, #000d1a 0%, ${S2} 50%, #001f3f 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(30,144,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(30,144,255,0.1)" }} />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,255,198,0.06)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge className="mb-5 text-sm px-4 py-2 border font-semibold" style={{ background: "rgba(30,144,255,0.12)", color: A, borderColor: "rgba(30,144,255,0.25)" }}>
              Our Work
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-5 tracking-tight leading-tight">
              Real Sites We've Built
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#B0B0B0" }}>
              Every project below is live. Click any tab to explore it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <div className="border-y" style={{ borderColor: "rgba(30,144,255,0.1)", background: "rgba(30,144,255,0.03)" }}>
        <div className="max-w-4xl mx-auto px-4 py-5 grid grid-cols-4 gap-4 text-center">
          {[
            { value: "4+", label: "Live Demos" },
            { value: "7 Days", label: "Avg Delivery" },
            { value: "100%", label: "Custom Built" },
            { value: "₹0", label: "Trial Cost" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl font-black" style={{ color: A }}>{s.value}</div>
              <div className="text-xs mt-0.5 font-medium" style={{ color: "#6b7280" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Spotlight section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tab pills */}
          <AnimatedSection className="flex flex-wrap gap-3 justify-center mb-12">
            {works.map((w, i) => {
              const Icon = w.icon;
              const isActive = active === i;
              return (
                <button
                  key={w.id}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  style={{
                    background: isActive ? w.gradient : "rgba(255,255,255,0.05)",
                    color: isActive ? "#fff" : "#9ca3af",
                    border: `1px solid ${isActive ? "transparent" : "rgba(255,255,255,0.08)"}`,
                    boxShadow: isActive ? `0 0 20px ${w.glow}` : "none",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {w.title}
                </button>
              );
            })}
          </AnimatedSection>

          {/* Spotlight card */}
          <AnimatedSection key={active}>
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: S, border: `1px solid ${work.accentColor}25`, boxShadow: `0 0 80px ${work.glow}` }}
            >
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">

                {/* Left — info */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: work.gradient }}>
                      <work.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${work.accentColor}18`, color: work.accentColor, border: `1px solid ${work.accentColor}30` }}>
                      {work.tag}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-1">{work.title}</h2>
                  <p className="text-sm font-semibold mb-4" style={{ color: work.accentColor }}>{work.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-7" style={{ color: "#B0B0B0" }}>{work.description}</p>

                  <ul className="space-y-2.5 mb-7">
                    {work.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#d1d5db" }}>
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: work.accentColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {work.stack.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-lg font-medium" style={{ background: "rgba(255,255,255,0.06)", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.08)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105"
                      style={{ background: work.gradient, boxShadow: `0 0 24px ${work.glow}` }}
                    >
                      View Live Site <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/10"
                      style={{ color: "#B0B0B0", border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      Build Similar <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex items-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <div className="w-full">
                    <BrowserMockup work={work} />
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #000d1a 0%, #001428 50%, #001f3f 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle,rgba(0,185,241,0.06) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
              Want a Site Like These?
            </h2>
            <p className="text-xl mb-10 max-w-xl mx-auto" style={{ color: "#B0B0B0" }}>
              We build it in 7 days. You try it for free. No credit card, no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-bold px-10 h-[52px] text-base border-0 transition-all duration-300 hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${P}, ${A})`, color: "#0B0F1A", boxShadow: "0 0 30px rgba(30,144,255,0.4)" }}
                asChild
              >
                <Link to="/contact">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold px-10 h-[52px] text-base transition-all duration-200 hover:bg-white/10"
                style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.2)", background: "transparent" }}
                asChild
              >
                <Link to="/products">View All Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
