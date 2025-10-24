'use client'
import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Amenities from '@/app/components/Amenities'
import PropertyMap from '@/app/components/PropertyMap'
import { properties, Property } from '../../../data/properties'

export default function RentalDetails({ params }: { params: Promise<{ id: string }> }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { id } = use(params);
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[700px]">
              {/* Left side - Main Image */}
              <div className="lg:col-span-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
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

              {/* Right side - Thumbnail Gallery */}
                <div className="lg:col-span-1">
                  <div className="space-y-3 max-h-[700px] overflow-y-auto ov  erflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  {property.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer mr-4`}
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
                
                {/* Show More Images Indicator */}
                {property.galleryImages.length > 4 && (
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-600">
                      +{property.galleryImages.length - 4} more images
                    </p>
                  </div>
                )}
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
                      <Link
                        href="/contact"
                        className="inline-block mt-4 bg-[#A97C50] text-white px-6 py-3 hover:bg-[#8B6B42] focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:ring-offset-2 transition-colors"
                      >
                        {property.comingSoon ? 'Get Notified When Available' : 'Secure Your Spot Now'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Floor Plan */}
              <div>
                <div className="relative aspect-[5/4] overflow-hidden shadow-lg">
                  {property.floorPlan ? (
                    <Image
                      src={property.floorPlan}
                      alt={`${property.title} - Floor Plan`}
                      fill
                      className="object-contain"
                    />
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

        <Amenities />

        {/* Company Information */}
        <section className="px-4 sm:px-5 md:px-15 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Company Logo and Details */}
              <div className="space-y-6">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-72 h-52">
                    <Image
                      src={property.companyLogo}
                      alt={`${property.companyName} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>
              </div>

              {/* Right side - Property Features */}
              <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Property Features</h3>
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
      <Footer />
    </div>
  )
}
