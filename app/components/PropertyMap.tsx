"use client"

type PropertyMapProps = {
  title?: string
  property?: {
    embedUrl?: string
    nearbyLocations?: Array<{ location: string; time: string }>
  }
}

export default function PropertyMap({
  title = "Elite Living Aminities",
  property
}: PropertyMapProps) {
  const walkingDistances = property?.nearbyLocations || [
    { location: "Dubai Mall & Burj Khalifa", time: "5 mins Walk" },
    { location: "Dubai Fountain", time: "3 mins Walk" },
    { location: "Dubai Aquarium", time: "4 mins Walk" },
    { location: "Dubai Opera", time: "6 mins Walk" }
  ]

  return (
    <section className="px-4 sm:px-5 md:px-15 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Walking Distances */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Nearby Locations
            </h3>
            <div className="space-y-3">
              {walkingDistances.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-[#A97C50] rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{item.time} to {item.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Static Embedded Map */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Location</h3>
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                src={property?.embedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890123!2d55.2678!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a2b1c3d4e5f%3A0x1234567890abcdef!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000001!5m2!1sen!2sae"}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

