'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { properties, Property } from '../../data/properties'

interface Product {
  id: string
  imageSrc: string
  imageAlt: string
  price: string
  title: string
  location: string
  beds: number
  baths: number
  balconyQty: number
  area: string
  propertyType: string
  city: string
  href: string
}

interface ProductListProps {
  products?: Product[]
}

// Transform properties data to match Product interface
const propertyProducts: Product[] = properties.map((property: Property) => {
  
  const beds = property.beds
  const baths = property.baths
  const balconyQty = property.balconyQty || 0
  
  // Use area from property or extract from suite if available
  let area = property.area
  if (property.suite) {
    const areaMatch = property.suite.match(/(\d+(?:\.\d+)?)/)
    area = areaMatch ? areaMatch[1] : property.area
  }
  
  // Determine property type based on available options
  let propertyType = 'Apartment'
  if (property.availableFor.includes('buy')) {
    propertyType = 'Villa'
  }
  
  // Determine city from location
  let city = 'Dubai'
  if (property.location.includes('Abu Dhabi')) {
    city = 'Abu Dhabi'
  } else if (property.location.includes('Sharjah')) {
    city = 'Sharjah'
  }
  
  // Use appropriate price based on availability
  let price = property.rentPrice || property.buyPrice || property.shortStayPrice || 'Price on Request'
  
  return {
    id: property.id,
    imageSrc: property.imageSrc,
    imageAlt: property.imageAlt,
    price: price,
    title: property.title,
    location: property.location,
    beds: beds,
    baths: baths,
    balconyQty: balconyQty,
    area: area,
    propertyType: propertyType,
    city: city,
    href: `/rental/${property.id}`
  }
})

