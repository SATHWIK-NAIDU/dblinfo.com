import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, ChevronDown, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import Reveal from '../components/common/Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    budget: '',
    services: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', phone: '', email: '', budget: '', services: '', message: '' });
      } else {
        setStatus('error');
        console.error(data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const infoCards = [
    { 
      icon: Phone, 
      label: "WhatsApp / Phone", 
      value: "+91 98765 43210", 
      sub: "Mon–Sat, 9 AM – 7 PM IST" 
    },
    { 
      icon: Mail, 
      label: "Email Support", 
      value: "hello@dblinfo.com", 
      sub: "Average response within 2 hours" 
    },
    { 
      icon: MapPin, 
      label: "Main HQ", 
      value: "Hyderabad, India", 
      sub: "Serving Ambitious Brands Worldwide" 
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ── HEADER HERO ── */}
      <section className="relative pt-36 pb-20 md:pb-24 bg-brown overflow-hidden">
        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-orange/12 blur-[80px] pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-lt mb-4">Get In Touch</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif tracking-tight text-white leading-tight mb-6">
                Let's Build Something <em className="text-orange italic font-serif font-medium">Remarkable</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-sans font-medium">
                Ready to scale your leads and revenue? Tell us about your business, and our marketing strategists will build you a custom growth plan.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT BODY SECTION ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Info & Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Reveal direction="right">
              <div>
                <h2 className="text-3xl font-bold font-serif tracking-tight text-brown mb-4">
                  Contact <em className="text-orange italic font-serif font-medium">Details</em>
                </h2>
                <div className="w-12 h-[3px] bg-orange mb-6 rounded-full" />
                <p className="text-sm sm:text-base leading-relaxed text-brown/70 font-sans">
                  Reach out through any channel. We are highly responsive and typically prepare custom strategy audits within 24 hours of form submission.
                </p>
              </div>
            </Reveal>

            {/* Info Cards */}
            <div className="flex flex-col gap-5">
              {infoCards.map((item, i) => {
                const IconComp = item.icon;
                return (
                  <Reveal key={i} delay={i * 0.1} direction="right">
                    <div className="flex gap-5 bg-white border border-brown/8 p-6 rounded-2xl shadow-[0_4px_16px_rgba(59,35,20,0.03)] items-start">
                      <div className="w-12 h-12 rounded-xl bg-orange/8 flex items-center justify-center shrink-0 text-orange">
                        <IconComp size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-orange mb-1">
                          {item.label}
                        </div>
                        <div className="text-base font-bold text-brown">
                          {item.value}
                        </div>
                        <div className="text-xs text-brown/50 mt-1 font-sans">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Social Channels */}
            <Reveal direction="right" delay={0.35}>
              <div className="flex flex-col items-start gap-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brown/50 font-sans">
                  Follow DBL Agency
                </div>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, label: "Instagram", url: "#" },
                    { icon: Linkedin, label: "LinkedIn", url: "#" }
                  ].map((soc, i) => {
                    const IconC = soc.icon;
                    return (
                      <a
                        key={i}
                        href={soc.url}
                        className="w-11 h-11 rounded-xl border border-orange/20 flex items-center justify-center text-orange hover:bg-orange hover:text-white hover:border-orange transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                      >
                        <IconC size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* HQ Map Placeholder */}
            <Reveal direction="right" delay={0.4}>
              <div className="h-44 bg-gradient-to-br from-orange/5 to-brown/8 border border-orange/15 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
                <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-orange/15 rounded-full blur-2xl" />
                <MapPin className="text-orange mb-3" size={32} />
                <span className="text-xs font-bold uppercase tracking-widest text-brown/80 font-sans">Hyderabad, India</span>
                <span className="text-[10px] text-brown/40 uppercase font-semibold tracking-wider mt-1">Available Globally</span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <div className="relative bg-white border border-brown/8 rounded-3xl p-8 md:p-12 shadow-[0_16px_48px_rgba(59,35,20,0.06)] overflow-hidden">
                
                {/* Custom Overlay for Success view */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center p-8 text-center"
                    >
                      <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1, rotate: 360 }} 
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="w-20 h-20 bg-orange/10 text-orange rounded-full flex items-center justify-center mb-6 shadow-md shadow-orange/5"
                      >
                        <CheckCircle2 size={38} />
                      </motion.div>
                      <h3 className="font-serif font-bold text-3xl text-brown mb-3">Request Received!</h3>
                      <p className="text-brown/65 text-sm md:text-base max-w-sm mb-8 leading-relaxed font-sans">
                        Thank you for reaching out. A growth strategist will analyze your digital footprint and contact you within 2 hours.
                      </p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="px-8 py-3.5 rounded-full bg-orange text-white font-bold text-xs tracking-wider uppercase hover:bg-orange-dk transition-all duration-300 shadow-md hover:shadow-lg shadow-orange/15 hover:shadow-orange/25"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <h3 className="font-serif font-bold text-3xl text-brown mb-2">
                  Send Us a <em className="text-orange italic font-serif font-medium">Message</em>
                </h3>
                <p className="text-xs sm:text-sm text-brown/60 mb-8 font-sans">
                  Provide your business scope below to unlock a comprehensive performance audit from our team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-brown/50 font-sans">Full Name *</label>
                      <input 
                        required 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full bg-[#FAF6F1] border-1.5 border-brown/15 rounded-xl px-4 py-3.5 text-sm text-brown focus:outline-none focus:border-orange transition-all font-sans font-medium" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-brown/50 font-sans">Email Address *</label>
                      <input 
                        required 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full bg-[#FAF6F1] border-1.5 border-brown/15 rounded-xl px-4 py-3.5 text-sm text-brown focus:outline-none focus:border-orange transition-all font-sans font-medium" 
                        placeholder="john@company.com" 
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-brown/50 font-sans">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange} 
                        className="w-full bg-[#FAF6F1] border-1.5 border-brown/15 rounded-xl px-4 py-3.5 text-sm text-brown focus:outline-none focus:border-orange transition-all font-sans font-medium" 
                        placeholder="Acme Corp" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-brown/50 font-sans">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full bg-[#FAF6F1] border-1.5 border-brown/15 rounded-xl px-4 py-3.5 text-sm text-brown focus:outline-none focus:border-orange transition-all font-sans font-medium" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                  </div>

                  {/* Budget & Primary Interest Select elements */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="budget" className="text-[10px] font-bold uppercase tracking-widest text-brown/50 font-sans">Marketing Budget / Month</label>
                      <div className="relative">
                        <select 
                          id="budget" 
                          name="budget" 
                          value={formData.budget} 
                          onChange={handleChange} 
                          className="w-full bg-[#FAF6F1] border-1.5 border-brown/15 rounded-xl px-4 py-3.5 pr-10 text-sm text-brown focus:outline-none focus:border-orange transition-all appearance-none font-sans font-medium"
                        >
                          <option value="">Select a range</option>
                          <option value="Under $5k">Under ₹1,00,000</option>
                          <option value="$5k - $15k">₹1,00,000 - ₹5,00,000</option>
                          <option value="$15k - $50k">₹5,00,000 - ₹15,00,000</option>
                          <option value="$50k+">₹15,00,000+</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brown/50">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="services" className="text-[10px] font-bold uppercase tracking-widest text-brown/50 font-sans">Service of Interest</label>
                      <div className="relative">
                        <select 
                          id="services" 
                          name="services" 
                          value={formData.services} 
                          onChange={handleChange} 
                          className="w-full bg-[#FAF6F1] border-1.5 border-brown/15 rounded-xl px-4 py-3.5 pr-10 text-sm text-brown focus:outline-none focus:border-orange transition-all appearance-none font-sans font-medium"
                        >
                          <option value="">Select service</option>
                          <option value="Performance Marketing">Performance Marketing</option>
                          <option value="Meta Ads">Meta Ads</option>
                          <option value="Google Ads">Google Ads</option>
                          <option value="Streaming Ads">Streaming Ads</option>
                          <option value="Influencer/Celebrity">Influencer Marketing</option>
                          <option value="Web/App Dev">Web & App Dev</option>
                          <option value="Full Retainer">Full Suite Package</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-brown/50">
                          <ChevronDown size={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details textarea */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-brown/50 font-sans">Project Scope & Details *</label>
                    <textarea 
                      required 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={4} 
                      className="w-full bg-[#FAF6F1] border-1.5 border-brown/15 rounded-xl px-4 py-3.5 text-sm text-brown focus:outline-none focus:border-orange transition-all resize-y font-sans font-medium leading-relaxed" 
                      placeholder="Outline your target goals, acquisition bottlenecks, and current metrics..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="text-red-500 text-xs font-bold font-sans">
                      An error occurred during submission. Please check your network and try again.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-orange text-white font-bold text-xs tracking-wider uppercase py-4 rounded-xl hover:bg-orange-dk shadow-lg shadow-orange/15 hover:shadow-orange/25 transition-all duration-300 disabled:opacity-75 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Submit Strategy Request</span>
                      </>
                    )}
                  </button>

                  {/* Green WhatsApp Integrated Block Banner */}
                  <div className="mt-8 p-5 bg-[#25D366]/8 border border-[#25D366]/20 rounded-2xl flex items-center gap-4.5 shadow-inner">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 text-white shadow-md shadow-[#25D366]/15 font-sans font-bold">
                      <MessageSquare size={18} />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold text-[#1a7a3e] font-sans">Prefer WhatsApp?</div>
                      <div className="text-[11px] text-brown/55 font-sans mt-0.5">Chat with our onboarding lead directly for faster replies.</div>
                    </div>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-extrabold text-[#1a7a3e] hover:text-[#0f5427] transition-colors whitespace-nowrap uppercase tracking-widest font-sans"
                    >
                      Chat Now →
                    </a>
                  </div>

                </form>
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </div>
  );
}
