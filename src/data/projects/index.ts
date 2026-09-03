import { Project } from "@/types/project";
import { villasSanctuary } from "./villas-sanctuary";
import { auroraPenthouse } from "./aurora-penthouse";
import { luminaHeadquarters } from "./lumina-headquarters";
import { solsticeResort } from "./solstice-resort";
import { terracottaPavilion } from "./terracotta-pavilion";
import { apexPavilionConcept } from "./apex-pavilion-concept";

export const projects: Project[] = [
  villasSanctuary,
  auroraPenthouse,
  luminaHeadquarters,
  solsticeResort,
  terracottaPavilion,
  apexPavilionConcept,
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return projects.slice(0, limit);

  return projects
    .filter((p) => p.slug !== currentSlug)
    .sort((a) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}
