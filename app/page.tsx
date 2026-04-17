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
import StructuredData from "./components/seo/StructuredData";
import InfoSection from "./components/InfoSection";

export const metadata = {
  title: 'BlackMamba Real Estate - Luxury Properties in Dubai',
  description: 'Discover exclusive homes, flexible rentals, and luxury stays in Dubai. Premium real estate properties for buy, rent, or short stay.',
  keywords: 'buy properties in Dubai, Properties in Dubai luxury flat in dubai, flexible rentals stays in Dubai, full furnished stays flat in Dubai, full facility rental in dubai, stay in dubai, premium stay in dubai',
  openGraph: {
    title: 'BlackMamba Real Estate - Luxury Properties in Dubai',
    description: 'Discover exclusive homes, flexible rentals, and luxury stays in Dubai.',
    url: 'https://www.blackmamba.realestate/',
  },
  alternates: {
    canonical: 'https://www.blackmamba.realestate/',
  },
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "BlackMamba Real Estate",
  "description": "Luxury Properties in Dubai for buy, rent, and short stay",
  "url": "https://www.blackmamba.realestate/",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  }
};

export default function Home() {

  const carouselImages = [
    {
      src: "/images/rental/canal-bay-1802/REP04528.jpg",
      alt: 'Beautiful landscape',
    },
    {
      src: "/images/rental/downtown-img/downtown-15.jpeg",
      alt: 'City skyline',
    },
    {
      src: "/images/rental/sobha-wave/sobha-wave-9.jpeg",
      alt: 'Ocean waves',
    },
    {
      src: "/images/rental/downtown-img/downtown-4.jpeg",
      alt: 'Ocean waves',
    },
    {
      src: "/images/rental/downtown-img/downtown-5.jpeg",
      alt: 'Ocean waves',
    },

  ]

  return (
    <>
      <StructuredData data={homeStructuredData} />
      <main>
        <Navbar />
        <section id="hero" className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full absolute inset-0"
            poster="/images/hero-video.mp4"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight">Elevate Your Lifestyle</h1>
            <p className="mt-4 text-white/90 text-base">Discover exclusive homes, flexible rentals, and luxury stays all under one iconic brand</p>

            {/* Search Bar Component */}
            <div className="mt-6">
              <SearchBar />
            </div>
          </div>
        </section>

        <InfoSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-10 md:px-15 py-8 sm:py-12 overflow-hidden">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
              {properties.slice(0, 4).map((property) => (
                <ProductCard
                  key={property.id}
                  imageSrc={property.imageSrc}
                  imageAlt={property.imageAlt}
                  price={property.buyPrice || property.rentPrice || property.shortStayPrice || 'Price on request'}
                  cardTitle={property.cardTitle}
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
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 py-4 sm:py-6">
                <p className="text-white text-sm sm:text-base">
                  Contact us to discover whether our exclusive properties are available for purchase, rent, or short stays.
                </p>
                <button className="bg-white text-black px-4 sm:px-6 py-2 transition hover:bg-black w-full sm:w-42 hover:text-white border border-transparent hover:border-white text-sm sm:text-base mt-2 sm:mt-0">
                  Learn More
                </button>
              </div>
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
        <ContactNavbar />
      </main>
    </>

  );
}
