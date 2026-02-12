import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Linkedin, MapPin, Mail } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-stone-800 bg-stone-50">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-sage-800 text-white flex items-center justify-center font-serif text-xl font-bold rounded-sm group-hover:bg-sage-700 transition-colors">
              S2
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight ${scrolled ? 'text-stone-900' : 'text-stone-900 md:text-stone-800'}`}>
                S2 Parikalpana
              </span>
              <span className="text-[10px] tracking-widest uppercase text-sage-600 font-semibold">Interior Studio</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors hover:text-sage-600 ${
                    isActive ? 'text-sage-800 font-semibold' : 'text-stone-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sage-800 text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-sage-700 transition-colors shadow-sm"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-stone-800 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[60px] bg-stone-50 z-40 md:hidden flex flex-col p-6 space-y-6 shadow-xl overflow-y-auto"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-2xl font-serif font-medium ${
                    isActive ? 'text-sage-800' : 'text-stone-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <hr className="border-stone-200" />
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="bg-sage-800 text-white text-center py-4 rounded-sm text-lg font-medium"
            >
              Get Free Estimate
            </a>
            <div className="flex flex-col gap-4 mt-4 text-stone-600">
              <div className="flex items-center gap-3">
                <Phone size={18} /> <span>{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} /> <span className="text-sm">{BUSINESS_INFO.address}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white font-bold">S2 Parikalpana</h3>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              Designing sustainable, beautiful, and functional spaces in Mumbai, Thane, and Dombivli since 2018.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href={BUSINESS_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={BUSINESS_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-serif text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-sage-300 transition-colors">About Samiksha</NavLink></li>
              <li><NavLink to="/services" className="hover:text-sage-300 transition-colors">Services</NavLink></li>
              <li><NavLink to="/portfolio" className="hover:text-sage-300 transition-colors">Our Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-sage-300 transition-colors">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-serif text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-sage-500 shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-sage-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-sage-500 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">{BUSINESS_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
          <p>© {new Date().getFullYear()} S2 Parikalpana Interior Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;