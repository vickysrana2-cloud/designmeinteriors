import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "@/app/globals.css";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema, buildWebSiteSchema } from "@/lib/seo/structured-data";
import { siteConfig } from "@/config/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DesignMe Interiors — Interior Designer in Nagpur | Home & Commercial Studio",
    template: "%s | DesignMe Interiors",
  },
  description:
    "DesignMe Interiors is a premier interior design studio in Nagpur, Maharashtra. We specialize in custom home interiors, luxury villas, apartments, corporate offices, and turnkey execution with 6+ years of experience.",
  keywords: [
    "Interior Designer in Nagpur",
    "Interior Design Firm Nagpur",
    "Home Interior Designer Nagpur",
    "Residential Interior Design Nagpur",
    "Commercial Interior Designer Nagpur",
    "Office Interior Design Nagpur",
    "Turnkey Interior Execution Nagpur",
    "Modular Kitchen Interior Design Nagpur",
    "DesignMe Interiors",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/designMeLogo.svg",
    shortcut: "/designMeLogo.svg",
    apple: "/designMeLogo.svg",
  },
  openGraph: {
    title: "DesignMe Interiors — Interior Designer in Nagpur | Home & Commercial Studio",
    description:
      "Creating thoughtful, functional, and beautiful interior spaces for homes, villas, apartments, offices, and commercial spaces in Nagpur.",
    url: siteConfig.url,
    siteName: "DesignMe Interiors",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "DesignMe Interiors Nagpur Interior Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignMe Interiors — Interior Designer in Nagpur",
    description:
      "Premier interior design studio in Nagpur specializing in residential, commercial, and turnkey interior design.",
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const webSiteSchema = buildWebSiteSchema();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <head>
        <JsonLd data={[localBusinessSchema, webSiteSchema]} />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#F5F2EC] text-[#242321]">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
