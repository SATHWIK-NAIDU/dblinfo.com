import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-cream/75 backdrop-blur-2xl backdrop-saturate-[180%] border-b border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_12px_40px_rgba(59,35,20,0.08)] py-4' 
          : 'bg-cream/35 backdrop-blur-xl backdrop-saturate-[140%] border-b border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_6px_20px_rgba(59,35,20,0.03)] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-bold tracking-tighter text-brown">
          DB<span className="text-orange">L</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-orange ${
                location.pathname === link.path ? 'text-orange font-bold' : 'text-brown/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2.5 rounded-full bg-orange text-[#FFFFFF] font-semibold text-sm hover:bg-orange-dk shadow-md shadow-orange/15 hover:shadow-orange/20 hover:-translate-y-[1px] transition-all ml-4"
          >
            Get Started
          </Link>
        </nav>
 
        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brown hover:text-orange"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
 
      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cream border-b border-orange/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-serif font-semibold transition-colors hover:text-orange ${
                  location.pathname === link.path ? 'text-orange text-xl' : 'text-brown/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-orange text-[#FFFFFF] font-bold text-base hover:bg-orange-dk transition-all"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
