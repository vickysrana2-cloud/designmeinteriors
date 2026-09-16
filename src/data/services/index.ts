import { Service } from "@/types/service";
import { residentialInteriorDesign } from "./residential-interior-design";
import { commercialInteriorDesign } from "./commercial-interior-design";
import { renovationAndRemodeling } from "./renovation-and-remodeling";
import { outdoorLandscapeDesign } from "./outdoor-landscape-design";

const rawServices: Service[] = [
  residentialInteriorDesign,
  commercialInteriorDesign,
  renovationAndRemodeling,
  outdoorLandscapeDesign,
];

export const services: Service[] = rawServices.map((service, index) => ({
  ...service,
  number: String(index + 1).padStart(2, "0"),
}));

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, limit: number = 3): Service[] {
  return services.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
