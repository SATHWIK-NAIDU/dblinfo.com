import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BarChart3, Users, Zap, CheckCircle2, Star } from 'lucide-react';
import AnimatedCounter from '../components/common/AnimatedCounter';
import Reveal from '../components/common/Reveal';

export default function Home() {
  const headlines = [
    "Turning Businesses Into Lead Machines.",
    "Growth Is Not Luck. It's Strategy.",
    "We Build Brands That Generate Revenue.",
  ];

  const [hIdx, setHIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHIdx((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: 30, suffix: "+", label: "Clients Served" },
    { value: 120, suffix: "K+", label: "Leads Generated" },
    { value: 7.5, suffix: "x", label: "Average ROAS" },
    { value: 97, suffix: "%", label: "Retention Rate" },
  ];

  const services = [
    {
      icon: Zap,
      title: "Performance Marketing",
      desc: "Data-driven campaigns engineered for measurable ROI across every digital search and social channel."
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      desc: "Authentic creator partnerships that amplify brand reach, credibility, and organic search interest."
    },
    {
      icon: BarChart3,
      title: "Lead Generation",
      desc: "High-converting funnels engineered specifically to capture, score, and nurture premium qualified deals."
    }
  ];

  const testimonials = [
    {
      name: "Harsha vardhan",
      role: "Sales Head, realestate",
      text: "DBL transformed our digital presence. Our lead count tripled within 60 days of launch. Exceptional strategic guidance.",
      rating: 5
    },
    {
      name: "Penvitha",
      role: "Founder & MD, Presante Pvt Ltd",
      text: "The UGC creators we hired from DBL for our brand Presante are top-notch. Highly recommend their services!",
      rating: 5
    },
    {
      name: "Akash",
      role: "CEO, Cosoft Technologies",
      text: "Their team is highly professional and responsive. The monthly reports are comprehensive and easy to understand. We're seeing consistent growth in our key metrics.",
      rating: 5
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-br from-cream via-[#F5EDE3] to-cream">
        {/* Background Decorative Blur Blobs */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-orange/10 blur-[80px] pointer-events-none z-0" />
        <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-brown-lt/5 blur-[80px] pointer-events-none z-0" />

        {/* Decorative Grid or Stardust Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.04] pointer-events-none z-0" />

        {/* Floating Interactive Orb */}
        <div className="absolute right-[8%] top-[50%] -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
          <motion.div
            animate={{
              y: ["0px", "-24px", "0px"],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[320px] h-[320px] xl:w-[450px] xl:h-[450px] rounded-full bg-gradient-to-br from-orange/20 via-brown/15 to-transparent border border-orange/20 backdrop-blur-[4px] shadow-[0_24px_50px_rgba(59,35,20,0.06)] flex items-center justify-center select-none"
          >
            <div className="font-serif font-bold text-orange/30 text-7xl xl:text-9xl tracking-tighter">
              DBL
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-4xl lg:max-w-2xl xl:max-w-3xl">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brown/5 border border-brown/10 text-xs font-semibold uppercase tracking-wider text-brown mb-8">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
                Digital Business Leads — Premium Agency
              </div>
            </Reveal>

            {/* Headline with AnimatePresence Typing cycle */}
            <div className="h-[200px] sm:h-[150px] md:h-[180px] lg:h-[220px] xl:h-[260px] flex items-center mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={hIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter font-serif leading-[1.08] text-brown"
                >
                  {headlines[hIdx].split(" ").map((word, i) => {
                    const isOrange = i === 1 || i === 2 || word.includes("Revenue") || word.includes("Strategy");
                    return (
                      <span key={i} className="inline-block">
                        {isOrange ? (
                          <span className="text-orange italic font-serif font-medium">{word}&nbsp;</span>
                        ) : (
                          <span>{word}&nbsp;</span>
                        )}
                      </span>
                    );
                  })}
                </motion.h1>
              </AnimatePresence>
            </div>

            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-brown/85 max-w-xl mb-10 leading-relaxed font-sans">
                We craft data-driven performance marketing strategies that turn your business into a consistent, scalable revenue machine. Premium execution. Measurable outcomes.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-orange text-white font-bold text-sm tracking-wider uppercase hover:bg-orange-dk transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-orange/20 hover:shadow-orange/35 hover:-translate-y-0.5"
                >
                  Book a Strategy Call
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 rounded-full bg-transparent border-2 border-brown/20 text-brown font-bold text-sm tracking-wider uppercase hover:border-orange hover:text-orange transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>

            {/* Quick Hero Stats for visual density */}
            <Reveal delay={0.5}>
              <div className="flex gap-8 md:gap-12 mt-16 flex-wrap">
                {[["30+", "Clients"], ["120K+", "Leads"], ["7.5x", "Avg ROAS"]].map(([n, l]) => (
                  <div key={l} className="flex flex-col">
                    <div className="font-serif font-bold text-3xl md:text-4xl text-orange leading-none">{n}</div>
                    <div className="text-xs uppercase tracking-widest text-brown/75 mt-2 font-semibold">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center select-none opacity-60">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-12 bg-gradient-to-b from-transparent to-orange"
          />
          <span className="text-[10px] uppercase tracking-[0.25em] text-brown/80 mt-2 font-semibold">Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE CONTINUOUS TEXT TAPE ── */}
      <section className="bg-orange py-4.5 border-y border-orange-dk/20 overflow-hidden relative z-10 shadow-sm">
        <div className="flex whitespace-nowrap select-none">
          <div className="flex gap-0 animate-[marquee_20s_linear_infinite] whitespace-nowrap text-xs sm:text-sm font-bold tracking-widest uppercase text-white">
            {Array(4).fill([
              "Performance Marketing", "Meta Ads", "Google Ads", "Streaming Ads", "Influencer Marketing", "Web Development"
            ]).flat().map((item, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="mx-8">{item}</span>
                <span className="text-cream text-lg">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="relative py-24 bg-brown overflow-hidden">
        {/* Glow blob */}
        <div className="absolute top-[-150px] right-[-150px] w-[450px] h-[450px] rounded-full bg-orange/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-150px] left-[-150px] w-[350px] h-[350px] rounded-full bg-orange-lt/5 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-lt mb-4">Proven Results</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-white">
                Numbers That <em className="text-orange italic font-serif font-medium">Speak</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="w-12 h-[3px] bg-orange mx-auto mt-6 rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.1} className="w-full">
                <div className="bg-white/5 border border-orange/15 rounded-2xl px-6 py-12 md:py-16 text-center backdrop-blur-md shadow-lg hover:border-orange/45 transition-all duration-500 hover:-translate-y-1">
                  <div className="font-serif font-bold text-5xl md:text-6xl text-orange leading-none mb-4">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/80 font-bold">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <Reveal>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange mb-4">What We Do</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-brown">
                  Premium <em className="text-orange italic font-serif font-medium">Services</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="w-12 h-[3px] bg-orange mt-6 rounded-full" />
              </Reveal>
            </div>
            <Reveal direction="left" delay={0.2}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-2 border-brown/20 text-brown hover:border-orange hover:text-orange px-6 py-3 rounded-full transition-all duration-300"
              >
                View All Services
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const IconComp = service.icon;
              return (
                <Reveal key={i} delay={i * 0.15}>
                  <div className="group relative bg-white border border-brown/8 rounded-2xl p-8 xl:p-10 shadow-[0_4px_20px_rgba(59,35,20,0.04)] hover:bg-brown hover:border-orange hover:shadow-[0_24px_64px_rgba(59,35,20,0.18)] transition-all duration-500 hover:-translate-y-2 cursor-default h-full flex flex-col justify-between">
                    <div>
                      {/* Icon wrapper */}
                      <div className="w-14 h-14 rounded-2xl bg-orange/8 group-hover:bg-orange/20 flex items-center justify-center mb-8 text-orange transition-all duration-300">
                        <IconComp size={26} />
                      </div>

                      <h3 className="font-serif font-bold text-2xl mb-4 text-brown group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-brown/85 group-hover:text-white/80 transition-colors duration-300 mb-8">
                        {service.desc}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange">
                      Learn More
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY DBL (REVENUE SYSTEM) ── */}
      <section className="py-24 bg-gradient-to-br from-[#F5EDE3] to-cream relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal direction="right">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange mb-4 font-sans">Why DBL</div>
              <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-brown leading-tight mb-6">
                Strategy Built for <em className="text-orange italic font-serif font-medium">Revenue</em>
              </h2>
              <div className="w-12 h-[3px] bg-orange mb-8 rounded-full" />

              <p className="text-brown/85 text-base md:text-lg mb-10 leading-relaxed font-sans">
                We don't just run ads — we engineer growth systems. Every campaign is architected around your business goals, not vanity metrics. We focus exclusively on the metrics that actually move your bottom line.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Full-funnel performance strategy",
                  "Creative assets optimised for conversion",
                  "Real-time analytics & transparent reporting",
                  "Dedicated senior-level marketing team"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brown font-semibold text-sm sm:text-base font-sans">
                    <div className="w-7 h-7 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-orange" size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange text-white font-bold text-sm tracking-wider uppercase hover:bg-orange-dk shadow-lg shadow-orange/15 hover:shadow-orange/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                About DBL
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          {/* Graphical/Creative right block showing animated vertical bar charts */}
          <Reveal direction="left" className="w-full">
            <div className="relative aspect-[4/3] bg-white border border-brown/8 rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(59,35,20,0.06)] p-8 md:p-12 flex flex-col justify-between">
              {/* Soft background blob */}
              <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top info */}
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <h4 className="font-serif font-bold text-xl text-brown mb-1">Growth Index</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brown/60">DBL Client Average</p>
                </div>
                <div className="bg-orange/10 text-orange font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-orange/10">
                  +340% YoY
                </div>
              </div>

              {/* Minimalist Abstract Graphic instead of an actual image */}
              <div className="relative z-10 h-[50%] flex items-end justify-center gap-3 sm:gap-4 md:gap-5">
                {[45, 65, 50, 85, 70, 100].map((height, i) => (
                  <div key={i} className="w-full bg-[#F5EDE3] rounded-t-lg relative h-full flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full bg-orange rounded-t-lg shadow-[0_4px_12px_rgba(232,98,26,0.2)]"
                    />
                  </div>
                ))}
              </div>

              <div className="relative z-10 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-brown/60 border-t border-brown/5 pt-6">
                <span>Phase 1</span>
                <span>Phase 2</span>
                <span>Phase 3</span>
                <span>Optimization</span>
                <span>Scale</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-brown relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full bg-orange/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-lt mb-4">Testimonials</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-white">
                What Clients <em className="text-orange italic font-serif font-medium">Say</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="w-12 h-[3px] bg-orange mx-auto mt-6 rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-white/5 border border-orange/12 rounded-2xl p-8 xl:p-10 backdrop-blur-md shadow-xl flex flex-col justify-between h-full">
                  <div>
                    {/* Star rating */}
                    <div className="flex gap-1 mb-6 text-orange">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-sm md:text-base leading-relaxed text-white/90 font-medium italic mb-8 font-sans">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="font-semibold text-white text-base font-sans">{t.name}</div>
                    <div className="text-xs text-orange-lt tracking-wider mt-1 uppercase font-bold">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden bg-gradient-to-br from-orange-dk via-orange to-orange-lt shadow-inner">
        {/* Soft background white blob */}
        <div className="absolute top-[-150px] left-[30%] w-[450px] h-[450px] rounded-full bg-white/10 blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-white leading-none">
              Ready to <em className="italic font-serif font-medium text-cream">Dominate</em> Your Market?
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-base sm:text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mt-6 mb-12 leading-relaxed font-medium font-sans">
              Let's build a growth engine for your business. Speak with our growth strategists today and start scaling.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-white text-brown font-bold text-sm tracking-wider uppercase hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Book Free Strategy Call
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-transparent border-2 border-white/40 text-white font-bold text-sm tracking-wider uppercase hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                View Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
