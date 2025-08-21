import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Global Shapers Delhi - Empowering Young Leaders for Change",
    template: "%s | Global Shapers Delhi"
  },
  description: "Global Shapers Delhi is part of the World Economic Forum&apos;s initiative, empowering young leaders to drive positive change in Delhi through climate action, mental health, and youth leadership projects.",
  keywords: ["Global Shapers", "Delhi", "World Economic Forum", "Youth Leadership", "Climate Action", "Mental Health", "Social Impact", "Young Leaders", "Delhi Hub"],
  authors: [{ name: "Global Shapers Delhi" }],
  creator: "Global Shapers Delhi",
  publisher: "Global Shapers Delhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://global-shapers-delhi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://global-shapers-delhi.vercel.app',
    siteName: 'Global Shapers Delhi',
    title: 'Global Shapers Delhi - Empowering Young Leaders for Change',
    description: 'Global Shapers Delhi is part of the World Economic Forum&apos;s initiative, empowering young leaders to drive positive change in Delhi through climate action, mental health, and youth leadership projects.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Shapers Delhi - Young Leaders Making Impact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Shapers Delhi - Empowering Young Leaders for Change',
    description: 'Global Shapers Delhi is part of the World Economic Forum&apos;s initiative, empowering young leaders to drive positive change in Delhi through climate action, mental health, and youth leadership projects.',
    images: ['/og-image.jpg'],
    creator: '@globalshapersdelhi',
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
  category: 'Non-Profit Organization',
  classification: 'Youth Leadership & Social Impact',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#0D5392] min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
