export interface Property {
  id: string
  cardTitle: string
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
  airbnbLink?: string
}

export const properties: Property[] = [
  {
    id: "canal-bay-1802",
    cardTitle: "Canal Bay",
    title: "Burj Khalifa and Canal views | 3 Bedroom premium Apartment | Fully Furnished",
    location: "Business Bay, Dubai",
    imageSrc: "/images/rental/canal-bay-1802/REP04528.jpg",
    imageAlt: "Canal Bay by Ned",
    beds: 3,
    baths: 2.5,
    area: "1,265.9",
    availableFor: ['rent', 'shortstay'],
    rentPrice: "AED 220,000",
    shortStayPrice: "AED 1,600/night",
    airbnbLink: "https://www.airbnb.co.uk/rooms/1645149066570787511?unique_share_id=c855e5a3-d391-4473-9ae0-4d3bb3353dcc&viralityEntryPoint=1&s=76",
    descriptionTitle: "Burj Khalifa and Canal views | 3 Bedroom premium Apartment | Fully Furnished",
    description: "Experience the perfect blend of luxury, convenience, and urban serenity. Nestled in the heart of Business Bay, Canal Bay by NED redefines contemporary waterfront living. Enjoy panoramic views of the Dubai Canal and the iconic Burj Khalifa, all from the comfort of your elegantly designed home.",
    description2: "Each residence at Canal Bay is meticulously crafted, featuring refined interiors, top-tier finishes, and modern amenities that create a seamless living experience. Whether you seek a peaceful retreat or a vibrant city lifestyle, this is where everything converges-luxury, location, and lifestyle.",
    description3: `Be at the center of everything - where work, leisure, and relaxation coexist in perfect balance. Canal Bay offers residents a tranquil escape within one of Dubai's most vibrant neighborhoods. Designed for discerning homeowners and savvy investors alike, this property promises a lifestyle of comfort, connectivity, and class.

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
      "/images/rental/canal-bay-1802/REP04510.jpg",
      "/images/rental/canal-bay-1802/REP04513.jpg",
      "/images/rental/canal-bay-1802/REP04522.jpg",
      "/images/rental/canal-bay-1802/REP04528.jpg",
      "/images/rental/canal-bay-1802/REP04546.jpg",
      "/images/rental/canal-bay-1802/REP04555.jpg",
      "/images/rental/canal-bay-1802/REP04565.jpg",
      "/images/rental/canal-bay-1802/REP04582.jpg",
      "/images/rental/canal-bay-1802/REP04588.jpg",
      "/images/rental/canal-bay-1802/REP04618.jpg",
      "/images/rental/canal-bay-1802/REP04624.jpg",
      "/images/rental/canal-bay-1802/REP04634.jpg",
      "/images/rental/canal-bay-1802/REP04637.jpg",
      "/images/rental/canal-bay-1802/REP04652.jpg",
      "/images/rental/canal-bay-1802/REP04658.jpg",
      "/images/rental/canal-bay-1802/REP04670.jpg",
      "/images/rental/canal-bay-1802/REP04676.jpg",
      "/images/rental/canal-bay-1802/REP04681.jpg",
      "/images/rental/canal-bay-1802/REP04684.jpg",
      "/images/rental/canal-bay-1802/REP04687.jpg",
      "/images/rental/canal-bay-1802/REP04696.jpg",
      "/images/rental/canal-bay-1802/REP04708.jpg",
      "/images/rental/canal-bay-1802/REP04711.jpg",
      "/images/rental/canal-bay-1802/REP04728.jpg",
      "/images/rental/canal-bay-1802/REP04729.jpg",
      "/images/rental/canal-bay-1802/REP04731.jpg",
      "/images/rental/canal-bay-1802/REP04733.jpg",
      "/images/rental/canal-bay-1802/REP04734.jpg",
      "/images/rental/canal-bay-1802/REP04735.jpg",
      "/images/rental/canal-bay-1802/REP04736.jpg",
      "/images/rental/canal-bay-1802/REP04738.jpg",
      "/images/rental/canal-bay-1802/REP04740.jpg",
      "/images/rental/canal-bay-1802/REP04744.jpg",
      "/images/rental/canal-bay-1802/REP04987.jpg",
      "/images/rental/canal-bay-1802/REP04988.jpg",
      "/images/rental/canal-bay-1802/REP04991.jpg",
      "/images/rental/canal-bay-1802/REP04993.jpg",
      "/images/rental/canal-bay-1802/REP04995.jpg",
      "/images/rental/canal-bay-1802/REP04998.jpg",
      "/images/rental/canal-bay-1802/REP05010.jpg",
      "/images/rental/canal-bay-1802/REP05012.jpg",
      "/images/rental/canal-bay-1802/REP05014.jpg",
      "/images/rental/canal-bay-1802/REP05019.jpg",
      "/images/rental/canal-bay-1802/REP05020.jpg"
    ],
    floorPlan: "/images/rental/canalbay/canal-bay-floor-plan.jpg",
    companyName: "Ned by Al Ghurair",
    companyLogo: "/images/rental/canalbay/ned-by-al-ghurair.png",
    unit: "3 BEDROOM + 2.5 BATHS + 1 BALCONY",
    balconyQty: 1,
    suite: "1265.94 SQ.FT",
    balcony: "183.1 SQ.FT.",
    total: "1449.0 SQ.FT",
    fullWidthImage: "/images/rental/building-exterior.jpg",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.637277352512!2d55.27215097433425!3d25.181722683108518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6984f23c0735%3A0x8093941d20babfbc!2sCanal%20Bay%20by%20NED!5e0!3m2!1sen!2sin!4v1762144811688!5m2!1sen!2sin",
    nearbyLocations: [
      { location: "Scenic Canal Water Views and Walking & Jogging Tracks", time: "" },
      { location: "Close to Burj Khalifa and Downtown Dubai", time: "" },
      { location: "Wide range of Bars, Cafés & Fine Dining Restaurants", time: "" },
      { location: "Excellent Bus & Metro Connectivity", time: "" },
      { location: "Nearby Supermarkets, Pharmacies, and Retail Stores", time: "" },
      { location: "Access to premium Hotels & Spas", time: "" },
      { location: "Nursery and Early Childcare Facilities within proximity", time: "" }
    ]
  },
  {
    id: "canal-bay",
    cardTitle: "Canal Bay",
    title: "Waterfront Sophistication 3 Bedroom premium Apartment | Fully Furnished",
    location: "Business Bay, Dubai",
    imageSrc: "/images/rental/canalbay/REP04496.jpg",
    imageAlt: "Canal Bay by Ned",
    beds: 3,
    baths: 2.5,
    area: "1,265.9",
    availableFor: ['rent', 'shortstay'],
    rentPrice: "AED 180,000",
    shortStayPrice: "AED 1,400/night",
    descriptionTitle: "Waterfront Sophistication 3 Bedroom premium Apartment | Fully Furnished",
    description: "Experience the perfect blend of luxury, convenience, and urban serenity. Nestled in the heart of Business Bay, Canal Bay by NED redefines contemporary waterfront living. Enjoy panoramic views of the Dubai Canal and the iconic Burj Khalifa, all from the comfort of your elegantly designed home.",
    description2: "Each residence at Canal Bay is meticulously crafted, featuring refined interiors, top-tier finishes, and modern amenities that create a seamless living experience. Whether you seek a peaceful retreat or a vibrant city lifestyle, this is where everything converges-luxury, location, and lifestyle.",
    description3: `Be at the center of everything where work, leisure, and relaxation coexist in perfect balance. Canal Bay offers residents a tranquil escape within one of Dubai's most vibrant neighborhoods. Designed for discerning homeowners and savvy investors alike, this property promises a lifestyle of comfort, connectivity, and class.

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
      "/images/rental/canalbay/REP04496.jpg",
      "/images/rental/canalbay/REP04532.jpg",
      "/images/rental/canalbay/REP04544.jpg",
      "/images/rental/canalbay/REP04562.jpg",
      "/images/rental/canalbay/REP04565.jpg",
      "/images/rental/canalbay/REP04604.jpg",
      "/images/rental/canalbay/REP04655.jpg",
      "/images/rental/canalbay/REP04661.jpg",
      "/images/rental/canalbay/REP04667.jpg",
      "/images/rental/canalbay/REP04687.jpg",
      "/images/rental/canalbay/REP04699.jpg",
      "/images/rental/canalbay/REP04700.jpg",
      "/images/rental/canalbay/REP04701.jpg",
      "/images/rental/canalbay/REP04704.jpg",
      "/images/rental/canalbay/REP04706.jpg",
      "/images/rental/canalbay/REP04707.jpg",
      "/images/rental/canalbay/REP04709.jpg",
      "/images/rental/canalbay/REP04712.jpg",
      "/images/rental/canalbay/REP04714.jpg",
      "/images/rental/canalbay/REP04720.jpg",
      "/images/rental/canalbay/REP04723.jpg",
      "/images/rental/canalbay/REP04725.jpg",
      "/images/rental/canalbay/REP04731.jpg",
      "/images/rental/canalbay/REP04737.jpg",
      "/images/rental/canalbay/REP04747.jpg",
      "/images/rental/canalbay/REP04753.jpg",
      "/images/rental/canalbay/REP04756.jpg",
      "/images/rental/canalbay/REP04762.jpg",
      "/images/rental/canalbay/REP04763.jpg",
      "/images/rental/canalbay/REP04765.jpg",
      "/images/rental/canalbay/REP04769.jpg",
      "/images/rental/canalbay/REP04771.jpg",
      "/images/rental/canalbay/REP04773.jpg",
      "/images/rental/canalbay/REP04775.jpg",
      "/images/rental/canalbay/REP04777.jpg",
      "/images/rental/canalbay/REP04779.jpg",
      "/images/rental/canalbay/REP04781.jpg",
      "/images/rental/canalbay/REP04787.jpg",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.637277352512!2d55.27215097433425!3d25.181722683108518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6984f23c0735%3A0x8093941d20babfbc!2sCanal%20Bay%20by%20NED!5e0!3m2!1sen!2sin!4v1762144811688!5m2!1sen!2sin",
    nearbyLocations: [
      { location: "Scenic Canal Water Views and Walking & Jogging Tracks", time: "" },
      { location: "Close to Burj Khalifa and Downtown Dubai", time: "" },
      { location: "Wide range of Bars, Cafés & Fine Dining Restaurants", time: "" },
      { location: "Excellent Bus & Metro Connectivity", time: "" },
      { location: "Nearby Supermarkets, Pharmacies, and Retail Stores", time: "" },
      { location: "Access to premium Hotels & Spas", time: "" },
      { location: "Nursery and Early Childcare Facilities within proximity", time: "" }
    ]
  },
  {
    id: "dunya-tower",
    cardTitle: "Dunya Tower",
    title: "Elegant Downtown | 3 bedrooms Apartment | Fully Furnished | Dual Balcony",
    location: "Downtown Dubai",
    imageSrc: "/images/rental/downtown-img/downtown-15.jpeg",
    imageAlt: "Dunya Tower by Emirates Properties",
    beds: 3,
    baths: 3,
    area: "1,265.9",
    availableFor: ['rent', 'shortstay'],
    rentPrice: "AED 240,000",
    shortStayPrice: "AED 1,800/night",
    airbnbLink: "https://www.airbnb.co.uk/rooms/1700852017499926696?unique_share_id=8f7df5c6-da8b-4117-a8e7-fe07751b1355&viralityEntryPoint=1&s=76",
    descriptionTitle: "Live where the city's heartbeat is strongest.",
    description: "Discover a refined rental opportunity in Dunya Tower by Emirates Properties - located in the very heart of Downtown Dubai, steps from the Dubai Mall, the Burj Khalifa, and the city’s most iconic attractions.",
    description3: [
      "Luxurious Interior Design: Fully upgraded with premium materials and high-end finishes, creating a refined and contemporary living environment throughout.",
      "Dual Balconies: Enjoy seamless indoor-outdoor living with two private balconies - one extending from the kitchen and another from the bedroom - each offering partial views of the iconic Burj Khalifa and the vibrant Downtown skyline.",
      "Closed Kitchen with Balcony Access: A spacious, well-appointed closed kitchen featuring modern fittings and direct access to the balcony - ideal for those who enjoy both cooking and entertaining.",
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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.50575067262!2d55.282869700000006!3d25.194693299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69f234ed44c9%3A0xc0c30b7b9d205885!2sDunya%20Tower!5e0!3m2!1sen!2sin!4v1762144450071!5m2!1sen!2sin",
    nearbyLocations: [
      { location: "Located in Downtown Dubai, just minutes from:", time: "" },
      { location: "Dubai Mall and Burj Khalifa", time: "" },
      { location: "The Dubai Fountain, world-class dining, and entertainment", time: "" },
      { location: "Business Bay and DIFC for work and connectivity", time: "" },
    ]
  },
  {
    id: "sobha-waves",
    cardTitle: "Sobha Hartland - Waves",
    title: "Sobha Hartland - Waves",
    location: "Nad Al Sheba, Dubai",
    imageSrc: "/images/rental/sobha-wave/sobha-wave-13.jpeg",
    imageAlt: "Sobha Waves",
    beds: 1,
    baths: 1,
    area: "1,265.9",
    availableFor: ['rent', 'shortstay'],
    rentPrice: "AED 110,000",
    shortStayPrice: "AED 800/night",
    airbnbLink: "https://www.airbnb.co.uk/rooms/1699048191287962221?unique_share_id=9f94e906-47fa-4d41-a884-eb25638e53a2&viralityEntryPoint=1&s=76",
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
      "/images/rental/sobha-wave/sobha-wave-13.jpeg",
      "/images/rental/sobha-wave/sobha-wave-12.jpeg",
      "/images/rental/sobha-wave/sobha-wave-3.jpeg",
      "/images/rental/sobha-wave/sobha-wave-4.jpeg",
      "/images/rental/sobha-wave/sobha-wave-1.jpeg",
      "/images/rental/sobha-wave/sobha-wave-5.jpeg",
      "/images/rental/sobha-wave/sobha-wave-6.jpeg",
      "/images/rental/sobha-wave/sobha-wave-7.jpeg",
      "/images/rental/sobha-wave/sobha-wave-10.jpeg",
      "/images/rental/sobha-wave/sobha-wave-15.jpeg",
      "/images/rental/canalbay/canalbay-4.jpeg",
      "/images/rental/sobha-wave/sobha-wave-11.jpeg",
      "/images/rental/sobha-wave/sobha-wave-16.jpeg",
      "/images/rental/sobha-wave/sobha-wave-17.jpeg",
      "/images/rental/sobha-wave/sobha-wave-19.jpeg",
      "/images/rental/sobha-wave/sobha-wave-20.jpeg",
      "/images/rental/sobha-wave/sobha-wave-21.jpeg",
      "/images/rental/sobha-wave/sobha-wave-23.jpeg",

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
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21031.081351971683!2d55.301590335423484!3d25.1694434831947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f695e5df6b685%3A0x26bb4daefcc57fb4!2sHartland%20Waves!5e0!3m2!1sen!2sin!4v1762145041550!5m2!1sen!2sin",
    nearbyLocations: [
      { location: "Master Community: Sobha Hartland, Mohammed bin Rashid City — a lush, freehold development with over 2.4 million sq ft of green space.", time: "" },
      { location: "Views: Breathtaking skyline panoramas — Dubai Creek, Ras Al Khor Wildlife Sanctuary, Meydan Racecourse, and more", time: "" },
      { location: "Connectivity: Close to major landmarks and road networks, making daily commutes and lifestyle access effortless.", time: "" },
      { location: "Community Feel: Waterfront living with premium Sobha quality, combining tranquility, prestige, and a refined residential experience.", time: "" },
    ]
  },
  // {
  //   id: "azizi-developments",
  //   cardTitle: "Azizi Developments",
  //   title: "Azizi Developments",
  //   location: "Dubai Marina",
  //   imageSrc: "/images/product-azizi-developments-dubai.png",
  //   imageAlt: "Azizi Developments",
  //   beds: 1,
  //   baths: 1,
  //   area: "2,800",
  //   availableFor: ['rent'],
  //   rentPrice: "AED 65,000",
  //   shortStayPrice: "AED 1,200/night",
  //   descriptionTitle: "",
  //   description: "Luxury villa in Dubai Marina with private beach access and marina views.",
  //   features: [
  //     "Dubai Marina location",
  //     "Private beach access",
  //     "Marina views",
  //     "Spacious layout",
  //     "Premium amenities"
  //   ],
  //   galleryImages: [
  //     "/images/product-azizi-developments-dubai.png",
  //     "/images/dubai-marina.png"
  //   ],
  //   companyName: "Azizi Developments",
  //   companyLogo: "/images/rental/sobhaone-logo.png",
  //   comingSoon: true
  // },
]
