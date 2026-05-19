import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Roasa Plumbing Inc. | San Diego Plumber",
    template: "%s | Roasa Plumbing Inc.",
  },
  description:
    "Roasa Plumbing Inc. — Christ-centered, owner-operated plumbing in San Diego County. Drain cleaning, water heaters, repiping, leak repairs, and more. Licensed (C-36 #1139229). Call (619) 452-6911.",
  keywords: [
    "plumber San Diego",
    "plumbing San Diego",
    "emergency plumber San Diego",
    "drain cleaning San Diego",
    "tankless water heater San Diego",
    "licensed plumber",
    "plumber near me",
  ],
  authors: [{ name: "Roasa Plumbing Inc." }],
  creator: "Roasa Plumbing Inc.",
  metadataBase: new URL("https://roasaplumbing.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roasaplumbing.com",
    siteName: "Roasa Plumbing Inc.",
    title: "Roasa Plumbing Inc. | San Diego Plumber",
    description:
      "Christ-centered, owner-operated plumbing in San Diego County. Licensed & insured. Call (619) 452-6911.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roasa Plumbing Inc. | San Diego Plumber",
    description:
      "Christ-centered, owner-operated plumbing in San Diego County. Licensed & insured. Call (619) 452-6911.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-inter), Arial, sans-serif" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
