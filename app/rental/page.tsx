import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ProductList from "../components/ProductList";
import FeaturedProperties from "../components/FeaturedProperties";

export default function Rental() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section - Same as Homepage */}
      <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
        <Image
          src="/images/rental/rental-banner.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 mb-18">
          {/* Top-right buttons over the hero */}
          <div className="mt-6 w-full max-w-4xl mx-auto flex justify-start px-2">
            <span className="px-4 py-2 text-sm md:text-base bg-white text-black">Buy</span>
            <span className="px-4 py-2 text-sm md:text-base bg-black text-white">Rent</span>
            <span className="px-4 py-2 text-sm md:text-base bg-[#A97C50] text-white">Short Stays</span>
          </div>
          {/* Search bar */}
          <div className="w-full max-w-4xl mx-auto px-2">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search by location, property, or brand"
                className="flex-1 h-12 px-4 bg-white text-black border border-white/60 placeholder-black/60"
              />
              <button className="h-12 px-4 bg-black text-white border-4 border-white hover:bg-[#A97C50] transition-all duration-500 font-medium text-sm sm:text-base">
                <Image src="/images/search-icon.svg" alt="" width={20} height={20} />
              </button>
            </div>
          </div>
          <h1 className="text-white text-4xl md:text-6xl max-w-xl font-semibold leading-16 mt-8">Where Happiness Finds a Home</h1>
        </div>
      </section>
      <ProductList />
      <section className="px-4 sm:px-5 md:px-15 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <FeaturedProperties />
        </div>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}
