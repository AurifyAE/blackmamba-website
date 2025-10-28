'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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
      <div className={`fixed top-0 left-0 w-full z-100 flex justify-between items-center py-3 px-4 md:px-15 font-normal transition-colors duration-500 ${
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
            className='cursor-pointer hover:bg-white/20 transition-colors duration-300 px-4 py-1 rounded-sm relative'
            onMouseEnter={() => setHoveredButton('buy')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Buy
            {hoveredButton === 'buy' && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                Coming Soon
              </span>
            )}
          </span>
          <Link href="/rental"  className='cursor-pointer hover:bg-white/20 transition-colors duration-300 px-4 py-1 rounded-sm'>Rent</Link>
          <span 
            className='cursor-pointer hover:bg-white/20 transition-colors duration-300 px-4 py-1 rounded-sm relative'
            onMouseEnter={() => setHoveredButton('short-stays')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Short Stays
            {hoveredButton === 'short-stays' && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                Coming Soon
              </span>
            )}
          </span>
          <Link href="/about" className="cursor-pointer hover:bg-white/20 transition-colors duration-300 px-4 py-1 rounded-sm">About Us</Link>
          <Link href="/contact" className="cursor-pointer hover:bg-white/20 transition-colors duration-300 px-4 py-1 rounded-sm">Contact</Link>
          <Link href="/login" className="ml-4 cursor-pointer hover:bg-white/20 transition-colors duration-300 px-4 py-1 rounded-sm">Sign in</Link>
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
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={closeMenu}
        />
      )}

      {/* Mobile Slide Menu */}
      <div className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white text-black z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
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
          <Link href="/rental" className='cursor-pointer text-lg font-medium hover:text-gray-600 transition-colors' onClick={closeMenu}>Rent</Link>
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
            className='cursor-pointer text-lg font-medium hover:text-gray-600 transition-colors'
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className='cursor-pointer text-lg font-medium hover:text-gray-600 transition-colors'
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}