import Pricing from "@/components/Pricing";
import SiteFooter from "@/components/SiteFooter";

export default function PricingPage() {
  return (
    <main className="bg-dark text-white">
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Pricing & Plans
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose the plan that fits your team. Upgrade anytime, downgrade without losing your work.
            </p>
          </div>
        </div>
      </section>

      <Pricing />
      <SiteFooter />
    </main>
  );
}
