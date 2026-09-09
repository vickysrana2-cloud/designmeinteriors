import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import WorkProcess from "@/components/sections/WorkProcess";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { generateSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSiteMetadata({
  title: "Interior Designer in Nagpur | DesignMe Interiors",
  description:
    "DesignMe Interiors is a premier interior design studio in Nagpur, Maharashtra. We specialize in custom home interiors, villas, apartments, corporate offices, and turnkey execution.",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WorkProcess />
      <ProjectsPreview />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
