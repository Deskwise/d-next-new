import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../public/fonts/inter/inter-1.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/inter-2.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/inter-3.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/inter-4.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/inter-5.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/inter-6.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/inter-7.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/inter-8.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter/inter-9.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const instrumentSerif = localFont({
  src: [
    {
      path: '../public/fonts/instrument-serif/instrument-serif-1.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/instrument-serif/instrument-serif-2.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const plusJakartaSans = localFont({
  src: '../public/fonts/plus-jakarta-sans/plus-jakarta-sans-1.woff2',
  variable: '--font-plus-jakarta-sans',
  weight: '200 800',
  display: 'swap',
});