'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface SearchBarProps {
  className?: string
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'buy' | 'rent' | 'shortstay'>('rent')
  const router = useRouter()

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    
    // Navigate to search results page with query parameters
    const params = new URLSearchParams({
      q: searchQuery.trim(),
      category: selectedCategory
    })
    
    router.push(`/search?${params.toString()}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={`w-sm md:w-2xl lg:w-4xl max-w-4xl mx-auto px-2 ${className}`}>
      {/* Top-right buttons over the hero - Same old style */}
      <div className="w-full max-w-4xl mx-auto flex justify-start px-2">
        <div className="flex rounded-t-xl bg-white/5 backdrop-blur-md border-t border-white/20 shadow-sm overflow-hidden">
          <button
            onClick={() => setSelectedCategory('buy')}
            className={`px-4 py-2 text-sm md:text-base font-semibold backdrop-blur-sm transition-all duration-200 ${
              selectedCategory === 'buy'
                ? 'bg-[#A97C50]/50 text-white shadow'
                : 'bg-transparent text-white hover:bg-white/20'
            }`}
            style={{ borderRight: '1px solid rgba(255,255,255,0.11)' }}
          >
            Buy
          </button>
          <button
            onClick={() => setSelectedCategory('rent')}
            className={`px-4 py-2 text-sm md:text-base font-semibold backdrop-blur-sm transition-all duration-200 ${
              selectedCategory === 'rent'
                ? 'bg-[#A97C50]/50 text-white shadow'
                : 'bg-transparent text-white hover:bg-white/20'
            }`}
            style={{ borderRight: '1px solid rgba(255,255,255,0.11)' }}
          >
            Rent
          </button>
          <button
            onClick={() => setSelectedCategory('shortstay')}
            className={`px-4 py-2 text-sm md:text-base font-semibold backdrop-blur-sm transition-all duration-200 ${
              selectedCategory === 'shortstay'
                ? 'bg-[#A97C50]/50 text-white shadow'
                : 'bg-transparent text-white hover:bg-white/20'
            }`}
          >
            Short Stays
          </button>
        </div>
      </div>

      {/* Search bar - Same old style */}
      <div className="w-full max-w-4xl mx-auto px-2">
        <div className="flex w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              selectedCategory === 'buy'
                ? 'Search properties to buy is coming soon'
                : selectedCategory === 'rent'
                ? 'Search rental properties by location, property, or brand'
                : 'Search short stay properties is coming soon'
            }
            className="flex-1 h-12 px-4 bg-white text-black border border-white/60 placeholder-black/60 text-sm sm:text-base"
          />
          <button 
            onClick={handleSearch}
            className="h-12 px-4 bg-[#A97C50] text-white border-4 border-white hover:bg-black transition-all duration-500 font-medium text-sm sm:text-base"
          >
            <Image src="/images/search-icon.svg" className='' alt="" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
