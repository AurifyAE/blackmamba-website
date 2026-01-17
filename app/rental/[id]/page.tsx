import { notFound } from 'next/navigation'
import RentalDetailsClient from './RentalDetailsClient'
import { properties } from '../../../data/properties'

const propertyData = {
  'canal-bay': {
    title: 'Fully Furnished Waterfront Sophistication 3 Bedroom Premium Apartment',
    description: 'Fully Furnished Waterfront Sophistication 3 Bedroom Premium Apartment in Dubai for rent. Low cost high class luxury Apartment in Dubai with full Furnished',
    keywords: 'Fully Furnished Apartment dubai, 3BHK Apartment in dubai, 3BHK rental Apartment in dubai, luxury flat in dubai, flexible rentals stays in Dubai, full furnished rental flat in Dubai, full facility rental in dubai, rental stay in dubai, premium rental stay in dubai'
  },
  'dunya-tower': {
    title: 'Apartments with Dual Balcony 3 Bed Room for Rent in Dubai',
    description: 'Best apartments with fully furnished and dual balcony for rent in Dubai. Book your apartments with a balcony available for long term on yearly basis in UAE',
    keywords: 'Dual Balcony Apartment in dubai, Dual Balcony Fully Furnished Apartment in dubai, Dual Balcony Apartment 3BHK Apartment in dubai, 3BHK rental Apartment in dubai, luxury flat in dubai, flexible rentals stays in Dubai, full furnished rental flat in Dubai, full facility rental in dubai, rental stay in dubai, premium rental stay in dubai'
  },
  'sobha-waves': {
    title: 'Waterfront Elegance | 1-Bedroom apartment | Fully Furnished',
    description: "Book your high facility Fully Furnished, 1 Bedroom,Waterfront Elegance and swimming pool apartment for rent in dubai near Sobha hartland's waterfront District.",
    keywords: 'Waterfront Elegance apartment in dubai, 1 Bedroom apartment in dubai, Fully Furnished 1 bhk apartment in dubai, low price rental apartment in dubai'
  },
  'azizi-developments': {
    title: 'Book Your Luxury Apartments in Dubai Marina For Rent',
    description: 'Luxury Fully Furnished Apartments in Dubai Marina with private beach access and marina views. Low price premium apartment in Dubai',
    keywords: 'Fully Furnished Apartment dubai, Apartment in dubai, rental Apartment in dubai, luxury flat in dubai, flexible rentals stays in Dubai, full furnished rental flat in Dubai, full facility rental in dubai, rental stay in dubai, premium rental stay in dubai'
  }
} as const

export async function generateStaticParams() {
  return Object.keys(propertyData).map((id) => ({ id }))
}

type PropertySlug = keyof typeof propertyData

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}) {
  const slug = params.id as PropertySlug

  const data =
    propertyData[slug] ?? propertyData['canal-bay']

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.blackmamba.realestate/rental/${params.id}`,
    },
    alternates: {
      canonical: `https://www.blackmamba.realestate/rental/${params.id}`,
    },
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id)
  if (!property) notFound()

  return <RentalDetailsClient property={property} />
}