import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Zap } from "lucide-react";
import { COMPANY_INFO } from "../../constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: "WhatsApp AI Agent", path: "/products/whatsapp-ai" },
    { name: "AI Voice Calling", path: "/products/voice-ai" },
    { name: "AI Chatbot", path: "/products/chatbot" },
    { name: "Business Automation", path: "/products/automation" },
  ];

  const company = [
    { name: "About Us", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
<<<<<<< HEAD
    { name: "Submit a Review", path: "/submit-review" },
=======
>>>>>>> 291290953f81be83e74c9634b02b22f925ce4926
  ];

  return (
    <footer role="contentinfo" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000d1a 0%, #001a3d 40%, #002E6E 100%)" }}>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,185,241,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Glowing blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B9F1]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#002E6E]/40 rounded-full blur-3xl pointer-events-none" />

      {/* ── CTA STRIP ── */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-[#00B9F1]" />
                <span className="text-[#00B9F1] text-sm font-semibold uppercase tracking-widest">Limited Offer</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Get Your <span style={{ background: "linear-gradient(90deg,#fff,#00B9F1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>7-Day Free Trial</span> Today
              </h3>
              <p className="text-white/50 text-sm mt-1">No credit card · No commitment · Real developers, real fixes</p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #00B9F1, #0090c4)", boxShadow: "0 0 24px rgba(0,185,241,0.4)" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(0,185,241,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 24px rgba(0,185,241,0.4)")}
            >
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,185,241,0.6)]"
                style={{ background: "linear-gradient(135deg,#002E6E,#00B9F1)" }}
              >
                <span className="text-white font-extrabold text-xl">O</span>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">{COMPANY_INFO.name}</span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              {COMPANY_INFO.description}
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { href: "https://linkedin.com/company/opendrap", icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com/opendrap", icon: Twitter, label: "Twitter" },
                { href: "https://facebook.com/opendrap", icon: Facebook, label: "Facebook" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 transition-all duration-300 hover:text-white"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,185,241,0.2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,185,241,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(0,185,241,0.3)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <nav aria-label="Products" className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-3">
              {products.map(({ name, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/45 text-sm hover:text-[#00B9F1] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#00B9F1] transition-all duration-200 overflow-hidden" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map(({ name, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-white/45 text-sm hover:text-[#00B9F1] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#00B9F1] transition-all duration-200 overflow-hidden" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Get In Touch</h4>
            <address className="not-italic space-y-4">
              {[
                { icon: Mail, href: `mailto:${COMPANY_INFO.email}`, text: COMPANY_INFO.email },
                { icon: Phone, href: `tel:+91${COMPANY_INFO.phone}`, text: COMPANY_INFO.phoneFormatted },
                { icon: MapPin, href: null, text: COMPANY_INFO.location },
              ].map(({ icon: Icon, href, text }) => (
                <div key={text} className="flex items-start gap-3 group">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,185,241,0.4)]"
                    style={{ background: "rgba(0,185,241,0.12)", border: "1px solid rgba(0,185,241,0.2)" }}
                  >
                    <Icon className="h-3.5 w-3.5 text-[#00B9F1]" aria-hidden="true" />
                  </div>
                  {href ? (
                    <a href={href} className="text-white/45 text-sm hover:text-white transition-colors duration-200 leading-relaxed">{text}</a>
                  ) : (
                    <span className="text-white/45 text-sm leading-relaxed">{text}</span>
                  )}
                </div>
              ))}
            </address>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} <span className="text-white/50 font-medium">{COMPANY_INFO.name}</span>. All rights reserved. Built with ❤️ in Chennai.
          </p>
          <nav className="flex items-center gap-6" aria-label="Legal">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-white/30 text-xs hover:text-white/70 transition-colors duration-200">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

    </footer>
  );
};
