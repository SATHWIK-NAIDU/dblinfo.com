import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase } from '../../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    console.log('[Newsletter Footer] Submitting email:', cleanEmail);

    try {
      const { error } = await supabase
        .from('newsletters')
        .insert([{ email: cleanEmail }]);

      if (error) {
        throw error;
      }

      console.log('[Newsletter Footer] Subscription successful in Supabase.');
      setSubscribed(true);
      setEmail('');
    } catch (err: any) {
      console.error('[Newsletter Footer] Subscription error:', err);
      // Give cleaner messages (e.g. for duplicates)
      if (err?.code === '23505') {
        setErrorMessage('This email is already subscribed.');
      } else {
        setErrorMessage(err?.message || 'Failed to subscribe. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1E100A] pt-24 pb-12 border-t border-orange/10 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-orange/5 rounded-full filter blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 mb-20">
          {/* Column 1: Logo & Socials */}
          <div className="col-span-1 md:col-span-5">
            <Link to="/" className="text-4xl font-serif font-bold tracking-tighter mb-6 block text-white">
              DB<span className="text-orange">L</span>
            </Link>
            <p className="text-white/50 mb-8 max-w-sm text-base leading-relaxed">
              Digital Business Leads — Premium performance marketing agency delivering measurable growth for ambitious brands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-orange hover:bg-orange/15 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-orange hover:bg-orange/15 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-orange hover:bg-orange/15 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-orange font-semibold text-xs tracking-wider uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/45 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/45 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-white/45 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-orange font-semibold text-xs tracking-wider uppercase mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-white/45 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-white/45 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="text-white/45 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-orange font-semibold text-xs tracking-wider uppercase mb-6">Newsletter</h4>
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-orange/10 border border-orange/20 rounded-2xl p-5"
              >
                <h5 className="text-white font-serif font-bold text-lg mb-1">Thank you! ✦</h5>
                <p className="text-white/70 text-xs leading-relaxed">
                  You have successfully subscribed to DBL creative & performance insights.
                </p>
              </motion.div>
            ) : (
              <div>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Subscribe to unlock weekly performance growth and creative strategies.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <input
                    required
                    type="email"
                    disabled={isSubmitting}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange transition-all font-sans disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-orange hover:bg-orange-dk text-[#FFFFFF] font-bold text-sm transition-all hover:shadow-lg hover:shadow-orange/15 cursor-pointer text-center disabled:opacity-75 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                  {errorMessage && (
                    <p className="text-red-400 text-xs font-bold font-sans mt-1">
                      {errorMessage}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} DBL — Digital Business Leads. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-sans">
            Developed by{' '}
            <a
              href="https://zettasyn.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-orange/80 hover:underline transition-all duration-300 font-semibold"
            >
              WebTurtle
            </a>
          </p>
          <a href="mailto:admin@dblinfo.com" className="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-2">
            admin@dblinfo.com <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
