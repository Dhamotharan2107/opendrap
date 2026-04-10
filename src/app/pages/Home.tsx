import { Link } from "react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  MessageSquare, Globe, Smartphone, Bot, Zap,
  CheckCircle2, ArrowRight, Code2, TrendingUp,
  Play, ChevronRight, ChevronLeft,
  BarChart3, Shield, Clock, Star, Quote,
  Stethoscope, Tv, ShoppingBag, ExternalLink,
} from "lucide-react";
import { AnimatedSection, useInView } from "../../components/common/AnimatedSection";

/* ──────────────────────────────────────────
   Page data
────────────────────────────────────────── */
const features = [
  { id: "whatsapp-ai", icon: MessageSquare, title: "WhatsApp Chatbot", description: "Put a smart chatbot on WhatsApp that answers questions, takes orders, and supports customers around the clock — no staff needed.", badge: "Most Popular", color: "from-[#25D366] to-[#128C7E]" },
  { id: "website-dev", icon: Globe, title: "Website Development", description: "Fast, modern, SEO-ready websites. We audit and fix your current site at no charge during the 7-day trial.", badge: "7-Day Trial", color: "from-blue-500 to-blue-700" },
  { id: "mobile-apps", icon: Smartphone, title: "Mobile App Development", description: "iOS and Android apps built for real users. We focus on speed, usability, and results that matter to your customers.", color: "from-orange-500 to-orange-600" },
  { id: "chatbot", icon: Bot, title: "Chatbot Platform", description: "Smart chatbots for your website, app, and social pages. Capture leads and help visitors 24/7 without extra staff.", color: "from-[#002E6E] to-[#004fa3]" },
  { id: "automation", icon: Zap, title: "Workflow Automation", description: "Cut out repetitive tasks with automated workflows. Your team saves time and your operations run smoother.", color: "from-yellow-500 to-amber-600" },
];

const steps = [
  { num: "01", icon: Code2, title: "Contact & Audit", description: "Tell us about your site or product. Our team runs a full technical audit within 24 hours at no charge." },
  { num: "02", icon: Zap, title: "7-Day Trial", description: "We fix bugs, improve speed, and show you real results in 7 days. No card needed, no commitment." },
  { num: "03", icon: TrendingUp, title: "Scale & Grow", description: "Happy with the results? Keep going at ₹8,999/month — includes maintenance, automation, and ongoing support." },
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
          Put Your Customer Support{" "}
          <span className="animate-shimmer">on Autopilot</span>
        </h1>
        <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
          A WhatsApp chatbot that answers questions, handles orders, and supports customers
          <span className="text-[#00B9F1] font-semibold"> around the clock</span> — with no extra staff.
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
          Our team audits your site, fixes bugs, and boosts speed to 90+ in 7 days.
          <span className="text-[#00B9F1] font-semibold"> No charge. No commitment.</span> See results first.
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
            className="w-12 h-12 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Previous slide"
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
            className="w-12 h-12 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Next slide"
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

/* ──────────────────────────────────────────
   Reviews Section
────────────────────────────────────────── */
interface Review {
  id: number;
  name: string;
  role: string | null;
  rating: number;
  message: string;
}

const BASE = import.meta.env.VITE_API_URL ?? "";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <Star key={s} className="h-4 w-4" style={{ color: s <= rating ? "#f59e0b" : "rgba(255,255,255,0.15)", fill: s <= rating ? "#f59e0b" : "rgba(255,255,255,0.08)" }} />
      ))}
    </div>
  );
}

