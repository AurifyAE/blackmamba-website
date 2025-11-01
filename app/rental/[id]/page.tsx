'use client'
import { use, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import PropertyMap from '@/app/components/PropertyMap'
import { properties, Property } from '../../../data/properties'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

export default function RentalDetails({ params }: { params: Promise<{ id: string }> }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isFloorPlanZoomed, setIsFloorPlanZoomed] = useState(false)
  const { id } = use(params);
  
  // Escape key to close modal
  useEffect(() => {
    if (!isFloorPlanZoomed) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsFloorPlanZoomed(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFloorPlanZoomed]);
  // Find property by ID from the properties data
  const property = properties.find((prop) => prop.id === id)
  
  // If property not found, show 404
  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:min-h-[700px]">
              {/* Left side - Main Image */}
              <div className="lg:col-span-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl w-full">
                  {property.comingSoon ? (
                    <div className="w-full h-full absolute inset-0 flex items-center justify-center bg-[#A97C50] opacity-50 rounded-3xl">
                      <span className="text-3xl font-bold text-white drop-shadow-md px-6 py-3 rounded-xl">
                        {property.title}
                      </span>
                    </div>
                  ) : (
                    <Image
                      src={property.galleryImages[selectedImageIndex]}
                      alt={`${property.title} - Image ${selectedImageIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>
              </div>

              {/* Right side - Thumbnail Gallery (Desktop) */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="space-y-3 max-h-[700px] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 pr-5">
                  {property.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer`}
                    >
                      {property.comingSoon ? (
                        <div className="flex items-center justify-center absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A97C50] to-[#F6E4CA]">
                          <span className="text-white text-lg sm:text-xl font-semibold drop-shadow text-center px-2">
                            {property.title}
                          </span>
                        </div>
                      ) : (
                        <Image
                          src={image}
                          alt={`${property.title} - Thumbnail ${index + 1}`}
                          fill
                          className={`object-cover transition-all duration-300 ${
                            selectedImageIndex === index 
                              ? 'scale-103' 
                              : 'hover:scale-103'
                          }`}
                        />
                      )}
                      {selectedImageIndex === index && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile - Horizontal Scrolling Thumbnail Gallery */}
              <div className="lg:hidden mt-4">
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {property.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 w-[calc(33.333%-0.5rem)]`}
                    >
                      {property.comingSoon ? (
                        <div className="flex items-center justify-center absolute inset-0 rounded-2xl bg-gradient-to-br from-[#A97C50] to-[#F6E4CA]">
                          <span className="text-white text-sm font-semibold drop-shadow text-center px-2">
                            {property.title}
                          </span>
                        </div>
                      ) : (
                        <Image
                          src={image}
                          alt={`${property.title} - Thumbnail ${index + 1}`}
                          fill
                          className={`object-cover transition-all duration-300 ${
                            selectedImageIndex === index 
                              ? 'ring-2 ring-[#A97C50] ring-offset-2' 
                              : 'opacity-70 hover:opacity-100'
                          }`}
                        />
                      )}
                      {selectedImageIndex === index && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                      <p className="text-gray-800 text-lg font-medium">
                        {property.comingSoon ? 'Luxury Villa Coming Soon' : 'Fully Furnished, Ready To Move Apartment'}
                      </p>
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <Link
                          href="/contact"
                          className="inline-block bg-[#A97C50] text-white px-6 py-3 hover:bg-[#8B6B42] focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:ring-offset-2 transition-colors text-center"
                        >
                          {property.comingSoon ? 'Get Notified When Available' : 'Secure Your Spot Now'}
                        </Link>
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
                            href="tel:+971501100678"
                            className="inline-flex items-center text-white px-3 py-2 rounded-md hover:bg-neutral-600 transition-colors"
                            aria-label="Call"
                            title="Call"
                          >
                            <Image src="/images/phone.svg" alt="Call" width={25} height={25} />
                          </a>
                          <a
                            href="https://wa.me/971501100678"
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
    </div>
  )
}
