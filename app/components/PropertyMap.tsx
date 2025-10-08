"use client"

import { useMemo, useState } from "react"

type NearbyCategory = "schools" | "shop" | "dine" | "grocery" | "attractions"

// Using simple iframe embeds per category; no dynamic Maps API usage

type PropertyMapProps = {
  title?: string
}

// Predefined Google Maps embed URLs per category
const EMBEDS: Record<NearbyCategory, string> = {
  schools:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d115274.66330655794!2d55.19704695!3d25.145877450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sschool!5e0!3m2!1sen!2sae!4v1700000000001!5m2!1sen!2sae",
  shop:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d115274.66330655794!2d55.19704695!3d25.145877450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshopping!5e0!3m2!1sen!2sae!4v1700000000002!5m2!1sen!2sae",
  dine:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d115274.66330655794!2d55.19704695!3d25.145877450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants!5e0!3m2!1sen!2sae!4v1700000000003!5m2!1sen!2sae",
  grocery:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12329.14150835196!2d55.30752545869294!3d25.17019426713531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgrocery!5e0!3m2!1sen!2sin!4v1759908430719!5m2!1sen!2sin",
  attractions:
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d115274.66330655794!2d55.19704695!3d25.145877450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sattractions!5e0!3m2!1sen!2sae!4v1700000000004!5m2!1sen!2sae"
}

export default function PropertyMap({
  title = "Elite Living Aminities"
}: PropertyMapProps) {
  const [activeCategory, setActiveCategory] = useState<NearbyCategory>("schools")

  const categories: { key: NearbyCategory; label: string }[] = [
    { key: "schools", label: "Schools" },
    { key: "shop", label: "Shop" },
    { key: "dine", label: "Dine" },
    { key: "grocery", label: "Grocery" },
    { key: "attractions", label: "Attractions" }
  ]

  const currentEmbed = useMemo(() => EMBEDS[activeCategory], [activeCategory])

  // No dynamic Google Maps usage; iframe only per selected category

  return (
    <section className="px-4 sm:px-5 md:px-15 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{title}</h2>
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === key
                  ? "bg-[#A97C50] text-white border-[#A97C50]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            key={activeCategory}
            src={currentEmbed}
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

