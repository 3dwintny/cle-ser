import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Elizabeth's Cleaning Service - Professional Cleaning Services",
  description: "We scrub, you relax — it's that simple. Professional residential and office cleaning services with exceptional quality and care.",
  keywords: "cleaning service, house cleaning, office cleaning, maid service, professional cleaning",
  authors: [{ name: "Elizabeth's Cleaning Service" }],
  creator: "Elizabeth's Cleaning Service",
  publisher: "Elizabeth's Cleaning Service",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elizabethscleaning.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Elizabeth's Cleaning Service - Professional Cleaning Services",
    description: "We scrub, you relax — it's that simple. Professional residential and office cleaning services with exceptional quality and care.",
    url: 'https://elizabethscleaning.com',
    siteName: "Elizabeth's Cleaning Service",
    images: [
      {
        url: '/favicons/logo-social.png',
        width: 512,
        height: 512,
        alt: "Elizabeth's Cleaning Service",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Elizabeth's Cleaning Service - Professional Cleaning Services",
    description: "We scrub, you relax — it's that simple. Professional residential and office cleaning services.",
    images: ['/favicons/logo-social.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Elizabeth's Cleaning Service",
    "description": "Professional residential and office cleaning services with exceptional quality and care.",
    "url": "https://elizabethscleaning.com",
    "telephone": "+1-562-639-2990",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.8366",
      "longitude": "-118.3531"
    },
    "openingHours": "Mo-Su 08:00-18:00",
    "priceRange": "$$",
    "serviceType": [
      "House Cleaning",
      "Office Cleaning",
      "Apartment Cleaning",
      "Maid Service",
      "Specialty Cleaning"
    ],
    "areaServed": "Los Angeles County",
    "sameAs": [
      "https://www.facebook.com/elizabethscleaning",
      "https://www.instagram.com/elizabethscleaning",
      "https://twitter.com/elizabethclean"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/favicon-512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
