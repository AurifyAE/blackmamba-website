import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const canelaDeck = localFont({
  src: [
    { path: "../public/fonts/canela-text-trial/CanelaDeck-Regular-Trial.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/canela-text-trial/CanelaDeck-Medium-Trial.woff", weight: "600", style: "normal" },
    { path: "../public/fonts/canela-text-trial/CanelaDeck-Bold-Trial.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-canela",
  display: "swap",
  preload: true,
});

const avenirLocal = localFont({
  src: [
    { path: "../public/fonts/Avenir/Avenir Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Avenir/Avenir Book.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Avenir/Avenir Regular.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Avenir/Avenir Heavy.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/Avenir/Avenir Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-avenir",
  display: "swap",
  preload: true,
});


export const metadata: Metadata = {
  title: "BlackMamba Real Estate - Luxury Properties in Dubai",
  description: "Discover exclusive homes, flexible rentals, and luxury stays in Dubai. Premium real estate properties for buy, rent, or short stay.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${canelaDeck.variable} ${avenirLocal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
