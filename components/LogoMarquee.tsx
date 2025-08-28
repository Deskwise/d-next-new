'use client';
import Image from 'next/image';

export default function LogoMarquee({ logos }: { logos: string[] }) {
  return (
    <div className="overflow-hidden py-8 bg-white/5">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {logos.concat(logos).map((src, i) => (
          <Image 
            key={i} 
            src={src} 
            alt="" 
            width={32}
            height={32}
            sizes="32px"
            className="mx-8 h-8 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee { 
          0% { transform: translateX(0) } 
          100% { transform: translateX(-50%) } 
        }
      `}</style>
    </div>
  );
}