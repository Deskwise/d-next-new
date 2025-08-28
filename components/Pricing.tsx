'use client';
import { motion } from 'motion/react';
import { transforms } from '@/lib/content-mapping';
import { slideUp, viewportDefaults } from '@/lib/motion';
import { useState } from 'react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Executive X-Ray',
      description: 'One-time diagnostic session',
      price: { monthly: 5000, annual: 5000 },
      features: [
        'One 90-minute executive session',
        'Real problem diagnosis',
        'Decision framework',
        'Next steps roadmap',
        '48-hour turnaround'
      ],
      cta: 'Book X-Ray Session',
      popular: false
    },
    {
      name: 'Proof Sprint',
      description: 'Working proof in 2-4 weeks',
      price: { monthly: 15000, annual: 15000 },
      features: [
        'Executive X-Ray included',
        'Working prototype/proof',
        'Technical documentation',
        'Deployment guide',
        'Success metrics defined'
      ],
      cta: 'Start Proof Sprint',
      popular: true
    },
    {
      name: 'ResearchOps',
      description: 'Ongoing intelligence retainer',
      price: { monthly: 8000, annual: 7200 },
      features: [
        'Monthly intelligence briefings',
        'Market signal monitoring',
        'Competitive analysis',
        'Expert network access',
        'Strategic recommendations'
      ],
      cta: 'Start ResearchOps',
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportDefaults}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-brand uppercase tracking-wide">
            {transforms.sections.pricing.label}
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {transforms.sections.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted-light max-w-3xl mx-auto">
            {transforms.sections.pricing.description}
          </p>
        </motion.div>

        <motion.div 
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportDefaults}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                !isAnnual 
                  ? 'bg-brand text-black' 
                  : 'text-white hover:text-brand'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                isAnnual 
                  ? 'bg-brand text-black' 
                  : 'text-white hover:text-brand'
              }`}
            >
              Annual (Save 10%)
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={slideUp}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-brand/10 border-2 border-brand' 
                  : 'bg-white/5 border border-white/10'
              } hover:bg-white/10 transition-colors`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand text-black px-3 py-1 text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-light text-sm mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">
                    ${isAnnual ? plan.price.annual.toLocaleString() : plan.price.monthly.toLocaleString()}
                  </span>
                  {plan.name === 'ResearchOps' && (
                    <span className="text-muted-light">
                      {isAnnual ? '/year' : '/month'}
                    </span>
                  )}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-brand mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular
                  ? 'bg-brand text-black hover:bg-brand/90'
                  : 'bg-white/10 text-white border border-white/25 hover:bg-white/20'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}