"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getAllProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectsPreview() {
  const projects = getAllProjects().slice(0, 4);

  return (
    <section className="bg-[#F5F2EC] py-24 border-t border-[#D7D0C5]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-12">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#D7D0C5] pb-12 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              Curated Portfolio
            </span>
            <h2 className="font-serif text-3xl text-[#242321] sm:text-5xl">
              Featured Portfolio & Architectural Works.
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242321] hover:text-[#9A8060] transition-colors"
          >
            <span>Explore All Projects ({getAllProjects().length})</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4-Project Grid matching Services Card layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 md:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="h-full"
            >
              <ProjectCard project={project} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