export default function ProductList({ products = propertyProducts }: ProductListProps) {
  const [filters, setFilters] = useState({
    propertyType: '',
    bedrooms: '',
    city: '',
    priceRange: '',
    customMinPrice: '',
    customMaxPrice: ''
  })
  
  const [sortBy, setSortBy] = useState('price-low')
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Check if any filter is selected
  const hasActiveFilters = filters.propertyType || filters.bedrooms || filters.city || filters.priceRange || filters.customMinPrice || filters.customMaxPrice

  const propertyTypes = ['', 'Apartment', 'Villa', 'Penthouse', 'Studio']
  const bedrooms = ['', '1', '2', '3', '4+']
  const cities = ['', 'Dubai', 'Abu Dhabi', 'Sharjah']
  const priceRanges: Array<{ label: string; min: number; max: number }> = [
    { label: 'Under AED 1M', min: 0, max: 1000000 },
    { label: 'AED 1M - 2M', min: 1000000, max: 2000000 },
    { label: 'AED 2M - 5M', min: 2000000, max: 5000000 },
    { label: 'AED 5M - 10M', min: 5000000, max: 10000000 },
    { label: 'Above AED 10M', min: 10000000, max: Infinity },
    { label: 'Custom Range', min: 0, max: 0 } // Special case for custom input
  ]
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
      if (filters.propertyType && product.propertyType !== filters.propertyType) return false
      if (filters.bedrooms && product.beds.toString() !== filters.bedrooms) return false
      if (filters.city && product.city !== filters.city) return false
      if (filters.priceRange) {
        if (filters.priceRange === 'Custom Range') {
          // Handle custom price range
          if (filters.customMinPrice || filters.customMaxPrice) {
            const price = parseInt(product.price.replace(/[^\d]/g, ''))
            if (filters.customMinPrice) {
              const minPrice = parseInt(filters.customMinPrice.replace(/[^\d]/g, ''))
              if (price < minPrice) return false
            }
            if (filters.customMaxPrice) {
              const maxPrice = parseInt(filters.customMaxPrice.replace(/[^\d]/g, ''))
              if (price > maxPrice) return false
            }
          }
        } else {
          // Handle predefined price ranges
          const selectedRange = priceRanges.find(range => range.label === filters.priceRange)
          if (selectedRange) {
            const price = parseInt(product.price.replace(/[^\d]/g, ''))
            if (selectedRange.max === Infinity) {
              if (price < selectedRange.min) return false
            } else {
              if (price < selectedRange.min || price > selectedRange.max) return false
            }
          }
        }
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
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Filter by</label>
              <div className="flex flex-wrap gap-4">
              {/* Property Type Filter */}
              <div className="flex flex-col">
                <select
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm"
                >
                  <option value="">Property Type</option>
                  {propertyTypes.slice(1).map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms Filter */}
              <div className="flex flex-col">
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm"
                >
                  <option value="">Bedrooms</option>
                  {bedrooms.slice(1).map(bed => (
                    <option key={bed} value={bed}>
                      {bed === '4+' ? '4+ Beds' : `${bed} Bed${bed !== '1' ? 's' : ''}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div className="flex flex-col">
                <select
                  value={filters.city}
                  onChange={(e) => handleFilterChange('city', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm"
                >
                  <option value="">City</option>
                  {cities.slice(1).map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="flex flex-col">
                <select
                  value={filters.priceRange}
                  onChange={(e) => {
                    handleFilterChange('priceRange', e.target.value)
                    // Clear custom inputs when switching away from Custom Range
                    if (e.target.value !== 'Custom Range') {
                      setFilters(prev => ({
                        ...prev,
                        customMinPrice: '',
                        customMaxPrice: ''
                      }))
                    }
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm"
                >
                  <option value="">Price</option>
                  {priceRanges.map(range => (
                    <option key={range.label} value={range.label}>
                      {range.label}
                    </option>
                  ))}
                </select>
                
                {/* Custom Price Inputs - Show when Custom Range is selected */}
                {filters.priceRange === 'Custom Range' && (
                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      placeholder="Min Price (AED)"
                      value={filters.customMinPrice}
                      onChange={(e) => handleFilterChange('customMinPrice', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm w-32"
                    />
                    <input
                      type="text"
                      placeholder="Max Price (AED)"
                      value={filters.customMaxPrice}
                      onChange={(e) => handleFilterChange('customMaxPrice', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] focus:border-transparent text-sm w-32"
                    />
                  </div>
                )}
              </div>

              {/* Clear Filters Button - Only show when filters are active */}
              {hasActiveFilters && (
                <div className="flex flex-col justify-end">
                  <button
                    onClick={() => setFilters({
                      propertyType: '',
                      bedrooms: '',
                      city: '',
                      priceRange: '',
                      customMinPrice: '',
                      customMaxPrice: ''
                    })}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
              </div>
            </div>

            {/* Right side - Sorting */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort By</label>
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
                     {[filters.propertyType, filters.bedrooms, filters.city, filters.priceRange, filters.customMinPrice, filters.customMaxPrice].filter(Boolean).length}
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
                   <select
                     value={filters.propertyType}
                     onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                   >
                     <option value="">Property Type</option>
                     {propertyTypes.slice(1).map(type => (
                       <option key={type} value={type}>
                         {type}
                       </option>
                     ))}
                   </select>
                 </div>

                 {/* Bedrooms */}
                 <div>
                   <select
                     value={filters.bedrooms}
                     onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                   >
                     <option value="">Bedrooms</option>
                     {bedrooms.slice(1).map(bed => (
                       <option key={bed} value={bed}>
                         {bed === '4+' ? '4+ Beds' : `${bed} Bed${bed !== '1' ? 's' : ''}`}
                       </option>
                     ))}
                   </select>
                 </div>

                 {/* City */}
                 <div>
                   <select
                     value={filters.city}
                     onChange={(e) => handleFilterChange('city', e.target.value)}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                   >
                     <option value="">City</option>
                     {cities.slice(1).map(city => (
                       <option key={city} value={city}>
                         {city}
                       </option>
                     ))}
                   </select>
                 </div>

                 {/* Price Range */}
                 <div>
                   <select
                     value={filters.priceRange}
                     onChange={(e) => {
                       handleFilterChange('priceRange', e.target.value)
                       // Clear custom inputs when switching away from Custom Range
                       if (e.target.value !== 'Custom Range') {
                         setFilters(prev => ({
                           ...prev,
                           customMinPrice: '',
                           customMaxPrice: ''
                         }))
                       }
                     }}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                   >
                     <option value="">Price</option>
                     {priceRanges.map(range => (
                       <option key={range.label} value={range.label}>
                         {range.label}
                       </option>
                     ))}
                   </select>
                   
                   {/* Custom Price Inputs - Show when Custom Range is selected */}
                   {filters.priceRange === 'Custom Range' && (
                     <div className="grid grid-cols-2 gap-3 mt-3">
                       <input
                         type="text"
                         placeholder="Min Price (AED)"
                         value={filters.customMinPrice}
                         onChange={(e) => handleFilterChange('customMinPrice', e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                       />
                       <input
                         type="text"
                         placeholder="Max Price (AED)"
                         value={filters.customMaxPrice}
                         onChange={(e) => handleFilterChange('customMaxPrice', e.target.value)}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
                       />
                     </div>
                   )}
                 </div>

                 {/* Sort By */}
                 <div className="flex items-center gap-3">
                   <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort By</label>
                   <select
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value)}
                     className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A97C50] text-sm"
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
                           priceRange: '',
                           customMinPrice: '',
                           customMaxPrice: ''
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
                priceRange: '',
                customMinPrice: '',
                customMaxPrice: ''
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
