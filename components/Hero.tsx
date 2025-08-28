'use client';
import { motion } from 'motion/react';
import { transforms } from '@/lib/content-mapping';
import { slideUp, viewportDefaults } from '@/lib/motion';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black min-h-[680px] sm:min-h-[760px] md:min-h-[840px]">
      <video
        className="absolute inset-0 h-full w-full object-cover z-0"
        src="/videos/hero.mp4"
        poster="/images/TQrIUXh8ngDITyQOpBwlWY70D3s.jpg"
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="auto"
        style={{
          filter: `brightness(49%) contrast(104%) saturate(25%) hue-rotate(-114deg)`
        }}
      />
      {/* Bottom-aligned content layer */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-6 pb-28 sm:pb-36">
          <motion.div
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={viewportDefaults}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-normal italic font-instrument-serif text-white">
              From <span>Busy</span> to <span>Big</span>
            </h1>
            <p className="mt-6 text-lg text-white/80">
              {transforms.hero.subtitle}
            </p>
            <div className="mt-8 flex gap-3">
              <a 
                href="#contact" 
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors"
              >
                {transforms.hero.cta}
              </a>
              <a 
                href="#proof" 
                className="rounded-xl border border-white/25 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                See Proof
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
