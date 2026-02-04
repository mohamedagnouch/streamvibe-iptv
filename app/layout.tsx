import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";
import ClientProviders from "./components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://streamvibe.com'),
  title: {
    default: "StreamVibe | Official Premium Streaming Platform - Live TV & VOD",
    template: "%s | StreamVibe"
  },
  description: "Experience the ultimate official streaming destination. Access 96,000+ VOD titles, premium live channels, and exclusive content in 4K quality on all your devices.",
  keywords: "official streaming, live tv, vod, 4k streaming, premium iptv, movie platform, series online",

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
    url: 'https://streamvibe.com',
    siteName: 'StreamVibe',
    title: 'StreamVibe | Premium IPTV Streaming Platform',
    description: 'Experience 96,000+ VOD titles and 37,591+ live channels in stunning 4K quality',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StreamVibe IPTV Platform',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'StreamVibe | Premium IPTV Streaming',
    description: 'Experience 96,000+ VOD titles and 37,591+ live channels in 4K',
    images: ['/og-image.jpg'],
    creator: '@StreamVibe',
  },

  alternates: {
    canonical: 'https://streamvibe.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="en" href="https://streamvibe.com" />
        <link rel="alternate" hrefLang="de" href="https://streamvibe.com" />
        <link rel="alternate" hrefLang="x-default" href="https://streamvibe.com" />
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
      </body>
    </html>
  );
}


