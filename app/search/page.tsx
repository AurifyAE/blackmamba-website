'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactNavbar from '../components/ContactNavbar'
import ProductCard from '../components/ProductCard'
import { properties, Property } from '../../data/properties'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  const query = searchParams.get('q') || ''
  const category = searchParams.get('category') || 'rent'

  useEffect(() => {
    setLoading(true)
    
    // Simulate search logic
    const filteredProperties = properties.filter(property => {
      const matchesSearch = query === '' || 
        property.title.toLowerCase().includes(query.toLowerCase()) ||
        property.location.toLowerCase().includes(query.toLowerCase()) ||
        property.description.toLowerCase().includes(query.toLowerCase()) ||
        property.features.some(feature => feature.toLowerCase().includes(query.toLowerCase()))
      
      const matchesCategory = property.availableFor.includes(category as 'buy' | 'rent' | 'shortstay')
      
      return matchesSearch && matchesCategory
    })
    
    setSearchResults(filteredProperties)
    setLoading(false)
  }, [query, category])

  const getPriceForCategory = (property: Property, category: string) => {
    switch (category) {
      case 'buy':
        return property.buyPrice || property.rentPrice || property.shortStayPrice || 'Price on request'
      case 'rent':
        return property.rentPrice || property.buyPrice || property.shortStayPrice || 'Price on request'
      case 'shortstay':
        return property.shortStayPrice || property.rentPrice || property.buyPrice || 'Price on request'
      default:
        return property.rentPrice || property.buyPrice || property.shortStayPrice || 'Price on request'
    }
  }

  return (
    <main>
      <Navbar />
      
      <section className="px-4 sm:px-5 md:px-15 py-20 sm:py-30">
        <div className="max-w-6xl mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-2">
              Search Results
            </h1>
            <p className="text-gray-600">
              {query ? `Searching for "${query}" in ${category} properties` : `Showing all ${category} properties`}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Found {searchResults.length} {searchResults.length === 1 ? 'property' : 'properties'}
            </p>
          </div>

          {/* Results */}
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-gray-500">Loading...</div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {searchResults.map((property) => (
                <ProductCard
                  key={property.id}
                  imageSrc={property.imageSrc}
                  imageAlt={property.imageAlt}
                  price={getPriceForCategory(property, category)}
                  title={property.title}
                  location={property.location}
                  beds={property.beds}
                  baths={property.baths}
                  area={property.area}
                  href={`/${category}/${property.id}`}
                  property={property}
                  showButtons={true}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No properties found matching your search criteria.
              </p>
              <p className="text-gray-400">
                Try adjusting your search terms or browse all available properties.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ContactNavbar />
    </main>
  )
}