function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE}/api/reviews/public`)
      .then((r) => r.json())
      .then((d) => { if (d.ok) setReviews(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (!loading && reviews.length === 0) return null;

  return (
    <section className="py-28" style={{ background: S2 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: `rgba(30,144,255,0.10)`, borderColor: `rgba(30,144,255,0.2)`, color: A }}>Client Reviews</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">What Our Clients Say</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>Real feedback from businesses we've helped grow.</p>
        </AnimatedSection>

        {loading ? (
          <div className="flex justify-center py-12">
            <span className="w-8 h-8 border-2 border-white/20 border-t-[#00B9F1] rounded-full animate-spin" />
          </div>
        ) : (
          <div className={`grid gap-6 ${
            reviews.length === 1 ? "max-w-md mx-auto" :
            reviews.length === 2 ? "md:grid-cols-2 max-w-2xl mx-auto" :
            "md:grid-cols-2 lg:grid-cols-3"
          }`}>
            {reviews.map((review, i) => (
              <AnimatedSection key={review.id} delay={`delay-${(i % 3) * 100}`}>
                <div
                  className="rounded-2xl p-7 h-full flex flex-col gap-4"
                  style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                >
                  <Quote className="h-6 w-6 opacity-30" style={{ color: A }} />
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#B0B0B0" }}>{review.message}</p>
                  <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <div>
                      <div className="text-white font-bold text-sm">{review.name}</div>
                      {review.role && <div className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{review.role}</div>}
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        <AnimatedSection className="text-center mt-12">
          <Link to="/submit-review" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: A }}>
            Share your experience <ChevronRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Our Work Preview
────────────────────────────────────────── */
const homeWorks = [
  {
    id: "dental-clinic",
    icon: Stethoscope,
    tag: "Healthcare",
    tagColor: "#0d9488",
    title: "The Tooth Fairy",
    subtitle: "Premium Family Dental Clinic",
    description: "Full-featured dental clinic site with online booking, patient blog, admin analytics dashboard, and a live AI chatbot — all in one polished product.",
    url: "https://toothfairy-opendrap.pages.dev/",
    gradient: "linear-gradient(135deg, #0d9488, #0f766e)",
    glow: "rgba(13,148,136,0.4)",
    accentColor: "#0d9488",
    mockupBg: "linear-gradient(135deg, #0f2027, #134e4a, #0d9488)",
    previewImg: "/preview-dental.png",
    features: ["Online appointment booking", "Admin dashboard + analytics", "Live AI chatbot assistant"],
  },
  {
    id: "tv-repair",
    icon: Tv,
    tag: "Local Business",
    tagColor: "#f59e0b",
    title: "TV Repair Service",
    subtitle: "Local Electronics Repair Website",
    description: "Conversion-focused site for a local TV repair shop. Built to rank locally, capture leads, and build trust with a clean professional design.",
    url: "https://tv-repair-site.pages.dev/",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    glow: "rgba(245,158,11,0.35)",
    accentColor: "#f59e0b",
    mockupBg: "linear-gradient(135deg, #1c1200, #451a03, #f59e0b)",
    previewImg: "/preview-tvrepair.png",
    features: ["Service listings with pricing", "Lead capture contact form", "Local SEO optimised"],
  },
  {
    id: "digistore",
    icon: ShoppingBag,
    tag: "E-Commerce",
    tagColor: "#1E90FF",
    title: "DigiStore",
    subtitle: "Digital Products Storefront",
    description: "Modern digital storefront for selling products online. Clean UI, fast checkout flow, and a personalised user greeting system.",
    url: "https://digistore.pages.dev/",
    gradient: "linear-gradient(135deg, #1E90FF, #00B9F1)",
    glow: "rgba(30,144,255,0.35)",
    accentColor: "#1E90FF",
    mockupBg: "linear-gradient(135deg, #000d1a, #001f3f, #1E90FF)",
    previewImg: "/preview-digistore.png",
    features: ["Digital product listings", "Personalised user greetings", "Fast & lightweight build"],
  },
];

function WorkMockup({ work }: { work: typeof homeWorks[0] }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#1a1f2e", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#0f1219", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-2 px-3 py-0.5 rounded text-[10px] font-mono flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.05)", color: "#6b7280" }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: work.accentColor }} />
          {work.url.replace("https://", "")}
        </div>
        <a href={work.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${work.title}`}>
          <ExternalLink className="h-3 w-3" style={{ color: "#6b7280" }} />
        </a>
      </div>
      {/* Viewport — screenshot */}
      <div className="relative overflow-hidden" style={{ height: "300px" }}>
        <img
          src={work.previewImg}
          alt={`${work.title} website preview`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.4) 100%)" }} />
      </div>
    </div>
  );
}

function OurWorkPreview() {
  const [active, setActive] = useState(0);
  const work = homeWorks[active];

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#000d1a 0%,#001428 35%,#001f3f 70%,#002E6E 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle,rgba(0,185,241,0.05) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,185,241,0.07)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,255,198,0.04)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: "rgba(30,144,255,0.10)", borderColor: "rgba(30,144,255,0.2)", color: A }}>Our Work</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Real Sites We've Built</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>Every project below is live. Click any tab to explore it.</p>
        </AnimatedSection>

        {/* Tab pills */}
        <AnimatedSection className="flex flex-wrap gap-3 justify-center mb-10">
          {homeWorks.map((w, i) => {
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
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: work.gradient }}>
                    <work.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: `${work.accentColor}18`, color: work.accentColor, border: `1px solid ${work.accentColor}30` }}>
                    {work.tag}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{work.title}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: work.accentColor }}>{work.subtitle}</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#B0B0B0" }}>{work.description}</p>
                <ul className="space-y-2.5 mb-7">
                  {work.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#d1d5db" }}>
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: work.accentColor }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105"
                    style={{ background: work.gradient, boxShadow: `0 0 20px ${work.glow}` }}
                  >
                    View Live <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <Link
                    to="/our-work"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-white/10"
                    style={{ color: A, border: `1px solid ${A}30` }}
                  >
                    See All Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              {/* Right mockup */}
              <div className="p-6 md:p-8 flex items-center" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="w-full">
                  <WorkMockup work={work} />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* See all CTA */}
        <AnimatedSection className="text-center mt-10">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${P}, ${A})`, color: "#0B0F1A", boxShadow: "0 0 24px rgba(30,144,255,0.35)" }}
          >
            View All Our Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

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
                      Learn more about {feature.title} <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">Up and Running in Days</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>Simple setup, no hidden fees, and real results from day one.</p>
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

      {/* Reviews */}
      <ReviewsSection />

      {/* Our Work */}
      <OurWorkPreview />

    </div>
  );
}
