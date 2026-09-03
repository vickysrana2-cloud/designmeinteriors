export interface ProjectSeo {
  title?: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "residential" | "commercial" | "hospitality" | "conceptual" | string;
  location?: string;
  year?: string;
  area?: string;
  shortDescription?: string;
  description: string;
  architect?: string;
  featured?: boolean;
  image: string;
  secondaryImages?: string[];
  technologies?: string[];
  features?: string[];
  seo?: ProjectSeo;
}
