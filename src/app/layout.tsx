import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pollicy Data Institute | Feminist Civic Technology for Africa",
    template: "%s | Pollicy Data Institute",
  },
  description:
    "Pollicy is a Pan-African feminist organisation working at the intersection of data, technology, and design to advance inclusive and equitable digital ecosystems across Africa.",
  keywords: [
    "Pollicy",
    "data governance",
    "feminist technology",
    "civic tech",
    "Africa",
    "digital rights",
    "data science",
    "Uganda",
    "Pan-African",
  ],
  authors: [{ name: "Pollicy Data Institute" }],
  creator: "Pollicy Data Institute",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pollicy.org",
    siteName: "Pollicy Data Institute",
    title: "Pollicy Data Institute | Feminist Civic Technology for Africa",
    description:
      "Working at the intersection of data, technology, and design to advance inclusive and equitable digital ecosystems.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pollicy Data Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pollicy Data Institute",
    description: "Feminist civic technology for Africa",
    creator: "@PollicyOrg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans bg-white text-brand-black overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
