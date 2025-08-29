import type { Metadata } from "next";
import { Inter, Work_Sans, Quintessential, Instrument_Serif } from 'next/font/google';
import "./globals.css";
import LenisProvider from "./lenis-provider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const quintessential = Quintessential({
  subsets: ['latin'],
  variable: '--font-quintessential',
  display: 'swap',
  weight: ['400']
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Deskwise — From Busy to Big",
  description: "Listening-First Decision Lab. We diagnose the real question, then ship proof you can deploy. Executive X-Ray, Proof Sprint, ResearchOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${workSans.variable} ${quintessential.variable} ${instrumentSerif.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
