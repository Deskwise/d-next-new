import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./lenis-provider";
import { inter, instrumentSerif, plusJakartaSans } from "./fonts";

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
        className={`${inter.variable} ${instrumentSerif.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
