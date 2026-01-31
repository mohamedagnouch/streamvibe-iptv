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
  title: "StreamVibe | Official Premium Streaming Platform - Live TV & VOD",
  description: "Experience the ultimate official streaming destination. Access 96,000+ VOD titles, premium live channels, and exclusive content in 4K quality on all your devices.",
  keywords: "official streaming, live tv, vod, 4k streaming, premium iptv, movie platform, series online",
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


