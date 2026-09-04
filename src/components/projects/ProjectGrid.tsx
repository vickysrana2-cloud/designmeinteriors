"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

const ease = [0.22, 1, 0.36, 1] as const;

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      variants={cardContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, idx) => (
        <motion.div key={project.slug} variants={cardAnimation} className="h-full">
          <ProjectCard project={project} index={idx} />
        </motion.div>
      ))}
    </motion.div>
  );
}
