export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceSeo {
  title?: string;
  description?: string;
}

export interface Service {
  slug: string;
  number?: string;
  title: string;
  category?: string;
  shortDescription: string;
  description: string;
  image: string;
  secondaryImages?: string[];
  features?: string[];
  process?: ServiceProcessStep[];
  seo?: ServiceSeo;
}
