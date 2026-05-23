import { motion } from 'motion/react';
import Reveal from '../components/common/Reveal';

export default function About() {
  const team = [
    {
      name: "Sai Kiran Kuchimanchi",
      role: "Founder & Visionary",
      initials: "SK",
      tagline: "Architecting digital futures with data-driven precision."
    },
    {
      name: "Murili Mohan Kuchimanchi",
      role: "CEO",
      initials: "MM",
      tagline: "Leading DBL with decades of transformational expertise."
    },
  ];

  const values = [
    {
      title: "Results First",
      desc: "Every creative and targeting decision is anchored to measurable business outcomes, not vanity traffic."
    },
    {
      title: "Premium Craft",
      desc: "We obsess over structural quality — in data models, creative messaging, and client partnerships."
    },
    {
      title: "Radical Transparency",
      desc: "Real-time reporting dashboards and completely honest conversations. No sugarcoating performance."
    },
    {
      title: "Long-term Partnership",
      desc: "We scale when you scale. Your long-term business equity is our ultimate North Star."
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ── HEADER HERO ── */}
      <section className="relative pt-36 pb-20 md:pb-28 bg-brown overflow-hidden">
        {/* Glow blob */}
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-orange/10 blur-[90px] pointer-events-none z-0" />
        <div className="absolute bottom-[-100px] left-[-10%] w-[350px] h-[350px] rounded-full bg-orange-lt/5 blur-[80px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-lt mb-4">About DBL</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif tracking-tight text-white leading-tight mb-8">
                We Are <em className="text-orange italic font-serif font-medium">Architects</em> of Growth
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-sans font-medium">
                Digital Business Leads was founded on a simple belief: every business deserves world-class marketing execution. We bring high-end corporate strategic firepower and beautiful content creation to ambitious brands.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MISSION + VISION ── */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Mission (Deep Brown Box) */}
            <Reveal direction="right" className="w-full">
              <div className="bg-brown border border-orange/15 rounded-3xl p-10 md:p-14 relative overflow-hidden h-full flex flex-col justify-between shadow-xl">
                {/* Accent shape */}
                <div className="absolute top-6 right-8 font-serif text-8xl text-orange/5 select-none font-bold">★</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-lt mb-6">Our Mission</div>
                  <h3 className="font-serif font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                    Democratize Premium Marketing
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/90 font-sans">
                    To make world-class digital marketing and premium branding accessible to every ambitious enterprise — delivering the same high-level strategic intelligence and advertising leverage once reserved exclusively for multi-billion dollar conglomerates.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vision (White Box) */}
            <Reveal direction="left" className="w-full">
              <div className="bg-white border border-brown/8 rounded-3xl p-10 md:p-14 relative overflow-hidden h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300">
                {/* Accent shape */}
                <div className="absolute top-6 right-8 font-serif text-8xl text-orange/5 select-none font-bold">◆</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange mb-6">Our Vision</div>
                  <h3 className="font-serif font-bold text-3xl md:text-4xl text-brown mb-6 leading-tight">
                    India's Most Trusted Growth Partner
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-brown/85 font-sans">
                    To be the go-to performance and brand partner for 1,000+ scaling businesses, globally recognized for custom analytical frameworks, exquisite design execution, and commercial partnerships that genuinely shape the future of industries.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── THE MINDS BEHIND DBL ── */}
      <section className="py-24 bg-gradient-to-br from-[#F5EDE3] to-cream relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange mb-4">Meet The Team</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-brown">
                The <em className="text-orange italic font-serif font-medium">Minds</em> Behind DBL
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="w-12 h-[3px] bg-orange mx-auto mt-6 rounded-full" />
            </Reveal>
          </div>

          <div className="flex justify-center gap-8 md:gap-12 flex-wrap max-w-5xl mx-auto">
            {team.map((t, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="group w-full sm:w-[320px] bg-white border border-brown/8 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-orange/20 transition-all duration-500 hover:-translate-y-2">

                  {/* Avatar / Photo placeholder */}
                  <div className="h-[280px] bg-gradient-to-br from-orange/10 via-brown/10 to-[#FAF6F1] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] rounded-full bg-orange/10 blur-[30px]" />
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange to-orange-dk flex items-center justify-center text-white font-serif font-bold text-3xl tracking-tight shadow-xl group-hover:scale-105 transition-all duration-500">
                      {t.initials}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm border border-orange/15 rounded-md px-2.5 py-1 text-[9px] uppercase tracking-widest text-orange font-bold">
                      Photo Coming
                    </div>
                  </div>

                  {/* Profile info block */}
                  <div className="p-8">
                    <h3 className="font-serif font-bold text-2xl text-brown mb-1">{t.name}</h3>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-orange mb-4">{t.role}</div>
                    <div className="w-8 h-[2px] bg-orange mb-4" />
                    <p className="text-sm font-medium italic text-brown/80 leading-relaxed">
                      "{t.tagline}"
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section className="py-24 bg-brown relative overflow-hidden">
        {/* Decorative blur blobs */}
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-lt mb-4">Our Values</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight text-white">
                What We <em className="text-orange italic font-serif font-medium">Stand For</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="w-12 h-[3px] bg-orange mx-auto mt-6 rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-orange/12 rounded-2xl p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between h-full hover:border-orange/30 transition-all duration-300">
                  <div>
                    {/* Big numbers overlay */}
                    <div className="font-serif font-bold text-5xl text-orange/30 leading-none mb-6">
                      0{i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 font-sans">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80 font-sans">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
