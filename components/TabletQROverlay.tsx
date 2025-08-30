'use client';
import Image from 'next/image';

export default function TabletQROverlay() {
  return (
    <div className="tablet-qr-overlay">
      <div className="qr-container">
        <Image
          src="/images/qr-code_done.png"
          alt="Scan QR code to visit website on your phone"
          width={220}
          height={220}
          className="qr-code-image"
          priority={false}
        />
        <p className="qr-text">Scan to visit on your phone</p>
      </div>
      
      <style jsx>{`
        .tablet-qr-overlay {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          pointer-events: none;
        }
        
        .qr-container {
          background: rgba(4, 7, 13, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          text-align: center;
        }
        
        .qr-code-image {
          border-radius: 8px;
          filter: brightness(1.1);
        }
        
        .qr-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
          margin-top: 8px;
          margin-bottom: 0;
          font-weight: 500;
        }
        
        /* Show QR code on tablet-sized screens (768px - 1024px) */
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          .tablet-qr-overlay {
            display: block;
          }
        }
        
        /* Also show on larger tablets in landscape */
        @media screen and (min-width: 1024px) and (max-width: 1366px) and (max-height: 1024px) {
          .tablet-qr-overlay {
            display: block;
          }
        }
        
        /* Tablet-specific optimizations */
        @media screen and (min-width: 768px) and (max-width: 1366px) {
          /* Larger touch targets */
          :global(button), :global(a) {
            min-height: 48px;
            min-width: 48px;
          }
          
          /* Larger font sizes for better readability */
          :global(body) {
            font-size: 18px;
            line-height: 1.6;
          }
          
          :global(h1) {
            font-size: 3.5rem;
          }
          
          :global(h2) {
            font-size: 2.5rem;
          }
          
          :global(h3) {
            font-size: 2rem;
          }
          
          /* More spacing for easier touch interaction */
          :global(.space-y-1) > * + * {
            margin-top: 0.75rem;
          }
          
          :global(.space-x-1) > * + * {
            margin-left: 0.75rem;
          }
          
          /* Larger navigation pills */
          :global(.rounded-full) {
            padding: 12px 24px;
          }
        }
      `}</style>
    </div>
  );
}