import { Service } from "@/types/service";
import { residentialInteriorDesign } from "./residential-interior-design";
import { commercialInteriorDesign } from "./commercial-interior-design";
import { interiorDesignConsultation } from "./interior-design-consultation";
import { outdoorLandscapeDesign } from "./outdoor-landscape-design";
import { renovationAndRemodeling } from "./renovation-and-remodeling";
import { interior2d3dLayouts } from "./interior-2d-3d-layouts";

export const services: Service[] = [
  residentialInteriorDesign,
  commercialInteriorDesign,
  interiorDesignConsultation,
  outdoorLandscapeDesign,
  renovationAndRemodeling,
  interior2d3dLayouts,
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, limit: number = 3): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
