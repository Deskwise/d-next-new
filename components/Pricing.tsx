'use client';


export default function Pricing() {
  const plans = [
    {
      name: "Core",
      tagline: "Perfect for small teams",
      price: "≈$250–$400/month",
      features: [
        "3 seats",
        "ThinkWise pipeline",
        "5 orchestrations/month",
        "1 microsite",
        "Basic automations & integrations",
        "Standard support"
      ],
      cta: "Choose Core →"
    },
    {
      name: "Growth",
      tagline: "Best value",
      price: "≈$800–$1,200/month",
      features: [
        "8 seats",
        "20 orchestrations/month",
        "3 microsites",
        "Advanced automations & integrations",
        "Priority support",
        "14‑day Growth trial"
      ],
      cta: "Choose Growth →",
      popular: true
    },
    {
      name: "Scale",
      tagline: "For large teams",
      price: "starting ~$2,500/month, custom",
      features: [
        "20 seats (expandable)",
        "100 orchestrations/month",
        "Unlimited microsites",
        "API access & SSO",
        "Premium support & SLA"
      ],
      cta: "Talk to Sales →"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Scale at your pace
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Choose the plan that fits your team. Upgrade anytime, downgrade without losing your work.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/book-xray"
              className="rounded-xl px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-[20px]"
              style={{ background: 'rgba(4,7,13,0.8)' }}
            >
              Start With a Friction X‑Ray →
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 ring-1 ring-gray-700 ${
                  plan.popular ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-2 text-sm font-medium text-white text-center">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className={`text-lg font-semibold leading-8 ${plan.popular ? 'text-gray-900' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-4 text-sm leading-6 ${plan.popular ? 'text-gray-600' : 'text-gray-300'}`}>
                    {plan.tagline}
                  </p>
                  <p className={`mt-6 flex items-baseline justify-center gap-x-1 ${plan.popular ? 'text-gray-900' : 'text-white'}`}>
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  </p>
                  <a
                    href={plan.name === "Scale" ? "/contact" : "/book-xray"}
                    className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      plan.popular
                        ? 'bg-gray-900 text-white hover:bg-gray-700 focus-visible:outline-gray-900'
                        : 'bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
                <ul className={`mt-8 space-y-3 text-sm leading-6 ${plan.popular ? 'text-gray-600' : 'text-gray-300'}`}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-x-3">
                      <svg
                        className={`h-6 w-5 flex-none ${plan.popular ? 'text-gray-900' : 'text-white'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Usage & Add-Ons Section */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-8">
            Usage & Add‑Ons
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Additional orchestrations</h4>
              <p className="text-gray-300 text-sm">
                Buy extra runs in packs (e.g., 5 runs for $100). Align cost with value and let businesses scale at will.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">AI compute credits</h4>
              <p className="text-gray-300 text-sm">
                Purchase credit packs (e.g., 1,000 credits for $100) for heavy tasks. Credits create an abstraction between usage and outcomes.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Outcome‑based pilots</h4>
              <p className="text-gray-300 text-sm">
                For high‑stakes projects, pay a base fee plus a success fee tied to agreed outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Accelerators Section */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-8">
            Accelerators
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Friction X‑Ray (Free)</h4>
              <p className="text-gray-300 text-sm">
                A complimentary diagnostic that surfaces your biggest ghost work hotspots and outlines your path from busy to big.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Proof Sprint ($999–$2,500)</h4>
              <p className="text-gray-300 text-sm">
                A 48‑hour proof run; if we can&apos;t deliver a usable result, your sprint is free.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="flex items-center justify-center gap-x-6">
            <a
              href="/pricing"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Choose Your Plan →
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              Need help deciding? Book a call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}