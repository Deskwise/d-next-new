'use client';
import { motion } from 'motion/react';
import { transforms } from '@/lib/content-mapping';
import { slideUp, viewportDefaults } from '@/lib/motion';
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: 'Invisible Engine',
      description: 'Your background crew that handles orchestrations, automations and microsites behind the scenes.',
      image: '/images/46yWpjkwWiKJojGTr2NKnNPtJ1c.jpg'
    },
    {
      title: 'Orchestrations Library', 
      description: 'One‑click playbooks that turn common pains into proofs in ≤ 48 hours.',
      image: '/images/G1bC6MQnKLl8c7ZyjwpJlVGuw.jpg'
    },
    {
      title: 'Proof Sprint',
      description: 'A 48‑hour sprint that guarantees a proof — or you don’t pay.',
      image: '/images/W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg'
    },
    {
      title: 'Friction X‑Ray',
      description: 'A complimentary diagnostic revealing ghost work hotspots and your path from busy to big.',
      image: '/images/YGV3hSM1KkFRZxZ0JDeOT7ry7u4.jpg'
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportDefaults}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-brand uppercase tracking-wide">
            {transforms.sections.features.label}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {transforms.sections.features.title}
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={slideUp}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image 
                  src={feature.image} 
                  alt={feature.title}
                  width={640}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}