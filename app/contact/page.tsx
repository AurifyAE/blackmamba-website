import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <main>
        <Navbar />
      
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
            <div className="absolute inset-0 flex items-center justify-end">
            <div className="w-full max-w-lg text-white text-center mr-4 sm:mr-5 md:mr-[60px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight">
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