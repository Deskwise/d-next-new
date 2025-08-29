'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { slideUp, viewportDefaults } from '@/lib/motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectorStyle, setSelectorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'ThinkWise', href: '/thinkwise' },
    { name: 'Invisible Engine', href: '/invisible-engine' },
    { name: 'Orchestrations', href: '/orchestrations' },
    { name: 'Proof', href: '/proof' },
    { name: 'Pricing', href: '/pricing' },
  ];

  useEffect(() => {
    const updateSelector = () => {
      if (navRef.current) {
        const activeItem = navRef.current.children[activeTab] as HTMLElement;
        if (activeItem) {
          const { offsetLeft, offsetWidth } = activeItem;
          setSelectorStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          });
        }
      }
    };

    updateSelector();
    window.addEventListener('resize', updateSelector);
    return () => window.removeEventListener('resize', updateSelector);
  }, [activeTab]);

  return (
    <motion.nav
      variants={slideUp}
      initial="initial"
      whileInView="animate"
      viewport={viewportDefaults}
      className="fixed top-0 left-0 right-0 z-50 bg-[rgba(4,7,13,0.8)] backdrop-blur-[20px] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
                             <img
                 src="/images/Deskwise_logo.svg"
                 alt="Deskwise logo"
                 className="h-5 w-auto"
                 style={{
                   filter: 'drop-shadow(0 0 4px rgba(166, 218, 255, 0.9)) drop-shadow(0 0 8px rgba(166, 218, 255, 0.7)) drop-shadow(0 0 12px rgba(166, 218, 255, 0.5))'
                 }}
               />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 relative">
              <div 
                ref={navRef}
                className="flex items-baseline relative"
                style={{ padding: '10px 0' }}
              >
                {/* Animated Selector */}
                <div
                  className="absolute top-0 h-full bg-[#04070C] border-2 border-[#a6daff] rounded-t-[15px] border-b-0"
                  style={{
                    ...selectorStyle,
                    marginTop: '10px',
                    transition: 'left 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), width 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  }}
                >
                  {/* Left curve - inward */}
                  <div className="absolute -left-[25px] bottom-0 w-[25px] h-[25px] bg-[rgba(4,7,13,0.8)]">
                    <div className="absolute bottom-0 right-0 w-[25px] h-[25px] rounded-full shadow-[25px_25px_0_0_#04070C] border-r-2 border-b-2 border-[#a6daff]"></div>
                  </div>
                  {/* Right curve - inward */}
                  <div className="absolute -right-[25px] bottom-0 w-[25px] h-[25px] bg-[rgba(4,7,13,0.8)]">
                    <div className="absolute bottom-0 left-0 w-[25px] h-[25px] rounded-full shadow-[-25px_25px_0_0_#04070C] border-l-2 border-b-2 border-[#a6daff]"></div>
                  </div>
                </div>

                {/* Navigation Items */}
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative z-10 px-5 py-4 text-sm font-medium transition-all duration-300 ${
                      index === activeTab ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
                    onMouseEnter={() => setActiveTab(index)}
                    onClick={() => setActiveTab(index)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/book-xray"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ background: 'var(--gradient-button)' }}
            >
              Book Free X‑Ray →
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[rgba(4,7,13,0.95)] backdrop-blur-[20px]">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="/book-xray"
                className="block w-full text-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-glow"
                style={{ background: 'var(--gradient-button)' }}
                onClick={() => setIsOpen(false)}
              >
                Book Free X‑Ray →
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}