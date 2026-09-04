import { Service } from "@/types/service";

export const interiorDesignConsultation: Service = {
  slug: "interior-design-consultation",
  number: "03",
  title: "Interior Design Consultation",
  category: "Consultation",
  shortDescription: "Providing professional advice on concepts, color schemes & material selection.",
  description: "Comprehensive design direction, material selection audits, spatial restructuring advice, and color psychology strategy sessions for clients seeking targeted expert guidance.",
  additionalDescription: "Our consultation sessions are designed for homeowners, developers, and business owners who want clear, actionable design clarity. Whether evaluating a new floor plan or refining material palettes, we provide expert architectural guidance.",
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Concept & Moodboard Strategy",
      description: "Developing cohesive visual themes, architectural styling directions, and moodboards.",
      icon: "Compass"
    },
    {
      title: "Color & Material Palettes",
      description: "Selecting harmonious stone, timber, paint finishes, and metal accents tailored to lighting conditions.",
      icon: "ShieldCheck"
    },
    {
      title: "Spatial Optimization Audits",
      description: "Evaluating existing floor plans to maximize natural light, flow, and room functionality.",
      icon: "Layers"
    },
    {
      title: "Vendor & Sourcing Guidance",
      description: "Recommending trade-only suppliers, artisanal fabricators, and custom furniture makers.",
      icon: "Sun"
    }
  ],
  sections: [
    {
      title: "Targeted Design Advice & Advisory",
      content: "From single-room transformations to full-scale build reviews, our structured consultation sessions equip you with professional specifications and clear roadmaps."
    },
    {
      title: "What You Receive",
      content: "Following our consultation, you receive a curated digital summary report containing color codes, material specifications, layout sketches, and recommended trade resources."
    }
  ],
  checklist: [
    "In-Person or Virtual Spatial Review Session",
    "Tailored Color Scheme & Paint Swatch Curation",
    "Material & Finish Specification Guide",
    "Architectural Layout & Furniture Placement Recommendations",
    "Comprehensive Post-Consultation Action Plan"
  ],
  faqs: [
    {
      question: "Is consultation available virtually for remote projects?",
      answer: "Yes, we offer high-definition virtual consultation sessions using architectural drawings, photos, and digital material samples."
    },
    {
      question: "Can consultation fees be applied toward full design services?",
      answer: "If you decide to engage our studio for full turnkey interior design or project management within 30 days, your consultation fee is credited toward the contract."
    }
  ],
  process: [
    { step: "01", title: "Discovery Questionnaire", description: "Sharing floor plans, site photos, budget goals, and design inspiration." },
    { step: "02", title: "Intensive Strategy Session", description: "90-minute deep-dive reviewing layouts, color options, and material choices." },
    { step: "03", title: "Actionable Deliverable", description: "Delivering your comprehensive design report and procurement guide." }
  ],
  seo: {
    title: "Interior Design Consultation | DesignMeInteriors Studio",
    description: "Providing professional advice on concepts, color schemes & material selection."
  }
};
