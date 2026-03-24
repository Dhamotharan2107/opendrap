import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  CheckCircle2, ArrowRight, Sparkles, Gift, Zap, Shield,
  Headphones, BarChart3, Code2, RefreshCw, Lock, FileText,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatedSection, useInView } from "../../components/common/AnimatedSection";

const P   = "#1E90FF";
const A   = "#00FFC6";
const BG  = "#0B0F1A";
const S   = "#111827";   // card surface
const S2  = "#0d1526";   // slightly lighter surface

/* ── FAQ ── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`opacity-0-init ${inView ? `animate-fade-in-up delay-${(index % 4) * 100}` : ""}`}>
      <button
        onClick={() => setOpen(p => !p)}
        className="w-full text-left rounded-2xl px-6 py-5 transition-all duration-300 flex items-center justify-between gap-4"
        style={{ background: S, border: `1px solid rgba(30,144,255,0.12)` }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `rgba(0,255,198,0.3)`}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = `rgba(30,144,255,0.12)`}
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-sm md:text-base pr-4">{q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          style={{ color: open ? A : "#B0B0B0" }}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="rounded-b-2xl px-6 py-4 -mt-1" style={{ background: S2, border: `1px solid rgba(30,144,255,0.08)`, borderTop: "none" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{a}</p>
        </div>
      </div>
    </div>
  );
}

const included = [
  { icon: Code2,      label: "Unlimited bug fixes & patches"  },
  { icon: Zap,        label: "Feature updates & enhancements" },
  { icon: BarChart3,  label: "Performance optimization"       },
  { icon: Shield,     label: "Security monitoring & patches"  },
  { icon: RefreshCw,  label: "SEO improvements"               },
  { icon: Headphones, label: "Priority developer support"     },
  { icon: FileText,   label: "Monthly progress reports"       },
  { icon: Lock,       label: "Uptime monitoring"              },
];

const faqs = [
  { q: "What happens after the 7-day free trial?",  a: "After 7 days, you can choose to continue at ₹8,999/month. If you're not satisfied, simply cancel — no charges, no questions asked. The trial is truly free." },
  { q: "Is there a contract or lock-in period?",    a: "No contracts. You pay month-to-month and can cancel anytime with 7 days notice. We earn your loyalty through results, not paperwork." },
  { q: "What kind of websites do you support?",     a: "We support all types — React, Next.js, WordPress, Shopify, Wix, custom HTML/CSS, and more. If it runs on the web, we can fix and improve it." },
  { q: "How many bugs or changes can I request?",   a: "Unlimited. We handle all bug fixes and reasonable feature updates within the monthly plan. Our developers work as an extension of your team." },
  { q: "What payment methods do you accept?",       a: "We accept UPI, bank transfer, Razorpay, and all major credit/debit cards. International payments via Stripe are also available." },
  { q: "Can I pause my subscription?",              a: "Yes, you can pause for up to 30 days per year. Just let us know 3 days in advance. We'll resume exactly where we left off." },
];

const howItWorks = [
  { step: "01", title: "Contact Us",       desc: "Tell us about your website. We'll set up access and start the audit within 24 hours." },
  { step: "02", title: "7-Day Free Trial", desc: "We audit, fix critical bugs, optimize performance, and deliver a full report — all free." },
  { step: "03", title: "You Decide",       desc: "Love the results? Continue at ₹8,999/month. Not happy? Cancel with zero charges, zero questions." },
  { step: "04", title: "Ongoing Growth",   desc: "We become your dedicated dev team — fixing, updating, and growing your site every single month." },
];

export function Pricing() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div style={{ background: BG }} className="overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-32" style={{ background: `linear-gradient(135deg, ${BG} 0%, #0d1526 50%, #0f1d3a 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(30,144,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.05) 1px, transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-float"    style={{ background: "rgba(30,144,255,0.10)" }} />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ background: "rgba(0,255,198,0.06)" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`opacity-0-init ${vis ? "animate-fade-in-up" : ""}`}>
            <Badge className="mb-5 text-sm px-4 py-2 border font-semibold" style={{ background: `rgba(30,144,255,0.12)`, borderColor: `rgba(30,144,255,0.25)`, color: A }}>
              <Sparkles className="h-3.5 w-3.5 mr-2 inline" style={{ color: P }} />
              Simple, Transparent Pricing
            </Badge>
          </div>
          <h1 className={`text-5xl md:text-6xl font-black text-white mb-6 tracking-tight opacity-0-init ${vis ? "animate-fade-in-up delay-100" : ""}`}>
            One Plan.<br />
            <span className="animate-shimmer">Everything Included.</span>
          </h1>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed opacity-0-init ${vis ? "animate-fade-in-up delay-200" : ""}`} style={{ color: "#B0B0B0" }}>
            Start with a <span className="font-semibold" style={{ color: A }}>7-day free trial</span> on your existing website. No credit card. No commitment. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="py-20 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Free Trial */}
              <div className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1" style={{ background: S, border: `2px solid rgba(30,144,255,0.15)` }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = `rgba(0,255,198,0.35)`}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = `rgba(30,144,255,0.15)`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `rgba(30,144,255,0.12)`, border: `1px solid rgba(30,144,255,0.25)` }}>
                    <Gift className="h-6 w-6" style={{ color: P }} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Free Trial</div>
                    <div className="text-sm" style={{ color: "#B0B0B0" }}>For existing websites</div>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-black text-white">₹0</span>
                  <span className="ml-2 text-lg" style={{ color: "#B0B0B0" }}>/ 7 days</span>
                </div>
                <p className="text-xs mb-7" style={{ color: "#B0B0B0" }}>No credit card · Zero commitment</p>
                <ul className="space-y-3 mb-8">
                  {["Full technical site audit", "Critical bug fixes", "Performance analysis & report", "Security vulnerability check", "No credit card required", "Cancel with zero charges"].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#B0B0B0" }}>
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: A }} />{f}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full font-bold h-[50px] text-white border-0 magnetic-btn"
                  style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 20px rgba(30,144,255,0.3)` }} asChild>
                  <Link to="/contact">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>

              {/* Monthly Plan */}
              <div className="rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl" style={{ background: `linear-gradient(135deg, #0d1526 0%, #0f1d3a 50%, #111f40 100%)`, border: `2px solid rgba(30,144,255,0.25)` }}>
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, rgba(30,144,255,0.06) 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl" style={{ background: "rgba(30,144,255,0.12)" }} />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl" style={{ background: "rgba(0,255,198,0.06)" }} />

                <div className="relative">
                  <div className="absolute -top-2 -right-2">
                    <Badge className="text-xs px-3 py-1 font-bold shadow-lg border-0 text-white" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                      Most Popular
                    </Badge>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `rgba(0,255,198,0.12)`, border: `1px solid rgba(0,255,198,0.25)` }}>
                      <Zap className="h-6 w-6" style={{ color: A }} />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">Monthly Maintenance</div>
                      <div className="text-sm" style={{ color: "#B0B0B0" }}>After your free trial</div>
                    </div>
                  </div>

                  <div className="mb-2 flex items-end gap-2">
                    <span className="text-xl font-bold line-through" style={{ color: "rgba(255,255,255,0.35)" }}>₹12,999</span>
                    <span className="text-5xl font-black text-white">₹8,999</span>
                    <span className="mb-1.5" style={{ color: "#B0B0B0" }}>/ month</span>
                  </div>
                  <p className="text-xs mb-7" style={{ color: "#B0B0B0" }}>Billed monthly · Cancel anytime · No lock-in</p>

                  <ul className="space-y-3 mb-8">
                    {["Unlimited bug fixes & patches", "Feature updates & enhancements", "Performance optimization", "Security monitoring & patches", "SEO improvements", "Priority developer support", "Monthly progress reports", "Uptime monitoring"].map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/80">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: A }} />{f}
                      </li>
                    ))}
                  </ul>

                  <Button size="lg" className="w-full font-bold h-[50px] text-white border-0 magnetic-btn transition-all duration-300"
                    style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 25px rgba(30,144,255,0.4)` }} asChild>
                    <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <p className="text-xs text-center mt-3" style={{ color: "#B0B0B0" }}>Starts after your free 7-day trial</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20" style={{ background: S2 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Everything in One Plan</h2>
            <p className="text-xl" style={{ color: "#B0B0B0" }}>No hidden fees. No upsells. No surprises. Just results.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {included.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.label} delay={`delay-${(i % 4) * 100}`}>
                  <div className="rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 group spotlight-card"
                    style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.3)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
                  >
                    <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20" style={{ background: BG }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">How It Works</h2>
            <p className="text-xl" style={{ color: "#B0B0B0" }}>From first contact to full deployment in 4 simple steps.</p>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: `linear-gradient(180deg, rgba(30,144,255,0.4), rgba(0,255,198,0.3), transparent)` }} />
            {howItWorks.map((item, i) => (
              <AnimatedSection key={item.step} delay={`delay-${i * 100}`}>
                <div className={`flex items-start gap-6 mb-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0 w-[56px] h-[56px] rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                    {item.step}
                  </div>
                  <div className={`rounded-2xl p-6 flex-1 transition-all duration-300 hover:-translate-y-0.5 ${i % 2 === 1 ? "md:text-right" : ""}`}
                    style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.25)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
                  >
                    <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: S2 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: `rgba(30,144,255,0.10)`, borderColor: `rgba(30,144,255,0.2)`, color: A }}>
              FAQ
            </Badge>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl" style={{ color: "#B0B0B0" }}>Everything you need to know before getting started.</p>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${BG} 0%, #0d1526 50%, #0f1d3a 100%)` }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(30,144,255,0.08)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,255,198,0.05)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">Start Your Free Trial Today</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "#B0B0B0" }}>
              No credit card. No commitment. Just real developers fixing your real website — for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-bold text-base px-10 h-[52px] text-white border-0 magnetic-btn"
                style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 30px rgba(30,144,255,0.4)` }} asChild>
                <Link to="/contact">Claim Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Link to="/contact"
                className="inline-flex items-center justify-center px-8 h-[52px] rounded-lg text-base font-semibold text-white transition-all duration-200"
                style={{ border: `2px solid rgba(30,144,255,0.3)` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(30,144,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = `rgba(0,255,198,0.5)`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.3)"; }}
              >
                Talk to Our Team
              </Link>
            </div>
            <p className="text-xs mt-6" style={{ color: "#B0B0B0" }}>No credit card required · Cancel anytime · Real developers</p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
