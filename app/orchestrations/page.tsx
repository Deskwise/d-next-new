import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

export default function OrchestrationsPage() {
  const playbooks = [
    {
      title: "Campaign Lift‑Off",
      inputs: "brand, audience, offer, goal",
      output: "angle, hooks, creative directions, calendar, drafts",
      time: "≤ 48 hours",
      cta: "Launch Lift‑Off →"
    },
    {
      title: "Lead Finder & Enricher",
      inputs: "industry, persona criteria",
      output: "lists of qualified leads with enriched firmographic data",
      time: "≤ 48 hours",
      cta: "Find Leads →"
    },
    {
      title: "Numbers → Story",
      inputs: "metrics or raw data",
      output: "narrative summary with visuals, insights, next‑step options",
      time: "≤ 48 hours",
      cta: "Tell My Story →"
    },
    {
      title: "PDF → Decision",
      inputs: "PDF or dense document",
      output: "a distilled decision table with pros, cons, risks and a recommended option",
      time: "≤ 48 hours",
      cta: "Make a Decision →"
    },
    {
      title: "Morning Ops Brief",
      inputs: "None – runs automatically each morning",
      output: "a concise briefing covering key metrics, tasks, and decisions",
      time: "≤ 48 hours",
      cta: "Start My Day →"
    },
    {
      title: "SOP in an Afternoon",
      inputs: "description of a workflow",
      output: "a fully documented standard operating procedure with versioning and compliance notes",
      time: "≤ 48 hours",
      cta: "Document It →"
    },
    {
      title: "Market X‑Ray (Educational)",
      inputs: "product or service description",
      output: "market overview, TAM analysis, competitor matrix, recommended positioning and strategic risks",
      time: "≤ 48 hours",
      cta: "Scan My Market →"
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
              One‑Click Orchestrations
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Turn common pains into visible progress. Each playbook returns a proof in ≤ 48 hours.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/book-sprint"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Run a Playbook →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose a playbook, provide minimal inputs and let our background crew do the rest. Our Planner designs the workflow, the Implementer executes it, and the Validator checks outputs for quality and compliance. You&apos;ll receive a proof summary with default next actions. If we can&apos;t deliver, your run is free.
            </p>
          </div>
        </div>
      </section>

      {/* Playbook Cards Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Available Playbooks
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {playbooks.map((playbook, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-4">{playbook.title}</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div>
                    <span className="font-medium text-white">Inputs:</span> {playbook.inputs}
                  </div>
                  <div>
                    <span className="font-medium text-white">What you get:</span> {playbook.output}
                  </div>
                  <div>
                    <span className="font-medium text-white">Time to proof:</span> {playbook.time}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="/book-sprint"
                    className="text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    {playbook.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Sprint Upsell Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Upgrade to a Proof Sprint
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Need more depth? Upgrade any playbook to a 48‑hour Proof Sprint. If we can&apos;t deliver a usable proof, your run is on us. Great for high‑stakes projects or custom workflows.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/book-sprint"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book a Proof Sprint →
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
