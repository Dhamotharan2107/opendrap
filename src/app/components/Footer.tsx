import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { COMPANY_INFO } from "../../constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg" aria-hidden="true">O</span>
              </div>
              <span className="text-xl font-bold text-white">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-sm mb-4 max-w-sm">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/opendrap" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/opendrap" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://facebook.com/opendrap" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Products */}
          <nav aria-label="Products">
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/whatsapp-ai" className="hover:text-white transition-colors">
                  WhatsApp AI Agent
                </Link>
              </li>
              <li>
                <Link to="/products/voice-ai" className="hover:text-white transition-colors">
                  AI Voice Calling
                </Link>
              </li>
              <li>
                <Link to="/products/chatbot" className="hover:text-white transition-colors">
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link to="/products/automation" className="hover:text-white transition-colors">
                  Business Automation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:+91${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <nav className="flex space-x-6 mt-4 md:mt-0" aria-label="Legal">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};