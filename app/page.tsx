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
      <Hero />
      <ValueProps />

      {/* Why Deskwise Section */}
      <section className="py-24 sm:py-32 bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Deskwise?
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Transform ghost work into proof‑driven progress and reclaim your time.
            </p>
            <div className="mt-12 text-left">
              <div className="space-y-8 text-lg leading-8 text-gray-300">
                <p>
                  <strong className="text-white">Eliminate ghost work:</strong> Deskwise frees your team from repetitive tasks, document chaos and decision paralysis. You focus on what matters—strategy and growth.
                </p>
                <p>
                  <strong className="text-white">Proof‑first pipeline:</strong> Our five‑phase ThinkWise process (Listen, Diagnose, Prove, Validate, Scale) delivers reversible, measurable results. Every step produces a versioned artifact you can trust.
                </p>
                <p>
                  <strong className="text-white">Invisible Engine:</strong> Automated orchestrations, microsites and demos work in the background like a silent operations crew—letting one person perform like an elite team.
                </p>
                <p>
                  <strong className="text-white">Expert oversight:</strong> Cross‑functional teams of specialized experts review and validate each deliverable, bringing market, product, data, engineering and legal expertise to your decisions.
                </p>
                <p>
                  <strong className="text-white">Rapid ROI:</strong> Early customers saved 12+ hours per week and accelerated decision cycles 3×. We guarantee a working proof or your money back.
                </p>
                <p>
                  <strong className="text-white">Predictable pricing:</strong> Transparent tiers with flexible usage add‑ons ensure you pay only for the value you capture—no hidden fees.
                </p>
              </div>
            </div>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <a
                href="/book-xray"
                className="rounded-xl px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-[20px]"
                style={{ background: 'rgba(4,7,13,0.8)' }}
              >
                Book Your Free Friction X‑Ray →
              </a>
            </div>
          </div>
        </div>
      </section>

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
                className="rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-[20px]"
                style={{ background: 'rgba(4,7,13,0.8)' }}
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
              className="rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-[20px]"
              style={{ background: 'rgba(4,7,13,0.8)' }}
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
                className="flex-none rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-[20px]"
                style={{ background: 'rgba(4,7,13,0.8)' }}
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
