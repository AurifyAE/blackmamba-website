import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ProductList from "../components/ProductList";
import FeaturedProperties from "../components/FeaturedProperties";
import SearchBar from "../components/SearchBar";

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
          {/* Search Bar Component */}
          <SearchBar />
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
