import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPTVIBE - Premium IPTV Service | 37,591+ Channels Worldwide",
  description: "Experience premium IPTV streaming with 37,591+ live channels and 96,000+ VOD titles from 115+ countries. Movies, sports, entertainment in stunning 4K quality. Get 30% off today!",
  keywords: ["IPTV", "streaming", "live TV", "movies", "sports", "entertainment", "4K", "premium IPTV", "worldwide channels"],
  authors: [{ name: "IPTVIBE" }],
  creator: "IPTVIBE",
  publisher: "IPTVIBE",
  metadataBase: new URL('https://iptvibe.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "IPTVIBE - Premium IPTV Service",
    description: "Experience premium IPTV streaming with 37,591+ live channels and 96,000+ VOD titles from 115+ countries.",
    url: 'https://iptvibe.com',
    siteName: 'IPTVIBE',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'IPTVIBE - Premium IPTV Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTVIBE - Premium IPTV Service',
    description: 'Experience premium IPTV streaming with 37,591+ live channels worldwide.',
    images: ['/opengraph-image'],
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
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What devices can I use to watch IPTVIBE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IPTVIBE works on a wide range of devices including Smart TVs (Samsung, LG, Android TV), streaming devices (Fire Stick, Roku, Apple TV), mobile devices (iOS and Android), computers (Windows, Mac, Linux), and gaming consoles (Xbox, PlayStation). You can use our service on any device that supports IPTV players like VLC, IPTV Smarters, or TiviMate."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a setup guide for first-time users?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide comprehensive setup guides for all supported devices. After your purchase, you'll receive an email with step-by-step instructions, video tutorials, and our dedicated support team is available 24/7 to help you get started."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use one account on multiple devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! When you select your subscription plan, you can choose the number of devices (1-5 connections). This means you can watch on multiple devices simultaneously."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of content is included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our service includes 37,591+ live TV channels from around the world, 96,000+ movies and TV shows on demand, premium sports channels, and content from Netflix, Apple TV+, Disney+, and more. All content is available in HD, Full HD, and 4K quality."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is activation after payment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Activation is instant! Once your payment is confirmed, you'll receive your login credentials via email within minutes. Our automated system ensures you can start watching immediately."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTVIBE Premium IPTV Subscription",
    "image": "https://iptvibe.com/opengraph-image",
    "description": "Premium IPTV streaming service with 37,591+ live channels and 96,000+ VOD titles in 4K quality.",
    "brand": {
      "@type": "Brand",
      "name": "IPTVIBE"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://iptvibe.com#pricing",
      "priceCurrency": "USD",
      "lowPrice": "17.99",
      "highPrice": "69.99",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "1 Month Plan",
          "price": "17.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "3 Months Plan",
          "price": "35.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "6 Months Plan",
          "price": "49.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "12 Months Plan",
          "price": "69.99",
          "priceCurrency": "USD"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500000"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
