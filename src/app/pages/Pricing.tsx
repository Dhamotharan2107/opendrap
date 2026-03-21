import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  CheckCircle2, ArrowRight, Sparkles, Gift, Zap, Shield,
  Headphones, BarChart3, Code2, RefreshCw, Lock, FileText
} from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "", delay = "" }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} opacity-0-init ${inView ? `animate-fade-in-up ${delay}` : ""}`}>
      {children}
    </div>
  );
}

const included = [
  { icon: Code2, label: "Unlimited bug fixes & patches" },
  { icon: Zap, label: "Feature updates & enhancements" },
  { icon: BarChart3, label: "Performance optimization" },
  { icon: Shield, label: "Security monitoring & patches" },
  { icon: RefreshCw, label: "SEO improvements" },
  { icon: Headphones, label: "Priority developer support" },
  { icon: FileText, label: "Monthly progress reports" },
  { icon: Lock, label: "Uptime monitoring" },
];

const faqs = [
  { q: "What happens after the 7-day free trial?", a: "After 7 days, you can choose to continue at ₹8,999/month. If you're not satisfied, simply cancel — no charges, no questions asked." },
  { q: "Is there a contract or lock-in period?", a: "No contracts. You pay month-to-month and can cancel anytime with 7 days notice." },
  { q: "What kind of websites do you support?", a: "We support all types — React, Next.js, WordPress, Shopify, custom HTML/CSS, and more." },
  { q: "How many bugs or changes can I request?", a: "Unlimited. We handle all bug fixes and reasonable feature updates within the monthly plan." },
  { q: "What payment methods do you accept?", a: "We accept UPI, bank transfer, and all major credit/debit cards." },
  { q: "Can I pause my subscription?", a: "Yes, you can pause for up to 30 days per year. Just let us know in advance." },
];

export function Pricing() {
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeaderVisible(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── HEADER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001a3d] via-[#002E6E] to-[#004fa3] py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#00B9F1]/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00B9F1]/10 rounded-full blur-3xl animate-float delay-300" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`opacity-0-init ${headerVisible ? "animate-fade-in-up" : ""}`}>
            <Badge className="mb-5 bg-[#00B9F1]/20 text-[#00B9F1] border border-[#00B9F1]/30 text-sm px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 mr-2 inline" />
              Simple, Transparent Pricing
            </Badge>
          </div>
          <h1 className={`text-5xl md:text-6xl font-extrabold text-white mb-6 opacity-0-init ${headerVisible ? "animate-fade-in-up delay-100" : ""}`}>
            One Plan.<br />Everything Included.
          </h1>
          <p className={`text-xl text-white/70 max-w-2xl mx-auto opacity-0-init ${headerVisible ? "animate-fade-in-up delay-200" : ""}`}>
            Start with a <span className="text-[#00B9F1] font-semibold">7-day free trial</span> on your existing website. No credit card. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ── PRICING CARD ── */}
      <section className="py-20 -mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Free Trial Card */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-[#002E6E]/20 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-[#002E6E]/10 rounded-xl flex items-center justify-center">
                    <Gift className="h-6 w-6 text-[#002E6E]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Free Trial</div>
                    <div className="text-gray-500 text-sm">For existing websites</div>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-gray-900">₹0</span>
                  <span className="text-gray-500 ml-2">/ 7 days</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Full technical site audit", "Critical bug fixes", "Performance analysis", "Security vulnerability check", "No credit card required", "Cancel with zero charges"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-gray-700 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="w-full bg-[#002E6E] hover:bg-[#001f4d] text-white" asChild>
                  <Link to="/contact">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>

              {/* Monthly Plan Card */}
              <div className="bg-gradient-to-br from-[#002E6E] to-[#004fa3] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#00B9F1]/15 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-[#00B9F1] text-white border-0 text-xs px-3 py-1">Most Popular</Badge>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 bg-[#00B9F1]/20 border border-[#00B9F1]/40 rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-[#00B9F1]" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">Monthly Maintenance</div>
                      <div className="text-white/50 text-sm">After free trial</div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-6xl font-extrabold text-white">₹8,999</span>
                    <span className="text-white/60 ml-2">/ month</span>
                  </div>
                  <p className="text-white/50 text-xs mb-6">Billed monthly · Cancel anytime · No lock-in</p>
                  <ul className="space-y-3 mb-8">
                    {["Unlimited bug fixes & patches", "Feature updates & enhancements", "Performance optimization", "Security monitoring & patches", "SEO improvements", "Priority developer support", "Monthly progress reports", "Uptime monitoring"].map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-white/80 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#00B9F1] flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="w-full bg-[#00B9F1] hover:bg-[#009fd4] text-white animate-pulse-glow" asChild>
                    <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <p className="text-white/40 text-xs text-center mt-3">Starts after your free 7-day trial</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything in One Plan</h2>
            <p className="text-xl text-gray-600">No hidden fees. No upsells. Just results.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {included.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.label} delay={`delay-${(i % 4) * 100}`}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{item.label}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#002E6E] to-[#00B9F1] -translate-x-1/2" />
            {[
              { step: "01", title: "Contact Us", desc: "Tell us about your website. We'll set up access and start the audit within 24 hours." },
              { step: "02", title: "7-Day Free Trial", desc: "We audit your site, fix critical bugs, and deliver a full report — all free." },
              { step: "03", title: "You Decide", desc: "Love the results? Continue at ₹8,999/month. Not happy? Cancel with zero charges." },
              { step: "04", title: "Ongoing Maintenance", desc: "We become your dedicated dev team — fixing, updating, and growing your site every month." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={`delay-${i * 100}`}>
                <div className={`flex items-start gap-6 mb-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div className={`bg-gray-50 border border-gray-100 rounded-2xl p-6 flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={`delay-${(i % 3) * 100}`}>
                <Card className="border-gray-100 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold text-gray-900">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-r from-[#002E6E] to-[#00B9F1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-5">Start Your Free 7-Day Trial Today</h2>
            <p className="text-xl text-white/80 mb-8">
              No credit card. No commitment. Just real developers fixing your real website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002E6E] hover:bg-gray-100 text-lg px-10 font-semibold" asChild>
                <Link to="/contact">Claim Free Trial <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-semibold text-white border-2 border-white/60 hover:bg-white/15 hover:border-white transition-all duration-200"
              >
                Talk to Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
