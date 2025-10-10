'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { rentals, RentalProperty } from '../../data/rentals'

interface Product {
  id: string
  imageSrc: string
  imageAlt: string
  price: string
  title: string
  location: string
  beds: number
  baths: number
  area: string
  propertyType: string
  city: string
  href: string
}

interface ProductListProps {
  products?: Product[]
}

// Transform rental data to match Product interface
const rentalProducts: Product[] = rentals.map((rental: RentalProperty) => {
  // Extract beds and baths from unit string
  const bedsMatch = rental.unit.match(/(\d+)\s*BEDROOM/i)
  const bathsMatch = rental.unit.match(/(\d+(?:\.\d+)?)\s*BATH/i)
  
  const beds = bedsMatch ? parseInt(bedsMatch[1]) : 3
  const baths = bathsMatch ? Math.ceil(parseFloat(bathsMatch[1])) : 2
  
  // Extract area from suite string (remove "SQ.FT" and any other text)
  const areaMatch = rental.suite.match(/(\d+(?:\.\d+)?)/)
  const area = areaMatch ? areaMatch[1] : '1,265'
  
  // Determine location based on building name
  let location = 'Dubai'
  if (rental.buildingName.toLowerCase().includes('canal')) {
    location = 'Business Bay, Dubai'
  } else if (rental.buildingName.toLowerCase().includes('dunya')) {
    location = 'Downtown Dubai'
  }
  
  return {
    id: rental.id,
    imageSrc: rental.galleryImages[0], // Use first gallery image as main image
    imageAlt: rental.buildingName,
    price: rental.price,
    title: rental.buildingName,
    location: location,
    beds: beds,
    baths: baths,
    area: area,
    propertyType: 'Apartment',
    city: 'Dubai',
    href: `/rental/${rental.id}`
  }
})

