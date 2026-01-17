import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: 'Monthly Short and Long Term Properties for Rent in Dubai',
  description: 'Best and fully full furnished luxury 1 bed room, 3 bed room homes, flexible rentals, short and long Stay in Dubai. Premium Waterfront, Dual Balcony, swimming pool apartments in dubai',
  keywords: 'rental properties in Dubai, Properties in Dubai luxury flat in dubai, flexible rentals stays in Dubai, full furnished rental flat in Dubai, full facility rental in dubai, rental stay in dubai, premium rental stay in dubai',
  openGraph: {
    title: 'Monthly Short and Long Term Properties for Rent in Dubai',
    description: 'Best fully furnished luxury apartments for rent in Dubai.',
    url: 'https://www.blackmamba.realestate/faq',
  },
  alternates: {
    canonical: 'https://www.blackmamba.realestate/faq',
  },
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="px-4 sm:px-5 md:px-15 py-20 md:py-30 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">
            We&apos;re compiling the most common questions about buying, renting, and short stays with BlackMamba Real Estate. A detailed FAQ will be available soon.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

