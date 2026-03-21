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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const el = document.documentElement;
      const progress = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = useCallback((path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  const toggleMobileMenu = useCallback(() => setMobileMenuOpen(prev => !prev), []);
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
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-[#002E6E]/8 border-b border-[#002E6E]/10"
            : "bg-white/90 backdrop-blur-md border-b border-gray-100"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px]">

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group" aria-label={`${COMPANY_INFO.name} Home`}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-[0_0_20px_rgba(0,185,241,0.55)] transition-all duration-400 group-hover:scale-105">
                  <span className="text-white font-black text-lg" aria-hidden="true">O</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#00B9F1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping-slow" />
              </div>
              <div>
                <span className="text-xl font-black text-gray-900 group-hover:text-[#002E6E] transition-colors duration-300 tracking-tight">
                  {COMPANY_INFO.name}
                </span>
                <div className="text-[10px] text-[#00B9F1] font-semibold tracking-widest uppercase leading-none -mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  10+ Developers
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    isActive(link.path)
                      ? "text-[#002E6E] bg-[#002E6E]/8"
                      : "text-gray-600 hover:text-[#002E6E] hover:bg-[#002E6E]/5"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.name}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#002E6E] to-[#00B9F1] rounded-full transition-all duration-300 ${
                    isActive(link.path) ? "w-5" : "w-0 group-hover:w-5"
                  }`} />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/contact"
                className="text-sm font-semibold text-gray-600 hover:text-[#002E6E] transition-colors duration-200 px-3 py-2"
              >
                Free Trial
              </Link>
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-[#002E6E] to-[#004fa3] hover:from-[#001f4d] hover:to-[#002E6E] text-white shadow-md hover:shadow-[0_6px_20px_rgba(0,46,110,0.4)] transition-all duration-300 shimmer-hover font-semibold px-5"
                asChild
              >
                <Link to="/contact">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className={`transition-all duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
                {mobileMenuOpen
                  ? <X className="h-6 w-6 text-gray-900" aria-hidden="true" />
                  : <Menu className="h-6 w-6 text-gray-900" aria-hidden="true" />
                }
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          id="mobile-menu"
        >
          <div className="bg-white/98 backdrop-blur-xl border-t border-gray-100 shadow-xl px-4 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-[#002E6E] bg-[#002E6E]/8 border border-[#002E6E]/15"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#002E6E]"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
                onClick={closeMobileMenu}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 pb-1 space-y-2">
              <Button className="w-full bg-gradient-to-r from-[#002E6E] to-[#004fa3] text-white font-semibold" asChild>
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get Started Free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
