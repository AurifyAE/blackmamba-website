import React from 'react'
import Image from "next/image";

const amenities = [
    { src: "/images/barbacue-area-icon.svg", alt: "Barbecue Area Icon", title: "BARBECUE AREA", width: 56, height: 56 },
    { src: "/images/infinity-pool-icon.svg", alt: "Infinity Pool Icon", title: "INFINITY POOL", width: 56, height: 56 },
    { src: "/images/smart-gym-icon.svg", alt: "Smart Gym Icon", title: "SMART GYM", width: 40, height: 40 },
    { src: "/images/cycling-track-icon.svg", alt: "Cycling Track Icon", title: "Cycling Track", width: 56, height: 56 },
    { src: "/images/sports-arena-icon.svg", alt: "Sports Arena Icon", title: "Sports Arena", width: 56, height: 56 },
  ] as const

const Amenities = () => {
  return (
    <section className="px-4 sm:px-5 md:px-15 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black text-center">Building Amenities</h2>
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {amenities.map((item) => (
              <div key={item.title} className="border border-black/10 p-4 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-3 justify-between hover:shadow-md transition-shadow">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  width={item.width} 
                  height={item.height}
                  className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
                />
                <p className="text-xs sm:text-sm lg:text-base font-medium text-black uppercase leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Amenities