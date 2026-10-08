import { Service } from "@/types/service";

export const residentialInteriorDesign: Service = {
  slug: "residential-interior-design",
  number: "01",
  title: "Residential Interior Design",
  category: "Residential",
  shortDescription: "Creating homes that are functional, comfortable, aesthetically pleasing, and tailored to the people who live there.",
  description: "Our residential studio creates bespoke living environments that reflect the unique lifestyle and personal aesthetic of private clients. From custom joinery to rare stone sourcing, we deliver sanctuaries of calm and distinction.",
  additionalDescription: "Every residence is tailored as a personal narrative. We harmonize custom architectural millwork, hand-selected tactile textiles, bespoke furniture engineering, and museum-grade art curation to build warm, enduring homes.",
  image: "/servicesImages/residential.png",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Personalization",
      description: "Tailoring interior design concepts to reflect individual tastes, personal aesthetic, and lifestyle needs.",
      icon: "ShieldCheck"
    },
    {
      title: "Space Planning",
      description: "Optimizing circulation, spatial flow, and 3D floorplan layout for seamless everyday movement.",
      icon: "Compass"
    },
    {
      title: "Comfort and Ambience",
      description: "Creating welcoming, ergonomic, and peaceful atmosphere with balanced warmth and acoustics.",
      icon: "Box"
    },
    {
      title: "Material and Finishes",
      description: "Selecting premium, long-lasting textures, natural timber, stone slabs, and fine tactile finishes.",
      icon: "Layers"
    },
    {
      title: "Lighting Design",
      description: "Layering ambient cove lighting, natural daylight harvesting, and warm architectural spotlights.",
      icon: "Sun"
    }
  ],
  sections: [
    {
      title: "Private Living & Residential Sanctuaries",
      content: "Whether designing expansive living salons, master suite sanctuaries, or wellness spas, we prioritize acoustic privacy, climate control integration, and serene visual proportions."
    },
    {
      title: "Key Elements of Luxury Home Crafting",
      content: "We balance functional storage with architectural grandeur. Concealed butler pantries, integrated smart home touchpoints, and custom stone vanity basins elevate daily living rituals."
    }
  ],
  checklist: [
    "Comprehensive Lifestyle & Ergonomic Inquiry",
    "Curated Tactile Material Boards & Stone Slab Inspections",
    "1:1 Custom Furniture Prototyping & Joinery Shop Drawings",
    "Smart Lighting & Automated Shade Integration",
    "White-Glove Furniture Installation & Fine Art Styling"
  ],
  faqs: [
    {
      question: "Can you work with existing family heirlooms or art collections?",
      answer: "Absolutely. We routinely integrate cherished artwork, vintage antiques, and family heirlooms into modern architectural schemes, engineering custom display alcoves and dedicated lighting for them."
    },
    {
      question: "How long does a full luxury residential interior project take?",
      answer: "Timelines range from 3 to 8 months depending on square footage, level of custom millwork, and material sourcing lead times."
    },
    {
      question: "Do you supply custom furniture items designed by your studio?",
      answer: "Yes, our studio designs custom bespoke furniture pieces manufactured exclusively by our partner master craftsmen."
    }
  ],
  process: [
    { step: "01", title: "Lifestyle Inquiry", description: "In-depth consultations to map your routines, aesthetic references, and personal preferences." },
    { step: "02", title: "Material Moodboards", description: "Curating tactile samples of timber, stone, linen, and custom metalwork." },
    { step: "03", title: "Turnkey Curation", description: "Supervising white-glove installation, custom furniture styling, and final handover." }
  ],
  seo: {
    title: "Residential Interior Design Services | DesignMeInteriors Studio",
    description: "Creating homes that are functional, comfortable, aesthetically pleasing, and tailored to the people who live there."
  }
};
