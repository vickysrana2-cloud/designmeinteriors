import { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Projects Showcase — DesignMeInteriors",
  description: "Browse DesignMeInteriors portfolio of luxury residential villas, urban high-rise penthouses, corporate offices, and boutique hospitality interiors in Nagpur.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-[#F9F8F5]">
      <ProjectHero
        title="Selected Interior Works & Architecture."
        subtitle="Curated Portfolio"
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
