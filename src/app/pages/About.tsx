import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Code2, Heart, Users, Zap, Shield, Globe } from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";
import { useState, useEffect } from "react";

const P  = "#1E90FF";
const A  = "#00FFC6";
const BG = "#0B0F1A";
const S  = "#111827";
const S2 = "#0d1526";

const values = [
  { icon: Code2,   title: "We Build, We Maintain",   desc: "We don't just deliver and disappear. We stay, update, fix, and improve your product continuously." },
  { icon: Heart,   title: "Genuinely Transparent",   desc: "No hidden fees, no vague timelines. You always know exactly what we're doing and why." },
  { icon: Users,   title: "A Team, Not a Company",   desc: "We're a collective of developers — no hierarchy, no suits. Just people who love building great things." },
  { icon: Zap,     title: "Fast & Iterative",        desc: "We ship fast, gather feedback, and improve. No endless planning cycles — just real progress." },
  { icon: Shield,  title: "Your Success is Ours",    desc: "We measure ourselves by the results we create for you, not by invoices sent." },
  { icon: Globe,   title: "Open to Everyone",        desc: "Whether you're a solo founder or a growing business, we treat every client with the same dedication." },
];

export function About() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div style={{ background: BG }} className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden py-32" style={{ background: `linear-gradient(135deg, ${BG} 0%, ${S2} 50%, #0f1d3a 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(30,144,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,0.05) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-float" style={{ background: "rgba(30,144,255,0.10)" }} />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ background: "rgba(0,255,198,0.06)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`opacity-0-init ${vis ? "animate-fade-in-up" : ""}`}>
            <Badge className="mb-5 text-sm px-4 py-2 border font-semibold" style={{ background: `rgba(30,144,255,0.12)`, borderColor: `rgba(30,144,255,0.25)`, color: A }}>
              Who We Are
            </Badge>
          </div>
          <h1 className={`text-5xl md:text-6xl font-black text-white mb-6 tracking-tight opacity-0-init ${vis ? "animate-fade-in-up delay-100" : ""}`}>
            We're Not a Company.<br />
            <span className="animate-shimmer">We're a Group of Developers.</span>
          </h1>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed opacity-0-init ${vis ? "animate-fade-in-up delay-200" : ""}`} style={{ color: "#B0B0B0" }}>
            OPENDRAP is a collective of 10+ developers based in Chennai, India — building, maintaining, and improving digital products for businesses that deserve better.
          </p>
        </div>
      </section>



      {/* Who we are */}
      <section className="py-24" style={{ background: BG }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: `rgba(30,144,255,0.10)`, borderColor: `rgba(30,144,255,0.2)`, color: A }}>Our Story</Badge>
              <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Just Developers Who Care</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#B0B0B0" }}>
                OPENDRAP started as a group of developers who were tired of seeing businesses get overcharged, underserved, and left with broken websites and half-finished products.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#B0B0B0" }}>
                So we came together — no CEO, no hierarchy, no corporate structure. Just a team of 10+ developers who collectively build, ship, and support everything we offer. Every decision is made together, every client is everyone's responsibility.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#B0B0B0" }}>
                We believe in showing results before asking for money. That's why we offer a 7-day free trial — fix your site, prove our value, then you decide. No pressure, no tricks.
              </p>
            </AnimatedSection>
            <AnimatedSection delay="delay-200">
              <div className="rounded-3xl p-8 space-y-5" style={{ background: S, border: "1px solid rgba(30,144,255,0.15)" }}>
                {[
                  { emoji: "🛠️", text: "We build websites, apps, AI agents, and automation tools." },
                  { emoji: "🔄", text: "We maintain and update your product long after launch." },
                  { emoji: "🔍", text: "We audit your existing site for free — no strings attached." },
                  { emoji: "💬", text: "We communicate openly. You always know what's happening." },
                  { emoji: "🤝", text: "We work as an extension of your team, not a vendor." },
                  { emoji: "📈", text: "We grow when you grow. Your success is our motivation." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-xl flex-shrink-0">{item.emoji}</span>
                    <p className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: S2 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 text-sm px-4 py-1.5 border font-semibold" style={{ background: `rgba(30,144,255,0.10)`, borderColor: `rgba(30,144,255,0.2)`, color: A }}>What Drives Us</Badge>
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">How We Work</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>The principles every developer in our group lives by.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={i} delay={`delay-${(i % 3) * 100}`}>
                  <div className="rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                    style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.3)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${P}, ${A})` }}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{v.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24" style={{ background: BG }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-black text-white mb-5 tracking-tight">Want to Meet the Team?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "#B0B0B0" }}>
              10+ developers, one shared goal — helping your business grow. See who's behind the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-bold text-base px-10 h-[52px] text-white border-0"
                style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 30px rgba(30,144,255,0.4)` }} asChild>
                <Link to="/team">Meet the Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Link to="/contact"
                className="inline-flex items-center justify-center px-8 h-[52px] rounded-lg text-base font-semibold text-white transition-all duration-200"
                style={{ border: `2px solid rgba(30,144,255,0.3)` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(30,144,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = `rgba(0,255,198,0.5)`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.3)"; }}
              >Work With Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