export default function ProductList({ products = rentalProducts }: ProductListProps) {
  const [filters, setFilters] = useState({
    propertyType: '',
    bedrooms: '',
    city: '',
    minPrice: '',
    maxPrice: ''
  })
  
  const [sortBy, setSortBy] = useState('price-low')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Check if any filter is selected
  const hasActiveFilters = filters.propertyType || filters.bedrooms || filters.city || filters.minPrice || filters.maxPrice

  const propertyTypes = ['All', 'Apartment', 'Villa', 'Penthouse', 'Studio']
  const bedrooms = ['All', '1', '2', '3', '4+']
  const cities = ['All', 'Dubai', 'Abu Dhabi', 'Sharjah']
  const sortOptions = [
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'area-low', label: 'Area: Small to Large' },
    { value: 'area-high', label: 'Area: Large to Small' },
    { value: 'newest', label: 'Newest First' }
  ]

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const filteredAndSortedProducts = products
    .filter(product => {
      if (filters.propertyType && filters.propertyType !== 'All' && product.propertyType !== filters.propertyType) return false
      if (filters.bedrooms && filters.bedrooms !== 'All' && product.beds.toString() !== filters.bedrooms) return false
      if (filters.city && filters.city !== 'All' && product.city !== filters.city) return false
      if (filters.minPrice) {
        const price = parseInt(product.price.replace(/[^\d]/g, ''))
        const minPrice = parseInt(filters.minPrice.replace(/[^\d]/g, ''))
        if (price < minPrice) return false
      }
      if (filters.maxPrice) {
        const price = parseInt(product.price.replace(/[^\d]/g, ''))
        const maxPrice = parseInt(filters.maxPrice.replace(/[^\d]/g, ''))
        if (price > maxPrice) return false
      }
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''))
        case 'price-high':
          return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''))
        case 'area-low':
          return parseInt(a.area.replace(/[^\d]/g, '')) - parseInt(b.area.replace(/[^\d]/g, ''))
        case 'area-high':
          return parseInt(b.area.replace(/[^\d]/g, '')) - parseInt(a.area.replace(/[^\d]/g, ''))
        default:
          return 0
      }
    })

  return (
    <div className="px-4 sm:px-5 md:px-15 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Filters and Sorting */}
        <div className="mb-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-start gap-6 mb-6">
            {/* Left side - Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Property Type Filter */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm"
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type === 'All' ? '' : type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms Filter */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm"
                >
                  {bedrooms.map(bed => (
                    <option key={bed} value={bed === 'All' ? '' : bed}>
                      {bed === 'All' ? 'All' : `${bed} Bed${bed === '4+' ? 's+' : bed !== '1' ? 's' : ''}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">City</label>
                <select
                  value={filters.city}
                  onChange={(e) => handleFilterChange('city', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm"
                >
                  {cities.map(city => (
                    <option key={city} value={city === 'All' ? '' : city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Min Price</label>
                <input
                  type="text"
                  placeholder="AED 500,000"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm w-32"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Max Price</label>
                <input
                  type="text"
                  placeholder="AED 10,000,000"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm w-32"
                />
              </div>

              {/* Clear Filters Button - Only show when filters are active */}
              {hasActiveFilters && (
                <div className="flex flex-col justify-end">
                  <button
                    onClick={() => setFilters({
                      propertyType: '',
                      bedrooms: '',
                      city: '',
                      minPrice: '',
                      maxPrice: ''
                    })}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* Right side - Sorting */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm w-48"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

           {/* Mobile and Tablet Layout */}
           <div className="md:hidden">
             {/* Filter Button */}
             <div className="flex justify-between items-center mb-4">
               <button
                 onClick={() => setShowMobileFilters(!showMobileFilters)}
                 className="flex items-center gap-2 px-4 py-2 bg-[#A97C50] text-white rounded-md hover:bg-[#8B6B42] transition-colors text-sm font-medium"
               >
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                 </svg>
                 Filters & Sort
                 {hasActiveFilters && (
                   <span className="bg-white text-[#A97C50] rounded-full px-2 py-1 text-xs font-bold">
                     {[filters.propertyType, filters.bedrooms, filters.city, filters.minPrice, filters.maxPrice].filter(Boolean).length}
                   </span>
                 )}
               </button>
               
               {/* Results Count */}
               <p className="text-sm text-gray-600">
                 {filteredAndSortedProducts.length} of {products.length}
               </p>
             </div>

             {/* Mobile Filters Dropdown */}
             {showMobileFilters && (
               <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-4 shadow-lg">
                 {/* Property Type */}
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                   <select
                     value={filters.propertyType}
                     onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                   >
                     {propertyTypes.map(type => (
                       <option key={type} value={type === 'All' ? '' : type}>
                         {type}
                       </option>
                     ))}
                   </select>
                 </div>

                 {/* Bedrooms */}
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                   <select
                     value={filters.bedrooms}
                     onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                   >
                     {bedrooms.map(bed => (
                       <option key={bed} value={bed === 'All' ? '' : bed}>
                         {bed === 'All' ? 'All' : `${bed} Bed${bed === '4+' ? 's+' : bed !== '1' ? 's' : ''}`}
                       </option>
                     ))}
                   </select>
                 </div>

                 {/* City */}
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                   <select
                     value={filters.city}
                     onChange={(e) => handleFilterChange('city', e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                   >
                     {cities.map(city => (
                       <option key={city} value={city === 'All' ? '' : city}>
                         {city}
                       </option>
                     ))}
                   </select>
                 </div>

                 {/* Price Range */}
                 <div className="grid grid-cols-2 gap-3">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                     <input
                       type="text"
                       placeholder="AED 500,000"
                       value={filters.minPrice}
                       onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                     />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                     <input
                       type="text"
                       placeholder="AED 10,000,000"
                       value={filters.maxPrice}
                       onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                     />
                   </div>
                 </div>

                 {/* Sort By */}
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                   <select
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                   >
                     {sortOptions.map(option => (
                       <option key={option.value} value={option.value}>
                         {option.label}
                       </option>
                     ))}
                   </select>
                 </div>

                 {/* Action Buttons */}
                 <div className="flex gap-3 pt-2">
                   {hasActiveFilters && (
                     <button
                       onClick={() => {
                         setFilters({
                           propertyType: '',
                           bedrooms: '',
                           city: '',
                           minPrice: '',
                           maxPrice: ''
                         })
                       }}
                       className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium"
                     >
                       Clear Filters
                     </button>
                   )}
                   <button
                     onClick={() => setShowMobileFilters(false)}
                     className="flex-1 px-4 py-2 bg-[#A97C50] text-white rounded-md hover:bg-[#8B6B42] transition-colors text-sm font-medium"
                   >
                     Apply Filters
                   </button>
                 </div>
               </div>
             )}
           </div>
        </div>

         {/* Results Count - Desktop Only */}
         <div className="mb-6 hidden md:block">
           <p className="text-sm text-gray-600">
             Showing {filteredAndSortedProducts.length} of {products.length} properties
           </p>
         </div>

        {/* Product Grid - 2 cards per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredAndSortedProducts.map((product) => (
            <Link key={product.id} href={`/rental/${product.id}`} className="block">
              <div className="relative aspect-square overflow-hidden group cursor-pointer">
                <Image 
                  src={product.imageSrc} 
                  alt={product.imageAlt} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bg-black/50 p-6 inset-x-2 sm:inset-x-3 bottom-2 sm:bottom-3 flex items-end justify-between gap-2 sm:gap-3">
                  <div className="text-white flex-1 min-w-0">
                    <div className="text-base sm:text-lg font-bold leading-tight">{product.price}</div>
                    <div className="text-xs sm:text-sm leading-tight opacity-95 truncate">{product.title}</div>
                    <div className="text-xs sm:text-sm leading-tight opacity-80 truncate">{product.location}</div>
                  </div>
                  <div className="shrink-0 text-xs sm:text-sm text-white/90">
                    <div className="flex gap-1 sm:gap-2 text-center">
                      <div className="pr-1 border-r border-white/30">
                        <div className="leading-tight">{product.beds}</div>
                        <div className="leading-tight">Beds</div>
                      </div>
                      <div className="px-1 border-r border-white/30">
                        <div className="leading-tight">{product.baths}</div>
                        <div className="leading-tight">Baths</div>
                      </div>
                      <div className="pl-1">
                        <div className="leading-tight">{product.area}</div>
                        <div className="leading-tight">Sq. Ft.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            <button
              onClick={() => setFilters({
                propertyType: '',
                bedrooms: '',
                city: '',
                minPrice: '',
                maxPrice: ''
              })}
              className="mt-4 px-6 py-2 bg-[#A97C50] text-white rounded-md hover:bg-[#8B6B42] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
