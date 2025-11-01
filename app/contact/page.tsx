import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <main>
        <Navbar />
      <section className="relative w-full">
        <div className="absolute top-0 left-0 w-full z-50">
          <div className="px-4 sm:px-5 md:px-15">
            <div className="max-w-7xl mx-auto pt-20">
              <Breadcrumbs />
            </div>
          </div>
        </div>
      </section>

        {/* Hero Section with Background Image and Right Aligned Text */}
        <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
            <Image
            src="/images/contact/contact-banner.jpg"
            alt="About BlackMamba Real Estate"
            fill
            priority
            className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center md:justify-end">
            <div className="w-full max-w-xs md:max-w-xl text-white text-center mr-0 sm:mr-5 md:mr-[60px]">
                <h1 className="text-4xl md:text-6xl font-semibold mb-0 md:mb-6 leading-tight">
                Where Happiness Finds a Home
                </h1>
            </div>
            </div>
        </section>
        <ContactForm />
        <Footer />
    </main>
  )
}

export default page