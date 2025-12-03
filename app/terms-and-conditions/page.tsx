import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="px-4 sm:px-5 md:px-15 py-20 md:py-30 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600">
            These terms outline the rules and guidelines for using BlackMamba Real Estate&apos;s services. The full policy will be published soon. Please check back for updates.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

