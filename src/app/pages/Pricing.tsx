import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  CheckCircle2, ArrowRight, Sparkles, Gift, Zap, Shield,
  Headphones, BarChart3, Code2, RefreshCw, Lock, FileText,
  ChevronDown, Star
} from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({
  children, className = "", delay = ""
}: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} opacity-0-init ${inView ? `animate-fade-in-up ${delay}` : ""}`}>
      {children}
    </div>
  );
}

/* FAQ with accordion */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`opacity-0-init ${inView ? `animate-fade-in-up delay-${(index % 4) * 100}` : ""}`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full text-left bg-white border border-gray-100 rounded-2xl px-6 py-5 hover:border-[#00B9F1]/40 hover:shadow-md transition-all duration-300 group flex items-center justify-between gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-hover:text-[#00B9F1] ${open ? "rotate-180 text-[#00B9F1]" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-gray-50/70 border-x border-b border-gray-100 rounded-b-2xl px-6 py-4 -mt-1">
          <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

const included = [
  { icon: Code2,      label: "Unlimited bug fixes & patches" },
  { icon: Zap,        label: "Feature updates & enhancements" },
  { icon: BarChart3,  label: "Performance optimization" },
  { icon: Shield,     label: "Security monitoring & patches" },
  { icon: RefreshCw,  label: "SEO improvements" },
  { icon: Headphones, label: "Priority developer support" },
  { icon: FileText,   label: "Monthly progress reports" },
  { icon: Lock,       label: "Uptime monitoring" },
];

const faqs = [
  {
    q: "What happens after the 7-day free trial?",
    a: "After 7 days, you can choose to continue at ₹8,999/month. If you're not satisfied, simply cancel — no charges, no questions asked. The trial is truly free.",
  },
  {
    q: "Is there a contract or lock-in period?",
    a: "No contracts. You pay month-to-month and can cancel anytime with 7 days notice. We earn your loyalty through results, not paperwork.",
  },
  {
    q: "What kind of websites do you support?",
    a: "We support all types — React, Next.js, WordPress, Shopify, Wix, custom HTML/CSS, and more. If it runs on the web, we can fix and improve it.",
  },
  {
    q: "How many bugs or changes can I request?",
    a: "Unlimited. We handle all bug fixes and reasonable feature updates within the monthly plan. Our developers work as an extension of your team.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, bank transfer, Razorpay, and all major credit/debit cards. International payments via Stripe are also available.",
  },
  {
    q: "Can I pause my subscription?",
    a: "Yes, you can pause for up to 30 days per year. Just let us know 3 days in advance. We'll resume exactly where we left off.",
  },
];

export function Pricing() {
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── HEADER ── */}
      <section
        className="relative overflow-hidden py-32"
        style={{
          background: "linear-gradient(135deg, #000d1a 0%, #001428 40%, #001f3f 75%, #002E6E 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,185,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,185,241,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#00B9F1]/12 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#25D366]/6 rounded-full blur-3xl pointer-events-none animate-float-slow" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`opacity-0-init ${headerVisible ? "animate-fade-in-up" : ""}`}>
            <Badge className="mb-5 bg-[#00B9F1]/15 text-[#00B9F1] border border-[#00B9F1]/25 text-sm px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 mr-2 inline" />
              Simple, Transparent Pricing
            </Badge>
          </div>
          <h1
            className={`text-5xl md:text-6xl font-black text-white mb-6 tracking-tight opacity-0-init ${headerVisible ? "animate-fade-in-up delay-100" : ""}`}
          >
            One Plan.<br />
            <span className="animate-shimmer">Everything Included.</span>
          </h1>
          <p
            className={`text-xl text-white/55 max-w-2xl mx-auto leading-relaxed opacity-0-init ${headerVisible ? "animate-fade-in-up delay-200" : ""}`}
          >
            Start with a <span className="text-[#25D366] font-semibold">7-day free trial</span> on your
            existing website. No credit card. No commitment. Cancel anytime.
          </p>

          {/* Star ratings */}
          <div className={`mt-8 flex items-center justify-center gap-3 opacity-0-init ${headerVisible ? "animate-fade-in-up delay-300" : ""}`}>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/50 text-sm">4.9/5 from 500+ businesses</span>
          </div>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="py-20 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Free Trial Card */}
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#002E6E]/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl flex items-center justify-center">
                    <Gift className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Free Trial</div>
                    <div className="text-gray-400 text-sm">For existing websites</div>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-black text-gray-900">₹0</span>
                  <span className="text-gray-400 ml-2 text-lg">/ 7 days</span>
                </div>
                <p className="text-gray-400 text-xs mb-7">No credit card · Zero commitment</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Full technical site audit",
                    "Critical bug fixes",
                    "Performance analysis & report",
                    "Security vulnerability check",
                    "No credit card required",
                    "Cancel with zero charges",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-gray-600 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold h-[50px]"
                  asChild
                >
                  <Link to="/contact">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Monthly Plan Card */}
              <div
                className="rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #000d1a 0%, #001428 40%, #002E6E 100%)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,185,241,0.06) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="absolute top-0 right-0 w-56 h-56 bg-[#00B9F1]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#25D366]/5 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-[#25D366] text-white border-0 text-xs px-3 py-1 font-bold shadow-lg">
                      Most Popular
                    </Badge>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 bg-[#25D366]/15 border border-[#25D366]/30 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">Monthly Maintenance</div>
                      <div className="text-white/40 text-sm">After your free trial</div>
                    </div>
                  </div>

                  <div className="mb-2 flex items-end gap-2">
                    <span className="text-white/25 text-xl font-bold line-through">₹12,999</span>
                    <span className="text-5xl font-black text-white">₹8,999</span>
                    <span className="text-white/40 mb-1.5">/ month</span>
                  </div>
                  <p className="text-white/30 text-xs mb-7">Billed monthly · Cancel anytime · No lock-in</p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Unlimited bug fixes & patches",
                      "Feature updates & enhancements",
                      "Performance optimization",
                      "Security monitoring & patches",
                      "SEO improvements",
                      "Priority developer support",
                      "Monthly progress reports",
                      "Uptime monitoring",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-white/70 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-[50px] shadow-[0_0_25px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all duration-300"
                    asChild
                  >
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-white/25 text-xs text-center mt-3">Starts after your free 7-day trial</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Everything in One Plan</h2>
            <p className="text-xl text-gray-500">No hidden fees. No upsells. No surprises. Just results.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {included.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.label} delay={`delay-${(i % 4) * 100}`}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group spotlight-card">
                    <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm font-semibold">{item.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">How It Works</h2>
            <p className="text-xl text-gray-500">From first contact to full deployment in 4 simple steps.</p>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#002E6E]/30 via-[#00B9F1]/40 to-transparent -translate-x-1/2" />
            {[
              { step: "01", title: "Contact Us", desc: "Tell us about your website. We'll set up access and start the audit within 24 hours." },
              { step: "02", title: "7-Day Free Trial", desc: "We audit, fix critical bugs, optimize performance, and deliver a full report — all free." },
              { step: "03", title: "You Decide", desc: "Love the results? Continue at ₹8,999/month. Not happy? Cancel with zero charges, zero questions." },
              { step: "04", title: "Ongoing Growth", desc: "We become your dedicated dev team — fixing, updating, and growing your site every single month." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={`delay-${i * 100}`}>
                <div className={`flex items-start gap-6 mb-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0 w-[56px] h-[56px] bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg">
                    {item.step}
                  </div>
                  <div className={`bg-white border border-gray-100 rounded-2xl p-6 flex-1 hover:shadow-md transition-shadow duration-300 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4 bg-[#002E6E]/8 text-[#002E6E] border border-[#002E6E]/15 text-sm px-4 py-1.5">
              FAQ
            </Badge>
            <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-500">Everything you need to know before getting started.</p>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #000d1a 0%, #001428 40%, #002E6E 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B9F1]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed">
              No credit card. No commitment. Just real developers fixing your real website — for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-10 h-[52px] shadow-[0_0_30px_rgba(37,211,102,0.35)] hover:shadow-[0_0_50px_rgba(37,211,102,0.55)] transition-all duration-300 magnetic-btn"
                asChild
              >
                <Link to="/contact">
                  Claim Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 h-[52px] rounded-lg text-base font-semibold text-white border-2 border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                Talk to Our Team
              </Link>
            </div>
            <p className="text-white/25 text-xs mt-6">No credit card required · Cancel anytime · Real developers</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
