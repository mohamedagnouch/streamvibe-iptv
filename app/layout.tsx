import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";
import ClientProviders from "./components/ClientProviders";
import CrispChat from "./components/CrispChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://streamvibe.shop'),
  title: {
    default: "StreamVibe | Affordable IPTV Subscription — Live TV & VOD Streaming",
    template: "%s | StreamVibe"
  },
  description: "StreamVibe offers affordable IPTV subscriptions with 37,000+ live channels and 96,000+ on-demand titles in HD & 4K. Compatible with Smart TV, Android, Firestick, iOS, and PC. Instant activation. 30-day guarantee.",
  keywords: "affordable iptv subscription, iptv for smart tv, iptv android firestick, high quality tv streaming service, iptv subscription 2026, live tv streaming, iptv setup guide, best iptv service, 4k iptv, iptv for beginners",

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

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://streamvibe.shop',
    siteName: 'StreamVibe',
    title: 'StreamVibe | Affordable IPTV Subscription — Live TV & VOD',
    description: '37,000+ live channels and 96,000+ VOD titles in HD & 4K. Works on Smart TV, Android, Firestick & iOS. Try it risk-free with our 30-day guarantee.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StreamVibe IPTV — Affordable Streaming Service',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'StreamVibe | Affordable IPTV Subscription',
    description: '37,000+ live channels & 96,000+ VOD titles in HD & 4K. Smart TV, Android, Firestick & iOS compatible.',
    images: ['/og-image.jpg'],
    creator: '@StreamVibe',
  },

  alternates: {
    canonical: 'https://streamvibe.shop',
    languages: {
      'en': 'https://streamvibe.shop',
      'de': 'https://streamvibe.shop',
      'x-default': 'https://streamvibe.shop',
    },
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "StreamVibe",
  "url": "https://streamvibe.shop",
  "logo": "https://streamvibe.shop/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "availableLanguage": ["English", "French", "German", "Arabic"],
    "contactOption": "TollFree"
  },
  "sameAs": []
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "StreamVibe",
  "url": "https://streamvibe.shop",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://streamvibe.shop/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://streamvibe.shop" />
        <link rel="alternate" hrefLang="de" href="https://streamvibe.shop" />
        <link rel="alternate" hrefLang="x-default" href="https://streamvibe.shop" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4M41N3ESZ0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4M41N3ESZ0');
          `}
        </Script>

        <ClientProviders>
          {children}
        </ClientProviders>
        <ScrollToTop />
        <CrispChat />
      </body>
    </html>
  );
}
