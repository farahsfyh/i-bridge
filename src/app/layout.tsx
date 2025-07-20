import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i-Bridge - Connect with Trusted Local Talent & Traditional Skills",
  description: "i-Bridge connects communities with skilled professionals in traditional crafts, home services, and essential skills. Find trusted local talent or offer your expertise to your community.",
  keywords: [
    "local talent",
    "traditional crafts",
    "home services",
    "community marketplace",
    "skilled professionals",
    "artisans",
    "local services",
    "trusted professionals",
    "community platform",
    "skill sharing"
  ],
  authors: [{ name: "i-Bridge Team" }],
  creator: "i-Bridge",
  publisher: "i-Bridge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://i-bridge.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "i-Bridge - Connect with Trusted Local Talent & Traditional Skills",
    description: "i-Bridge connects communities with skilled professionals in traditional crafts, home services, and essential skills. Find trusted local talent or offer your expertise to your community.",
    url: 'https://i-bridge.com',
    siteName: 'i-Bridge',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'i-Bridge - Connecting Communities with Local Talent',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "i-Bridge - Connect with Trusted Local Talent & Traditional Skills",
    description: "i-Bridge connects communities with skilled professionals in traditional crafts, home services, and essential skills.",
    images: ['/twitter-image.jpg'],
    creator: '@ibridge',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C8795A" />
        <meta name="msapplication-TileColor" content="#C8795A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
