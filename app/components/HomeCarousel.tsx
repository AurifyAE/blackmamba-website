'use client'

import { useState, useCallback, useEffect, TouchEvent, useRef } from 'react'
import Image from 'next/image'

interface HomeCarouselProps {
  images: { src: string; alt: string; title?: string }[]
  peekAmount?: number
  centerScale?: number
}

export default function HomeCarousel({
  images,
  peekAmount = 25,
  centerScale = 1.15,
}: HomeCarouselProps) {
  const extendedImages = [...images, ...images, ...images]
  const originalLength = images.length
  const [currentIndex, setCurrentIndex] = useState(originalLength)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isAutoplayActive, setIsAutoplayActive] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current)
    }
  }, [])

  const resetToMiddleSet = useCallback((newIndex: number) => {
    let targetIndex = newIndex

    // Calculate equivalent position in middle set
    if (newIndex >= originalLength * 2) {
      targetIndex = newIndex - originalLength
    } else if (newIndex < originalLength) {
      targetIndex = newIndex + originalLength
    }

    // Clear any existing reset timeout
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current)
    }

    // Set up the reset with proper timing
    resetTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(true)
      setCurrentIndex(targetIndex)
      
      // Allow one frame for the DOM to update, then remove transition flag
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
    }, 600) // Slightly less than CSS transition duration

    return newIndex
  }, [originalLength])

  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setCurrentIndex((prev) => {
      const newIndex = prev + 1
      
      // If we're moving past the last set, prepare to reset
      if (newIndex >= originalLength * 3 - 1) {
        return resetToMiddleSet(newIndex)
      }
      
      return newIndex
    })
  }, [isTransitioning, resetToMiddleSet, originalLength])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setCurrentIndex((prev) => {
      const newIndex = prev - 1
      
      // If we're moving before the first set, prepare to reset
      if (newIndex <= 0) {
        return resetToMiddleSet(newIndex)
      }
      
      return newIndex
    })
  }, [isTransitioning, resetToMiddleSet])

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

  // Improved autoplay with proper cleanup
  useEffect(() => {
    if (!isAutoplayActive || isTransitioning) return

    const autoplayInterval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(autoplayInterval)
  }, [isAutoplayActive, isTransitioning, nextSlide])

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
      return `translateX(${sideOffset}%) scale(0.9)`
    } else if (Math.abs(diff) === 2) {
      return `translateX(${diff * 50}%) scale(0.75)`
    } else {
      return `translateX(${diff * 100}%) scale(0.6)`
    }
  }

  const getOpacity = (index: number) => {
    const diff = Math.abs(index - currentIndex)
    if (diff === 0) return 1
    if (diff === 1) return 0.7
    if (diff === 2) return 0.4
    return 0
  }

  const getZIndex = (index: number) => {
    const diff = Math.abs(index - currentIndex)
    if (diff === 0) return 30
    if (diff === 1) return 20
    if (diff === 2) return 10
    return 0
  }

  // Improved transition properties
  const getTransitionStyle = () => {
    if (isTransitioning) {
      return {
        transitionDuration: '0ms',
        transitionTimingFunction: 'linear'
      }
    }
    
    return {
      transitionDuration: '650ms',
      transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' // easeOutQuad for smoother feel
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 md:px-15 py-6 sm:py-8">
      <div 
        className="relative h-48 sm:h-56 md:h-72 lg:h-96 overflow-visible touch-pan-y"
        onTouchStart={handleTouchStartWithPause}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-roledescription="carousel"
      >
        {extendedImages.map((image, index) => {
          const transitionStyle = getTransitionStyle()
          
          return (
            <div
              key={`${image.src}-${index}`}
              className="absolute inset-0 will-change-transform"
              style={{
                transform: getTransform(index),
                opacity: getOpacity(index),
                zIndex: getZIndex(index),
                pointerEvents: Math.abs(index - currentIndex) <= 2 ? 'auto' : 'none',
                transitionProperty: 'transform, opacity',
                ...transitionStyle
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
          )
        })}

        {/* Navigation arrows */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            disabled={isTransitioning}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/40 hover:bg-black/60 disabled:opacity-50 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white text-lg sm:text-xl transition-opacity duration-200"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            disabled={isTransitioning}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/40 hover:bg-black/60 disabled:opacity-50 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white text-lg sm:text-xl transition-opacity duration-200"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}
