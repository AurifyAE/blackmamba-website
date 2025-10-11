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
  features: string[]
  galleryImages: string[]
  floorPlan?: string
  companyName: string
  companyLogo: string
}

export const properties: Property[] = [
  {
    id: "sobha-one",
    title: "Sobha One",
    location: "Business Bay, Dubai",
    imageSrc: "/images/carousel1.png",
    imageAlt: "Sobha One",
    beds: 1,
    baths: 2,
    area: "1,030",
    availableFor: ['buy', 'rent', 'shortstay'],
    buyPrice: "AED 1,895,000",
    rentPrice: "AED 8,500/month",
    shortStayPrice: "AED 450/night",
    description: "Luxury apartment in the heart of Business Bay with stunning views and modern amenities.",
    features: [
      "Premium location in Business Bay",
      "Modern interior design",
      "High-end finishes",
      "Balcony with city views",
      "Gym and swimming pool access"
    ],
    galleryImages: [
      "/images/carousel1.png",
      "/images/carousel2.jpg",
      "/images/carousel3.png"
    ],
    companyName: "Sobha Realty",
    companyLogo: "/images/rental/sobhaone-logo.png"
  },
  {
    id: "dunya-tower",
    title: "Dunya Tower",
    location: "Downtown Dubai",
    imageSrc: "/images/product-dunya-tower-dubai.png",
    imageAlt: "Dunya Tower",
    beds: 2,
    baths: 3,
    area: "1,450",
    availableFor: ['buy', 'rent'],
    buyPrice: "AED 2,450,000",
    rentPrice: "AED 12,000/month",
    description: "Premium residential tower in Downtown Dubai with iconic Burj Khalifa views.",
    features: [
      "Iconic Downtown Dubai location",
      "Burj Khalifa views",
      "Dubai Mall proximity",
      "Premium finishes",
      "Concierge service"
    ],
    galleryImages: [
      "/images/product-dunya-tower-dubai.png",
      "/images/downtown-dubai.jpg"
    ],
    companyName: "Emirates Properties",
    companyLogo: "/images/rental/sobhaone-logo.png"
  },
  {
    id: "azizi-developments",
    title: "Azizi Developments",
    location: "Dubai Marina",
    imageSrc: "/images/product-azizi-developments-dubai.png",
    imageAlt: "Azizi Developments",
    beds: 3,
    baths: 4,
    area: "2,800",
    availableFor: ['buy', 'shortstay'],
    buyPrice: "AED 5,200,000",
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
    companyLogo: "/images/rental/sobhaone-logo.png"
  },
  {
    id: "palm-villa",
    title: "Palm Villa",
    location: "Palm Jumeirah, Dubai",
    imageSrc: "/images/product-azizi-developments-dubai.png",
    imageAlt: "Palm Villa",
    beds: 3,
    baths: 4,
    area: "2,800",
    availableFor: ['rent', 'shortstay'],
    rentPrice: "AED 18,000/month",
    shortStayPrice: "AED 1,500/night",
    description: "Exclusive villa on Palm Jumeirah with private beach and stunning sea views.",
    features: [
      "Palm Jumeirah location",
      "Private beach access",
      "Sea views",
      "Luxury finishes",
      "Private pool"
    ],
    galleryImages: [
      "/images/product-azizi-developments-dubai.png",
      "/images/palm-jumeirah.jpg"
    ],
    companyName: "Palm Properties",
    companyLogo: "/images/rental/sobhaone-logo.png"
  },
  {
    id: "jumeirah-lake-tower",
    title: "Jumeirah Lake Tower",
    location: "Jumeirah Lake Towers, Dubai",
    imageSrc: "/images/carousel2.jpg",
    imageAlt: "Jumeirah Lake Tower",
    beds: 2,
    baths: 2,
    area: "1,200",
    availableFor: ['buy', 'rent', 'shortstay'],
    buyPrice: "AED 1,650,000",
    rentPrice: "AED 7,500/month",
    shortStayPrice: "AED 380/night",
    description: "Modern apartment with lake views in the prestigious JLT community.",
    features: [
      "Lake views",
      "JLT community amenities",
      "Modern design",
      "Balcony access",
      "Gym and pool"
    ],
    galleryImages: [
      "/images/carousel2.jpg",
      "/images/jumeirah-lake.jpg"
    ],
    companyName: "JLT Properties",
    companyLogo: "/images/rental/sobhaone-logo.png"
  },
  {
    id: "canal-bay",
    title: "Canal Bay by Ned",
    location: "Business Bay, Dubai",
    imageSrc: "/images/rental/canalbay/canalbay-1.jpeg",
    imageAlt: "Canal Bay by Ned",
    beds: 3,
    baths: 2,
    area: "1,265",
    availableFor: ['rent', 'shortstay'],
    rentPrice: "AED 9,500/month",
    shortStayPrice: "AED 550/night",
    description: "Brand new ready for occupancy apartment building with state-of-the-art amenities.",
    features: [
      "Ready for occupancy",
      "State-of-the-art amenities",
      "Modern interior design",
      "Business Bay location",
      "Fully furnished options"
    ],
    galleryImages: [
      "/images/rental/canalbay/canalbay-1.jpeg",
      "/images/rental/canalbay/canalbay-2.jpeg",
      "/images/rental/canalbay/canalbay-3.jpeg"
    ],
    companyName: "Azizi Developments",
    companyLogo: "/images/rental/sobhaone-logo.png"
  }
]
