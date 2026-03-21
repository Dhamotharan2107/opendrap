import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  MessageSquare, Phone, Globe, Smartphone, Bot, Zap,
  CheckCircle2, ArrowRight, BarChart3, Shield, Headphones,
  Clock, Code2, Wrench, Gift, XCircle, Award
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
                  </div>
                ))}
              </div>
            </div>

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
                    </div>
                  );
                })}
              </div>
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
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

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
            </div>
          </AnimatedSection>
        </div>
      </section>

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
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
