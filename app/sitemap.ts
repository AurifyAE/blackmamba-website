import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.blackmamba.realestate";

  const pages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/rental`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/shortstays`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), priority: 0.3 },
  ];

  const properties = [
    "canal-bay",
    "dunya-tower",
    "sobha-waves",
    "azizi-developments",
  ];

  const rentalProperties = properties.map((property) => ({
    url: `${baseUrl}/rental/${property}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const shortStayProperties = properties.map((property) => ({
    url: `${baseUrl}/shortstays/${property}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [...pages, ...rentalProperties, ...shortStayProperties];
}
