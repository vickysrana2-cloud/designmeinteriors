import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Maximize2, User } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectHeroProps {
  project?: Project;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ProjectHero({ project, title, subtitle, description }: ProjectHeroProps) {
  const displayTitle = project?.title || title || "Curated Commissions & Portfolio";
  const displaySubtitle = subtitle || (project?.category ? `Portfolio / ${project.category}` : "Curated Commissions");
  const displayDesc = project?.shortDescription || project?.description || description || "Explore our global portfolio spanning private oceanfront estates, penthouse lofts, tech headquarters, and Japanese wellness retreats.";

  return (
    <section className="border-b border-[#DCD5CB] bg-[#F9F8F5] pb-16 pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {project && (
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-[#C86D51]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Projects</span>
          </Link>
        )}

        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-[#C86D51]">
            {displaySubtitle}
          </span>
          <h1 className="font-serif text-4xl text-[#1E1C1A] leading-tight sm:text-6xl">
            {displayTitle}
          </h1>
          <p className="font-light text-base leading-relaxed text-muted-foreground sm:text-lg">
            {displayDesc}
          </p>

          {project && (
            <div className="flex flex-wrap gap-6 pt-6 text-xs text-[#1E1C1A] border-t border-[#DCD5CB]/80 mt-6">
              {project.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C86D51]" />
                  <span>{project.location}</span>
                </div>
              )}
              {project.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#C86D51]" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.area && (
                <div className="flex items-center gap-2">
                  <Maximize2 className="h-4 w-4 text-[#C86D51]" />
                  <span>{project.area}</span>
                </div>
              )}
              {project.architect && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#C86D51]" />
                  <span>{project.architect}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
