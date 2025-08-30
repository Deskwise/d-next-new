'use client';
import { motion } from 'motion/react';
import { slideUp, viewportDefaults } from '@/lib/motion';
import { transforms } from '@/lib/content-mapping';

export default function ValueProps() {
  const benefits = [
    {
      icon: '/icons/04vJJZ3D2ponPv6rzLBq6sf2PZU.svg',
      title: 'Immediate relief',
      description: 'Reclaim hours in week one.'
    },
    {
      icon: '/icons/1ph1389RD4RtUDEfqVhWbujyF7s.svg', 
      title: 'Enablement',
      description: 'One person performs like an elite team.'
    },
    {
      icon: '/icons/5BVUI56YoqDFZ1xvzbir5lf9sZA.svg',
      title: 'Proof‑first',
      description: 'Reversible steps with measurable before/after results.'
    },
    {
      icon: '/icons/Yn3MOOL9rTXhK9U8MLvSnEoNP8.svg',
      title: 'Drafts, not surprises',
      description: 'Fast, visible iterations.'
    }
  ];

  return (
    <section id="why" className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportDefaults}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-brand uppercase tracking-wide">
            {transforms.sections.benefits.label}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {transforms.sections.benefits.title}
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={viewportDefaults}
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={slideUp}
              className={`text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ${
                benefits.length % 2 !== 0 && index === benefits.length - 1 
                  ? 'md:col-span-2 md:max-w-md md:mx-auto' 
                  : ''
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <img src={benefit.icon} alt="" className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}