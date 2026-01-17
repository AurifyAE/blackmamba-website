import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata = {
  title: 'Fully Furnished | Short Stay | Long Stay Apartments in Dubai',
  description: 'Low budget full furnished luxury homes, flexible rentals, short and long Stay in Dubai. 1 Bed room, 3 Bed room Waterfront and swimming pool apartments for rent in Dubai',
  keywords: 'rental properties in Dubai, Properties in Dubai luxury flat in dubai, flexible rentals stays in Dubai, full furnished rental flat in Dubai, full facility rental in dubai, rental stay in dubai, premium rental stay in dubai',
  openGraph: {
    title: 'Fully Furnished | Short Stay | Long Stay Apartments in Dubai',
    description: 'Low budget full furnished luxury apartments for rent in Dubai.',
    url: 'https://www.blackmamba.realestate/privacy-policy',
  },
  alternates: {
    canonical: 'https://www.blackmamba.realestate/privacy-policy',
  },
  robots: {
    index: false,
    follow: true,
  },
};


export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="px-4 sm:px-5 md:px-15 py-20 md:py-30 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            We respect your privacy and are committed to protecting your personal data. This page will be updated soon with complete details about how we collect, use, and safeguard information.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

