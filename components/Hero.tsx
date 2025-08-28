'use client';
import { motion } from 'motion/react';
import { transforms } from '@/lib/content-mapping';
import { slideUp, viewportDefaults } from '@/lib/motion';
import { instrumentSerif } from '@/app/fonts';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black min-h-[695px] sm:min-h-[795px] md:min-h-[875px]">
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
      {/* Dark bottom gradient bar to match reference */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 sm:h-56 bg-gradient-to-b from-transparent to-black/95 z-[5]" />

      {/* Bottom-aligned content layer */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="mx-auto max-w-7xl w-full px-6 pb-36 sm:pb-44">
          <motion.div
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={viewportDefaults}
            className="max-w-3xl"
          >
            <h1 className={`${instrumentSerif.className} italic text-white text-4xl sm:text-6xl font-normal`}>
              From <span>Busy</span> to <span>Big</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 italic">
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
