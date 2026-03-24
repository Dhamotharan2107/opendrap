import { Link } from "react-router";
import { Badge } from "../components/ui/badge";
import { Github, Mail } from "lucide-react";
import { AnimatedSection } from "../../components/common/AnimatedSection";
import { useState, useEffect } from "react";

const P  = "#1E90FF";
const A  = "#00FFC6";
const BG = "#0B0F1A";
const S  = "#111827";
const S2 = "#0d1526";

const team = [
  { name: "Piccolo",  quote: "I don't just write code — I build things people actually use.",                       avatar: "Pic", gradient: `linear-gradient(135deg, ${P}, ${A})` },
  { name: "Akame",    quote: "Making machines understand humans is the most exciting problem I've ever worked on.", avatar: "Aka", gradient: "linear-gradient(135deg, #25D366, #128C7E)" },
  { name: "Aizen",    quote: "If it loads slow or looks off on mobile, I take it personally.",                    avatar: "Aiz", gradient: "linear-gradient(135deg, #a855f7, #7c3aed)" },
  { name: "Ryuk",     quote: "99.9% uptime isn't a goal, it's the baseline.",                                     avatar: "Ryu", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
  { name: "Renji",    quote: "Good design is invisible. Bad design is all you see.",                               avatar: "Ren", gradient: "linear-gradient(135deg, #ef4444, #dc2626)" },
  { name: "Deidara",  quote: "Clean code is a form of respect — for the client and for future developers.",        avatar: "Dei", gradient: "linear-gradient(135deg, #00FFC6, #00b38a)" },
];

export function Team() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div style={{ background: BG }} className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden py-32" style={{ background: `linear-gradient(135deg, ${BG} 0%, ${S2} 50%, #0f1d3a 100%)` }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(30,144,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,0.05) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-float" style={{ background: "rgba(30,144,255,0.10)" }} />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ background: "rgba(0,255,198,0.06)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`opacity-0-init ${vis ? "animate-fade-in-up" : ""}`}>
            <Badge className="mb-5 text-sm px-4 py-2 border font-semibold" style={{ background: `rgba(30,144,255,0.12)`, borderColor: `rgba(30,144,255,0.25)`, color: A }}>
              10+ Developers. One Team.
            </Badge>
          </div>
          <h1 className={`text-5xl md:text-6xl font-black text-white mb-6 tracking-tight opacity-0-init ${vis ? "animate-fade-in-up delay-100" : ""}`}>
            The People Who<br />
            <span className="animate-shimmer">Build Your Products</span>
          </h1>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed opacity-0-init ${vis ? "animate-fade-in-up delay-200" : ""}`} style={{ color: "#B0B0B0" }}>
            No CEO. No hierarchy. Just a group of developers who genuinely care about the work they ship and the clients they serve.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24" style={{ background: S2 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={`delay-${(i % 3) * 100}`}>
                <div className="rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: S, border: "1px solid rgba(30,144,255,0.12)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,198,0.3)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,144,255,0.12)"}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg mb-5 shadow-lg" style={{ background: member.gradient }}>
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{member.name}</h3>
                  <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#B0B0B0" }}>&ldquo;{member.quote}&rdquo;</p>
                  <div className="flex gap-2">
                    {[
                      { href: "#",                              Icon: Github, label: "GitHub" },
                      { href: "mailto:office.opendrap@gmail.com", Icon: Mail,   label: "Email"  },
                    ].map(({ href, Icon, label }) => (
                      <a key={label} href={href} aria-label={label}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                        style={{ background: "rgba(30,144,255,0.1)", border: "1px solid rgba(30,144,255,0.2)", color: "#B0B0B0" }}
                        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = A; el.style.borderColor = "rgba(0,255,198,0.4)"; }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = "#B0B0B0"; el.style.borderColor = "rgba(30,144,255,0.2)"; }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24" style={{ background: BG }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-black text-white mb-5 tracking-tight">Want to Build With Us?</h2>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: "#B0B0B0" }}>
              We're always open to developers who love their craft and want to work on meaningful projects. Reach out.
            </p>
            <Link to="/contact"
              className="inline-flex items-center justify-center px-10 h-[52px] rounded-xl text-base font-bold text-white transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${P}, ${A})`, boxShadow: `0 0 30px rgba(30,144,255,0.4)` }}
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
