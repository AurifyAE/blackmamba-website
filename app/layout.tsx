import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";


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
    title: {
      default: 'BlackMamba Real Estate - Luxury Properties in Dubai',
      template: '%s | BlackMamba Real Estate'
    },
    description: 'Discover exclusive homes, flexible rentals, and luxury stays in Dubai. Premium real estate properties for buy, rent, or short stay.',
    keywords: 'buy properties in Dubai, Properties in Dubai luxury flat in dubai, flexible rentals stays in Dubai, full furnished stays flat in Dubai, full facility rental in dubai, stay in dubai, premium stay in dubai',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      url: 'https://www.blackmamba.realestate/',
      siteName: 'BlackMamba Real Estate',
      title: 'BlackMamba Real Estate - Luxury Properties in Dubai',
      description: 'Discover exclusive homes, flexible rentals, and luxury stays in Dubai.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'BlackMamba Real Estate',
        },
      ],
    },
    alternates: {
      canonical: 'https://www.blackmamba.realestate/',
    },
  };

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

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

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DB1E3JXJBM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DB1E3JXJBM');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2513380169144748');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2513380169144748&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
