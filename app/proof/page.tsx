import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

export default function ProofPage() {
  const successSnapshots = [
    {
      company: "Startup X (Colorado Springs)",
      result: "reclaimed 80 hours/month and accelerated product launches by 3× using the Morning Ops Brief and Lead Finder. Their investors were impressed by the clarity of the proof summary.",
      quote: "The proof summary gave our investors confidence in our execution capabilities."
    },
    {
      company: "Agency Y (Colorado Springs)",
      result: "turned chaotic briefs into board‑ready options using Numbers → Story and Campaign Lift‑Off. They increased client retention by 20%.",
      quote: "Our clients now see clear, actionable insights instead of raw data."
    },
    {
      company: "Operations Team Z (Colorado Springs)",
      result: "reduced document churn and validation errors by 90% via PDF → Decision and SOP in an Afternoon.",
      quote: "We've eliminated the back-and-forth that was killing our productivity."
    }
  ];

  return (
    <main className="bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Proof: see the transformation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Real results from teams that removed their ghost work and installed the background crew.
            </p>
          </div>
        </div>
      </section>

      {/* Success Snapshots Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Success Snapshots
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {successSnapshots.map((snapshot, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-white mb-4">{snapshot.company}</h3>
                <p className="text-gray-300 mb-6">{snapshot.result}</p>
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-300">
                  &quot;{snapshot.quote}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Artifacts Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sample Artifacts
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Show screenshots or snippets of an executive brief, options page or proof summary. Emphasize clarity and brevity (appealing to &quot;skimming&quot; executives).
            </p>
            <div className="mt-10 bg-gray-800 rounded-lg p-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-4">Executive Brief Example</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div><strong>Goal:</strong> Reduce customer onboarding time by 50%</div>
                  <div><strong>Constraints:</strong> Budget $10k, timeline 30 days</div>
                  <div><strong>Success Metrics:</strong> Time to first value, customer satisfaction</div>
                  <div><strong>Recommended Approach:</strong> Automated welcome sequence with personalized onboarding paths</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Summarize the reasons to believe: structured pipeline, expert committees, stage gates, reversible steps, and a proof‑first philosophy. Link back to ThinkWise for details.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/thinkwise"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Learn about ThinkWise →
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
              <a
                href="/orchestrations"
                className="text-sm font-semibold leading-6 text-white"
              >
                See Orchestrations →
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
