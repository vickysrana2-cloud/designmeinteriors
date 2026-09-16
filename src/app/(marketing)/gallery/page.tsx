import { Metadata } from "next";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryContainer } from "@/components/gallery/GalleryContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Interior Design Showcase & Gallery | DesignMe Interiors Nagpur",
  description:
    "Browse our portfolio of residential living spaces, luxury bedrooms, modular kitchens, commercial offices, and before-and-after transformations in Nagpur.",
  openGraph: {
    title: "Interior Design Showcase & Gallery | DesignMe Interiors Nagpur",
    description:
      "Explore curated interior design projects across Nagpur featuring custom teakwood joinery, modern living spaces, modular kitchens, and commercial suites.",
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F5F2EC]">
      <GalleryHero />
      <GalleryContainer />
    </main>
  );
}
