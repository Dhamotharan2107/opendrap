import { Link } from "react-router";
<<<<<<< HEAD
import { useEffect, useRef, useState, useCallback } from "react";
=======
import { useEffect, useRef, useState } from "react";
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  MessageSquare, Phone, Globe, Smartphone, Bot, Zap,
<<<<<<< HEAD
  CheckCircle2, ArrowRight, Code2, TrendingUp, Star,
  Play, ChevronRight, ChevronLeft, Headphones,
  Mic, PhoneCall, User, BarChart3, Shield, Clock,
} from "lucide-react";

/* ──────────────────────────────────────────
   Shared helpers
────────────────────────────────────────── */
=======
  CheckCircle2, ArrowRight, BarChart3, Shield, Headphones,
  Clock, Code2, Wrench, Gift, XCircle, Award
} from "lucide-react";

>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
<<<<<<< HEAD
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
=======
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

<<<<<<< HEAD
function AnimatedSection({
  children, className = "", delay = ""
}: { children: React.ReactNode; className?: string; delay?: string }) {
=======
function AnimatedSection({ children, className = "", delay = "" }: { children: React.ReactNode; className?: string; delay?: string }) {
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} opacity-0-init ${inView ? `animate-fade-in-up ${delay}` : ""}`}>
      {children}
    </div>
  );
}

<<<<<<< HEAD
/* ──────────────────────────────────────────
   Page data
────────────────────────────────────────── */
const features = [
  { id: "whatsapp-ai", icon: MessageSquare, title: "WhatsApp AI Agent", description: "Deploy intelligent AI agents on WhatsApp that handle customer queries, process orders, and provide 24/7 support — fully automated.", badge: "Most Popular", color: "from-[#25D366] to-[#128C7E]" },
  { id: "voice-ai", icon: Phone, title: "AI Voice Calling", description: "Natural-sounding voice AI that makes and receives calls, qualifies leads, and schedules appointments without any human intervention.", color: "from-violet-500 to-purple-700" },
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
        <Badge className="mb-6 bg-[#25D366]/15 text-[#4ade80] border border-[#25D366]/30 text-sm px-4 py-2 font-semibold">
          <span className="w-2 h-2 bg-[#25D366] rounded-full inline-block mr-2 animate-pulse" />
          WhatsApp AI Platform — Now Live
        </Badge>
        <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white mb-6 leading-[1.04] tracking-tight">
          Automate Your Business with{" "}
          <span className="animate-shimmer">AI Agents</span>
        </h1>
        <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
          Deploy WhatsApp AI agents that handle customer conversations, process orders,
          and provide <span className="text-[#25D366] font-semibold">24/7 instant support</span> — all without any human intervention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 h-[52px] shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all duration-300 magnetic-btn" asChild>
            <Link to="/contact">Start Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-xl text-base font-semibold text-white/80 border border-white/20 hover:border-[#25D366]/50 hover:bg-[#25D366]/8 hover:text-white transition-all duration-200">
            <Play className="h-4 w-4 fill-current opacity-75" />Explore Solutions
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
          {["No credit card required", "Cancel anytime", "Real AI, real results"].map((t) => (
            <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[#25D366]" />{t}</div>
          ))}
        </div>
      </div>

      {/* Right — Chat card */}
      <div className={`transition-all duration-700 delay-200 ${on ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
        <div className="relative">
          {/* Multi-layer glow */}
          <div className="absolute -inset-6 rounded-[3rem] blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(37,211,102,0.18) 0%, rgba(37,211,102,0.05) 60%, transparent 80%)" }} />

          <div className="relative animate-levitate">
            <div className="rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(37,211,102,0.15)]" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(37,211,102,0.04) 100%)", backdropFilter: "blur(24px)" }}>

              {/* Header bar */}
              <div className="flex items-center gap-3 px-5 py-4" style={{ background: "linear-gradient(90deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.05) 100%)", borderBottom: "1px solid rgba(37,211,102,0.12)" }}>
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
                    <p className="text-white/25 text-[10px] mt-1 text-right">9:41 AM ✓✓</p>
                  </div>
                </div>

                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #002E6E, #25D366)" }}>
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[240px]" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <p className="text-white/85 text-xs leading-relaxed">
                      Order #5892 shipped! 🚚 Arriving by <span className="text-[#25D366] font-semibold">today 4 PM</span>. Track link sent!
                    </p>
                    <p className="text-white/25 text-[10px] mt-1">9:41 AM</p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex gap-2 items-end">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #002E6E, #25D366)" }}>
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-1" />
                    <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-2" />
                    <span className="w-2 h-2 rounded-full bg-[#25D366]/70 typing-dot-3" />
                  </div>
                </div>
              </div>

              {/* Stats footer */}
              <div className="grid grid-cols-3 divide-x border-t" style={{ borderColor: "rgba(37,211,102,0.1)", background: "rgba(0,0,0,0.25)" }}>
                {[
                  { label: "Messages/day", value: "12K+", color: "#25D366" },
                  { label: "Resolved", value: "98.4%", color: "#00B9F1" },
                  { label: "Avg Reply", value: "0.8s", color: "#f59e0b" },
                ].map((s) => (
                  <div key={s.label} className="px-4 py-3 text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    <div className="font-black text-sm" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-white/30 text-[10px] mt-0.5">{s.label}</div>
=======
export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const features = [
    { icon: MessageSquare, title: "AI WhatsApp Agent", description: "Automate customer conversations on WhatsApp with intelligent AI agents that handle queries 24/7." },
    { icon: Phone, title: "AI Voice Calling Agent", description: "Smart voice AI that makes and receives calls, schedules appointments, and qualifies leads automatically." },
    { icon: Globe, title: "Website Development", description: "Modern, responsive websites built with cutting-edge technology to establish your online presence." },
    { icon: Smartphone, title: "Mobile App Development", description: "Native and cross-platform mobile applications that deliver exceptional user experiences." },
    { icon: Bot, title: "AI Chatbot Platform", description: "Deploy intelligent chatbots across multiple channels to engage customers and drive conversions." },
    { icon: Zap, title: "Business Automation", description: "Streamline operations with custom automation workflows that save time and reduce costs." },
  ];

  const trialSteps = [
    { icon: Gift, title: "Day 1 — We Audit Your Site", description: "Our developers do a full technical audit of your existing website — bugs, performance, SEO, security." },
    { icon: Wrench, title: "Days 2–6 — We Fix Critical Issues", description: "We fix the most impactful bugs and improvements. You see real results, zero risk." },
    { icon: CheckCircle2, title: "Day 7 — Your Decision", description: "Love the work? Continue at ₹8,999/month. Not satisfied? Cancel with zero charges. No questions asked." },
  ];

  const whyUs = [
    { icon: BarChart3, title: "Proven Results", description: "Average 40% increase in customer engagement within the first 3 months." },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade encryption and compliance with international security standards." },
    { icon: Headphones, title: "24/7 Support", description: "Dedicated support team available around the clock to assist you." },
    { icon: Clock, title: "Quick Deployment", description: "Get up and running in days, not months, with our streamlined onboarding." },
  ];

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001a3d] via-[#002E6E] to-[#004fa3] min-h-[92vh] flex items-center">
        {/* Animated background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00B9F1]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#002E6E]/40 rounded-full blur-3xl animate-float delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00B9F1]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={heroRef}>
              <div className={`opacity-0-init ${heroVisible ? "animate-fade-in-up" : ""}`}>
                <Badge className="mb-5 bg-[#00B9F1]/20 text-[#00B9F1] border border-[#00B9F1]/30 text-sm px-4 py-1.5">
                  <Code2 className="h-3.5 w-3.5 mr-2 inline" />
                  We Are the Developers — We Fix Your Issues
                </Badge>
              </div>
              <h1 className={`text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight opacity-0-init ${heroVisible ? "animate-fade-in-up delay-100" : ""}`}>
                Your Website,{" "}
                <span className="animate-shimmer">Perfected</span>
                <br />by Expert Developers
              </h1>
              <p className={`text-xl text-white/70 mb-8 max-w-lg opacity-0-init ${heroVisible ? "animate-fade-in-up delay-200" : ""}`}>
                We audit, fix, and maintain your existing website. Start with a{" "}
                <span className="text-[#00B9F1] font-semibold">7-day free trial</span> — no credit card, no commitment. Cancel anytime.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 opacity-0-init ${heroVisible ? "animate-fade-in-up delay-300" : ""}`}>
                <Button size="lg" className="bg-[#00B9F1] hover:bg-[#009fd4] text-white text-lg px-8 animate-pulse-glow" asChild>
                  <Link to="/contact">
                    Start Free 7-Day Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-semibold text-white border-2 border-white/60 hover:bg-white/15 hover:border-white transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
              <div className={`mt-8 flex flex-wrap gap-5 text-sm text-white/60 opacity-0-init ${heroVisible ? "animate-fade-in-up delay-400" : ""}`}>
                {["No credit card required", "Cancel anytime", "Real developers, real fixes"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00B9F1]" />
                    {t}
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
                  </div>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          </div>

          {/* Floating pills */}
          <div className="absolute -top-4 -right-4 bg-[#25D366] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] animate-bounce-in delay-700">
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
   SLIDE 2 — AI Voice Calling (Purple #8b5cf6)
────────────────────────────────────────── */
function SlideVoiceAI({ on }: { on: boolean }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

      {/* Left copy */}
      <div className={`transition-all duration-700 ${on ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
        <Badge className="mb-6 bg-violet-500/15 text-violet-300 border border-violet-500/30 text-sm px-4 py-2 font-semibold">
          <span className="w-2 h-2 bg-violet-400 rounded-full inline-block mr-2 animate-pulse" />
          AI Voice Calling — Fully Automated
        </Badge>
        <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white mb-6 leading-[1.04] tracking-tight">
          Your AI Makes{" "}
          <span style={{ background: "linear-gradient(90deg, #c4b5fd, #8b5cf6, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Real Calls
          </span>{" "}
          24/7
        </h1>
        <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
          Our AI voice agent calls leads, qualifies prospects, books appointments, and follows up —
          all with a <span className="text-violet-300 font-semibold">human-like voice</span> your customers won't notice is AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="font-bold px-8 h-[52px] transition-all duration-300 magnetic-btn" style={{ background: "linear-gradient(135deg, #7c3aed, #8b5cf6)", boxShadow: "0 0 30px rgba(139,92,246,0.4)" }} asChild>
            <Link to="/contact">Start Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Link to="/products/voice-ai" className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-xl text-base font-semibold text-white/80 border border-white/20 hover:border-violet-500/50 hover:bg-violet-500/8 hover:text-white transition-all duration-200">
            <PhoneCall className="h-4 w-4" />See It In Action
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
          {["Outbound & inbound calls", "Live transcription", "CRM sync", "Multi-language support"].map((t) => (
            <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />{t}</div>
          ))}
        </div>
      </div>

      {/* Right — Voice call card */}
      <div className={`transition-all duration-700 delay-200 ${on ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-6 rounded-[3rem] blur-3xl" style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.06) 60%, transparent 80%)" }} />

          <div className="relative animate-levitate">
            <div className="rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(139,92,246,0.2)]" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(139,92,246,0.05) 100%)", backdropFilter: "blur(24px)" }}>

              {/* Call header */}
              <div className="px-6 py-5 text-center" style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)", borderBottom: "1px solid rgba(139,92,246,0.15)" }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.6)]" style={{ background: "linear-gradient(135deg, #7c3aed, #8b5cf6)" }}>
                  <Mic className="h-7 w-7 text-white" />
                </div>
                <div className="text-white font-black text-sm">OPENDRAP Voice AI</div>
                <div className="text-violet-300 text-xs mt-1">Calling Priya Sharma...</div>
                <div className="text-white/30 text-[11px] mt-0.5">Outbound · Lead Qualification</div>
              </div>

              {/* Waveform */}
              <div className="px-6 py-5" style={{ background: "rgba(0,0,0,0.25)", borderBottom: "1px solid rgba(139,92,246,0.1)" }}>
                <div className="flex items-center justify-center gap-1.5 mb-3">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 rounded-full wave-bar-${(i % 8) + 1}`}
                      style={{ background: `linear-gradient(180deg, #8b5cf6, #c4b5fd)`, minHeight: "6px" }}
                    />
                  ))}
                </div>
                <div className="text-center text-violet-300/60 text-[11px] font-medium">Live · 00:42</div>
              </div>

              {/* Transcript */}
              <div className="px-5 py-4 space-y-3" style={{ background: "rgba(0,0,0,0.15)" }}>
                <div className="text-white/35 text-[10px] uppercase tracking-widest mb-2 font-semibold">Live Transcript</div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(139,92,246,0.3)", border: "1px solid rgba(139,92,246,0.3)" }}>
                    <Mic className="h-3 w-3 text-violet-300" />
                  </div>
                  <div className="rounded-xl rounded-tl-sm px-3 py-2 flex-1" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.15)" }}>
                    <p className="text-white/80 text-xs leading-relaxed">Hello Priya, I'm calling about our WhatsApp automation solution…</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 flex-row-reverse">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <User className="h-3 w-3 text-white/60" />
                  </div>
                  <div className="rounded-xl rounded-tr-sm px-3 py-2 flex-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <p className="text-white/70 text-xs leading-relaxed">Yes, I've been looking for something like this. Tell me more!</p>
                  </div>
                </div>

                {/* AI analyzing */}
                <div className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.15)" }}>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 typing-dot-1" />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 typing-dot-2" />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 typing-dot-3" />
                  </div>
                  <span className="text-violet-300 text-[11px]">AI qualifying lead intent…</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 divide-x border-t" style={{ borderColor: "rgba(139,92,246,0.12)", background: "rgba(0,0,0,0.25)" }}>
                {[
                  { label: "Calls/day", value: "500+", color: "#a78bfa" },
                  { label: "Qualified", value: "73%", color: "#c4b5fd" },
                  { label: "Cost/call", value: "₹2.4", color: "#ddd6fe" },
                ].map((s) => (
                  <div key={s.label} className="px-4 py-3 text-center" style={{ borderColor: "rgba(139,92,246,0.1)" }}>
                    <div className="font-black text-sm" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-white/30 text-[10px] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 text-white text-[11px] font-bold px-3 py-1.5 rounded-full animate-bounce-in delay-700" style={{ background: "linear-gradient(135deg, #7c3aed, #8b5cf6)", boxShadow: "0 4px 20px rgba(139,92,246,0.5)" }}>
            Human-like Voice 🎙️
          </div>
          <div className="absolute -bottom-4 -left-4 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full animate-bounce-in delay-900" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(139,92,246,0.3)" }}>
            📈 3× more leads qualified
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   SLIDE 3 — Website Dev / Free 7-Day Trial (Cyan #00B9F1)
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
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40">
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
                <span className="text-[#4ade80] text-xs font-black bg-[#25D366]/15 border border-[#25D366]/20 px-2.5 py-1 rounded-full">₹0 Cost</span>
              </div>

              {/* Metrics with animated bars */}
              <div className="px-5 py-5 space-y-4" style={{ background: "rgba(0,0,0,0.2)" }}>
                {[
                  { label: "Page Speed", before: 38, after: 96, color: "#00B9F1", icon: Zap },
                  { label: "SEO Score", before: 41, after: 93, color: "#25D366", icon: BarChart3 },
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
                          <span className="text-white/30 text-[11px] line-through">{m.before}</span>
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
=======

            {/* Hero visual card */}
            <div className={`opacity-0-init ${heroVisible ? "animate-fade-in-right delay-200" : ""}`}>
              <div className="relative animate-float">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-xl flex items-center justify-center">
                      <Code2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">OPENDRAP Dev Team</div>
                      <div className="text-white/50 text-xs">Active on your project</div>
                    </div>
                    <div className="ml-auto w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Bug Audit", status: "Completed", color: "text-green-400" },
                      { label: "Performance Fix", status: "In Progress", color: "text-[#00B9F1]" },
                      { label: "SEO Optimization", status: "Queued", color: "text-yellow-400" },
                      { label: "Security Patch", status: "Queued", color: "text-yellow-400" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                        <span className="text-white/80 text-sm">{item.label}</span>
                        <span className={`text-xs font-medium ${item.color}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-[#00B9F1]/20 border border-[#00B9F1]/30 rounded-xl px-4 py-3 text-center">
                    <span className="text-[#00B9F1] text-sm font-semibold">7-Day Free Trial Active 🎉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Badge className="mb-4 bg-[#002E6E]/10 text-[#002E6E]">
                <Award className="h-3.5 w-3.5 mr-1 inline" /> About OPENDRAP
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                We Are the Developers.<br />
                <span className="text-[#002E6E]">We Fix Your Issues.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                OPENDRAP is a team of passionate full-stack developers, AI engineers, and digital strategists based in Chennai, India. We don't just build — we maintain, optimize, and grow your digital presence.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether your site has hidden bugs, slow load times, or security vulnerabilities — we find them and fix them. Our 7-day free trial lets you experience our work before committing to anything.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Full-Stack Development", "AI Integration", "Bug Fixing", "Performance Optimization", "SEO", "Security Audits"].map((tag) => (
                  <span key={tag} className="bg-[#002E6E]/8 text-[#002E6E] text-sm px-3 py-1.5 rounded-full font-medium border border-[#002E6E]/15">
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay="delay-200">
              <div className="grid grid-cols-2 gap-4">
                {whyUs.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-xl flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.description}</p>
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
                    </div>
                  );
                })}
              </div>
<<<<<<< HEAD

              {/* Fixed issues */}
              <div className="px-5 pb-4 space-y-2" style={{ background: "rgba(0,0,0,0.15)" }}>
                <div className="text-white/30 text-[10px] uppercase tracking-widest font-semibold mb-3">Issues Fixed</div>
                {[
                  { label: "Critical bugs patched", count: "12", color: "#f87171" },
                  { label: "Broken links repaired", count: "7", color: "#fb923c" },
                  { label: "Images optimised", count: "34", color: "#00B9F1" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#25D366]" />
                      <span className="text-white/65 text-xs">{item.label}</span>
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
                <span className="text-[#25D366] text-xs font-black">FREE TRIAL ✓</span>
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
  { Component: SlideWhatsApp, accent: "#25D366",   blob1: "rgba(37,211,102,0.08)",  blob2: "rgba(37,211,102,0.04)"  },
  { Component: SlideVoiceAI,  accent: "#8b5cf6",   blob1: "rgba(139,92,246,0.10)", blob2: "rgba(139,92,246,0.04)"  },
  { Component: SlideWebsite,  accent: "#00B9F1",   blob1: "rgba(0,185,241,0.09)",  blob2: "rgba(0,185,241,0.04)"  },
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
   Testimonials (backend only)
────────────────────────────────────────── */
type Review = { id: number; name: string; role: string | null; rating: number; message: string; createdAt: string; };
const BASE = import.meta.env.VITE_API_URL ?? "";

function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE}/api/reviews/public`)
      .then((r) => r.json())
      .then((p) => { if (p.ok && Array.isArray(p.data)) setReviews(p.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading || reviews.length === 0) return null;

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge className="mb-4 bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/20 text-sm px-4 py-1.5 font-semibold">Customer Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">What Our Clients Say</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reviews.map((r, i) => (
            <AnimatedSection key={r.id} delay={`delay-${(i % 3) * 100}`}>
              <div className="bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 h-full spotlight-card">
                <div className="flex mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className={`h-4 w-4 ${j < r.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`} />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{r.message}&rdquo;</p>
                <div className="flex items-center gap-3 border-t border-gray-50 pt-5">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{r.name}</div>
                    {r.role && <div className="text-gray-400 text-xs mt-0.5">{r.role}</div>}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────
   Home
────────────────────────────────────────── */
export function Home() {
  return (
    <div className="bg-white overflow-x-hidden">

      <HeroCarousel />

      {/* Marquee */}
      <div className="py-3.5 overflow-hidden select-none" style={{ background: "linear-gradient(90deg,#000d1a,#001428,#001f3f,#001428,#000d1a)" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <span key={k} className="inline-flex items-center shrink-0">
              {["WhatsApp AI Agent","Voice Calling Bot","Business Automation","AI Chatbot Platform","Website Development","Mobile App Dev","CRM & Analytics","Workflow Management","24/7 Support","7-Day Free Trial","SEO Optimization","Security Audits"].map((item, i) => (
                <span key={`${k}-${i}`} className="inline-flex items-center gap-3 px-8 text-sm text-white/40 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B9F1]/60 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-28 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-[#002E6E]/8 text-[#002E6E] border border-[#002E6E]/15 text-sm px-4 py-1.5 font-semibold">Our Solutions</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">Everything Your Business Needs</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">From AI-powered automation to world-class development — one partner for your entire digital transformation.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.id} delay={`delay-${(index % 3) * 100}`}>
                  <div className="group relative border border-gray-100 rounded-2xl p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white h-full spotlight-card">
                    {feature.badge && <span className="absolute top-4 right-4 bg-[#25D366] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">{feature.badge}</span>}
                    <div className={`w-[52px] h-[52px] bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{feature.description}</p>
                    <Link to={`/products/${feature.id}`} className="inline-flex items-center text-[#002E6E] hover:text-[#00B9F1] text-sm font-semibold transition-colors gap-1 group/link">
                      Learn more <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
=======
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 7-DAY FREE TRIAL ── */}
      <section className="py-24 bg-gradient-to-br from-[#001a3d] via-[#002E6E] to-[#004fa3] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00B9F1]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B9F1]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-[#00B9F1]/20 text-[#00B9F1] border border-[#00B9F1]/30 text-sm px-4 py-1.5">
              🎁 Exclusive Offer for Existing Websites
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              7-Day Free Trial — Zero Risk
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Already have a website? Let us work on it for 7 days, completely free. We fix real bugs, improve performance, and show you what we can do. You decide after.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {trialSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.title} delay={`delay-${(i + 1) * 100}`}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 h-full hover:bg-white/15 transition-colors duration-300">
                    <div className="w-12 h-12 bg-[#00B9F1]/20 border border-[#00B9F1]/40 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-[#00B9F1]" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Trial vs Paid comparison */}
          <AnimatedSection>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="h-5 w-5 text-[#00B9F1]" />
                    <span className="text-white font-bold text-lg">Free Trial (7 Days)</span>
                  </div>
                  <ul className="space-y-2.5">
                    {["Full site audit", "Critical bug fixes", "Performance report", "No credit card", "Cancel anytime"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-white/75 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="h-5 w-5 text-[#00B9F1]" />
                    <span className="text-white font-bold text-lg">Monthly Plan — ₹8,999/mo</span>
                  </div>
                  <ul className="space-y-2.5">
                    {["Ongoing bug fixes", "Feature updates", "SEO & performance", "Priority support", "Monthly reports"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-white/75 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#00B9F1] flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-[#00B9F1] hover:bg-[#009fd4] text-white px-10 text-lg" asChild>
                  <Link to="/contact">
                    Claim Your Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-white/40 text-xs mt-3">No credit card · No commitment · Cancel anytime</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Solutions for Modern Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate, scale, and transform your business operations with AI-powered tools.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={index} delay={`delay-${(index % 3) * 100}`}>
                  <div className="group border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{feature.description}</p>
                    <Link to="/products" className="inline-flex items-center text-[#002E6E] hover:text-[#00B9F1] text-sm font-medium transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* How it works */}
      <section className="py-28" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#f1f5f9 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-[#002E6E]/8 text-[#002E6E] border border-[#002E6E]/15 text-sm px-4 py-1.5 font-semibold">Simple Process</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight">From Zero to Automated in Days</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">No long onboarding. No hidden fees. Just results — starting from day one.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[52px] h-px" style={{ left: "calc(33.33% + 24px)", right: "calc(33.33% + 24px)", background: "linear-gradient(90deg,rgba(0,46,110,0.2),rgba(0,185,241,0.3),rgba(0,46,110,0.2))" }} />
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.num} delay={`delay-${i * 150}`}>
                  <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group text-center">
                    <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-[#00B9F1] text-xs font-black tracking-[0.3em] uppercase mb-3">{step.num}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-[#002E6E] to-[#004fa3] hover:from-[#001f4d] hover:to-[#002E6E] text-white px-10 h-[52px] text-base font-bold shadow-lg hover:shadow-[0_8px_30px_rgba(0,46,110,0.4)] transition-all duration-300 magnetic-btn" asChild>
              <Link to="/contact">Get Started Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing teaser */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#000d1a 0%,#001428 35%,#001f3f 70%,#002E6E 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle,rgba(0,185,241,0.06) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B9F1]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-5 bg-[#00B9F1]/15 text-[#00B9F1] border border-[#00B9F1]/25 text-sm px-4 py-2">Simple Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">One Plan. Everything Included.</h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">Start for free. No credit card. No commitment. Then continue at one flat monthly rate — no hidden fees.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white/6 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center hover:bg-white/8 transition-colors duration-300 glow-border">
              <div className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/25 text-[#4ade80] text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">🎁 Start Free — 7 Days Zero Cost</div>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-white/25 text-2xl font-bold line-through mr-1">₹12,999</span>
                <span className="text-6xl md:text-7xl font-black text-white">₹8,999</span>
                <span className="text-white/35 text-xl mb-3">/mo</span>
              </div>
              <p className="text-white/30 text-sm mb-10">Billed monthly · Cancel anytime · No lock-in</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-10 text-left max-w-md mx-auto">
                {["Unlimited bug fixes","Feature updates","Performance optimization","SEO improvements","Security monitoring","Monthly progress reports","Priority developer support","Uptime monitoring"].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-white/60 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#25D366] flex-shrink-0" />{f}
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-12 h-[52px] text-base shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all duration-300 magnetic-btn w-full sm:w-auto" asChild>
                <Link to="/contact">Start Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <p className="text-white/20 text-xs mt-4">No credit card required · Cancel with zero charges</p>
=======
      {/* ── PRICING TEASER ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge className="mb-4 bg-[#002E6E]/10 text-[#002E6E]">Simple Pricing</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">One Plan. Everything Included.</h2>
            <p className="text-xl text-gray-600 mb-10">After your free trial, continue with our all-inclusive monthly plan.</p>
            <div className="bg-gradient-to-br from-[#002E6E] to-[#004fa3] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B9F1]/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="text-[#00B9F1] font-semibold mb-2 text-sm uppercase tracking-widest">Monthly Website Maintenance</div>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-7xl font-extrabold">₹8,999</span>
                  <span className="text-white/60 text-xl mb-3">/month</span>
                </div>
                <p className="text-white/60 mb-8 text-sm">Billed monthly · Cancel anytime · No lock-in</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left max-w-lg mx-auto">
                  {[
                    "Unlimited bug fixes", "Feature updates & enhancements",
                    "Performance optimization", "SEO improvements",
                    "Security monitoring", "Monthly progress reports",
                    "Priority developer support", "Free 7-day trial to start"
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00B9F1] flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#00B9F1] hover:bg-[#009fd4] text-white px-10 text-lg" asChild>
                    <Link to="/contact">Start Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-base font-semibold text-white border-2 border-white/60 hover:bg-white/15 hover:border-white transition-all duration-200"
                  >
                    See Full Details
                  </Link>
                </div>
              </div>
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
            </div>
          </AnimatedSection>
        </div>
      </section>

<<<<<<< HEAD
      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#002E6E] via-[#004fa3] to-[#00B9F1]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Headphones className="h-5 w-5 text-white/60" />
              <span className="text-white/60 text-sm font-medium">24/7 support · Chennai, India</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join businesses using OPENDRAP's AI platform to automate operations, delight customers, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002E6E] hover:bg-gray-100 font-bold text-base px-10 h-[52px] shadow-xl hover:shadow-2xl transition-all duration-300 magnetic-btn" asChild>
                <Link to="/contact">Start Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Link to="/products" className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-lg text-base font-semibold text-white border-2 border-white/40 hover:bg-white/15 hover:border-white transition-all duration-200">
                View All Solutions
=======
      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-gradient-to-r from-[#002E6E] to-[#00B9F1] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Fix Your Website?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Start your 7-day free trial today. Our developers will audit and fix your site — completely free. No strings attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white !text-[#002E6E] hover:bg-gray-100 text-lg px-10" asChild>
                <Link to="/contact">Get Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-semibold text-white border-2 border-white/60 hover:bg-white/15 hover:border-white transition-all duration-200"
              >
                Explore Services
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
