import { Inter, Work_Sans, Quintessential } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const quintessential = Quintessential({
  subsets: ['latin'],
  variable: '--font-quintessential',
  display: 'swap',
  weight: ['400'],
});

export const instrumentSerif = Inter({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const plusJakartaSans = Inter({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});