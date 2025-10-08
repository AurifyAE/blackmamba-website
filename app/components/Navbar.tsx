'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOverHero, setIsOverHero] = useState(true)

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
      <div className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center py-3 px-4 md:px-15 lg:px-30 font-normal transition-colors duration-500 ${
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

        <div className='lg:flex justify-evenly items-center w-1/2 gap-3 hidden'>
          <span className='cursor-pointer hover:text-gray-300 transition-colors'>Buy</span>
          <Link href="/rental"  className='cursor-pointer hover:text-gray-300 transition-colors'>Rent</Link>
          <span className='cursor-pointer hover:text-gray-300 transition-colors'>Short Stays</span>
          <Link href="/about" className="cursor-pointer hover:text-gray-300 transition-colors">About Us</Link>
          <Link href="/contact" className="cursor-pointer hover:text-gray-300 transition-colors">Contact</Link>
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
          <span className='cursor-pointer text-lg font-medium hover:text-gray-600 transition-colors'>Buy</span>
          <span className='cursor-pointer text-lg font-medium hover:text-gray-600 transition-colors'>Rent</span>
          <span className='cursor-pointer text-lg font-medium hover:text-gray-600 transition-colors'>Short Stays</span>
          <Link 
            href="/account" 
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