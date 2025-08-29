import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

export default function InvisibleEnginePage() {
  return (
    <main className="bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Invisible Engine: your background crew
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Install a tireless operations team that orchestrates tasks, integrates tools and publishes results while you sleep.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/pricing"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Plans →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Install Background Crew Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Install the Background Crew
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The Invisible Engine orchestrates tasks behind the scenes so you don't have to. It listens, coordinates, and implements — quietly powering your workflows and automations without interrupting you.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Powerful Features
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  Multi‑tenant workspaces
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Collaborate across teams with row‑level security and role‑based landings. Everyone sees only what they need.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  Microsites & demos
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Generate shareable, read‑only microsites that showcase proofs; includes Uber Mode for live demos and dynamic continuation.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  Secure & compliant
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Data is encrypted at rest and in transit, redacted when sharing, and validated by the Legal seat.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-white">
                  Observability & cost control
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Real‑time dashboards show spend, progress and caps, ensuring you never worry about runaway costs. Billing UX is as polished as product UX.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Early Adopter Perks Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Limited early adopter slots
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              For a limited time, early adopters receive premium support and lifetime discounts on Growth and Scale plans. Only 25 slots remain — reserve yours today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/pricing"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Choose Your Plan →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/book-xray"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a Free Friction X‑Ray →
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
