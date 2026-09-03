import { Project } from "@/types/project";
import { ProjectGrid } from "./ProjectGrid";

interface RelatedProjectsProps {
  projects: Project[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-[#F9F8F5] py-20 border-t border-[#DCD5CB]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-12">
        <div className="max-w-xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86D51]">
            Curated Portfolio
          </span>
          <h2 className="font-serif text-3xl text-[#1E1C1A] sm:text-4xl">
            Related Commissions
          </h2>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
