import { motion } from 'motion/react';
import { 
  Megaphone, Video, Camera, Star, 
  MapPin, TrendingUp, Search, UserPlus, 
  Eye, Share2, PenTool, PieChart, Code, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: Megaphone, title: "Meta Ads", desc: "Data-driven advertising across Facebook, Instagram, and WhatsApp. Scalable ROAS architectures." },
  { icon: Search, title: "Google Ads", desc: "Intent-based capture through Search, Display, and YouTube. Dominate your market's search volume." },
  { icon: UserPlus, title: "Lead Gen Campaigns", desc: "High-friction, high-intent funnel engineering to fill your sales pipeline with qualified prospects." },
  { icon: Star, title: "Celebrity Marketing", desc: "Strategic ambassador partnerships and endorsement deals to instantly establish market authority." },
  { icon: Share2, title: "Influencer Marketing", desc: "Micro to macro influencer deployments for authentic reach, UGC generation, and social proof." },
  { icon: Video, title: "Ad Shoots", desc: "Direct-response performance creative. Video assets engineered specifically to convert on social feeds." },
  { icon: Camera, title: "Product Shoots", desc: "Premium e-commerce and lifestyle photography that elevates your brand's perceived value." },
  { icon: MapPin, title: "Offline Marketing", desc: "Billboards, experiential activations, and traditional OOH to support digital brand dominance." },
  { icon: Eye, title: "Brand Awareness", desc: "Mass-reach campaigns designed to increase share of voice and lower blended customer acquisition costs." },
  { icon: TrendingUp, title: "Social Media Mgmt", desc: "Organic growth strategies, community management, and daily content deployment." },
  { icon: PenTool, title: "Content Creation", desc: "Copywriting, graphic design, and short-form video that builds community and trust." },
  { icon: PieChart, title: "Market Research", desc: "Deep consumer insights, competitor analysis, and positioning strategies." },
  { icon: Code, title: "Web Development", desc: "High-performance, conversion-optimized landing pages and digital experiences." },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Our Capabilities.</h1>
        <p className="text-xl text-zinc-400 leading-relaxed">
          A comprehensive suite of digital and creative services, tailored for scale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
            className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-2xl transition-colors"></div>
            <service.icon size={28} className="text-zinc-300 group-hover:text-white mb-6 transition-colors" />
            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
            <p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed transition-colors">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 rounded-3xl bg-zinc-900 border border-zinc-800 text-center flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-4">Need a custom approach?</h2>
        <p className="text-zinc-400 mb-8 max-w-xl">
          We build bespoke growth architectures for complex enterprise challenges. Let's discuss your specific needs.
        </p>
        <Link 
          to="/contact" 
          className="px-8 py-4 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
        >
          Consult with a Strategist
        </Link>
      </motion.div>
    </div>
  );
}
