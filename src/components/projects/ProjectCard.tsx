"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D7D0C5] bg-[#FCFBF8] transition-all duration-300 hover:border-[#9A8060] h-full">
      <div>
        <div className="relative m-3 mb-0 h-72 overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 flex gap-2">
            <span className="bg-[#242321]/80 px-3 py-1 font-serif text-[11px] uppercase tracking-wider text-[#FCFBF8] backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {project.year && (
            <div className="absolute right-4 bottom-4 bg-[#FCFBF8]/90 px-2.5 py-0.5 text-[10px] font-medium text-[#242321] backdrop-blur-sm">
              {project.year}
            </div>
          )}
        </div>

        <div className="space-y-3 p-6">
          {project.location && (
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9A8060]">
              {project.location}
            </span>
          )}

          <h3 className="font-serif text-2xl text-[#242321] transition-colors group-hover:text-[#9A8060]">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-xs text-[#706B63] leading-relaxed line-clamp-3">
            {project.shortDescription || project.description}
          </p>

          {project.area && (
            <div className="pt-2 text-[11px] font-medium text-[#706B63] border-t border-[#D7D0C5]">
              Total Footprint: {project.area}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242321] transition-colors group-hover:text-[#9A8060]"
        >
          <span>View Project</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
