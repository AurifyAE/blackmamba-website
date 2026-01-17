import { notFound } from 'next/navigation'
import { properties } from '../../../data/properties'
import ShortStaysClient from '../ShortStaysClient'

const shortStaysPropertyData = {
  'canal-bay': {
    title: 'Fully Furnished 3BHK Short Stays Apartment in Dubai',
    description: 'Prime waterfront fully furnished 3BHK short stays apartment location in Dubai. Spacious, modern apartments with elegant interiors for short stay in Dubai',
    keywords: 'Fully Furnished Apartment dubai, 3BHK Apartment in dubai, 3BHK rental Apartment in dubai, luxury flat in dubai, flexible rentals stays in Dubai, full furnished rental flat in Dubai, full facility rental in dubai, rental stay in dubai, premium rental stay in dubai',
    propertyType: '3BHK Apartment',
    location: 'Canal Bay, Dubai'
  },
  'dunya-tower': {
    title: 'Dual Balcony Apartment in dubai | Luxury Premium Short Stay',
    description: 'Dual balcony fully furnished 3BHK short stays apartment in Dubai. A modern gymnasium and swimming pool for an active lifestyle',
    keywords: 'Dual Balcony Apartment in dubai, Dual Balcony Fully Furnished Apartment in dubai, Dual Balcony Apartment 3BHK Apartment in dubai, 3BHK rental Apartment in dubai, luxury flat in dubai, flexible rentals stays in Dubai, full furnished rental flat in Dubai, full facility rental in dubai, rental stay in dubai, premium rental stay in dubai',
    propertyType: '3BHK Apartment with Dual Balcony',
    location: 'Dunya Tower, Dubai'
  },
  'sobha-waves': {
    title: 'Single Bedroom Waterfront Elegance Luxury Apartments in Dubai',
    description: 'Single Bedroom fully furnished swimming pool with panoramic views luxury short stays apartment in Dubai',
    keywords: 'single bedroom apartment, Waterfront Elegance apartment in dubai, 1Bedroom apartment in dubai, Fully Furnished 1bhk apartment in dubai, low price rental apartment in dubai',
    propertyType: '1 Bedroom Apartment',
    location: 'Sobha Waves, Dubai'
  }
} as const

type ShortStaySlug = keyof typeof shortStaysPropertyData

export async function generateStaticParams() {
  return Object.keys(shortStaysPropertyData).map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}) {
  const slug = params.id as ShortStaySlug
  const data =
    shortStaysPropertyData[slug] ??
    shortStaysPropertyData['canal-bay']

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `https://www.blackmamba.realestate/shortstays/${params.id}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.blackmamba.realestate/shortstays/${params.id}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}





export default function ShortStaysDetails({ params }: { params: { id: string } }) {
  const { id } = params

  const seoData =
    shortStaysPropertyData[params.id as ShortStaySlug] ??
    shortStaysPropertyData['canal-bay']
  
  // Find property by ID from the properties data
  const property = properties.find((prop) => prop.id === id)
  
  // If property not found, show 404
  if (!property) {
    notFound()
  }

  return (
    <>
      <ShortStaysClient
        property={property}
        seoData={seoData}
      />
    </>
  )
}

