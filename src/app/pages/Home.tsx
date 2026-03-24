import { Link } from "react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  MessageSquare, Globe, Smartphone, Bot, Zap,
  CheckCircle2, ArrowRight, Code2, TrendingUp,
  Play, ChevronRight, ChevronLeft,
  BarChart3, Shield, Clock,
} from "lucide-react";
import { AnimatedSection, useInView } from "../../components/common/AnimatedSection";

/* ──────────────────────────────────────────
   Page data
────────────────────────────────────────── */
const features = [
  { id: "whatsapp-ai", icon: MessageSquare, title: "WhatsApp AI Agent", description: "Deploy intelligent AI agents on WhatsApp that handle customer queries, process orders, and provide 24/7 support — fully automated.", badge: "Most Popular", color: "from-[#25D366] to-[#128C7E]" },
  { id: "website-dev", icon: Globe, title: "Website Development", description: "Modern, fast, SEO-optimized websites. Start with our 7-day free trial — we audit & fix your existing site at zero cost.", badge: "7-Day Trial", color: "from-blue-500 to-blue-700" },
  { id: "mobile-apps", icon: Smartphone, title: "Mobile App Development", description: "Native iOS & Android apps and cross-platform solutions that deliver exceptional experiences and drive measurable business growth.", color: "from-orange-500 to-orange-600" },
  { id: "chatbot", icon: Bot, title: "AI Chatbot Platform", description: "Multi-channel intelligent chatbots for web, app & social platforms. Engage visitors, capture leads, and convert 24/7.", color: "from-[#002E6E] to-[#004fa3]" },
  { id: "automation", icon: Zap, title: "Business Automation", description: "End-to-end workflow automation that eliminates repetitive tasks, reduces costs, and lets your team focus on what matters.", color: "from-yellow-500 to-amber-600" },
];

const steps = [
  { num: "01", icon: Code2, title: "Contact & Audit", description: "Tell us about your website or business. Our developers start a full technical audit within 24 hours — at zero cost." },
  { num: "02", icon: Zap, title: "7-Day Free Trial", description: "We fix critical bugs, boost performance, and show you real results in 7 days. No credit card. No commitment. Zero risk." },
  { num: "03", icon: TrendingUp, title: "Scale & Grow", description: "Love the results? Continue at ₹8,999/month for ongoing AI integration, maintenance, and business automation." },
];

