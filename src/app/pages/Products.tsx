import { Link } from "react-router";
<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  MessageSquare, Phone, Globe, Smartphone, Bot, Zap,
  ArrowRight, Workflow, Database, CheckCircle2, ChevronRight
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

const products = [
  {
    id: "whatsapp-ai",
    icon: MessageSquare,
    title: "WhatsApp AI Agent",
    description: "Automate customer conversations on WhatsApp with intelligent AI that handles queries, processes orders, and provides support 24/7.",
    features: ["24/7 automated responses", "Multi-language support", "Smart conversation routing", "CRM integration"],
    color: "from-[#25D366] to-[#128C7E]",
    badge: "Most Popular",
    badgeColor: "bg-[#25D366]",
  },
  {
    id: "voice-ai",
    icon: Phone,
    title: "AI Voice Calling",
    description: "Natural-sounding voice AI that makes and receives calls, schedules appointments, qualifies leads, and handles customer inquiries.",
    features: ["Natural voice synthesis", "Advanced speech recognition", "Call recording & analytics", "IVR integration"],
    color: "from-purple-500 to-purple-700",
    badge: null,
    badgeColor: "",
  },
  {
    id: "website-dev",
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites built with cutting-edge tech. Fast, secure, SEO-optimized, and conversion-focused.",
    features: ["Responsive design", "SEO optimized", "Lightning fast loading", "CMS integration"],
    color: "from-blue-500 to-blue-700",
    badge: "7-Day Trial",
    badgeColor: "bg-blue-500",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS & Android apps and cross-platform solutions that deliver exceptional experiences and drive business growth.",
    features: ["iOS & Android support", "Cloud synchronization", "Push notifications", "Offline capabilities"],
    color: "from-orange-500 to-orange-600",
    badge: null,
    badgeColor: "",
  },
  {
    id: "chatbot",
    icon: Bot,
    title: "AI Chatbot Platform",
    description: "Multi-channel intelligent chatbots for web, apps, and social platforms. Engage visitors and automate support 24/7.",
    features: ["Multi-channel deployment", "Natural language processing", "Self-learning AI", "Analytics dashboard"],
    color: "from-[#002E6E] to-[#004fa3]",
    badge: null,
    badgeColor: "",
  },
  {
    id: "automation",
    icon: Zap,
    title: "Business Automation",
    description: "End-to-end workflow automation that connects your tools, eliminates repetitive tasks, and scales your operations.",
    features: ["No-code workflow builder", "1000+ integrations", "Scheduled automations", "Error handling & alerts"],
    color: "from-yellow-500 to-amber-600",
    badge: null,
    badgeColor: "",
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Management",
    description: "Optimize business processes with intelligent workflow management, task automation, and real-time team collaboration.",
    features: ["Process visualization", "Task automation", "Team collaboration", "Performance tracking"],
    color: "from-pink-500 to-pink-700",
    badge: null,
    badgeColor: "",
  },
  {
    id: "crm",
    icon: Database,
    title: "CRM & Analytics",
    description: "Comprehensive customer relationship management with powerful analytics and insights for smarter business decisions.",
    features: ["Customer management", "Sales pipeline tracking", "Advanced analytics", "Custom reports"],
    color: "from-teal-500 to-teal-700",
    badge: null,
    badgeColor: "",
  },
];

