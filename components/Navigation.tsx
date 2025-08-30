'use client';
import PillNav from './PillNav';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'ThinkWise', href: '/thinkwise' },
    { label: 'Invisible Engine', href: '/invisible-engine' },
    { label: 'Orchestrations', href: '/orchestrations' },
    { label: 'Proof', href: '/proof' },
    { label: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[rgba(4,7,13,0.8)] backdrop-blur-[20px] border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          
          {/* Logo/Wordmark */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Deskwise_logo.svg"
                alt="Deskwise logo"
                width={120}
                height={32}
                className="h-8 w-auto"
                style={{
                  filter: 'drop-shadow(0 0 2px rgba(166, 218, 255, 1.0)) drop-shadow(0 0 6px rgba(166, 218, 255, 0.6)) drop-shadow(0 0 10px rgba(166, 218, 255, 0.3))',
                }}
              />
            </Link>
          </div>

          {/* Centered Pill Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
            <PillNav
              logo="/images/owl_icon.png"
              logoAlt="Deskwise Owl Logo"
              items={navigation}
              baseColor="#04070C"
              pillColor="#04070C"
              hoveredPillTextColor="#000000"
              pillTextColor="#ffffff"
              initialLoadAnimation={false}
            />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
                                                   <Link
                href="/book-xray"
                                                               className="rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
               style={{ background: 'rgba(4,7,13,0.8)' }}
              >
                Book Free X‑Ray →
              </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}