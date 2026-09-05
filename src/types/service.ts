export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceSeo {
  title?: string;
  description?: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceSection {
  title: string;
  content: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  number?: string;
  title: string;
  category?: string;
  shortDescription: string;
  description: string;
  additionalDescription?: string;
  image: string;
  secondaryImages?: string[];
  features?: (string | ServiceFeature)[];
  sections?: ServiceSection[];
  checklist?: string[];
  faqs?: ServiceFAQ[];
  process?: ServiceProcessStep[];
  seo?: ServiceSeo;
}
