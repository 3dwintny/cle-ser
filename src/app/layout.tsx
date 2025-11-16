import type { Metadata } from "next";
import { Mukta, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mukta = Mukta({
  subsets: ["latin"],
  variable: "--font-mukta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-noto-sans-thai",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Elizabeths Cleaning Service LLC - Professional Cleaning Services",
  description: "We scrub, you relax — it's that simple. Professional residential and office cleaning services with exceptional quality and care.",
  keywords: "cleaning service, house cleaning, office cleaning, maid service, professional cleaning",
  authors: [{ name: "Elizabeths Cleaning Service LLC" }],
  creator: "Elizabeths Cleaning Service LLC",
  publisher: "Elizabeths Cleaning Service LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elizabethscleanservices.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Elizabeths Cleaning Service LLC - Professional Cleaning Services",
    description: "We scrub, you relax — it's that simple. Professional residential and office cleaning services with exceptional quality and care.",
    url: 'https://elizabethscleanservices.com',
    siteName: "Elizabeths Cleaning Service LLC",
    images: [
      {
        url: '/favicons/logo-social.png',
        width: 512,
        height: 512,
        alt: "Elizabeths Cleaning Service LLC",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Elizabeths Cleaning Service LLC - Professional Cleaning Services",
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
    "name": "Elizabeths Cleaning Service LLC",
    "description": "Professional residential and office cleaning services with exceptional quality and care.",
    "url": "https://elizabethscleanservices.com",
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
      "https://www.facebook.com/profile.php?id=100083328251594&mibextid=wwXIfr&mibextid=wwXIfr",
      "https://www.instagram.com/elizabeth__cleaning?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
      "https://www.tiktok.com/@elizabethcleaningllc?_t=ZP-90fNQLdHu3z&_r=1"
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
      <body className={`${mukta.variable} ${notoSansThai.variable} font-sans antialiased`}>
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
