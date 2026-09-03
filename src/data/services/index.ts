import { Service } from "@/types/service";
import { interiorArchitecture } from "./interior-architecture";
import { residentialDesign } from "./residential-design";
import { commercialSpaces } from "./commercial-spaces";
import { turnkeyExecution } from "./turnkey-execution";

export const services: Service[] = [
  interiorArchitecture,
  residentialDesign,
  commercialSpaces,
  turnkeyExecution,
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
