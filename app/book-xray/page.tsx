import Navigation from "@/components/Navigation";
import SiteFooter from "@/components/SiteFooter";

export default function BookXRayPage() {
  return (
    <main className="bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get Your Friction X‑Ray
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              A free diagnostic that reveals hidden ghost work and outlines your path from Busy to Big.
            </p>
          </div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              What's Included
            </h2>
            <div className="text-left space-y-6 text-lg leading-8 text-gray-300">
              <p>
                The Friction X‑Ray includes a brief assessment of your workflows, a summary of your ghost work hotspots, and recommended options. Emphasize that it's no‑obligation and that your team will get immediate insights.
              </p>
              <p className="text-yellow-400 font-semibold">
                Only a limited number of free X‑Ray slots are available each month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Form Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
              Schedule Your X‑Ray
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
                <label htmlFor="role" className="block text-sm font-medium text-white">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your job title"
                />
              </div>
              <div>
                <label htmlFor="team-size" className="block text-sm font-medium text-white">
                  Team Size
                </label>
                <select
                  name="team-size"
                  id="team-size"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select team size</option>
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>200+ employees</option>
                </select>
              </div>
              <div>
                <label htmlFor="challenges" className="block text-sm font-medium text-white">
                  Biggest Challenges
                </label>
                <textarea
                  name="challenges"
                  id="challenges"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Describe your biggest productivity challenges..."
                />
              </div>
              <div>
                <label htmlFor="preferred-date" className="block text-sm font-medium text-white">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferred-date"
                  id="preferred-date"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="preferred-time" className="block text-sm font-medium text-white">
                  Preferred Time
                </label>
                <select
                  name="preferred-time"
                  id="preferred-time"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Select time</option>
                  <option>9:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 1:00 PM</option>
                  <option>1:00 PM - 3:00 PM</option>
                  <option>3:00 PM - 5:00 PM</option>
                </select>
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule Your X‑Ray →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
              What Our Customers Say
            </h2>
            <blockquote className="text-lg leading-8 text-gray-300 italic">
              "The Friction X‑Ray uncovered tasks we'd been blindly doing for years. Within a week, Deskwise automated them and we felt the relief."
            </blockquote>
            <p className="mt-4 text-white font-semibold">
              — Michael Chen, COO, Colorado Springs
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
