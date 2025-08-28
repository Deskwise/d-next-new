import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import SiteFooter from "@/components/SiteFooter";

const clientLogos = [
  "/images/EdYwMQFSY0q3kCvKPrFpiTV5w.png",
  "/images/GuFZFCQnRSOpKJkAPlCkaRUGIjc.png", 
  "/images/JIIlDuVwdfJZuOpFYqQevpNQRrU.png",
  "/images/JR3P7kajBqC7kAHbwF66sBvACw.png",
  "/images/KpbhecEzWQ4dFSutqcW3lQOGNk.png",
  "/images/LMV9IYKI2TkgMh5KmQhbeIV2A.png"
];

export default function Home() {
  return (
    <main className="bg-dark text-white">
      <Navigation />
      <Hero />
      <LogoMarquee logos={clientLogos} />
      <ValueProps />
      <Features />
      <Pricing />
      <SiteFooter />
    </main>
  );
}
