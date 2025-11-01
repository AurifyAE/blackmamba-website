'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  
  // Hide search icon on homepage
  const isHomePage = pathname === '/'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}&category=rent`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (isSearchOpen) {
      setSearchQuery('')
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const heroEl = document.getElementById('hero')
    if (!heroEl) {
      setIsOverHero(false)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(entry.isIntersecting)
      },
      { root: null, threshold: 0.05 }
    )
    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Backdrop Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[9998]"
          onClick={toggleSearch}
        />
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-sm z-[9999] pt-4 pb-4 px-4 md:px-15">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by location, property name, or brand..."
                  className="w-full px-4 py-3 pr-12 bg-black text-white rounded-full border border-[#a97d508e] focus:outline-none focus:ring-1 focus:ring-[#A97C50]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-3 hover:bg-white/10 rounded-full transition-colors duration-300"
                >
                  <Image
                    src="/images/search-icon.svg"
                    alt="Search"
                    width={18}
                    height={18}
                    className="brightness-0 invert"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={`fixed top-0 left-0 w-full z-[9997] flex justify-between items-center py-3 px-4 md:px-15 font-normal transition-colors duration-500 ${
        isOverHero ? 'bg-transparent text-white' : 'bg-black text-white'
      }`}>
        <Link href="/" onClick={closeMenu}>
          <Image 
            src="/images/logo.svg" 
            alt="Logo" 
            width={180} 
            height={45}
            className="md:w-[224px] md:h-[56px]"
          />
        </Link>

        <div className='lg:flex justify-between items-center gap-2 hidden relative'>
          <span 
            className={`relative px-1 mx-3 py-1 transition-all duration-300 group ${
              isActive('/buy') ? 'text-[#A97C50]' : 'hover:text-[#A97C50]'
            }`}
            onMouseEnter={() => setHoveredButton('buy')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Buy
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-[#A97C50] transition-all duration-500 ease-out ${
                isActive('/buy') ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2 group-hover:w-full'
              }`}
            ></span>
            {hoveredButton === 'buy' && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                Coming Soon
              </span>
            )}
          </span>
          <Link href="/rental"  className={`relative px-1 mx-3 py-1 transition-all duration-300 group ${
              isActive('/rental') ? 'text-[#A97C50]' : 'hover:text-[#A97C50]'
            }`}>
            Rent
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-[#A97C50] transition-all duration-500 ease-out ${
                isActive('/rental') ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2 group-hover:w-full'
              }`}
            ></span>
          </Link>
          <span 
            className={`relative px-1 mx-3 py-1 transition-all duration-300 group ${
              isActive('/short-stay') ? 'text-[#A97C50]' : 'hover:text-[#A97C50]'
            }`}
            onMouseEnter={() => setHoveredButton('short-stays')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Short Stays
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-[#A97C50] transition-all duration-500 ease-out ${
                isActive('/short-stay') ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2 group-hover:w-full'
              }`}
            ></span>
            {hoveredButton === 'short-stays' && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                Coming Soon
              </span>
            )}
          </span>
          <Link 
            href="/about"
            className={`relative px-1 mx-3 py-1 transition-all duration-300 group ${
              isActive('/about') ? 'text-[#A97C50]' : 'hover:text-[#A97C50]'
            }`}
          >
            About Us
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-[#A97C50] transition-all duration-500 ease-out ${
                isActive('/about') ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2 group-hover:w-full'
              }`}
            ></span>
          </Link>
          <Link 
            href="/contact"
            className={`relative px-1 mx-3 py-1 transition-all duration-300 group ${
              isActive('/contact') ? 'text-[#A97C50]' : 'hover:text-[#A97C50]'
            }`}
          >
            Contact
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-[#A97C50] transition-all duration-500 ease-out ${
                isActive('/contact') ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2 group-hover:w-full'
              }`}
            ></span>
          </Link>
          {!isHomePage && (
            <button
              onClick={toggleSearch}
              className="cursor-pointer text-white hover:text-[#A97C50] transition-colors duration-300 ml-4 px-3 py-1 rounded-sm"
              aria-label="Search"
            >
              <Image 
                src="/images/search-icon.svg" 
                alt="Search" 
                width={20} 
                height={20}
                className="brightness-0 invert"
              />
            </button>
          )}
          <Link 
            href="/login"
            className={`relative px-1 mx-3 py-1 transition-all duration-300 group ${
              isActive('/login') ? 'text-[#A97C50]' : 'hover:text-[#A97C50]'
            }`}
          >
            Sign in
            <span
              className={`absolute left-1/2 bottom-0 h-[2px] bg-[#A97C50] transition-all duration-500 ease-out ${
                isActive('/login') ? 'w-full -translate-x-1/2' : 'w-0 -translate-x-1/2 group-hover:w-full'
              }`}
            ></span>
          </Link>
        </div>

        {/* Hamburger icon */}
        <button 
          onClick={toggleMenu}
          className='text-white text-3xl lg:hidden focus:outline-none hover:text-gray-300 transition-colors'
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className='fixed inset-0 bg-black/50 z-[9995] lg:hidden'
          onClick={closeMenu}
        />
      )}

      {/* Mobile Slide Menu */}
      <div className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white text-black z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className='flex justify-between items-center p-4 border-b'>
          <Image 
            src="/images/logo.svg"
            alt="Logo" 
            width={120} 
            height={30}
            className="filter brightness-0"
          />
          <button 
            onClick={closeMenu}
            className='text-2xl text-gray-600 hover:text-black transition-colors'
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <div className='flex flex-col items-start px-6 py-6 gap-6'>
          <span 
            className='cursor-pointer text-lg font-medium hover:text-gray-600 transition-colors relative'
            onMouseEnter={() => setHoveredButton('buy-mobile')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Buy
            {hoveredButton === 'buy-mobile' && (
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                Coming Soon
              </span>
            )}
          </span>
          <Link 
            href="/rental" 
            onClick={closeMenu}
            className={`cursor-pointer text-lg font-medium transition-colors ${
              pathname.startsWith('/rental')
                ? 'text-[#A97C50]'
                : 'hover:text-gray-600'
            }`}
          >
            Rent
          </Link>
          <span 
            className='cursor-pointer text-lg font-medium hover:text-gray-600 transition-colors relative'
            onMouseEnter={() => setHoveredButton('short-stays-mobile')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Short Stays
            {hoveredButton === 'short-stays-mobile' && (
              <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                Coming Soon
              </span>
            )}
          </span>
          <Link 
            href="/about" 
            onClick={closeMenu}
            className={`cursor-pointer text-lg font-medium transition-colors ${
              pathname === '/about'
                ? 'text-[#A97C50]'
                : 'hover:text-gray-600'
            }`}
          >
            About Us
          </Link>

          <Link 
            href="/contact" 
            onClick={closeMenu}
            className={`cursor-pointer text-lg font-medium transition-colors ${
              pathname === '/contact'
                ? 'text-[#A97C50]'
                : 'hover:text-gray-600'
            }`}
          >
            Contact
          </Link>
          {!isHomePage && (
            <button
              onClick={toggleSearch}
              className='flex items-center gap-2 text-lg font-medium hover:text-gray-600 transition-colors'
            >
              <Image 
                src="/images/search-icon.svg" 
                alt="Search" 
                width={20} 
                height={20}
                className="brightness-0"
              />
              Search
            </button>
          )}
        </div>
      </div>
    </>
  )
}