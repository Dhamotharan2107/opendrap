import { Link } from "react-router";
import { Mail, Phone, MapPin, ArrowRight, Zap } from "lucide-react";
import { COMPANY_INFO } from "../../constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    { name: "WhatsApp AI Agent", path: "/products/whatsapp-ai" },
    { name: "AI Chatbot",        path: "/products/chatbot"      },
    { name: "Business Automation", path: "/products/automation" },
  ];

  const company = [
    { name: "About Us",       path: "/about"        },
    { name: "Team",           path: "/team"         },
    { name: "Products",       path: "/products"     },
    { name: "Pricing",        path: "/pricing"      },
    { name: "Contact",        path: "/contact"      },
    { name: "Submit a Review", path: "/submit-review" },
  ];

  return (
    <footer role="contentinfo" className="relative overflow-hidden" style={{ background: "#080C17" }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(30,144,255,0.07) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(30,144,255,0.05)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(0,255,198,0.04)" }} />

      {/* CTA strip */}
      <div className="relative border-b" style={{ borderColor: "rgba(30,144,255,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-[#00FFC6]" />
                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1E90FF" }}>Limited Offer</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Get Your{" "}
                <span style={{ background: "linear-gradient(90deg, #1E90FF, #00FFC6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  7-Day Free Trial
                </span>{" "}
                Today
              </h3>
              <p className="text-sm mt-1" style={{ color: "#B0B0B0" }}>No credit card · No commitment · Real developers, real fixes</p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 magnetic-btn"
              style={{ background: "linear-gradient(135deg, #1E90FF, #00FFC6)", boxShadow: "0 0 24px rgba(30,144,255,0.4)" }}
            >
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/logo.png"
                alt={`${COMPANY_INFO.name} logo`}
                className="w-14 h-14 object-contain transition-all duration-300"
              />
              <span className="text-white font-extrabold text-xl tracking-tight">{COMPANY_INFO.name}</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#B0B0B0" }}>
              {COMPANY_INFO.description}
            </p>

          </div>

          {/* Products */}
          <nav aria-label="Products" className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Products</h4>
            <ul className="space-y-3">
              {products.map(({ name, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm flex items-center gap-1.5 group transition-colors duration-200"
                    style={{ color: "#B0B0B0" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00FFC6"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#B0B0B0"}
                  >
                    <span className="w-0 group-hover:w-3 h-px transition-all duration-200 overflow-hidden" style={{ background: "#1E90FF" }} />
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
                    className="text-sm flex items-center gap-1.5 group transition-colors duration-200"
                    style={{ color: "#B0B0B0" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00FFC6"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#B0B0B0"}
                  >
                    <span className="w-0 group-hover:w-3 h-px transition-all duration-200 overflow-hidden" style={{ background: "#1E90FF" }} />
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
                { icon: Mail,   href: `mailto:${COMPANY_INFO.email}`, text: COMPANY_INFO.email          },
                { icon: Phone,  href: `tel:+91${COMPANY_INFO.phone}`, text: COMPANY_INFO.phoneFormatted },
                { icon: MapPin, href: null,                            text: COMPANY_INFO.location       },
              ].map(({ icon: Icon, href, text }) => (
                <div key={text} className="flex items-start gap-3 group">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300"
                    style={{ background: "rgba(30,144,255,0.12)", border: "1px solid rgba(30,144,255,0.2)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 0 10px rgba(0,255,198,0.3)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                  >
                    <Icon className="h-3.5 w-3.5 text-[#1E90FF]" aria-hidden="true" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm leading-relaxed transition-colors duration-200" style={{ color: "#B0B0B0" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#ffffff"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#B0B0B0"}
                    >{text}</a>
                  ) : (
                    <span className="text-sm leading-relaxed" style={{ color: "#B0B0B0" }}>{text}</span>
                  )}
                </div>
              ))}
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: "#B0B0B0" }}>
            © {currentYear}{" "}
            <span className="text-white font-medium">{COMPANY_INFO.name}</span>. All rights reserved. Built with ❤️ in Chennai.
          </p>
          <nav className="flex items-center gap-6" aria-label="Legal">
            {[
              { label: "Privacy Policy",   path: "/privacy-policy"   },
              { label: "Terms of Service", path: "/terms-of-service" },
              { label: "Cookie Policy",    path: "/cookie-policy"    },
            ].map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="text-xs transition-colors duration-200"
                style={{ color: "#B0B0B0" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#ffffff"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#B0B0B0"}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
