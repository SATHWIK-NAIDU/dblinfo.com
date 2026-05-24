import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user already dismissed or subscribed
    const isSubscribed = localStorage.getItem('dbl_newsletter_subscribed') === 'true';
    const isDismissed = localStorage.getItem('dbl_newsletter_dismissed') === 'true';

    // Query parameter override for reviewers/developers: ?popup=true
    const urlParams = new URLSearchParams(window.location.search);
    const forcePopup = urlParams.get('popup') === 'true';

    if (isSubscribed || (isDismissed && !forcePopup)) {
      return; // Do not show
    }

    // Set delay timer: 3 seconds if forcePopup is active, otherwise 3 minutes (180,000 ms)
    const delayTime = forcePopup ? 3000 : 180000;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delayTime);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('dbl_newsletter_dismissed', 'true');
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    setStatus('submitting');
    setErrorMessage(null);
    console.log('[Newsletter Popup] Submitting email:', cleanEmail);

    try {
      if (!supabase) {
        throw new Error('Supabase client is not initialized. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
      }

      const { data, error } = await supabase
        .from('newsletters')
        .insert([{ email: cleanEmail }])
        .select();

      if (error) {
        throw error;
      }

      if (!data || data.length === 0) {
        throw new Error('Verification failed: database insertion returned no records.');
      }

      console.log('[Newsletter Popup] Subscription successful & validated:', data[0]);
      setStatus('success');
      localStorage.setItem('dbl_newsletter_subscribed', 'true');
      
      // Auto close after 2.5 seconds upon success
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    } catch (err: any) {
      console.error('[Newsletter Popup] Subscription error:', err);
      setStatus('error');
      if (err?.code === '23505') {
        setErrorMessage('This email is already subscribed.');
      } else {
        setErrorMessage(err?.message || 'Failed to subscribe. Please try again.');
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#1E100A]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-cream border border-orange/15 rounded-3xl max-w-lg w-full relative p-8 md:p-10 shadow-[0_32px_64px_rgba(59,35,20,0.22)] overflow-hidden z-10"
          >
            {/* Glossy background element */}
            <div className="absolute -right-16 -top-16 w-44 h-44 bg-orange/10 rounded-full filter blur-xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-44 h-44 bg-orange/5 rounded-full filter blur-xl pointer-events-none" />

            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 text-brown/60 hover:text-orange hover:rotate-90 transition-all p-2 rounded-full cursor-pointer bg-brown/5 z-20 flex items-center justify-center"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6 flex flex-col items-center justify-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  className="w-16 h-16 bg-orange/10 text-orange rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 size={32} />
                </motion.div>
                <h3 className="font-serif font-bold text-3xl text-brown mb-2">Welcome to DBL ✦</h3>
                <p className="text-brown/80 text-sm md:text-base max-w-xs leading-relaxed font-sans">
                  Your growth subscription is confirmed. Prepare for weekly performance strategy breakdowns.
                </p>
              </motion.div>
            ) : (
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange bg-orange/10 px-3 py-1.5 rounded-full mb-4 inline-block">
                  DBL Inner Circle
                </span>
                
                <h3 className="font-serif font-bold text-3xl md:text-4xl text-brown mb-3 tracking-tight">
                  Unlock Strategic <em className="text-orange italic font-serif font-medium">Growth</em>
                </h3>
                
                <p className="text-brown/85 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  Join digital performance strategists. Receive weekly budget blueprints, conversion optimization frameworks, and custom ad workflows we build for high-growth brands.
                </p>

                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      required
                      type="email"
                      disabled={status === 'submitting'}
                      placeholder="Enter your professional email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-[#FAF6F1] border-1.5 border-brown/15 rounded-xl px-4 py-3 text-sm text-brown focus:outline-none focus:border-orange transition-all font-sans font-medium disabled:opacity-50"
                    />
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-6 py-3 rounded-xl bg-orange hover:bg-orange-dk text-[#FFFFFF] font-bold text-sm tracking-wide transition-all shadow-md shadow-orange/15 hover:shadow-orange/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {status === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Subscribe <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="text-red-500 text-xs font-bold font-sans mt-1">
                      {errorMessage}
                    </p>
                  )}
                  <p className="text-[10px] text-brown/60 leading-relaxed font-sans">
                    * Zero spam. High-signal strategic breakdowns only. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
