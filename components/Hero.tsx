'use client';
import { motion } from 'motion/react';
import { transforms } from '@/lib/content-mapping';
import { slideUp, viewportDefaults } from '@/lib/motion';
import { Work_Sans, Quintessential } from 'next/font/google';
import { useEffect, useMemo, useRef, useState } from 'react';
import { backgroundPhrases } from '@/lib/background-phrases';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const quintessential = Quintessential({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

const HEADLINE_TITLES = [
  'Your Elite team of Consultants with a 148 IQ Working 24/7',
  'Fix the Question. Ship the Proof.',
  'Listening‑First Decision Lab'
];

export default function Hero() {
  const quotesContainerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [headlineKey, setHeadlineKey] = useState(0);

  const currentTitle = HEADLINE_TITLES[headlineIndex % HEADLINE_TITLES.length];
  const headlineWords = useMemo(() => currentTitle.split(' '), [currentTitle]);

  // loop headline every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % HEADLINE_TITLES.length);
      setHeadlineKey((k) => k + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const Scramble: any = (await import('gsap/ScrambleTextPlugin').catch(() => null))?.ScrambleTextPlugin;
      if (Scramble) gsap.registerPlugin(Scramble);

      const quotes = Array.from((quotesContainerRef.current?.querySelectorAll('.quote') ?? [])) as HTMLElement[];
      const scrambleChars = 'upperAndLowerCase';

      const getHeroBounds = () => {
        const margin = 140; // padding around hero to keep area clean
        const rect = heroContentRef.current?.getBoundingClientRect();
        if (!rect) return null;
        return {
          left: rect.left - margin,
          right: rect.right + margin,
          top: rect.top - margin,
          bottom: rect.bottom + margin,
        };
      };

      const isInside = (x: number, y: number, bounds: { left: number; right: number; top: number; bottom: number } | null) => {
        if (!bounds) return false;
        return x > bounds.left && x < bounds.right && y > bounds.top && y < bounds.bottom;
      };

      const getRandomPositionOutsideHero = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const bounds = getHeroBounds();
        let x = 0, y = 0; let tries = 0;
        do {
          x = Math.random() * (vw - 200) + 100;
          y = Math.random() * (vh - 200) + 100;
          tries++;
        } while (isInside(x, y, bounds) && tries < 50);
        return { x, y };
      };

      const scrambleQuote = (quote: HTMLElement, text: string) => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        tl.call(() => {
          const { x, y } = getRandomPositionOutsideHero();
          gsap.set(quote, { x, y });
        })
          .to(quote, {
            delay: Math.random() * 5,
            duration: 1,
            opacity: 1,
            ...(Scramble ? { scrambleText: { text, chars: scrambleChars, revealDelay: 0.5, speed: 1 } } : {}),
            ease: 'power2.out',
          })
          .to(quote, {
            delay: 2.5,
            duration: 1,
            ...(Scramble ? { scrambleText: { text: '', chars: scrambleChars } } : {}),
            opacity: 0,
            ease: 'power2.in',
          });
      };

      quotes.forEach((q) => {
        gsap.set(q, { position: 'absolute', opacity: 0, whiteSpace: 'nowrap', fontSize: '16px', color: 'rgba(255,255,255,0.35)' });
        scrambleQuote(q, q.textContent ?? '');
      });
    };

    init();
  }, []);

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
          filter: `brightness(49%) contrast(104%) saturate(18%) hue-rotate(-114deg)`,
          objectPosition: 'top',
        }}
      />

      {/* Background scramble quotes */}
      <div ref={quotesContainerRef} className="absolute inset-0 z-[2] pointer-events-none">
        {backgroundPhrases.map((p, i) => (
          <div key={i} className="quote opacity-0">
            {p}
          </div>
        ))}
      </div>

      {/* Dark bottom gradient bar to match reference */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 sm:h-56 bg-gradient-to-b from-transparent to-black/95 z-[3]" />

      {/* Content layer positioned lower */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div ref={heroContentRef} className="mx-auto max-w-7xl w-full px-6 pt-48 sm:pt-64 pb-36 sm:pb-44">
          <motion.div
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={viewportDefaults}
            className="mx-auto text-center max-w-4xl sm:max-w-5xl md:max-w-6xl"
          >
            {/* Owl logo */}
            <div className="flex justify-center mb-4">
              <img
                src="/images/owl_icon.png"
                alt="Deskwise Owl"
                className="h-8 w-8 opacity-90"
                style={{ filter: 'drop-shadow(0 0 2px rgba(166, 218, 255, 1.0)) drop-shadow(0 0 6px rgba(166, 218, 255, 0.6)) drop-shadow(0 0 10px rgba(166, 218, 255, 0.3))', stroke: 'rgba(166, 218, 255, 0.8)', strokeWidth: '1px' }}
              />
            </div>
            {/* Kicker */}
            <div className="flex items-center justify-center gap-2 text-[12px] tracking-[0.12em] uppercase text-[color:var(--color-text-muted)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
              <span className={`${workSans.className}`}>New Gen AI Automation Partner</span>
            </div>

            {/* Word-level animated rotating headline */}
            <h1
              className={`font-normal text-[80px] leading-[96px] tracking-[-0.02em] text-[#E4E9F2] text-center`}
              style={{
                fontFeatureSettings: '"liga" 1, "kern" 1',
                fontOpticalSizing: 'auto',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              {headlineWords.map((w, i) => (
                <motion.span
                  key={`${headlineKey}-${i}-${w}`}
                  className="inline-block mr-[0.3em]"
                  initial={{ opacity: 0, y: 14, rotateX: 30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
                >
                  {w}
                </motion.span>
              ))}
            </h1>

            <p
              className="mt-4 text-center"
              style={{ fontFamily: 'Inter, "Inter Placeholder", sans-serif', fontWeight: 400, color: 'rgb(255, 255, 255)', fontSize: '18px', lineHeight: '28px' }}
            >
              {transforms.hero.subtitle}
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <a
                href="#contact"
                className="rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-[20px]"
                style={{ background: 'rgba(4,7,13,0.15)' }}
              >
                {transforms.hero.cta}
              </a>
              <a
                href="#proof"
                className="rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-[20px]"
                style={{ background: 'rgba(4,7,13,0.15)' }}
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
