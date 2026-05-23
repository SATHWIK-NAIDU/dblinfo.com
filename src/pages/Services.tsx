import { Link } from 'react-router-dom';
import { 
  Zap, Search, Users, Video, Code, 
  Check, ArrowRight, Camera, TrendingUp, PieChart, Map
} from 'lucide-react';
import Reveal from '../components/common/Reveal';

export default function Services() {
  const primaryServices = [
    { 
      icon: Zap, 
      title: "Performance Marketing", 
      badge: "Most Popular", 
      desc: "We architect full-funnel campaigns with razor-sharp targeting, compelling creatives, and continuous optimization to maximize your return on every marketing dollar spent.", 
      features: ["ROAS-focused strategy", "A/B creative testing", "Real-time dashboards", "Weekly performance reports"] 
    },
    { 
      icon: Users, 
      title: "Meta Ads", 
      badge: null, 
      desc: "From cold traffic capture to dynamic remarketing, our Meta Ad specialists build robust campaigns that move social audiences through your funnel with creative excellence.", 
      features: ["Custom audience builds", "Lookalike modelling", "Ad creative production", "Conversion optimization"] 
    },
    { 
      icon: Search, 
      title: "Google Ads", 
      badge: null, 
      desc: "Capture high-intent buyers exactly at the moment of search. We manage Search, Shopping, YouTube, Display, and Performance Max campaigns for absolute market share.", 
      features: ["Keyword intent strategy", "Quality Score optimization", "Smart bidding setup", "Competitor gap analysis"] 
    },
    { 
      icon: Video, 
      title: "Streaming Ads", 
      badge: "New", 
      desc: "Reach premium audiences on OTT platforms like Disney+ Hotstar, JioCinema, and streaming television networks. Video-first storytelling that builds massive brand equity.", 
      features: ["OTT platform placement", "Video creative strategy", "Audience segmentation", "Brand lift measurement studies"] 
    },
    { 
      icon: Users, 
      title: "Influencer Marketing", 
      badge: null, 
      desc: "We connect your brand with the right creators across Instagram, YouTube, and emerging media networks for campaigns that build massive public trust and drive conversions.", 
      features: ["Creator vetting & briefs", "End-to-end campaign mgmt", "Content quality approval", "Performance & ROI tracking"] 
    },
    { 
      icon: Code, 
      title: "Web & App Development", 
      badge: null, 
      desc: "High-converting corporate landing pages and robust custom e-commerce experiences built for extreme speed, search engine prominence, and maximum conversion rates.", 
      features: ["Conversion-focused UX", "100% responsive layouts", "Search engine optimization architecture", "CRO audits & heatmap analysis"] 
    },
  ];

  const additionalCapabilities = [
    { icon: Camera, title: "Product & Ad Shoots", desc: "Performance-focused visual creative and high-end lifestyle product photography." },
    { icon: TrendingUp, title: "Social Media Management", desc: "Organic social growth, comprehensive community building, and daily high-quality asset publishing." },
    { icon: PieChart, title: "Market Audits & Research", desc: "Deep consumer behavior mapping, competitor profiling, and product-market positioning." },
    { icon: Map, title: "OOH & Offline Activations", desc: "Premium experiential setups, billboard media buying, and offline brand integration." },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ── HEADER ── */}
      <section className="relative pt-36 pb-20 md:pb-24 bg-brown overflow-hidden">
        <div className="absolute top-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full bg-orange/12 blur-[80px] pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-lt mb-4">Our Services</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif tracking-tight text-white leading-tight mb-6">
                Premium <em className="text-orange italic font-serif font-medium">Solutions</em> for Modern Brands
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed font-sans font-medium">
                Every service is delivered with strategy-first thinking, creative excellence, and a relentless focus on measurable business outcomes.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRIMARY SERVICES GRID ── */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((s, i) => {
              const IconComp = s.icon;
              return (
                <Reveal key={i} delay={i % 3 * 0.12}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-brown/8 shadow-[0_4px_24px_rgba(59,35,20,0.04)] hover:shadow-[0_32px_64px_rgba(59,35,20,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
                    {/* Decorative accent top bar */}
                    <div className="h-1.5 bg-gradient-to-r from-orange to-orange-lt" />
                    
                    <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                      <div>
                        {/* Header icon + badge */}
                        <div className="flex justify-between items-start mb-8">
                          <div className="w-14 h-14 rounded-2xl bg-orange/8 flex items-center justify-center text-orange">
                            <IconComp size={26} />
                          </div>
                          {s.badge && (
                            <span className={`text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-white shadow-sm shadow-orange/10 ${
                              s.badge === "New" ? "bg-brown-lt" : "bg-orange"
                            }`}>
                              {s.badge}
                            </span>
                          )}
                        </div>

                        {/* Title & Desc */}
                        <h3 className="font-serif font-bold text-2xl text-brown mb-4">
                          {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-brown/85 mb-8 font-sans">
                          {s.desc}
                        </p>

                        {/* Feature lists */}
                        <div className="flex flex-col gap-3.5 mb-8">
                          {s.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                              <div className="w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                                <Check size={11} className="text-orange" />
                              </div>
                              <span className="text-xs font-semibold text-brown/95 font-sans">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA link */}
                      <div>
                        <Link 
                          to="/contact" 
                          className="w-full px-6 py-4 rounded-full bg-orange text-white font-bold text-xs tracking-wider uppercase hover:bg-orange-dk shadow-md shadow-orange/10 hover:shadow-orange/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          Get This Service
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL CAPABILITIES ── */}
      <section className="py-20 bg-gradient-to-br from-[#F5EDE3] to-cream relative border-t border-brown/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <Reveal>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange mb-4">More Capabilities</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight text-brown">
                Bespoke Marketing <em className="text-orange italic font-serif font-medium">Additions</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="w-12 h-[3px] bg-orange mx-auto mt-6 rounded-full" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalCapabilities.map((c, i) => {
              const IconComp = c.icon;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white border border-brown/8 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-start">
                    <div className="w-10 h-10 rounded-xl bg-orange/8 flex items-center justify-center text-orange mb-5 shrink-0">
                      <IconComp size={20} />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-brown mb-2">{c.title}</h4>
                    <p className="text-xs leading-relaxed text-brown/80 font-sans">{c.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM GENERAL CTA ── */}
      <section className="py-20 bg-brown text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
              Need a Custom <em className="text-orange italic font-serif font-medium">Growth Architecture?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
              <p className="text-sm sm:text-base text-white/80 mt-4 mb-8 max-w-xl mx-auto font-sans leading-relaxed">
              We design bespoke campaigns and data-driven systems for complex business operations. Let's discuss your enterprise targets.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange text-white font-bold text-xs tracking-wider uppercase hover:bg-orange-dk shadow-lg shadow-orange/15 hover:shadow-orange/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Consult with a Strategist
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
