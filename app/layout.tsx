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
  title: "LandShare - জমি ভাগাভাগি ক্যালকুলেটর | Smart Land Cost Calculator",
  description: "দলগত জমি ক্রয়ের জন্য স্মার্ট ক্যালকুলেটর। জমির মূল্য, ডাউন পেমেন্ট এবং কিস্তি পরিকল্পনা সহজে গণনা করুন। Smart calculator for group land purchases with cost, down payment, and installment planning.",
  keywords: [
    "LandShare",
    "জমি ভাগাভাগি ক্যালকুলেটর",
    "land cost calculator",
    "জমি ক্রয়",
    "land purchase",
    "ডাউন পেমেন্ট",
    "down payment",
    "কিস্তি পরিকল্পনা",
    "installment plan",
    "দলগত ক্রয়",
    "group purchase",
    "জমির মূল্য",
    "land price",
    "কাঠা",
    "katha",
    "বাংলাদেশ",
    "bangladesh",
    "real estate",
    "property calculator",
    "land sharing",
    "জমি ভাগাভাগি"
  ],
  authors: [{ name: "Meharaj Ul Mahmmud" }],
  creator: "Meharaj Ul Mahmmud",
  publisher: "Meharaj Ul Mahmmud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://landshare.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LandShare Pro - Smart Land Cost Calculator",
    description: "দলগত ক্রয়ের জন্য স্মার্ট জমি ক্যালকুলেটর। সহজ এবং নির্ভুল গণনা।",
    url: 'https://landshare.vercel.app',
    siteName: 'LandShare',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LandShare - Smart Land Cost Calculator',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LandShare - Smart Land Cost Calculator",
    description: "দলগত ক্রয়ের জন্য স্মার্ট জমি ক্যালকুলেটর।",
    images: ['/og-image.png'],
    creator: '@landsharepro',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'finance',
  classification: 'LandShare',
  other: {
    'application-name': 'LandShare',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'LandShare',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#2B5797',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "LandShare Pro",
              "alternateName": "জমি ভাগাভাগি ক্যালকুলেটর",
              "description": "দলগত ক্রয়ের জন্য স্মার্ট জমি ক্যালকুলেটর।",
              "url": "https://landshare-pro.vercel.app",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "BDT"
              },
              "author": {
                "@type": "Organization",
                "name": "LandShare Pro"
              },
              "creator": {
                "@type": "Organization",
                "name": "LandShare Pro"
              },
              "publisher": {
                "@type": "Organization",
                "name": "LandShare Pro"
              },
              "inLanguage": ["bn", "en"],
              "featureList": [
                "স্মার্ট জমি মূল্য গণনা",
                "ডাউন পেমেন্ট ক্যালকুলেশন",
                "কিস্তি পরিকল্পনা",
                "দলগত ভাগাভাগি সহায়তা"
              ]
            })
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="BD" />
        <meta name="geo.placename" content="Bangladesh" />
        <meta name="geo.position" content="23.6850;90.3563" />
        <meta name="ICBM" content="23.6850, 90.3563" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Bengali, English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LandShare Pro" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
