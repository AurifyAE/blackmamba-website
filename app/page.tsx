import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import HomeCarousel from "./components/HomeCarousel";
import ProductCard from "./components/ProductCard";
import FeaturedProperties from "./components/FeaturedProperties";
import Amenities from "./components/Amenities";

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
                className="flex-1 h-12 px-4 bg-white text-black border border-white/60 placeholder-black/60 text-sm sm:text-base"
              />
              <button className="h-12 px-6 bg-[#E65C00] text-white border border-[#E65C00] hover:bg-[#CC4A00] transition-colors font-medium text-sm sm:text-base">Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-5 md:px-15 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">A Short Glimpse through the Properties</h2>
          <p className="mt-3 text-black/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">1, 2 & 3 Bedroom Luxurious and Modern Interiors Apartments with Stunning Views to buy, rent or for short stay In Dubai</p>
        </div>
        <div className="mt-6 sm:mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">
          <Link href="/buy" className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-medium text-white">To Buy</h3>
              <p className="text-white/70 text-sm sm:text-base">Starting From AED 810,000</p>
            </div>
          </Link>
          <Link href="/rent" className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-medium text-white">To Rent</h3>
              <p className="text-white/70 text-sm sm:text-base">Starting From AED 4,000</p>
            </div>
          </Link>
          <Link href="/short-stay" className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-medium text-white">To Short Stay</h3>
              <p className="text-white/70 text-sm sm:text-base">Starting From AED 1,000/night</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-15 py-6 sm:py-8 overflow-hidden">
        <HomeCarousel 
          images={carouselImages}
          peekAmount={35}
          centerScale={1.15}
        />
      </div>

      <section className="px-4 sm:px-5 md:px-15 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">

          {/* Product Cards Demo */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">Black Mamba Exclusives</h2>
            <p className="mt-3 text-black/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">Dubai's most exclusive properties — available to buy, rent, or enjoy on a short stay.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ProductCard
              imageSrc="/images/carousel1.png"
              imageAlt="Sobha One"
              price="AED 1,895,000"
              title="Sobha One"
              location="Business Bay, Dubai"
              beds={1}
              baths={2}
              area="1,030"
              href="#"
            />
            <ProductCard
              imageSrc="/images/product-dunya-tower-dubai.png"
              imageAlt="Dunya Tower"
              price="AED 2,450,000"
              title="Dunya Tower"
              location="Downtown Dubai"
              beds={2}
              baths={3}
              area="1,450"
              href="#"
            />
            <ProductCard
              imageSrc="/images/product-azizi-developments-dubai.png"
              imageAlt="Azizi Developments"
              price="AED 5,200,000"
              title="Azizi Developments"
              location="Dubai Marina"
              beds={3}
              baths={4}
              area="2,800"
              href="#"
            />
            <ProductCard
              imageSrc="/images/product-azizi-developments-dubai.png"
              imageAlt="Palm Villa"
              price="AED 5,200,000"
              title="Palm Villa"
              location="Jumeirah, Dubai"
              beds={3}
              baths={4}
              area="2,800"
              href="#"
            />
          </div>
        </div>
      </section>

      <Amenities />

      <section className="px-4 sm:px-5 md:px-15 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <FeaturedProperties />
        </div>
      </section>
        

      <ContactForm />
      <Footer />
    </main>
  );
}
