import Image from 'next/image'
import React from 'react'

const featuredProperties = [
    { 
      src: "/images/downtown-dubai.jpg", 
      alt: "Downtown Dubai", 
      title: "Downtown Dubai" 
    },
    { 
      src: "/images/dubai-marina.png", 
      alt: "Business Bay", 
      title: "Business Bay" 
    },
    { 
      src: "/images/jumeirah-lake.jpg", 
      alt: "Nad Al Sheba", 
      title: "Nad Al Sheba" 
    },
    { 
      src: "/images/palm-jumeirah.jpg", 
      alt: "Palm Jumeirah", 
      title: "Palm Jumeirah" 
    },
    { 
      src: "/images/street-corridor.jpg", 
      alt: "Coming Soon", 
      title: "Coming Soon" 
    },
    { 
      src: "/images/street-corridor.jpg", 
      alt: "Coming Soon", 
      title: "Coming Soon" 
    }
  ] as const

const FeaturedProperties = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">Featured Properties</h2>
            <p className="mt-3 text-black/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">The neighborhoods best suited to your lifestyle, and the agents who know them best.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {featuredProperties.map((property, index) => (
              <div key={index} className="relative h-[80px] sm:h-[90px] overflow-hidden group cursor-pointer rounded-lg hover:scale-[1.02] transition-transform">
                <Image
                  src={property.src}
                  alt={property.alt}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                <div className="relative h-full flex items-center pl-3 sm:pl-4">
                  <p className="text-white text-base sm:text-lg font-medium">{property.title}</p>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default FeaturedProperties