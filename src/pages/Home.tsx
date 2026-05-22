import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <motion.div 
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm font-medium mb-8 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Digital Business Leads
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8 font-serif italic"
            >
              Scaling Brands Into <br />
              <span className="not-italic font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                Market Leaders
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
            >
              Performance-driven digital marketing, influencer campaigns, production, and growth systems engineered for modern businesses.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-full bg-white text-zinc-950 font-medium text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group"
              >
                Book a Strategy Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-lg hover:bg-zinc-800 transition-colors flex items-center justify-center"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Enterprise-Grade Growth Services</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">We combine creative production with data-driven performance marketing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Performance Marketing", desc: "Meta & Google Ads scaled with precision targeting and rapid testing." },
              { icon: Users, title: "Influencer & Celebrity", desc: "Strategic partnerships that build authentic brand authority and reach." },
              { icon: BarChart3, title: "Lead Generation", desc: "High-converting funnels engineered to capture and nurture qualified deals." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 text-white group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-medium">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-900/30 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
              We don't just run ads.<br />
              <span className="text-zinc-500">We build growth systems.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Most agencies focus on vanity metrics. DBL focuses on revenue. We integrate seamlessly with your sales processes to ensure every marketing dollar translates into measurable business value.
            </p>
            <ul className="space-y-4">
              {[
                "Data-driven creative testing",
                "End-to-end sales funnel optimization",
                "Transparent, real-time ROI reporting",
                "Senior-level talent on every account"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <CheckCircle2 className="text-indigo-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] bg-zinc-900 rounded-3xl overflow-hidden relative border border-zinc-800">
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent z-10"></div>
               {/* Minimalist Abstract Graphic instead of an actual image */}
               <div className="absolute inset-x-0 bottom-0 h-1/2 flex items-end justify-center pb-8 p-6 gap-4">
                  {[40, 70, 50, 90, 65, 100].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                      className="w-full bg-zinc-800 rounded-t-sm"
                      style={{ height: `${height}%` }}
                    ></motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-950/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Ready to scale?</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Stop leaving money on the table. Speak with our growth strategists today and start dominating your market.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-lg hover:bg-zinc-200 transition-colors"
          >
            Start Your Growth Project
          </Link>
        </div>
      </section>
    </div>
  );
}
