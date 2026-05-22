import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

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

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's talk.</h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-16">
            Partner with DBL to accelerate your growth. Fill out the form, and our strategy team will be in touch within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-zinc-300" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Email</h4>
                <p className="text-zinc-500">hello@dblinfo.com</p>
              </div>
            </div>
            {/* Additional mock contact info can be placed here if needed */}
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-10 relative overflow-hidden backdrop-blur-sm">
            {status === 'success' ? (
              <div className="absolute inset-0 z-10 bg-zinc-900 flex flex-col items-center justify-center p-8 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">Request Received</h3>
                <p className="text-zinc-400">Thank you for your interest. A strategist will review your information and reach out shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-2 rounded-full border border-zinc-700 text-sm hover:bg-zinc-800 transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Full Name *</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-zinc-400">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Acme Corp" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-zinc-400">Monthly Marketing Budget</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                    <option value="" disabled>Select a range</option>
                    <option value="< $5k">Under $5,000</option>
                    <option value="$5k - $15k">$5,000 - $15,000</option>
                    <option value="$15k - $50k">$15,000 - $50,000</option>
                    <option value="$50k+">$50,000+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="services" className="text-sm font-medium text-zinc-400">Primary Interest</label>
                  <select id="services" name="services" value={formData.services} onChange={handleChange} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                    <option value="" disabled>Select service</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Influencer/Celebrity">Influencer / Celebrity</option>
                    <option value="Production/Shoots">Production / Shoots</option>
                    <option value="Full Service">Full Service Retainer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Project Details *</label>
                <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tell us about your brand and goals..."></textarea>
              </div>

              {status === 'error' && (
                <div className="text-red-400 text-sm">Failed to submit. Please try again.</div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-white text-zinc-950 font-bold text-lg py-4 rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-70 flex justify-center"
              >
                {status === 'submitting' ? <div className="w-6 h-6 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></div> : 'Submit Request'}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
