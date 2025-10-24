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
  description: string
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
    title: "Canal Bay by Ned",
    location: "Business Bay, Dubai",
    imageSrc: "/images/rental/canalbay/canalbay-1.jpeg",
    imageAlt: "Canal Bay by Ned",
    beds: 3,
    baths: 2.5,
    area: "1,265.9",
    availableFor: ['rent'],
    rentPrice: "180,000 - 200,000",
    shortStayPrice: "AED 3,333/night",
    description: "Located in Business Bay, this brand new - ready for occupancy apartment building features state-of-the-art amenities and well-polished and elegantly crafted interior designs. Offering 2 and 3-bedroom apartments, Canal Bay offers a modern and luxurious living space for you and your loved ones.",
    features: [
      "8.5 Acres of Building Land Parcel",
      "18 Hole Pitch & Putt Golf Course",
      "4 Themed Courtyards",
      "Courtyard for the senses",
      "Dine By the waters",
      "Fully Furnished Apartment, ready to move"
    ],
    galleryImages: [
      "/images/rental/canalbay/canalbay-1.jpeg",
      "/images/rental/canalbay/canalbay-2.jpeg",
      "/images/rental/canalbay/canalbay-3.jpeg",
      "/images/rental/canalbay/canalbay-4.jpeg",
      "/images/rental/canalbay/canalbay-5.jpeg",
      "/images/rental/canalbay/canalbay-6.jpeg",
      "/images/rental/canalbay/canalbay-7.jpeg",
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
    floorPlan: "/images/rental/canalbay/floorplan-1702.jpg",
    companyName: "Azizi Developments",
    companyLogo: "/images/rental/sobhaone-logo.png",
    unit: "3 BEDROOM + 2.5 BATHS + 1 BALCONY",
    balconyQty: 1,
    suite: "1265.9 SQ.FT",
    balcony: "183.1 SQ.FT.",
    total: "1449.0 SQ.FT",
    fullWidthImage: "/images/rental/building-exterior.jpg",
    embedUrl: "https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1760423800056!5m2!1sen!2sin!6m8!1m7!1seU0SZPlgXJIiKrM-Nm-1Dw!2m2!1d25.18154776161165!2d55.27667684143006!3f20.27736453779439!4f39.06276438296891!5f0.6757526525828232",
    nearbyLocations: [
      { location: "Dubai Mall & Burj Khalifa", time: "5 mins Walk" },
      { location: "Dubai Fountain", time: "3 mins Walk" },
      { location: "Dubai Aquarium", time: "4 mins Walk" },
      { location: "Dubai Opera", time: "6 mins Walk" },
      { location: "Business Bay Metro Station", time: "8 mins Walk" },
      { location: "Dubai International Financial Centre", time: "10 mins Walk" }
    ]
  },
  {
    id: "dunya-tower",
    title: "Dunya Tower by Emirates Properties",
    location: "Downtown Dubai",
    imageSrc: "/images/rental/downtown-img/downtown-1.jpeg",
    imageAlt: "Dunya Tower by Emirates Properties",
    beds: 3,
    baths: 3,
    area: "1,265.9",
    availableFor: ['rent'],
    rentPrice: "220,000 - 280,000",
    shortStayPrice: "AED 3,333/night",
    description: "Dunya Tower is the new modern residential project set within the magnificent Downtown Dubai. It is strategically located and connected to the prestigious DIFC, one of the world's main financial centers, Business Bay, Dubai's prime business hub, and flanked by the most iconic projects including the highest tower in the world Burj Khalifa, and the largest shopping mall in the world Dubai Mall, the Mall contains more than 1,200 shops with an area of 3.77 million Sqft.",
    features: [
      "Community to Play, Dine & Shop",
      "Utmost Comfort Inspired Interiors",
      "Tiled Roofs, Elegant Detailing & Spacious Layout",
      "Tranquility Lifestyle",
      "A Perfect Efficient Home Design"
    ],
    galleryImages: [
      "/images/rental/downtown-img/downtown-1.jpeg",
      "/images/rental/downtown-img/downtown-2.jpeg",
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
      "/images/rental/downtown-img/downtown-15.jpeg",
      "/images/rental/downtown-img/downtown-16.jpeg",
      "/images/rental/downtown-img/downtown-17.jpeg",
      "/images/rental/downtown-img/downtown-19.jpeg",
      "/images/rental/downtown-img/downtown-20.jpeg"
    ],
    floorPlan: "/images/rental/downtown-img/floor-plan-104.jpg",
    companyName: "Azizi Developments",
    companyLogo: "/images/rental/sobhaone-logo.png",
    unit: "3 BEDROOM + 3 BATHS + 2 BALCONY",
    balconyQty: 2,
    suite: "1265.9 SQ.FT",
    balcony: "183.1 SQ.FT.",
    total: "1449.0 SQ.FT",
    fullWidthImage: "/images/rental/downtown-img/downtown-2.jpeg",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115542.12665604343!2d55.283109!3d25.179894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69f234ed44c9%3A0xc0c30b7b9d205885!2sDunya%20Tower!5e0!3m2!1sen!2sus!4v1760423231042!5m2!1sen!2sus",
    nearbyLocations: [
      { location: "Dubai Mall & Burj Khalifa", time: "5 mins Walk" },
      { location: "Burj al Arab", time: "18 mins" },
      { location: "Dubai International Airport", time: "14 mins" },
      { location: "24 mins Walk to JBR", time: "3 mins Walk" },
      { location: "Burj Khalifa Metro Station", time: "4 mins Walk" },
      { location: "Dubai International Financial Centre", time: "5 mins Walk" }
    ]
  },
  {
    id: "sobha-waves",
    title: "Sobha Waves",
    location: "Business Bay, Dubai",
    imageSrc: "/images/rental/canalbay/canalbay-1.jpeg",
    imageAlt: "Sobha Waves",
    beds: 1,
    baths: 2,
    area: "1,265.9",
    availableFor: ['rent'],
    rentPrice: "80,000 - 95,000",
    shortStayPrice: "AED 3,333/night",
    description: "Located in Business Bay, this brand new - ready for occupancy apartment building features state-of-the-art amenities and well-polished and elegantly crafted interior designs. Offering 2 and 3-bedroom apartments, Canal Bay offers a modern and luxurious living space for you and your loved ones.",
    features: [
      "8.5 Acres of Building Land Parcel",
      "18 Hole Pitch & Putt Golf Course",
      "4 Themed Courtyards",
      "Courtyard for the senses",
      "Dine By the waters",
      "Fully Furnished Apartment, ready to move"
    ],
    galleryImages: [
      "/images/rental/sobha-wave/sobha-wave-3.jpeg",
      "/images/rental/sobha-wave/sobha-wave-4.jpeg",
      "/images/rental/sobha-wave/sobha-wave-8.jpeg",
      "/images/rental/sobha-wave/sobha-wave-9.jpeg",
      "/images/rental/sobha-wave/sobha-wave-12.jpeg",
      "/images/rental/sobha-wave/sobha-wave-13.jpeg",
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
    floorPlan: "/images/rental/canalbay/floorplan-1702.jpg",
    companyName: "Sobha Developments",
    companyLogo: "/images/rental/sobhaone-logo.png",
    unit: "3 BEDROOM + 2.5 BATHS + 1 BALCONY",
    balconyQty: 1,
    suite: "1265.9 SQ.FT",
    balcony: "183.1 SQ.FT.",
    total: "1449.0 SQ.FT",
    fullWidthImage: "/images/rental/building-exterior.jpg",
    embedUrl: "https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1760423800056!5m2!1sen!2sin!6m8!1m7!1seU0SZPlgXJIiKrM-Nm-1Dw!2m2!1d25.18154776161165!2d55.27667684143006!3f20.27736453779439!4f39.06276438296891!5f0.6757526525828232",
    nearbyLocations: [
      { location: "Dubai Mall & Burj Khalifa", time: "5 mins Walk" },
      { location: "Dubai Fountain", time: "3 mins Walk" },
      { location: "Dubai Aquarium", time: "4 mins Walk" },
      { location: "Dubai Opera", time: "6 mins Walk" },
      { location: "Business Bay Metro Station", time: "8 mins Walk" },
      { location: "Dubai International Financial Centre", time: "10 mins Walk" }
    ]
  },
  {
    id: "azizi-developments",
    title: "Azizi Developments",
    location: "Dubai Marina",
    imageSrc: "/images/product-azizi-developments-dubai.png",
    imageAlt: "Azizi Developments",
    beds: 1,
    baths: 4,
    area: "2,800",
    availableFor: [ 'rent' ],
    buyPrice: "AED 5,200,000",
    rentPrice: "65,000 - 80,0000",
    shortStayPrice: "AED 1,200/night",
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
