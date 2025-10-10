'use client'

import { useState, useCallback, useEffect, TouchEvent } from 'react'
import Image from 'next/image'

interface HomeCarouselProps {
  images: { src: string; alt: string; title?: string }[]
  peekAmount?: number
  centerScale?: number
}

export default function HomeCarousel({
  images,
  peekAmount = 25, // Percentage of side slides visible
  centerScale = 1.15,
 
}: HomeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isAutoplayActive, setIsAutoplayActive] = useState(true)
  

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }
    
    setTouchStart(0)
    setTouchEnd(0)
  }

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplayActive) return

    const autoplayInterval = setInterval(() => {
      nextSlide()
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(autoplayInterval)
  }, [isAutoplayActive, nextSlide])

  // Pause autoplay on hover/touch
  const handleMouseEnter = () => setIsAutoplayActive(false)
  const handleMouseLeave = () => setIsAutoplayActive(true)
  const handleTouchStartWithPause = (e: TouchEvent) => {
    setIsAutoplayActive(false)
    handleTouchStart(e)
  }

 

  const getTransform = (index: number) => {
    const diff = index - currentIndex
    const centerOffset = 0
    const sideOffset = (100 - peekAmount) * (diff > 0 ? 1 : -1)
    
    if (diff === 0) {
      return `translateX(${centerOffset}%) scale(${centerScale})`
    } else if (Math.abs(diff) === 1) {
      return `translateX(${sideOffset}%) scale(0.85)`
    } else {
      return `translateX(${diff * 100}%) scale(0.7)`
    }
  }

  const getOpacity = (index: number) => {
    const diff = Math.abs(index - currentIndex)
    if (diff === 0) return 1
    if (diff === 1) return 0.6
    return 0
  }

  const getZIndex = (index: number) => {
    const diff = Math.abs(index - currentIndex)
    if (diff === 0) return 20
    if (diff === 1) return 10
    return 0
  }

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-15 py-6 sm:py-8"
    >
      <div 
        className="relative h-48 sm:h-56 md:h-72 lg:h-96 overflow-visible touch-pan-y"
        onTouchStart={handleTouchStartWithPause}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-roledescription="carousel"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-out will-change-transform"
            style={{
              transform: getTransform(index),
              opacity: getOpacity(index),
              zIndex: getZIndex(index),
              pointerEvents: Math.abs(index - currentIndex) <= 1 ? 'auto' : 'none'
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain object-center"
                priority={index === currentIndex}
                sizes="(max-width: 768px) 80vw, 60vw"
              />
            </div>
          </div>
        ))}

        {/* Navigation arrows at bottom center */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white text-lg sm:text-xl"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white text-lg sm:text-xl"
          >
            ›
          </button>
        </div>
      </div>

     
    </div>
  )
}
