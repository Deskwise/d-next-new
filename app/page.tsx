import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Features from "@/components/Features";
import LogoMarquee from "@/components/LogoMarquee";
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
      <ValueProps />
      
      {/* How Deskwise Works Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A pipeline built for results
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Deskwise takes you from question to proof in days. Our structured, five‑phase ThinkWise pipeline and our Invisible Engine ensure every action is validated, reversible and grounded in measurable results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/thinkwise"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Dive into ThinkWise →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Features />
      
      {/* Proof You Can Trust Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Proof you can trust
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Deskwise isn&apos;t theory. It&apos;s measurable transformation. Our early customers reclaimed over 12 hours per person in the first week and cut decision cycles by 3×. With 96% option approval rates, our proofs drive real business impact.
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col text-center">
                <dt className="text-4xl font-bold text-white">12+</dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  hours saved per user in week one
                </dd>
              </div>
              <div className="flex flex-col text-center">
                <dt className="text-4xl font-bold text-white">3×</dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  faster decisions with Boardroom proofs
                </dd>
              </div>
              <div className="flex flex-col text-center">
                <dt className="text-4xl font-bold text-white">96%</dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  approval rate on recommended options
                </dd>
              </div>
            </dl>
          </div>

          {/* Mini Case Study */}
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                SaaS Startup (Colorado Springs)
              </h3>
              <p className="text-gray-300 mb-4">
                A 15‑person team used the Lead Finder & Enricher and Campaign Lift‑Off orchestrations to save 25 hours/week and secure investor confidence by presenting their proofs in a shareable microsite.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/book-xray"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book Your Free Friction X‑Ray →
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-Up Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay ahead of ghost work
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get exclusive insights on productivity, automation and AI straight to your inbox.
            </p>
            <form className="mt-10 flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <LogoMarquee logos={clientLogos} />
      <SiteFooter />
    </main>
  );
}
