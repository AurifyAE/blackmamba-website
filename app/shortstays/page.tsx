import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ProductList from "../components/ProductList";
import FeaturedProperties from "../components/FeaturedProperties";
import Breadcrumbs from "../components/Breadcrumbs";
import StructuredData from "../components/seo/StructuredData";

export const metadata = {
  title: 'Best and High Security Luxury Premium Short Stay in Dubai',
  description: 'Fully Furnished Premium Short Stay in Dubai Apartment for rent. Low cost high class luxury Apartment in Dubai for one night, two nights etc.',
  keywords: 'shortstays in dubai, shortstays rental in dubai, low price shortstays dubai, shortstays apartment in dubai, luxury short stay in dubai, premium short stay in dubai',
  openGraph: {
    title: 'Best and High Security Luxury Premium Short Stay in Dubai',
    description: 'Fully Furnished Premium Short Stay in Dubai Apartment for rent.',
    url: 'https://www.blackmamba.realestate/shortstays',
  },
  alternates: {
    canonical: 'https://www.blackmamba.realestate/shortstays',
  },
};

const shortStaysStructuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "BlackMamba Real Estate - Short Stays",
  "description": "Premium short stay apartments in Dubai",
  "url": "https://www.blackmamba.realestate/shortstays",
  "makesOffer": [{
    "@type": "RentAction",
    "object": {
      "@type": "Apartment",
      "name": "Short Stay Apartments in Dubai",
      "description": "Luxury short term rentals in Dubai"
    }
  }]
};

export default function ShortStays() {
  return (
    <>
      <StructuredData data={shortStaysStructuredData} />
      <main>
        <Navbar />
        
        
        {/* Hero Section - Same as Homepage */}
        <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
          <Image
            src="/images/about/bento9.jpeg"
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
            
            <h1 className="text-white text-4xl md:text-6xl max-w-xs md:max-w-xl font-semibold leading-12 md:leading-16 mt-8">Luxury Short Stays</h1>
            <p className="mt-4 text-white/90 text-base md:text-lg">PREMIUM FURNISHED APARTMENTS FOR SHORT TERM STAYS</p>
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
    </>
  );
}

