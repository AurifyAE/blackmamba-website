import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ProductList from "../components/ProductList";
import FeaturedProperties from "../components/FeaturedProperties";
import SearchBar from "../components/SearchBar";
import Breadcrumbs from "../components/Breadcrumbs";

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
        {/* Breadcrumbs over hero with high z-index */}
        <div className="absolute top-0 left-0 w-full z-50">
          <div className="px-4 sm:px-5 md:px-15">
            <div className="max-w-7xl mx-auto pt-20">
              <Breadcrumbs />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 mb-30">
          
          <h1 className="text-white text-4xl md:text-6xl max-w-xs md:max-w-xl font-semibold leading-12 md:leading-16 mt-8">Where Happiness Finds a Home</h1>
          <p className="mt-4 text-white/90 text-base md:text-lg">READY TO MOVE RENTAL APARTMENTS</p>
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
