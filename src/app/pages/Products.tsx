import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Badge } from "../components/ui/badge";
import {
  MessageSquare, Globe, Smartphone, Bot, Zap,
  ArrowRight, Workflow, Database, CheckCircle2, ChevronRight,
  Cloud, Mail, FileText, Image, HardDrive, FolderOpen
} from "lucide-react";

function useInView(threshold = 0.12) {
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

function AnimatedSection({ children, className = "", delay = "" }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} opacity-0-init ${inView ? `animate-fade-in-up ${delay}` : ""}`}>
      {children}
    </div>
  );
}

const BTN = "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200";

const products = [
  {
    id: "whatsapp-ai",
    icon: MessageSquare,
    title: "WhatsApp AI Agent",
    description: "Automate customer conversations on WhatsApp with intelligent AI that handles queries, processes orders, and provides support 24/7.",
    features: ["24/7 automated responses", "Multi-language support", "Smart conversation routing", "CRM integration"],
    gradient: "from-[#25D366] to-[#128C7E]",
    glow: "rgba(37,211,102,0.3)",
    badge: "Most Popular",
  },
  {
    id: "cloud-manager",
    icon: Cloud,
    title: "CloudManager",
    description: "Connect your Google account and manage everything in one place — Drive files, Gmail, Docs, Sheets, and Photos. Add, move, copy, delete and organise with ease.",
    features: ["Google Drive file management", "Gmail & Docs integration", "Google Sheets & Photos", "Add, move, copy & organise"],
    gradient: "from-[#1E90FF] to-[#00FFC6]",
    glow: "rgba(30,144,255,0.35)",
    badge: "Live",
    subIcons: [Mail, FileText, Image, HardDrive],
    externalUrl: "https://cloudmanager.opendrap.website",
  },
  {
    id: "website-dev",
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites built with cutting-edge tech. Fast, secure, SEO-optimized, and conversion-focused.",
    features: ["Responsive design", "SEO optimized", "Lightning fast loading", "CMS integration"],
    gradient: "from-[#1E90FF] to-[#0060cc]",
    glow: "rgba(30,144,255,0.3)",
    badge: "7-Day Trial",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS & Android apps and cross-platform solutions that deliver exceptional experiences and drive business growth.",
    features: ["iOS & Android support", "Cloud synchronization", "Push notifications", "Offline capabilities"],
    gradient: "from-[#FF6B35] to-[#e04e1a]",
    glow: "rgba(255,107,53,0.3)",
    badge: null,
  },
  {
    id: "chatbot",
    icon: Bot,
    title: "AI Chatbot Platform",
    description: "Multi-channel intelligent chatbots for web, apps, and social platforms. Engage visitors and automate support 24/7.",
    features: ["Multi-channel deployment", "Natural language processing", "Self-learning AI", "Analytics dashboard"],
    gradient: "from-[#00FFC6] to-[#00b38a]",
    glow: "rgba(0,255,198,0.25)",
    badge: null,
  },
  {
    id: "automation",
    icon: Zap,
    title: "Business Automation",
    description: "End-to-end workflow automation that connects your tools, eliminates repetitive tasks, and scales your operations.",
    features: ["No-code workflow builder", "1000+ integrations", "Scheduled automations", "Error handling & alerts"],
    gradient: "from-[#FF6B35] to-[#FFB347]",
    glow: "rgba(255,107,53,0.3)",
    badge: null,
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Management",
    description: "Optimize business processes with intelligent workflow management, task automation, and real-time team collaboration.",
    features: ["Process visualization", "Task automation", "Team collaboration", "Performance tracking"],
    gradient: "from-[#a855f7] to-[#7c3aed]",
    glow: "rgba(168,85,247,0.3)",
    badge: null,
  },
  {
    id: "crm",
    icon: Database,
    title: "CRM & Analytics",
    description: "Comprehensive customer relationship management with powerful analytics and insights for smarter business decisions.",
    features: ["Customer management", "Sales pipeline tracking", "Advanced analytics", "Custom reports"],
    gradient: "from-[#00FFC6] to-[#1E90FF]",
    glow: "rgba(0,255,198,0.25)",
    badge: null,
  },
];

export function Products() {
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeaderVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div className="overflow-x-hidden" style={{ background: "#0B0F1A" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-28" style={{ background: "linear-gradient(135deg,#0B0F1A 0%,#0d1526 50%,#0B0F1A 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(30,144,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(30,144,255,0.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-float" style={{ background: "rgba(30,144,255,0.12)" }} />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ background: "rgba(0,255,198,0.07)" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`opacity-0-init ${headerVisible ? "animate-fade-in-up" : ""}`}>
            <Badge className="mb-5 text-sm px-4 py-2 border" style={{ background: "rgba(30,144,255,0.12)", color: "#1E90FF", borderColor: "rgba(30,144,255,0.25)" }}>
              AI-Powered Solutions
            </Badge>
          </div>
          <h1 className={`text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight opacity-0-init ${headerVisible ? "animate-fade-in-up delay-100" : ""}`} style={{ color: "#FFFFFF" }}>
            Products &amp; Solutions
          </h1>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed opacity-0-init ${headerVisible ? "animate-fade-in-up delay-200" : ""}`} style={{ color: "#B0B0B0" }}>
            Comprehensive AI-powered tools designed to automate operations, engage customers, and drive measurable business growth.
          </p>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <AnimatedSection key={product.id} delay={`delay-${(index % 3) * 100}`}>
                  <div
                    className="group rounded-2xl p-7 h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.border = `1px solid rgba(30,144,255,0.3)`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${product.glow}`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: "linear-gradient(135deg,#1E90FF,#00FFC6)" }}>
                        {product.badge}
                      </span>
                    )}

                    {/* Icon */}
                    <div className={`w-[52px] h-[52px] bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* CloudManager sub-icons */}
                    {product.subIcons && (
                      <div className="flex gap-2 mb-4">
                        {product.subIcons.map((SubIcon, i) => (
                          <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(30,144,255,0.15)", border: "1px solid rgba(30,144,255,0.2)" }}>
                            <SubIcon className="h-3.5 w-3.5" style={{ color: "#1E90FF" }} />
                          </div>
                        ))}
                      </div>
                    )}

                    <h2 className="text-xl font-bold mb-3" style={{ color: "#FFFFFF" }}>{product.title}</h2>
                    <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#B0B0B0" }}>{product.description}</p>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm" style={{ color: "#B0B0B0" }}>
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: "#00FFC6" }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/products/${product.id}`}
                      className={`${BTN} self-start`}
                      style={{ background: "linear-gradient(135deg,#1E90FF,#00FFC6)", color: "#0B0F1A" }}
                    >
                      Learn More <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0B0F1A,#0d1526)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(30,144,255,0.08)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-tight" style={{ color: "#FFFFFF" }}>Need Something Custom?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#B0B0B0" }}>
              Our team builds tailored AI solutions and automation workflows specific to your industry and business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:opacity-90 hover:scale-105" style={{ background: "linear-gradient(135deg,#1E90FF,#00FFC6)", color: "#0B0F1A", boxShadow: "0 0 30px rgba(30,144,255,0.35)" }}>
                Contact Our Team <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-white/10" style={{ color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.2)" }}>
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
