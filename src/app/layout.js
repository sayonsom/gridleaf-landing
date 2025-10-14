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

export const metadata = {
  title: "Gridleaf - Real-Time Electricity Carbon Intensity API & Map | Free Alternative",
  description: "Access real-time electricity carbon intensity data and energy mix with AI-powered insights. Free API with generous limits, live grid maps, and comprehensive coverage starting with India. Perfect for climate-aware applications.",
  keywords: "electricity carbon intensity, energy mix API, grid carbon data, renewable energy API, electricity maps, carbon intensity map, India electricity data, clean energy API, power grid API, carbon footprint API, electricity generation data, real-time energy data",
  authors: [{ name: "Gridleaf" }],
  creator: "Gridleaf.org",
  publisher: "Gridleaf.org",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gridleaf.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gridleaf - Real-Time Electricity Carbon Intensity API & Map",
    description: "Free API for electricity carbon intensity and energy mix data. AI-powered insights, live maps, and developer-friendly tools for building climate-aware applications.",
    url: "https://gridleaf.org",
    siteName: "Gridleaf",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gridleaf - Electricity Carbon Intensity API and Map",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gridleaf - Real-Time Electricity Carbon Intensity API & Map",
    description: "Free API for electricity carbon intensity and energy mix data with AI-powered insights.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
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
