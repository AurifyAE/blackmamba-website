export interface Property {
  id: string
  title: string
  location: string
  imageSrc: string
  imageAlt: string
  beds: number
  baths: number
  area: string
  availableFor: ('buy' | 'rent' | 'shortstay')[]
  buyPrice?: string
  rentPrice?: string
  shortStayPrice?: string
  descriptionTitle: string
  description: string
  description2?: string 
  description3?: string | string[]
  galleryImages: string[]
  floorPlan?: string
  companyName: string
  companyLogo: string
  features: string[]
  // Additional fields from rentals
  unit?: string
  balconyQty?: number
  suite?: string
  balcony?: string
  total?: string
  fullWidthImage?: string
  embedUrl?: string
  nearbyLocations?: Array<{ location: string; time: string }>
  comingSoon?: boolean
}

export const properties: Property[] = [
  {
    id: "canal-bay",
    title: "Waterfront Sophistication 3 Bedroom premium Apartment | Fully Furnished",
    location: "Business Bay, Dubai",
    imageSrc: "/images/rental/canalbay/canalbay-7.jpeg",
    imageAlt: "Canal Bay by Ned",
    beds: 3,
    baths: 2.5,
    area: "1,265.9",
    availableFor: ['rent'],
    rentPrice: "AED 180K - 200K",
    shortStayPrice: "AED 3,333/night",
    descriptionTitle: "Waterfront Sophistication 3 Bedroom premium Apartment | Fully Furnished",
    description: "Experience the perfect blend of luxury, convenience, and urban serenity. Nestled in the heart of Business Bay, Canal Bay by NED redefines contemporary waterfront living. Enjoy panoramic views of the Dubai Canal and the iconic Burj Khalifa, all from the comfort of your elegantly designed home.",
    description2: "Each residence at Canal Bay is meticulously crafted, featuring refined interiors, top-tier finishes, and modern amenities that create a seamless living experience. Whether you seek a peaceful retreat or a vibrant city lifestyle, this is where everything converges—luxury, location, and lifestyle.",
    description3: `Be at the center of everything—where work, leisure, and relaxation coexist in perfect balance. Canal Bay offers residents a tranquil escape within one of Dubai's most vibrant neighborhoods. Designed for discerning homeowners and savvy investors alike, this property promises a lifestyle of comfort, connectivity, and class.

For more information or to schedule a private viewing, contact:
Blackmamba Real Estate L.L.C.`,
    features: [
      "Prime waterfront location in Business Bay",
      "Breathtaking Burj Khalifa and Canal views",
      "Ready for immediate occupancy",
      "Spacious, modern apartments with elegant interiors",
      "State-of-the-art amenities including gym, swimming pool, and relaxation areas",
      "High-quality finishes and thoughtfully designed layouts",
      "Dedicated parking and 24/7 security services"
    ],
    galleryImages: [
      "/images/rental/canalbay/canalbay-7.jpeg",
      "/images/rental/canalbay/canalbay-1.jpeg",
      "/images/rental/canalbay/canalbay-2.jpeg",
      "/images/rental/canalbay/canalbay-3.jpeg",
      "/images/rental/canalbay/canalbay-4.jpeg",
      "/images/rental/canalbay/canalbay-5.jpeg",
      "/images/rental/canalbay/canalbay-6.jpeg",
      "/images/rental/canalbay/canalbay-8.jpeg",
      "/images/rental/canalbay/canalbay-9.jpeg",
      "/images/rental/canalbay/canalbay-10.jpeg",
      "/images/rental/canalbay/canalbay-11.jpeg",
      "/images/rental/canalbay/canalbay-12.jpeg",
      "/images/rental/canalbay/canalbay-13.jpeg",
      "/images/rental/canalbay/canalbay-14.jpeg",
      "/images/rental/canalbay/canalbay-15.jpeg",
      "/images/rental/canalbay/canalbay-16.jpeg",
      "/images/rental/canalbay/canalbay-17.jpeg",
      "/images/rental/canalbay/canalbay-19.jpeg",
      "/images/rental/canalbay/canalbay-20.jpeg"
    ],
    floorPlan: "/images/rental/canalbay/canal-bay-floor-plan.jpg",
    companyName: "Ned by Al Ghurair",
    companyLogo: "/images/rental/canalbay/ned-by-al-ghurair.png",
    unit: "3 BEDROOM + 2.5 BATHS + 1 BALCONY",
    balconyQty: 1,
    suite: "1265.9 SQ.FT",
    balcony: "183.1 SQ.FT.",
    total: "1449.0 SQ.FT",
    fullWidthImage: "/images/rental/building-exterior.jpg",
    embedUrl: "https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1760423800056!5m2!1sen!2sin!6m8!1m7!1seU0SZPlgXJIiKrM-Nm-1Dw!2m2!1d25.18154776161165!2d55.27667684143006!3f20.27736453779439!4f39.06276438296891!5f0.6757526525828232",
    nearbyLocations: [
      { location: "Scenic Canal Water Views and Walking & Jogging Tracks", time: "" },
      { location: "Close to Burj Khalifa and Downtown Dubai", time: "" },
      { location: "Wide range of Bars, Cafés & Fine Dining Restaurants", time: "" },
      { location: "Excellent Bus & Metro Connectivity", time: "" },
      { location: "Nearby Supermarkets, Pharmacies, and Retail Stores", time: "" },
      { location: "Access to premium Hotels & Spas", time: "" },
      { location: "Nursery and Early Childcare Facilities within proximity", time: ""}
    ]
  },
  {
    id: "dunya-tower",
    title: "Elegant Downtown | 3 bedrooms Apartment | Fully Furnished | Dual Balcony",
    location: "Downtown Dubai",
    imageSrc: "/images/rental/downtown-img/downtown-15.jpeg",
    imageAlt: "Dunya Tower by Emirates Properties",
    beds: 3,
    baths: 3,
    area: "1,265.9",
    availableFor: ['rent'],
    rentPrice: "AED 220K - 280K",
    shortStayPrice: "AED 3,333/night",
    descriptionTitle: "Live where the city's heartbeat is strongest.",
    description: "Discover a refined rental opportunity in Dunya Tower by Emirates Properties — located in the very heart of Downtown Dubai, steps from the Dubai Mall, the Burj Khalifa, and the city’s most iconic attractions.",
    description3: [
      "Luxurious Interior Design: Fully upgraded with premium materials and high-end finishes, creating a refined and contemporary living environment throughout.",
      "Dual Balconies: Enjoy seamless indoor-outdoor living with two private balconies — one extending from the kitchen and another from the bedroom — each offering partial views of the iconic Burj Khalifa and the vibrant Downtown skyline.",
      "Closed Kitchen with Balcony Access: A spacious, well-appointed closed kitchen featuring modern fittings and direct access to the balcony — ideal for those who enjoy both cooking and entertaining.",
      "Dedicated Study Room: A versatile space that can be perfectly utilized as a home office, creative corner, or an expansive storage room, depending on your lifestyle needs.",
      "Laundry & Storage Room: A separate laundry area with integrated storage, providing both practicality and organization for everyday living.",
      "Guest Powder Room: Elegant and convenient, designed to enhance comfort when hosting family or visitors."
    ],
    features: [
      "A modern gymnasium and swimming pool for an active lifestyle",
      "24/7 security and concierge service",
      "Children's play area, ideal for families",
      "Covered parking, central air conditioning, and well-finished interiors",
      "Excellent connectivity to Business Bay, DIFC, and the broader Downtown area"
    ],
    galleryImages: [
      "/images/rental/downtown-img/downtown-15.jpeg",
      "/images/rental/downtown-img/downtown-1.jpeg",
      "/images/rental/downtown-img/downtown-3.jpeg",
      "/images/rental/downtown-img/downtown-4.jpeg",
      "/images/rental/downtown-img/downtown-5.jpeg",
      "/images/rental/downtown-img/downtown-6.jpeg",
      "/images/rental/downtown-img/downtown-7.jpeg",
      "/images/rental/downtown-img/downtown-8.jpeg",
      "/images/rental/downtown-img/downtown-9.jpeg",
      "/images/rental/downtown-img/downtown-10.jpeg",
      "/images/rental/downtown-img/downtown-11.jpeg",
      "/images/rental/downtown-img/downtown-12.jpeg",
      "/images/rental/downtown-img/downtown-13.jpeg",
      "/images/rental/downtown-img/downtown-14.jpeg",
      "/images/rental/downtown-img/downtown-16.jpeg",
      "/images/rental/downtown-img/downtown-17.jpeg",
      "/images/rental/downtown-img/downtown-19.jpeg",
      "/images/rental/downtown-img/downtown-20.jpeg"
    ],
    floorPlan: "/images/rental/downtown-img/dunya-tower-floor-plan.jpg",
    companyName: "Dunya-tower",
    companyLogo: "/images/rental/sobhaone-logo.png",
    unit: "3 BEDROOM + 3 BATHS + 2 BALCONY",
    balconyQty: 2,
    suite: "",
    balcony: "",
    total: "1634.18 SQ.FT",
    fullWidthImage: "/images/rental/downtown-img/downtown-2.jpeg",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115542.12665604343!2d55.283109!3d25.179894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69f234ed44c9%3A0xc0c30b7b9d205885!2sDunya%20Tower!5e0!3m2!1sen!2sus!4v1760423231042!5m2!1sen!2sus",
    nearbyLocations: [
      { location: "Located in Downtown Dubai, just minutes from:", time: "" },
      { location: "Dubai Mall and Burj Khalifa", time: "" },
      { location: "The Dubai Fountain, world-class dining, and entertainment", time: "" },
      { location: "Business Bay and DIFC for work and connectivity", time: "" },
    ]
  },
  {
    id: "sobha-waves",
    title: "Sobha Hartland - Waves",
    location: "Nad Al Sheba, Dubai",
    imageSrc: "/images/rental/sobha-wave/sobha-wave-3.jpeg",
    imageAlt: "Sobha Waves",
    beds: 1,
    baths: 1,
    area: "1,265.9",
    availableFor: ['rent'],
    rentPrice: "AED 80K - 95K",
    shortStayPrice: "AED 3,333/night",
    descriptionTitle: "Waterfront Elegance | 1-Bedroom apartment | Fully Furnished",
    description: "Discover a refined waterfront residence where sophistication meets serenity. Positioned on the scenic 1.8 km boardwalk of Sobha Hartland's Waterfront District, Hartland Waves by Sobha Realty is a 35-storey architectural landmark, offering uninterrupted 360-degree views and a lifestyle of elevated calm.",
    features: [
      "Infinity-edge swimming pool with panoramic views",
      "Fully equipped, modern gymnasium (indoor / outdoor)",
      "Yoga zone and zen garden for wellness and relaxation ",
      "Outdoor barbecue / social areas",
      "Children's playground to entertain the little ones",
      "1.8 km waterfront promenade / walking track for scenic strolls",
      "Five-level podium parking with shaded car parking",
      "Private balcony in every apartment, designed to maximize views"
    ],
    galleryImages: [
      "/images/rental/sobha-wave/sobha-wave-3.jpeg",
      "/images/rental/sobha-wave/sobha-wave-9.jpeg",
      "/images/rental/sobha-wave/sobha-wave-8.jpeg",
      "/images/rental/sobha-wave/sobha-wave-12.jpeg",
      "/images/rental/sobha-wave/sobha-wave-13.jpeg",
      "/images/rental/sobha-wave/sobha-wave-4.jpeg",
      "/images/rental/sobha-wave/sobha-wave-14.jpeg",
      "/images/rental/sobha-wave/sobha-wave-1.jpeg",
      "/images/rental/sobha-wave/sobha-wave-5.jpeg",
      "/images/rental/sobha-wave/sobha-wave-6.jpeg",
      "/images/rental/sobha-wave/sobha-wave-7.jpeg",
      "/images/rental/sobha-wave/sobha-wave-10.jpeg",
      "/images/rental/sobha-wave/sobha-wave-11.jpeg",
      "/images/rental/sobha-wave/sobha-wave-15.jpeg",
      "/images/rental/sobha-wave/sobha-wave-16.jpeg",
      "/images/rental/sobha-wave/sobha-wave-17.jpeg",
      "/images/rental/sobha-wave/sobha-wave-19.jpeg",
      "/images/rental/sobha-wave/sobha-wave-20.jpeg",
      "/images/rental/sobha-wave/sobha-wave-21.jpeg",
      "/images/rental/sobha-wave/sobha-wave-22.jpeg",
      "/images/rental/sobha-wave/sobha-wave-23.jpeg",
      "/images/rental/sobha-wave/sobha-wave-24.jpeg"
    ],
    floorPlan: "/images/rental/sobha-wave/sobha-hartland-waves.jpg",
    companyName: "Sobha Hartland - Waves",
    companyLogo: "/images/rental/sobha-wave/sobhawaves-logo.png",
    unit: "1 BEDROOM + 1 BATHS + 1 BALCONY",
    balconyQty: 1,
    suite: "582.22 SQ.FT",
    balcony: "44.13 SQ.FT.",
    total: "623.88 SQ.FT",
    fullWidthImage: "/images/rental/building-exterior.jpg",
    embedUrl: "https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1760423800056!5m2!1sen!2sin!6m8!1m7!1seU0SZPlgXJIiKrM-Nm-1Dw!2m2!1d25.18154776161165!2d55.27667684143006!3f20.27736453779439!4f39.06276438296891!5f0.6757526525828232",
    nearbyLocations: [
      { location: "Master Community: Sobha Hartland, Mohammed bin Rashid City — a lush, freehold development with over 2.4 million sq ft of green space.", time: "" },
      { location: "Views: Breathtaking skyline panoramas — Dubai Creek, Ras Al Khor Wildlife Sanctuary, Meydan Racecourse, and more", time: "" },
      { location: "Connectivity: Close to major landmarks and road networks, making daily commutes and lifestyle access effortless.", time: "" },
      { location: "Community Feel: Waterfront living with premium Sobha quality, combining tranquility, prestige, and a refined residential experience.", time: "" },
    ]
  },
  {
    id: "azizi-developments",
    title: "Azizi Developments",
    location: "Dubai Marina",
    imageSrc: "/images/product-azizi-developments-dubai.png",
    imageAlt: "Azizi Developments",
    beds: 1,
    baths: 1,
    area: "2,800",
    availableFor: [ 'rent' ],
    buyPrice: "AED 5,200,000",
    rentPrice: "AED 65K - 80K",
    shortStayPrice: "AED 1,200/night",
    descriptionTitle: "",
    description: "Luxury villa in Dubai Marina with private beach access and marina views.",
    features: [
      "Dubai Marina location",
      "Private beach access",
      "Marina views",
      "Spacious layout",
      "Premium amenities"
    ],
    galleryImages: [
      "/images/product-azizi-developments-dubai.png",
      "/images/dubai-marina.png"
    ],
    companyName: "Azizi Developments",
    companyLogo: "/images/rental/sobhaone-logo.png",
    comingSoon: true
  },
]