/* ──────────────────────────────────────────
   SLIDE 1 — WhatsApp AI (Green #25D366)
────────────────────────────────────────── */
function SlideWhatsApp({ on }: { on: boolean }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

      {/* Left copy */}
      <div className={`transition-all duration-700 ${on ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
        <Badge className="mb-6 bg-[#00B9F1]/15 text-[#00B9F1] border border-[#00B9F1]/30 text-sm px-4 py-2 font-semibold">
          <span className="w-2 h-2 bg-[#00B9F1] rounded-full inline-block mr-2 animate-pulse" />
          WhatsApp AI Platform — Now Live
        </Badge>
        <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white mb-6 leading-[1.04] tracking-tight">
          Automate Your Business with{" "}
          <span className="animate-shimmer">AI Agents</span>
        </h1>
        <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
          Deploy WhatsApp AI agents that handle customer conversations, process orders,
          and provide <span className="text-[#00B9F1] font-semibold">24/7 instant support</span> — all without any human intervention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-gradient-to-r from-[#002E6E] to-[#00B9F1] hover:from-[#001f4d] hover:to-[#0099cc] text-white font-bold px-8 h-[52px] shadow-[0_0_30px_rgba(0,185,241,0.4)] hover:shadow-[0_0_50px_rgba(0,185,241,0.6)] transition-all duration-300 magnetic-btn" asChild>
            <Link to="/contact">Start Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-xl text-base font-semibold text-white/80 border border-white/20 hover:border-[#00B9F1]/50 hover:bg-[#00B9F1]/8 hover:text-white transition-all duration-200">
            <Play className="h-4 w-4 fill-current opacity-75" />Explore Solutions
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
          {["No credit card required", "Cancel anytime", "Real AI, real results"].map((t) => (
            <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#00B9F1]" />{t}</div>
          ))}
        </div>
      </div>

      {/* Right — Chat card */}
      <div className={`transition-all duration-700 delay-200 ${on ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
        <div className="relative">
          {/* Multi-layer glow */}
          <div className="absolute -inset-6 rounded-[3rem] blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(0,185,241,0.15) 0%, rgba(0,185,241,0.04) 60%, transparent 80%)" }} />

          <div className="relative animate-levitate">
            <div className="rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,185,241,0.10)]" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(0,185,241,0.04) 100%)", backdropFilter: "blur(24px)" }}>

              {/* Header bar */}
              <div className="flex items-center gap-3 px-5 py-4" style={{ background: "linear-gradient(90deg, rgba(0,185,241,0.10) 0%, rgba(37,211,102,0.05) 100%)", borderBottom: "1px solid rgba(0,185,241,0.12)" }}>
                <div className="w-10 h-10 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)]">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">OPENDRAP AI Agent</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                    <span className="text-[#4ade80]/70 text-[11px]">Active · 2,847 chats today</span>
                  </div>
                </div>
                <div className="text-right bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl px-3 py-1.5">
                  <div className="text-[#4ade80] text-xs font-black">99.9%</div>
                  <div className="text-white/25 text-[10px]">uptime</div>
                </div>
              </div>

              {/* Messages */}
              <div className="px-5 py-5 space-y-3" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.15) 100%)" }}>
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[200px]" style={{ background: "rgba(37,211,102,0.18)", border: "1px solid rgba(37,211,102,0.25)" }}>
                    <p className="text-white/85 text-xs leading-relaxed">Hi! What's my order status? 📦</p>
                    <p className="text-white/45 text-[10px] mt-1 text-right">9:41 AM ✓✓</p>
                  </div>
                </div>

                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #002E6E, #00B9F1)" }}>
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[240px]" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <p className="text-white/85 text-xs leading-relaxed">
                      Order #5892 shipped! 🚚 Arriving by <span className="text-[#25D366] font-semibold">today 4 PM</span>. Track link sent!
                    </p>
                    <p className="text-white/45 text-[10px] mt-1">9:41 AM</p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #002E6E, #00B9F1)" }}>
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span className="w-2 h-2 rounded-full bg-[#00B9F1]/70 typing-dot-1" />
                    <span className="w-2 h-2 rounded-full bg-[#00B9F1]/70 typing-dot-2" />
                    <span className="w-2 h-2 rounded-full bg-[#00B9F1]/70 typing-dot-3" />
                  </div>
                </div>
              </div>

              {/* Stats footer */}
              <div className="grid grid-cols-3 divide-x border-t" style={{ borderColor: "rgba(37,211,102,0.1)", background: "rgba(0,0,0,0.25)" }}>
                {[
                  { label: "Messages/day", value: "12K+", color: "#00B9F1" },
                  { label: "Resolved", value: "98.4%", color: "#00B9F1" },
                  { label: "Avg Reply", value: "0.8s", color: "#f59e0b" },
                ].map((s) => (
                  <div key={s.label} className="px-4 py-3 text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <div className="font-black text-sm" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-white/55 text-[10px] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating pills */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#002E6E] to-[#00B9F1] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,185,241,0.5)] animate-bounce-in delay-700">
            AI Powered ✨
          </div>
          <div className="absolute -bottom-4 -left-4 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full animate-bounce-in delay-900" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}>
            🔒 End-to-end encrypted
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   SLIDE 2 — Website Dev / Free 7-Day Trial (Cyan #00B9F1)
────────────────────────────────────────── */
function SlideWebsite({ on }: { on: boolean }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

      {/* Left copy */}
      <div className={`transition-all duration-700 ${on ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
        <Badge className="mb-6 bg-[#00B9F1]/15 text-[#00B9F1] border border-[#00B9F1]/30 text-sm px-4 py-2 font-semibold">
          <span className="w-2 h-2 bg-[#00B9F1] rounded-full inline-block mr-2 animate-pulse" />
          Website Development — 7-Day Free Trial
        </Badge>
        <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white mb-6 leading-[1.04] tracking-tight">
          We Fix Your Site{" "}
          <span style={{ background: "linear-gradient(90deg, #bae6fd, #00B9F1, #7dd3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Free in 7 Days
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
          Our developers audit your site, fix critical bugs, boost speed to 90+, and improve SEO.
          <span className="text-[#00B9F1] font-semibold"> Zero cost. Zero commitment.</span> See results first.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="font-bold px-8 h-[52px] transition-all duration-300 magnetic-btn" style={{ background: "linear-gradient(135deg, #0284c7, #00B9F1)", boxShadow: "0 0 30px rgba(0,185,241,0.4)" }} asChild>
            <Link to="/contact">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Link to="/products/website-dev" className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-xl text-base font-semibold text-white/80 border border-white/20 hover:border-[#00B9F1]/50 hover:bg-[#00B9F1]/8 hover:text-white transition-all duration-200">
            <Globe className="h-4 w-4" />See Our Work
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
          {["No credit card", "Real developer team", "Results in 7 days", "Keep full ownership"].map((t) => (
            <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#00B9F1]" />{t}</div>
          ))}
        </div>
      </div>

      {/* Right — Site audit card */}
      <div className={`transition-all duration-700 delay-200 ${on ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-6 rounded-[3rem] blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(0,185,241,0.18) 0%, rgba(0,185,241,0.05) 60%, transparent 80%)" }} />

          <div className="relative animate-levitate">
            <div className="rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,185,241,0.15)]" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(0,185,241,0.04) 100%)", backdropFilter: "blur(24px)" }}>

              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4" style={{ background: "linear-gradient(90deg, rgba(0,185,241,0.15) 0%, rgba(0,185,241,0.04) 100%)", borderBottom: "1px solid rgba(0,185,241,0.12)" }}>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,185,241,0.5)]" style={{ background: "linear-gradient(135deg, #0284c7, #00B9F1)" }}>
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">Site Audit Complete</div>
                  <div className="text-[#00B9F1]/70 text-[11px] mt-0.5">yourwebsite.com · Fixes applied ✓</div>
                </div>
                <span className="text-[#00B9F1] text-xs font-black bg-[#00B9F1]/15 border border-[#00B9F1]/20 px-2.5 py-1 rounded-full">₹0 Cost</span>
              </div>

              {/* Metrics with animated bars */}
              <div className="px-5 py-5 space-y-4" style={{ background: "rgba(0,0,0,0.2)" }}>
                {[
                  { label: "Page Speed", before: 38, after: 96, color: "#00B9F1", icon: Zap },
                  { label: "SEO Score", before: 41, after: 93, color: "#7dd3fc", icon: BarChart3 },
                  { label: "Security", before: 55, after: 100, color: "#a78bfa", icon: Shield },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Icon className="h-3.5 w-3.5" style={{ color: m.color }} />
                          <span className="text-white/70 text-xs font-medium">{m.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white/50 text-[11px] line-through">{m.before}</span>
                          <span className="text-xs font-black" style={{ color: m.color }}>{m.after}/100</span>
                        </div>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                        <div
                          className="h-full rounded-full animate-bar-fill"
                          style={{
                            "--bar-w": `${m.after}%`,
                            background: `linear-gradient(90deg, ${m.color}aa, ${m.color})`,
                          } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Fixed issues */}
              <div className="px-5 pb-4 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                <div className="text-white/55 text-[10px] uppercase tracking-widest font-semibold mb-3">Issues Fixed</div>
                {[
                  { label: "Critical bugs patched", count: "12", color: "#f87171" },
                  { label: "Broken links repaired", count: "7", color: "#fb923c" },
                  { label: "Images optimised", count: "34", color: "#00B9F1" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00B9F1]" />
                      <span className="text-white/75 text-xs">{item.label}</span>
                    </div>
                    <span className="text-xs font-bold" style={{ color: item.color }}>{item.count} fixed</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 flex items-center justify-between border-t" style={{ borderColor: "rgba(0,185,241,0.1)", background: "rgba(0,0,0,0.25)" }}>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#00B9F1]" />
                  <span className="text-white/50 text-xs">Delivered in <span className="text-[#00B9F1] font-bold">5 days</span></span>
                </div>
                <span className="text-[#00B9F1] text-xs font-black">FREE TRIAL ✓</span>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 text-white text-[11px] font-bold px-3 py-1.5 rounded-full animate-bounce-in delay-700" style={{ background: "linear-gradient(135deg, #0284c7, #00B9F1)", boxShadow: "0 4px 20px rgba(0,185,241,0.5)" }}>
            7 Days Free 🎁
          </div>
          <div className="absolute -bottom-4 -left-4 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full animate-bounce-in delay-900" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,185,241,0.25)" }}>
            ✅ No credit card needed
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   Hero Carousel
────────────────────────────────────────── */
const SLIDES = [
  { Component: SlideWhatsApp, accent: "#00B9F1", blob1: "rgba(0,185,241,0.08)", blob2: "rgba(0,185,241,0.04)" },
  { Component: SlideWebsite,  accent: "#00B9F1", blob1: "rgba(0,185,241,0.09)", blob2: "rgba(0,185,241,0.04)" },
];
const SLIDE_MS = 6000;

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((idx: number) => {
    if (idx === active) return;
    setPrev(active);
    setActive(idx);
    setTimeout(() => setPrev(null), 700);
  }, [active]);

  const next = useCallback(() => go((active + 1) % SLIDES.length), [active, go]);
  const goLeft = useCallback(() => go((active - 1 + SLIDES.length) % SLIDES.length), [active, go]);

  useEffect(() => {
    timerRef.current = setTimeout(next, SLIDE_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, next]);

  const slide = SLIDES[active];

  return (
    <section
      className="relative overflow-hidden -mt-[68px] pt-[68px] flex items-center"
      style={{ background: "linear-gradient(135deg, #000d1a 0%, #001428 40%, #001f3f 75%, #002E6E 100%)", minHeight: "100vh" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,185,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,185,241,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* Animated blobs — change color per slide */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transition: "all 1s ease" }}>
        <div className="absolute -top-10 -left-20 w-[520px] h-[520px] rounded-full blur-3xl animate-float" style={{ background: slide.blob1, transition: "background 1s ease" }} />
        <div className="absolute -bottom-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl animate-float-slow" style={{ background: "rgba(0,46,110,0.5)" }} />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl animate-float" style={{ background: slide.blob2, transition: "background 1s ease", animationDelay: "1.5s" }} />
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16"
        style={{ minHeight: "calc(100vh - 68px)", display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        {/* Active slide */}
        <div key={active} className="w-full">
          <slide.Component on={true} />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={goLeft}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="rounded-full transition-all duration-400"
                style={{
                  width: i === active ? "32px" : "10px",
                  height: "10px",
                  background: i === active ? s.accent : "rgba(255,255,255,0.2)",
                  boxShadow: i === active ? `0 0 12px ${s.accent}80` : "none",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            key={`progress-${active}`}
            className="h-full animate-hero-progress"
            style={{ background: `linear-gradient(90deg, ${slide.accent}80, ${slide.accent})` }}
          />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Home
────────────────────────────────────────── */
const P   = "#1E90FF";
const A   = "#00FFC6";
const BG  = "#0B0F1A";
const S   = "#111827";
const S2  = "#0d1526";

export function Home() {
  return (
    <div style={{ background: BG }} className="overflow-x-hidden">

      <HeroCarousel />

      {/* Marquee */}
      <div className="py-3.5 overflow-hidden select-none" style={{ background: "linear-gradient(90deg,#000d1a,#001428,#001f3f,#001428,#000d1a)" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <span key={k} className="inline-flex items-center shrink-0">
              {["WhatsApp AI Agent","Business Automation","AI Chatbot Platform","Website Development","Mobile App Dev","CRM & Analytics","Workflow Management","24/7 Support","7-Day Free Trial","SEO Optimization","Security Audits"].map((item, i) => (
                <span key={`${k}-${i}`} className="inline-flex items-center gap-3 px-8 text-sm text-white/65 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B9F1]/60 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-28" style={{ background: S2 }} id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: `rgba(30,144,255,0.10)`, borderColor: `rgba(30,144,255,0.2)`, color: A }}>Our Solutions</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">Everything Your Business Needs</h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#B0B0B0" }}>From AI-powered automation to world-class development — one partner for your entire digital transformation.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.id} delay={`delay-${(index % 3) * 100}`}>
                  <div
                    className="group relative rounded-2xl p-7 hover:-translate-y-2 transition-all duration-500 h-full spotlight-card"
                    style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.3)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
                  >
                    {feature.badge && <span className="absolute top-4 right-4 text-white text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>{feature.badge}</span>}
                    <div className={`w-[52px] h-[52px] bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#B0B0B0" }}>{feature.description}</p>
                    <Link to={`/products/${feature.id}`} className="inline-flex items-center text-sm font-semibold transition-colors gap-1 group/link" style={{ color: P }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = A}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = P}
                    >
                      Learn more <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-28" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: `rgba(30,144,255,0.10)`, borderColor: `rgba(30,144,255,0.2)`, color: A }}>Simple Process</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">From Zero to Automated in Days</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>No long onboarding. No hidden fees. Just results — starting from day one.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[52px] h-px" style={{ left: "calc(33.33% + 24px)", right: "calc(33.33% + 24px)", background: `linear-gradient(90deg, rgba(30,144,255,0.4), rgba(0,255,198,0.3), rgba(30,144,255,0.4))` }} />
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.num} delay={`delay-${i * 150}`}>
                  <div
                    className="rounded-3xl p-8 hover:-translate-y-1 transition-all duration-400 group text-center"
                    style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.25)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
                  >
                    <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-xs font-black tracking-[0.3em] uppercase mb-3" style={{ color: A }}>{step.num}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button size="lg" className="text-white font-bold px-10 h-[52px] text-base border-0 magnetic-btn transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 25px rgba(30,144,255,0.4)` }} asChild>
              <Link to="/contact">Get Started Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#000d1a 0%,#001428 35%,#001f3f 70%,#002E6E 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle,rgba(0,185,241,0.06) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B9F1]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B9F1]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-5 bg-[#00B9F1]/15 text-[#00B9F1] border border-[#00B9F1]/25 text-sm px-4 py-2">Simple Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">One Plan. Everything Included.</h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">Start for free. No credit card. No commitment. Then continue at one flat monthly rate — no hidden fees.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white/6 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center hover:bg-white/8 transition-colors duration-300 glow-border">
              <div className="inline-flex items-center gap-2 bg-[#00B9F1]/15 border border-[#00B9F1]/25 text-[#00B9F1] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">🎁 Start Free — 7 Days Zero Cost</div>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-white/45 text-2xl font-bold line-through mr-1">₹12,999</span>
                <span className="text-6xl md:text-7xl font-black text-white">₹8,999</span>
                <span className="text-white/55 text-xl mb-3">/mo</span>
              </div>
              <p className="text-white/60 text-sm mb-10">Billed monthly · Cancel anytime · No lock-in</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-10 text-left max-w-md mx-auto">
                {["Unlimited bug fixes","Feature updates","Performance optimization","SEO improvements","Security monitoring","Monthly progress reports","Priority developer support","Uptime monitoring"].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-white/75 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#00B9F1] flex-shrink-0" />{f}
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-gradient-to-r from-[#002E6E] to-[#00B9F1] hover:from-[#001f4d] hover:to-[#0099cc] text-white font-bold px-12 h-[52px] text-base shadow-[0_0_30px_rgba(0,185,241,0.3)] hover:shadow-[0_0_50px_rgba(0,185,241,0.5)] transition-all duration-300 magnetic-btn w-full sm:w-auto" asChild>
                <Link to="/contact">Start Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <p className="text-white/55 text-xs mt-4">No credit card required · Cancel with zero charges</p>
            </div>
          </AnimatedSection>
        </div>
      </section>


    </div>
  );
}
