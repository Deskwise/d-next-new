'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { slideUp, viewportDefaults } from '@/lib/motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'ThinkWise', href: '/thinkwise' },
    { name: 'Invisible Engine', href: '/invisible-engine' },
    { name: 'Orchestrations', href: '/orchestrations' },
    { name: 'Proof', href: '/proof' },
    { name: 'Pricing', href: '/pricing' },
  ];

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
                 className="h-6 w-auto"
                                   style={{
                    filter: 'drop-shadow(0 0 2px rgba(166, 218, 255, 1.0)) drop-shadow(0 0 6px rgba(166, 218, 255, 0.6)) drop-shadow(0 0 10px rgba(166, 218, 255, 0.3))',
                    stroke: 'rgba(166, 218, 255, 0.8)',
                    strokeWidth: '1px'
                  }}
               />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center">
              <div className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-white/50 bg-transparent">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xs font-medium transition-colors"
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
                                                               className="rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
               style={{ background: 'rgba(4,7,13,0.8)' }}
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
                                     className="block w-full text-center rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
                   style={{ background: 'rgba(4,7,13,0.8)' }}
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