export function Products() {
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-28"
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
        <div className="absolute top-10 right-10 w-80 h-80 bg-[#00B9F1]/10 rounded-full blur-3xl pointer-events-none animate-float" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none animate-float-slow" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`opacity-0-init ${headerVisible ? "animate-fade-in-up" : ""}`}>
            <Badge className="mb-5 bg-[#00B9F1]/15 text-[#00B9F1] border border-[#00B9F1]/25 text-sm px-4 py-2">
              AI-Powered Solutions
            </Badge>
          </div>
          <h1
            className={`text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight opacity-0-init ${headerVisible ? "animate-fade-in-up delay-100" : ""}`}
          >
            Products &amp; Solutions
          </h1>
          <p
            className={`text-xl text-white/55 max-w-2xl mx-auto leading-relaxed opacity-0-init ${headerVisible ? "animate-fade-in-up delay-200" : ""}`}
          >
            Comprehensive AI-powered tools designed to automate operations, engage customers,
            and drive measurable business growth — all from one trusted partner.
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
                  <div className="group border border-gray-100 rounded-2xl p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white h-full flex flex-col spotlight-card relative">
                    {product.badge && (
                      <span
                        className={`absolute top-4 right-4 ${product.badgeColor} text-white text-[11px] font-bold px-2.5 py-1 rounded-full`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <div
                      className={`w-[52px] h-[52px] bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-[#25D366] flex-shrink-0" />
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { 
  MessageSquare, 
  Phone, 
  Globe, 
  Smartphone, 
  Bot, 
  Zap,
  ArrowRight,
  Workflow,
  Database
} from "lucide-react";

export function Products() {
  const products = [
    {
      id: "whatsapp-ai",
      icon: MessageSquare,
      title: "Meta AI Agent",
      description: "Automate customer conversations on WhatsApp with intelligent AI that handles queries, processes orders, and provides support 24/7.",
      features: [
        "24/7 automated responses",
        "Multi-language support",
        "Smart conversation routing",
        "CRM integration",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: "voice-ai",
      icon: Phone,
      title: "AI Voice Calling Agent",
      description: "Natural-sounding voice AI that makes and receives calls, schedules appointments, qualifies leads, and handles customer inquiries.",
      features: [
        "Natural voice synthesis",
        "Advanced speech recognition",
        "Call recording & analytics",
        "IVR integration",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "website-dev",
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with cutting-edge technology. Fast, secure, and optimized for conversions.",
      features: [
        "Responsive design",
        "SEO optimized",
        "Fast loading speeds",
        "CMS integration",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "mobile-app",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: [
        "iOS & Android support",
        "Cloud synchronization",
        "Push notifications",
        "Offline capabilities",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "chatbot",
      icon: Bot,
      title: "AI Chatbot Platform",
      description: "Deploy intelligent chatbots across your website, apps, and social media to engage customers and automate support.",
      features: [
        "Multi-channel deployment",
        "Natural language processing",
        "Learning & improvement",
        "Analytics dashboard",
      ],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "automation",
      icon: Zap,
      title: "Business Automation Tools",
      description: "Streamline operations with custom automation workflows that connect your tools and eliminate repetitive tasks.",
      features: [
        "No-code workflow builder",
        "1000+ integrations",
        "Scheduled automations",
        "Error handling",
      ],
      color: "from-amber-500 to-amber-600",
    },
    {
      id: "workflow",
      icon: Workflow,
      title: "Workflow Management",
      description: "Optimize your business processes with intelligent workflow management and task automation.",
      features: [
        "Process visualization",
        "Task automation",
        "Team collaboration",
        "Performance tracking",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "crm",
      icon: Database,
      title: "CRM & Analytics",
      description: "Comprehensive customer relationship management with powerful analytics and insights for data-driven decisions.",
      features: [
        "Customer management",
        "Sales pipeline tracking",
        "Advanced analytics",
        "Custom reports",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Products & Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered solutions designed to transform your business operations and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.id}
                  className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-[#00B9F1] rounded-full mr-2" />
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
                          {feature}
                        </li>
                      ))}
                    </ul>
<<<<<<< HEAD
                    <Link
                      to={`/products/${product.id}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#002E6E]/20 text-[#002E6E] text-sm font-semibold hover:bg-[#002E6E] hover:text-white hover:border-[#002E6E] transition-all duration-200 group/btn"
                    >
                      Learn More
                      <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </AnimatedSection>
=======
                    <Button
                      variant="outline"
                      className="w-full border-[#002E6E] !text-[#002E6E] hover:bg-[#002E6E] hover:!text-white"
                      asChild
                    >
                      <Link to={`/products/${product.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
            <Badge className="mb-5 bg-[#25D366]/15 text-[#4ade80] border border-[#25D366]/25 text-sm px-4 py-2">
              Custom Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
              Need Something Custom?
            </h2>
            <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our team builds tailored AI solutions and automation workflows specific to your industry
              and business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base px-10 h-[52px] shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all duration-300 magnetic-btn"
                asChild
              >
                <Link to="/contact">
                  Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 h-[52px] rounded-lg text-base font-semibold text-white border-2 border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </AnimatedSection>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team can build tailored solutions to meet your specific business requirements. Let's discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#002E6E] hover:bg-[#001f4d]" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
