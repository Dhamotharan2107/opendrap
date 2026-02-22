import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useCallback, useMemo } from "react";
import { Button } from "./ui/button";
import { NAV_LINKS, COMPANY_INFO } from "../../constants";
import type { NavLink } from "../../types";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = useMemo(() => NAV_LINKS, []);

  const isActive = useCallback((path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label={`${COMPANY_INFO.name} Home`}>
            <div className="w-9 h-9 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg" aria-hidden="true">O</span>
            </div>
            <span className="text-xl font-bold text-gray-900">{COMPANY_INFO.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? "text-[#002E6E] font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-[#002E6E] hover:bg-[#001f4d]" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" id="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 ${
                  isActive(link.path)
                    ? "text-[#002E6E] font-medium"
                    : "text-gray-600"
                }`}
                onClick={closeMobileMenu}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8]" asChild>
                <Link to="/contact" onClick={closeMobileMenu}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
