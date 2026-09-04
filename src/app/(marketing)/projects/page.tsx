import { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Projects Showcase — DesignMeInteriors",
  description: "Browse DesignMeInteriors portfolio of luxury residential villas, urban sky lofts, biophilic commercial headquarters, and hospitality retreats.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-[#F9F8F5]">
      <ProjectHero
        title="Selected Architectural & Interior Works."
        subtitle="Curated Commissions"
        description="Explore our global portfolio spanning private oceanfront estates, penthouse lofts, tech headquarters, and Japanese wellness retreats."
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
