import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
