import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 font-serif italic">
          Intelligence meets <span className="not-italic font-sans">intuition.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium">
          DBL was founded on a simple premise: marketing should generate measurable business value, not just noise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full aspect-[4/5] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent flex items-end p-8">
              <div className="font-medium text-zinc-300">Our Vision</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-6">The Modern Agency Philosophy</h2>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              The digital landscape is crowded. Attention spans are fracturing. In this environment, generic campaigns fail. We believe that true growth requires a holistic approach—blending rigorous data analytics with elite creative production.
            </p>
            <p>
              We are not just vendors; we act as an extension of your team. Our strategists, creatives, and media buyers work in unison to orchestrate campaigns that resonate culturally and convert financially.
            </p>
            <p>
              Whether it is securing a high-profile celebrity endorsement or optimizing a granular Search Ads campaign, our standard is excellence. Every touchpoint is an opportunity to elevate your brand.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-sm text-zinc-500 font-medium">Active Campaigns</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">$50M+</div>
              <div className="text-sm text-zinc-500 font-medium">Revenue Generated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
