import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold tracking-tighter mb-6 block">
              DBL
            </Link>
            <p className="text-zinc-400 mb-8 max-w-sm text-lg leading-relaxed">
              Scaling Brands Into Market Leaders. Performance-driven digital marketing and growth systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-zinc-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-zinc-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/admin" className="text-zinc-400 hover:text-white transition-colors">Admin Panel</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-zinc-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="text-zinc-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Digital Business Leads. All rights reserved.
          </p>
          <a href="mailto:hello@dblinfo.com" className="text-zinc-400 text-sm hover:text-white transition-colors flex items-center gap-2">
            hello@dblinfo.com <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
