import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import HomeCarousel from "./components/HomeCarousel";
import ProductCard from "./components/ProductCard";
import FeaturedProperties from "./components/FeaturedProperties";
import Amenities from "./components/Amenities";
import ContactNavbar from "./components/ContactNavbar";
import SearchBar from "./components/SearchBar";
import { properties } from "../data/properties";

export default function Home() {
  
  const carouselImages = [
    {
      src: '/images/carousel1.png',
      alt: 'Beautiful landscape',
      title: 'Mountain Vista',
      description: 'Breathtaking mountain views at sunset'
    },
    {
      src: '/images/carousel2.jpg',
      alt: 'City skyline',
      title: 'Urban Skyline',
      description: 'Modern city architecture'
    },
    {
      src: '/images/carousel3.png',
      alt: 'Ocean waves',
      title: 'Ocean Waves',
      description: 'Peaceful coastal scenery'
    }
  ]

  return (
    <main>
      <Navbar />
      <section id="hero" className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
        <Image
          src="/images/heroImage.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tight">Elevate Your Lifestyle</h1>
          <p className="mt-4 text-white/90 text-base md:text-lg">Discover exclusive homes, flexible rentals, and luxury stays all under one iconic brand</p>
          
          {/* Search Bar Component */}
          <div className="mt-6">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-5 md:px-15 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">A Short Glimpse through the Properties</h2>
          <p className="mt-3 text-black/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">1, 2 & 3 Bedroom Luxurious and Modern Interiors Apartments with Stunning Views to buy, rent or for short stay In Dubai</p>
        </div>
        <div className="mt-6 sm:mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-medium text-white">To Buy</h3>
              <p className="text-white/70 text-sm sm:text-base">Starting From AED 810,000</p>
            </div>
          </div>
          <div className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-medium text-white">To Rent</h3>
              <p className="text-white/70 text-sm sm:text-base">Starting From AED 4,000</p>
            </div>
          </div>
          <div className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-medium text-white">To Short Stay</h3>
              <p className="text-white/70 text-sm sm:text-base">Starting From AED 1,000/night</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-15 py-6 sm:py-8 overflow-hidden">
        <HomeCarousel 
          images={carouselImages}
          peekAmount={35}
          centerScale={1.15}
        />
      </div>

      <section className="px-4 sm:px-5 md:px-15 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">

          {/* Product Cards Demo */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">Black Mamba Exclusives</h2>
            <p className="mt-3 text-black/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">Dubai's most exclusive properties — available to buy, rent, or enjoy on a short stay.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
            {properties.slice(0, 4).map((property) => (
              <ProductCard
                key={property.id}
                imageSrc={property.imageSrc}
                imageAlt={property.imageAlt}
                price={property.buyPrice || property.rentPrice || property.shortStayPrice || 'Price on request'}
                title={property.title}
                location={property.location}
                beds={property.beds}
                baths={property.baths}
                area={property.area}
                href={`/rental/${property.id}`}
                property={property}
                showButtons={true}
              />
            ))}
          </div>
          <div className="bg-black">
              <div className="flex items-center justify-center gap-6 py-4 sm:py-6">
              <p className="text-white">Contact us to discover whether our exclusive properties are available for purchase, rent, or short stays.</p>
              <button className="bg-white px-6 py-2">Learn More</button>
              </div>
          </div>
        </div>
      </section>

      <Amenities />

      <section className="px-4 sm:px-5 md:px-15 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <FeaturedProperties />
        </div>
      </section>
        

      <ContactForm />
      <Footer />
      <ContactNavbar />
    </main>
  );
}
