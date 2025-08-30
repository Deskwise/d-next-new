import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export default function ThinkWisePage() {
  return (
    <main className="bg-dark text-white">
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              ThinkWise: from question to proof in days
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A structured pipeline with five phases, expert committees and stage gates ensures every decision is informed, reversible and grounded in reality.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/book-xray"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start with a Free Friction X‑Ray →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Five Phases Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Five Phases in Detail
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  Listen (Think & Gather)
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Capture context, constraints and goals in a one‑page Executive Brief. This brief becomes the single source of truth for all future stages.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  Diagnose (Plan)
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Generate multiple options, list their pros, cons, risks and acceptance criteria. Provide a recommended &quot;safe default&quot; and an estimated cost for each.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  Prove (Prototype)
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Build a prototype or proof‑of‑concept using orchestrations. Show before/after metrics and potential ROI.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-lg font-bold">4</span>
                  </div>
                  Validate (Committee Review)
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Expert committees in Market, Product, Data & Finance, Engineering & Ops, and Legal & Compliance sign off on the proof. Their notes and redactions are stored in your Boardroom.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <span className="text-lg font-bold">5</span>
                  </div>
                  Scale (Ship)
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Turn proofs into production‑ready automations and scale across your organisation, always with a reversible path and change log.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Committees of Experts
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Every major decision is reviewed by cross‑disciplinary committees. Each seat (Market & Narrative, Product & Strategy, Data & Finance, Engineering & Ops, Legal & Compliance) signs off, providing transparency and authority to every step.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Sprints Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Proof Sprints — Results in 48 Hours
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              In just two days, our team delivers a working proof aligned with your goal. If we can&apos;t provide a usable proof, you get a full refund. Perfect for testing new ideas or priorities without a long-term commitment.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/book-sprint"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a Proof Sprint →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Boardroom Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Executive Boardroom
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our Boardroom gives leaders a read‑only, executive‑friendly view of the latest proofs, options and next actions. It eliminates long status meetings and enables fast, informed decisions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/book-xray"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Free Friction X‑Ray →
              </a>
              <a
                href="/proof"
                className="text-sm font-semibold leading-6 text-white"
              >
                See Proofs →
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
