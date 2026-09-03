import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export interface PageMetadataInput {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateSiteMetadata(options: PageMetadataInput = {}): Metadata {
  const title = options.title
    ? `${options.title} | ${siteConfig.shortName}`
    : siteConfig.name;

  const description = options.description || siteConfig.description;
  const image = options.image || siteConfig.ogImage;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.shortName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
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
