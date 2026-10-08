import { Service } from "@/types/service";

export const commercialInteriorDesign: Service = {
  slug: "commercial-interior-design",
  number: "02",
  title: "Commercial Interior Design",
  category: "Commercial",
  shortDescription: "Designing a space to help a business operate efficiently and create the right experience for its customers, clients, or employees.",
  description: "Brand-defining commercial environments, boutique retail flagship stores, and inspiring corporate headquarters engineered for productivity, client engagement, and seamless operational workflow.",
  additionalDescription: "Commercial architecture must balance high-traffic durability with brand storytelling. We engineer spatial flow, acoustic zoning, adaptive workstations, and architectural lighting that enhance human interaction.",
  image: "/servicesImages/commercial.png",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Understanding the Business",
      description: "Analyzing brand goals, operational workflow, and target demographic requirements.",
      icon: "Compass"
    },
    {
      title: "Space Planning and Zoning",
      description: "Optimizing floorplate density, circulation paths, and multi-functional work zones.",
      icon: "Layers"
    },
    {
      title: "Customer Experience",
      description: "Crafting welcoming reception lobbies, intuitive navigation, and engaging client touchpoints.",
      icon: "Box"
    },
    {
      title: "Brand Identity",
      description: "Translating corporate values into bespoke reception desks, architectural finishes, and branded interiors.",
      icon: "ShieldCheck"
    },
    {
      title: "Safety and Accessibility",
      description: "Ensuring commercial grade fire compliance, accessibility standards, slip ratings, and durable materials.",
      icon: "Sun"
    }
  ],
  sections: [
    {
      title: "Corporate Workspaces & Flagship Retail",
      content: "We design agile corporate offices, executive suites, boutique cafes, luxury retail flagships, and wellness clinics that make lasting impressions."
    },
    {
      title: "Commercial Building Standards & Durability",
      content: "All material specifications adhere strictly to commercial grade fire codes, slip ratings, high-durability finishes, and sustainability certifications."
    }
  ],
  checklist: [
    "Brand DNA & Operational Workflow Discovery",
    "Acoustic & Lighting Simulation Analysis",
    "Commercial Grade Material & Furniture Specifications",
    "Contractor Coordination & Building Code Compliance",
    "Phased Fit-Out Execution & Post-Occupancy Evaluation"
  ],
  faqs: [
    {
      question: "Do you handle code compliance and MEP engineering coordination?",
      answer: "Yes, our team collaborates closely with MEP engineers, local municipal boards, and general contractors to ensure total code compliance and seamless execution."
    },
    {
      question: "Can fit-outs be conducted during business operating hours?",
      answer: "We structure phased construction schedules, night shifts, and modular installations to minimize downtime for active commercial operations."
    }
  ],
  process: [
    { step: "01", title: "Brand Discovery", description: "Analyzing target demographics, team ergonomics, and spatial requirements." },
    { step: "02", title: "Schematic Planning", description: "Developing circulation maps, zoning models, and 3D spatial concepts." },
    { step: "03", title: "Execution & Commissioning", description: "Managing contractor fit-outs, custom millwork, and white-glove handover." }
  ],
  seo: {
    title: "Commercial Interior Design Services | DesignMeInteriors Studio",
    description: "Designing a space to help a business operate efficiently and create the right experience for its customers, clients, or employees."
  }
};
