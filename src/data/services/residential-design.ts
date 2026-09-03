import { Service } from "@/types/service";

export const residentialDesign: Service = {
  slug: "residential-design",
  number: "02",
  title: "Bespoke Residential Design",
  shortDescription: "End-to-end luxury residence crafting—from private coastal estates to high-rise city lofts—balancing timeless elegance with daily comfort.",
  description: "Our residential studio creates bespoke living environments that reflect the unique lifestyle and personal aesthetic of private clients. From custom joinery to rare stone sourcing, we deliver sanctuaries of calm and distinction.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    "Custom Millwork & Cabinetry Design",
    "Material & Finish Curation",
    "Bespoke Furniture Engineering",
    "Art & Collectible Curation"
  ],
  process: [
    { step: "01", title: "Lifestyle Inquiry", description: "In-depth consultations to map your routines, aesthetic references, and personal preferences." },
    { step: "02", title: "Material Moodboards", description: "Curating tactile samples of timber, stone, linen, and custom metalwork." },
    { step: "03", title: "Turnkey Curation", description: "Supervising white-glove installation, custom furniture styling, and final handover." }
  ],
  seo: {
    title: "Bespoke Luxury Residential Design | DesignMeInteriors Studio",
    description: "End-to-end luxury residence crafting—from private coastal estates to high-rise city lofts—balancing timeless elegance with daily comfort."
  }
};
