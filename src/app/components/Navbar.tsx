import { Link, useLocation } from "react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useCallback, useMemo, useEffect } from "react";
import { Button } from "./ui/button";
import { NAV_LINKS, COMPANY_INFO } from "../../constants";
import type { NavLink } from "../../types";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks: NavLink[] = useMemo(() => NAV_LINKS, []);
  const isActive = useCallback(
    (path: string) => path === "/" ? location.pathname === "/" : location.pathname.startsWith(path),
    [location.pathname]
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const el = document.documentElement;
      setScrollProgress(Math.min((window.scrollY / (el.scrollHeight - el.clientHeight)) * 100, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((p) => !p), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(11,15,26,0.96)"
            : "rgba(11,15,26,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(30,144,255,0.12)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px]">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              aria-label={`${COMPANY_INFO.name} Home`}
            >
              <div className="relative">
                                <img
                  src="/logo.png"
                  alt={`${COMPANY_INFO.name} logo`}
                  className="w-14 h-14 object-contain"
                />
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#00FFC6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping-slow" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white group-hover:text-[#00FFC6] transition-colors duration-300">
                  {COMPANY_INFO.name}
                </span>
                <div className="text-[10px] font-semibold tracking-widest uppercase leading-none -mt-0.5 opacity-100 group-hover:text-[#1E90FF] transition-colors duration-300">
                  AI Platform
                </div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group"
                  style={{
                    color: isActive(link.path) ? "#00FFC6" : "#B0B0B0",
                    background: isActive(link.path) ? "rgba(30,144,255,0.12)" : "transparent",
                  }}
                  onMouseEnter={e => {
                    if (!isActive(link.path)) {
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                      (e.currentTarget as HTMLElement).style.background = "rgba(30,144,255,0.08)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive(link.path)) {
                      (e.currentTarget as HTMLElement).style.color = "#B0B0B0";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }
                  }}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.name}
                  <span
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
                    style={{
                      width: isActive(link.path) ? "20px" : "0px",
                      background: "linear-gradient(90deg, #1E90FF, #00FFC6)",
                    }}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                className="relative overflow-hidden font-semibold px-5 shimmer-hover magnetic-btn text-white border-0"
                style={{
                  background: "linear-gradient(135deg, #1E90FF, #00FFC6)",
                  boxShadow: "0 0 20px rgba(30,144,255,0.35)",
                }}
                asChild
              >
                <Link to="/contact">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2.5 rounded-xl transition-colors duration-200 text-white hover:bg-white/10"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className={`transition-all duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
                {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
          id="mobile-menu"
        >
          <div
            className="border-t px-4 py-4 space-y-1"
            style={{ background: "rgba(11,15,26,0.98)", borderColor: "rgba(30,144,255,0.15)" }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  color: isActive(link.path) ? "#00FFC6" : "#B0B0B0",
                  background: isActive(link.path) ? "rgba(30,144,255,0.12)" : "transparent",
                  border: isActive(link.path) ? "1px solid rgba(30,144,255,0.2)" : "1px solid transparent",
                  animationDelay: `${i * 50}ms`,
                }}
                onClick={closeMobileMenu}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Button
                className="w-full font-semibold text-white border-0"
                style={{ background: "linear-gradient(135deg, #1E90FF, #00FFC6)" }}
                asChild
              >
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
