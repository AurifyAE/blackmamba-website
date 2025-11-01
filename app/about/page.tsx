import Image from "next/image";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";

export default function About() {
  const bentoImages = [
    {
      src: "/images/about/bento1.jpg",
      alt: "Downtown Dubai",
      title: ""
    },
    {
      src: "/images/rental/downtown-img/downtown-15.jpeg",
      alt: "Dubai Marina",
      title: ""
    },
    {
      src: "/images/about/bento3.jpg",
      alt: "Jumeirah Lake Tower", 
      title: ""
    },
    {
      src: "/images/about/bento4.jpg",
      alt: "Palm Jumeirah",
      title: ""
    },
    {
      src: "/images/about/bento5.jpg",
      alt: "Business Bay",
      title: ""
    },
    {
      src: "/images/about/bento6.jpg",
      alt: "Dubai Hills",
      title: ""
    },
    {
      src: "/images/rental/downtown-img/downtown-2.jpeg",
      alt: "Dubai Creek",
      title: ""
    },
    {
      src: "/images/about/bento8.jpg",
      alt: "Dubai Silicon Oasis",
      title: ""
    }
  ];

  const faqData = [
    {
      question: "What makes Black Mamba Real Estate different from other agencies?",
      answer: "At Black Mamba Real Estate, we focus on exclusive, luxury properties and deliver a personalized experience that prioritizes discretion, trust, and long-term value. Our brand represents precision, exclusivity, and sophistication — ensuring our clients always receive a premium standard of service."
    },
    {
      question: "Do you only deal with luxury properties?",
      answer: "Yes. Our focus is exclusively on high-end homes and apartments designed for comfort, style, and prestige."
    },
    {
      question: "Can I rent or stay temporarily in a property?",
      answer: "Absolutely. We offer long-term luxury rentals and fully serviced short-stay apartments for flexible, upscale living."
    },
    {
      question: "How does the buying process work?",
      answer: "Our team guides you through every step — from curated listings and private viewings to negotiation and documentation — ensuring a smooth, secure purchase."
    },
    {
      question: "Do you assist international clients?",
      answer: "Yes. We provide full support to overseas buyers and renters, including legal guidance, documentation, and property solutions tailored to your needs."
    },
    {
      question: "How can I register my interest in properties or short-stay apartments?",
      answer: "You can register directly on our website to receive early access to listings, exclusive offers, and priority booking."
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section with Background Image and Right Aligned Text */}
      <section id="hero" className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
        <Image
          src="/images/about/abouthero.jpg"
          alt="About BlackMamba Real Estate"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* Breadcrumbs over hero with high z-index */}
        <div className="absolute top-0 left-0 w-full z-50">
          <div className="px-4 sm:px-5 md:px-15">
            <div className="max-w-7xl mx-auto pt-20">
              <Breadcrumbs />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-end md:items-center justify-center md:justify-end">
          <div className="w-full max-w-xs md:max-w-xl text-white text-center mr-0 sm:mr-5 md:mr-[60px]">
            <h1 className="text-4xl md:text-6xl font-semibold mb-20 md:mb-6 leading-tight">
              Where Happiness Finds a Home
            </h1>
          </div>
        </div>
      </section>

      {/* Title and Paragraph Section */}
      <section className="px-4 sm:px-5 md:px-15 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-6">
          About Us
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-base sm:text-base text-black/70 leading-relaxed mb-6">
                At Black Mamba Real Estate, we believe a home is more than bricks and walls — it is the foundation of dreams, success, and lasting memories. With an unwavering commitment to excellence, we specialize in connecting our clients to properties that embody luxury, comfort, and prestige.
            </p>
            <p className="text-base sm:text-base text-black/70 leading-relaxed mb-6">
                Our philosophy is simple: every client deserves a lifestyle that reflects their aspirations. Whether it's a family seeking the perfect sanctuary, a couple envisioning their dream home, or investors pursuing high-value opportunities, we provide tailored solutions that go beyond expectations.
            </p>
            <p className="text-base sm:text-base text-black/70 leading-relaxed mb-6">
                Inspired by the strength, precision, and elegance of the Black Mamba, our brand represents power, exclusivity, and agility in the real estate market. We navigate with expertise, ensuring every transaction is seamless, transparent, and rewarding.
            </p>
            <p className="text-base sm:text-base text-black/70 leading-relaxed">
                With a portfolio of premium residences, luxury rentals, and investment properties, Black Mamba Real Estate stands as a trusted partner for those who seek not just a property, but a statement of success.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="px-4 sm:px-5 md:px-15 py-4 sm:py-8">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
              Our Featured Locations
            </h2>
            <p className="text-base sm:text-lg text-black/70 max-w-3xl mx-auto">
              Explore Dubai's most prestigious neighborhoods where we offer exclusive properties
            </p>
          </div> */}
          
          {/* Bento Grid - 3-2-3 layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
            {/* Top row - 3 images */}
            <div className="sm:col-span-1 lg:col-span-1">
              <div className="relative h-[200px] sm:h-[150px] overflow-hidden rounded-[40px] group cursor-pointer">
                <Image
                  src={bentoImages[0].src}
                  alt={bentoImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{bentoImages[0].title}</h3>
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-1 lg:col-span-2">
              <div className="relative h-[200px] sm:h-[150px] overflow-hidden rounded-[40px] group cursor-pointer">
                <Image
                  src={bentoImages[1].src}
                  alt={bentoImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{bentoImages[1].title}</h3>
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-2 lg:col-span-3">
              <div className="relative h-[200px] sm:h-[150px] overflow-hidden rounded-[40px] group cursor-pointer">
                <Image
                  src={bentoImages[2].src}
                  alt={bentoImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{bentoImages[2].title}</h3>
                </div>
              </div>
            </div>
            
            {/* Middle row - 2 larger images */}
            <div className="sm:col-span-1 lg:col-span-2">
              <div className="relative h-[250px] sm:h-[300px] lg:h-[450px] overflow-hidden rounded-r-[40px] group cursor-pointer">
                <Image
                  src={bentoImages[3].src}
                  alt={bentoImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{bentoImages[3].title}</h3>
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-1 lg:col-span-4">
              <div className="relative h-[250px] sm:h-[300px] lg:h-[450px] overflow-hidden rounded-l-[40px] group cursor-pointer">
                <Image
                  src={bentoImages[4].src}
                  alt={bentoImages[4].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{bentoImages[4].title}</h3>
                </div>
              </div>
            </div>
            
            {/* Bottom row - 3 images */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="relative h-[200px] sm:h-[150px] overflow-hidden rounded-[40px] group cursor-pointer">
                <Image
                  src={bentoImages[5].src}
                  alt={bentoImages[5].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{bentoImages[5].title}</h3>
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-1 lg:col-span-3">
              <div className="relative h-[200px] sm:h-[150px] overflow-hidden rounded-[40px] group cursor-pointer">
                <Image
                  src={bentoImages[6].src}
                  alt={bentoImages[6].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{bentoImages[6].title}</h3>
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-1 lg:col-span-2">
              <div className="relative h-[200px] sm:h-[150px] overflow-hidden rounded-[40px] group cursor-pointer">
                <Image
                  src={bentoImages[7].src}
                  alt={bentoImages[7].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{bentoImages[7].title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-5 md:px-15 py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-black/70">
              Find answers to common questions about our services and properties
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-base sm:text-lg font-medium text-black pr-4">
                      {faq.question}
                    </h3>
                    <svg 
                      className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
