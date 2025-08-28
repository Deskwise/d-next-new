'use client';
import { motion } from 'motion/react';
import { transforms } from '@/lib/content-mapping';
import { hoverLift, tapScale } from '@/lib/motion';
import Image from 'next/image';

export default function Navigation() {
  const navItems = [
    { label: transforms.navigation.Services, href: '#why' },
    { label: transforms.navigation.Process, href: '#method' },
    { label: transforms.navigation.Pricing, href: '#plans' },
    { label: transforms.navigation.Blog, href: '#proof' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/75 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-2">
          <motion.div 
            className="flex items-center"
            {...hoverLift}
          >
            <img
              src="/images/Deskwise_logo.svg"
              alt="Deskwise logo"
              className="h-6 w-auto"
              style={{
                filter: 'drop-shadow(0 0 2px rgba(166, 218, 255, 0.9)) drop-shadow(0 0 6px rgba(166, 218, 255, 0.6)) drop-shadow(0 0 10px rgba(166, 218, 255, 0.3))'
              }}
            />
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 rounded-sm"
                whileHover={{ 
                  y: -2,
                  color: 'rgb(255 255 255)',
                  transition: { duration: 0.2 }
                }}
                {...tapScale}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-black hover:bg-brand/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              {...tapScale}
            >
              Book A Free Call
            </motion.a>
          </div>
          
          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <motion.button 
              className="text-white p-2"
              whileHover={{ scale: 1.1 }}
              {...tapScale}
            >
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}