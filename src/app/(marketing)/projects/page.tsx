import { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CtaBanner } from "@/components/home/CtaBanner";
import { generateSiteMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = generateSiteMetadata({
  title: "Interior Design Portfolio Nagpur | DesignMe Interiors",
  description:
    "Browse DesignMe Interiors portfolio of completed residential villas, high-rise penthouses, corporate offices, and hospitality interiors across Nagpur.",
  canonicalUrl: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Projects", item: "/projects" },
  ]);

  return (
    <div className="bg-[#F9F8F5]">
      <JsonLd data={breadcrumbSchema} />

      <ProjectHero
        title="Selected Interior Works & Architecture."
        subtitle="Curated Portfolio · Nagpur"
        description="Explore our portfolio of luxury residential villas, urban penthouses, corporate office spaces, and boutique hospitality interiors across Nagpur and Central India."
      />

      <section className="py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
