import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

export default function BookSprintPage() {
  return (
    <main className="bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Book a Proof Sprint
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A 48‑hour sprint that guarantees a proof or you don't pay. Perfect for testing new ideas or priorities without a long-term commitment.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              What's Included
            </h2>
            <div className="text-left space-y-6 text-lg leading-8 text-gray-300">
              <p>
                In just two days, our team delivers a working proof aligned with your goal. If we can't provide a usable proof, you get a full refund.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>48-hour dedicated sprint team</li>
                <li>Working proof-of-concept</li>
                <li>Before/after metrics</li>
                <li>Implementation roadmap</li>
                <li>100% money-back guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              Pricing
            </h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Proof Sprint</h3>
              <p className="text-4xl font-bold text-white mb-2">$999 - $2,500</p>
              <p className="text-gray-300 mb-6">Based on complexity and scope</p>
              <ul className="text-left space-y-2 text-gray-300">
                <li>• 48-hour dedicated sprint</li>
                <li>• Working proof-of-concept</li>
                <li>• Measurable results</li>
                <li>• Implementation guide</li>
                <li>• Money-back guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
              Book Your Sprint
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="project-goal" className="block text-sm font-medium text-white">
                  Project Goal
                </label>
                <textarea
                  name="project-goal"
                  id="project-goal"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Describe what you want to achieve with this sprint..."
                />
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-white">
                  Preferred Timeline
                </label>
                <select
                  name="timeline"
                  id="timeline"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select timeline</option>
                  <option>This week</option>
                  <option>Next week</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1 month</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-white">
                  Budget Range
                </label>
                <select
                  name="budget"
                  id="budget"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select budget range</option>
                  <option>$999 - $1,500</option>
                  <option>$1,500 - $2,000</option>
                  <option>$2,000 - $2,500</option>
                  <option>Custom quote needed</option>
                </select>
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book Your Sprint →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              Our Guarantee
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              If we can't deliver a usable proof within 48 hours, your sprint is completely free. No questions asked.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
