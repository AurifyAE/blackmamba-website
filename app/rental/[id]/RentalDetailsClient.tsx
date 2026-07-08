'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import PropertyMap from '@/app/components/PropertyMap'
import ContactForm from '@/app/components/ContactForm'
import StructuredData from '@/app/components/seo/StructuredData'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { Property } from '../../../data/properties'

export default function RentalDetailsClient({ property }: { property: Property }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFloorPlanZoomed, setIsFloorPlanZoomed] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    "name": property.title,
    "description": property.description,
    "url": `https://www.blackmamba.realestate/rental/${property.id}`,
    "numberOfRooms": "3",
    "furnished": true,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  }

  useEffect(() => {
    if (!isFloorPlanZoomed) return
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setIsFloorPlanZoomed(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [isFloorPlanZoomed])

  useEffect(() => {
    if (!isGalleryOpen) return
    const esc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsGalleryOpen(false)
      if (e.key === 'ArrowRight') setSelectedImageIndex((i) => (i + 1) % property.galleryImages.length)
      if (e.key === 'ArrowLeft') setSelectedImageIndex((i) => (i - 1 + property.galleryImages.length) % property.galleryImages.length)
    }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [isGalleryOpen, property.galleryImages.length])

  useEffect(() => {
    if (!isContactOpen) return
    const esc = (e: KeyboardEvent) =>
      e.key === 'Escape' && setIsContactOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [isContactOpen])

  return (
    <>
      <StructuredData data={structuredData} />
      <Navbar />
      <main className="pt-16">
        <section className="px-4 sm:px-5 md:px-15">
          <div className="max-w-7xl mx-auto pt-4">
            <Breadcrumbs />
          </div>
        </section>
        {/* Building Name */}
        <section className="px-6 sm:px-8 md:px-20 pt-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                {property.title}
              </p>
              {property.comingSoon && (
                <span className="bg-[#A97C50] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="px-4 sm:px-5 md:px-15 pt-4 pb-8">
          <div className="max-w-7xl mx-auto">
            {property.comingSoon ? (
              <div className="relative h-[320px] sm:h-[380px] overflow-hidden rounded-3xl w-full">
                <div className="w-full h-full absolute inset-0 flex items-center justify-center bg-[#A97C50] opacity-50 rounded-3xl">
                  <span className="text-3xl font-bold text-white drop-shadow-md px-6 py-3 rounded-xl">
                    {property.title}
                  </span>
                </div>
              </div>
            ) : isGalleryOpen ? (
              <div>
                {/* Back to grid */}
                <button
                  type="button"
                  onClick={() => setIsGalleryOpen(false)}
                  className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to gallery
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
                  {/* Main image with arrows */}
                  <div className="relative h-[280px] sm:h-[420px] md:h-[500px] sm:col-span-5 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={property.galleryImages[selectedImageIndex]}
                      alt={`${property.title} - Image ${selectedImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((i) => (i - 1 + property.galleryImages.length) % property.galleryImages.length)}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                      aria-label="Previous photo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((i) => (i + 1) % property.galleryImages.length)}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                      aria-label="Next photo"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
                      {selectedImageIndex + 1} / {property.galleryImages.length}
                    </div>
                  </div>

                  {/* Vertical thumbnail strip */}
                  <div className="sm:col-span-1 h-[280px] sm:h-[420px] md:h-[500px] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full p-2">
                    <div className="flex flex-row sm:flex-col gap-2">
                      {property.galleryImages.map((image, index) => (
                        <button
                          key={index}
                          type="button"
                          ref={(el) => {
                            if (el && index === selectedImageIndex) {
                              el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
                            }
                          }}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`relative w-20 h-14 sm:w-full sm:h-24 shrink-0 rounded-md overflow-hidden ${
                            index === selectedImageIndex ? 'ring-2 ring-[#A97C50]' : 'opacity-60 hover:opacity-100'
                          } transition-opacity`}
                          aria-label={`Go to photo ${index + 1}`}
                          aria-current={index === selectedImageIndex}
                        >
                          <Image
                            src={image}
                            alt={`${property.title} - Thumbnail ${index + 1}`}
                            fill
                            sizes="120px"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative grid grid-cols-4 grid-rows-2 gap-2 h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden">
                {/* Main large image */}
                <div
                  className="relative col-span-4 row-span-2 sm:col-span-2 cursor-pointer group"
                  onClick={() => { setSelectedImageIndex(0); setIsGalleryOpen(true) }}
                >
                  <Image
                    src={property.galleryImages[0]}
                    alt={`${property.title} - Image 1`}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Secondary tiles (desktop only) */}
                {property.galleryImages.slice(1, 5).map((image, i) => {
                  const index = i + 1
                  const isLastTile = i === 3
                  const remaining = property.galleryImages.length - 5
                  return (
                    <div
                      key={index}
                      className="relative hidden sm:block cursor-pointer group"
                      onClick={() => { setSelectedImageIndex(index); setIsGalleryOpen(true) }}
                    >
                      <Image
                        src={image}
                        alt={`${property.title} - Image ${index + 1}`}
                        fill
                        loading="lazy"
                        sizes="25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {isLastTile && remaining > 0 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-semibold text-sm sm:text-base">+{remaining} photos</span>
                        </div>
                      )}
                    </div>
                  )
                })}

                {/* Show all photos button */}
                <button
                  type="button"
                  onClick={() => { setSelectedImageIndex(0); setIsGalleryOpen(true) }}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white text-gray-900 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h2l1.5-2h7L17 5h2a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                  Show all {property.galleryImages.length} photos
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Property Details */}
        <section className="px-4 sm:px-5 md:px-15 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Property Details */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-3xl font-semibold text-[#A97C50] mb-6">
                    {property.comingSoon ? 'Coming Soon' : `${property.rentPrice} Yearly`}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">UNIT:</span>
                      <span className="text-gray-900">{property.unit}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">SUITE:</span>
                      <span className="text-gray-900">{property.suite}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">BALCONY:</span>
                      <span className="text-gray-900">{property.balcony}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-semibold">TOTAL:</span>
                      <span className="font-bold text-lg">{property.total}</span>
                    </div>
                    <div className="pt-4">
                      {!property.comingSoon && property.airbnbLink && (
                        <p className="text-gray-600 text-sm font-medium mb-2 flex items-center gap-2">
                          Also available on
                          <a
                            href={property.airbnbLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on Airbnb"
                            className="inline-flex items-center border border-gray-300 rounded-full px-4 py-2 hover:border-[#FF385C] hover:bg-gray-50 transition-colors"
                          >
                            <Image src="/images/airbnb-logo-and-title.png" alt="Airbnb" width={90} height={27} className="h-5 w-auto" />
                          </a>
                        </p>
                      )}
                      <p className="text-gray-800 text-lg font-medium">
                        {property.comingSoon ? 'Luxury Villa Coming Soon' : 'Fully Furnished, Ready To Move Apartment'}
                      </p>
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        {property.comingSoon ? (
                          <Link
                            href="/contact"
                            className="inline-block bg-[#A97C50] text-white px-6 py-3 hover:bg-[#8B6B42] focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:ring-offset-2 transition-colors text-center"
                          >
                            Get Notified When Available
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setIsContactOpen(true)}
                            className="inline-block bg-[#A97C50] text-white px-6 py-3 hover:bg-[#8B6B42] focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:ring-offset-2 transition-colors text-center"
                          >
                            Secure Your Spot Now
                          </button>
                        )}
                        <div className="flex items-center justify-center gap-1 sm:gap-2 bg-black/70 rounded-full px-2 py-2">
                          <a
                            href="/contact"
                            className="inline-flex items-center text-white px-3 py-2 rounded-md hover:bg-neutral-600 transition-colors"
                            aria-label="Enquiry"
                            title="Enquiry"
                          >
                            <Image src="/images/enquiry.svg" alt="Enquiry" width={25} height={25} />
                          </a>
                          <a
                            href="tel:+971568297272"
                            className="inline-flex items-center text-white px-3 py-2 rounded-md hover:bg-neutral-600 transition-colors"
                            aria-label="Call"
                            title="Call"
                          >
                            <Image src="/images/phone.svg" alt="Call" width={25} height={25} />
                          </a>
                          <a
                            href="https://wa.me/971568297272"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white px-3 py-2 rounded-md hover:bg-neutral-600 transition-colors"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                          >
                            <Image src="/images/whatsapp.svg" alt="WhatsApp" width={25} height={25} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Floor Plan */}
              <div>
                <div className="relative aspect-[5/4] overflow-hidden group">
                  {property.floorPlan ? (
                    <>
                      <Image
                        src={property.floorPlan}
                        alt={`${property.title} - Floor Plan`}
                        fill
                        className="object-contain"
                      />
                      <button
                        onClick={() => setIsFloorPlanZoomed(true)}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Zoom floor plan"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-800">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-[#A97C50] opacity-50">
                      <span className="text-2xl font-bold text-white bg-transparent bg-opacity-80 rounded-lg px-6 py-3 shadow-md">
                        {property.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">Floor Plan</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Company Information */}
        <section className="px-4 sm:px-5 md:px-15 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Company Logo and Details */}
              <div className="space-y-6">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-80 h-28">
                    <Image
                      src={property.companyLogo}
                      alt={`${property.companyName} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{property.descriptionTitle}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                  {property.description2 && (
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {property.description2}
                    </p>
                  )}
                </div>
              </div>

              {/* Right side - Property Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h3>
                <div className="space-y-0">
                  {property.features?.map((feature, index) => (
                    <div key={index} className="py-3 border-b border-gray-200 last:border-b-0">
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image */}
        <section className="py-8">
          <div className="relative h-[540px] overflow-hidden">
            {property.comingSoon ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#A97C50] to-white opacity-50">
              </div>
            ) : (
              <Image
                src={property.fullWidthImage || property.imageSrc}
                alt={`${property.title} - Building Exterior`}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-2">{property.title}</h2>
                <p className="text-lg opacity-90">Luxury Living in the Heart of Dubai</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PropertyMap property={property} />
      {property.description3 && (
        <section className="max-w-7xl mx-auto py-8 px-4">
          <div className="bg-white p-6">
            {Array.isArray(property.description3) ? (
              <ul className="text-gray-600 leading-relaxed list-disc pl-6 space-y-3">
                {property.description3.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {property.description3}
              </p>
            )}
          </div>
        </section>
      )}
      <Footer />

      {/* Contact Form Modal */}
      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsContactOpen(false)}
                className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Close contact form"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ContactForm hideLeftPanel />
          </div>
        </div>
      )}

      {/* Floor Plan Zoom Modal */}
      {isFloorPlanZoomed && property.floorPlan && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsFloorPlanZoomed(false)}
        >
          <div
            className="relative w-full h-full max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsFloorPlanZoomed(false)}
                className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Close zoom"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Zoomed Floor Plan Image with react-zoom-pan-pinch */}
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={3}
              wheel={{
                step: 0.1,
              }}
              panning={{
                disabled: false,
              }}
            >
              <TransformComponent
                wrapperStyle={{
                  width: '100%',
                  height: '100%',
                }}
                contentStyle={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={property.floorPlan}
                    alt={`${property.title} - Floor Plan (Zoomed)`}
                    width={1200}
                    height={960}
                    className="object-contain"
                  />
                </div>
              </TransformComponent>
            </TransformWrapper>
          </div>
        </div>
      )}
    </>
  )
}