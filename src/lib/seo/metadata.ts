import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export interface PageMetadataInput {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
}

export function generateSiteMetadata(options: PageMetadataInput = {}): Metadata {
  const title = options.title
    ? `${options.title} | ${siteConfig.shortName}`
    : siteConfig.name;

  const description = options.description || siteConfig.description;
  const image = options.image || siteConfig.ogImage;
  const canonical = options.canonicalUrl || "/";

  const defaultKeywords = [
    "Interior Designer in Nagpur",
    "Interior Design Firm Nagpur",
    "Home Interior Designer Nagpur",
    "Residential Interior Design Nagpur",
    "Commercial Interior Designer Nagpur",
    "Office Interior Design Nagpur",
    "Modular Kitchen Interior Design Nagpur",
    "Turnkey Interior Execution Nagpur",
    "DesignMe Interiors",
  ];

  return {
    title,
    description,
    keywords: options.keywords || defaultKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical.startsWith("http") ? canonical : `${siteConfig.url}${canonical}`,
      siteName: siteConfig.shortName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: options.type || "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
