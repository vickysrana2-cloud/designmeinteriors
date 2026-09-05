import { Service } from "@/types/service";

export const interiorArchitecture: Service = {
  slug: "interior-architecture",
  number: "01",
  title: "Interior Architecture",
  category: "Architecture",
  shortDescription: "Full spatial restructuring, floorplan engineering, and structural refinement tailored to optimize light flow and human experience.",
  description: "Interior Architecture goes beyond superficial decoration. We engineer and reimagine physical environments from structural layouts to ceiling details, ensuring proportion, natural lighting, and architectural harmony in every project.",
  additionalDescription: "Our approach integrates BIM structural modeling with tactile spatial curation. By carefully balancing load-bearing requirements, MEP systems, and natural daylight penetration, we transform raw volumes into serene, highly functional sanctuaries.",
  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Space Optimization",
      description: "Rigorous floorplan recalculation to eliminate dead zones and maximize fluid movement.",
      icon: "Compass"
    },
    {
      title: "Flexible Volumetric Layouts",
      description: "Custom sliding partition walls, hidden pocket doors, and reconfigurable room modules.",
      icon: "Layers"
    },
    {
      title: "BIM & Photorealistic 3D",
      description: "Millimeter-accurate 3D BIM models detailing acoustic insulation and hidden MEP runs.",
      icon: "Box"
    },
    {
      title: "Architectural Lighting Control",
      description: "Recessed linear coves, shadow gap detailing, and automated circadian lighting scenes.",
      icon: "Sun"
    }
  ],
  sections: [
    {
      title: "Spatial Planning & Blueprints",
      content: "We analyze structural frameworks, column positions, and elevation sightlines to craft intuitive circulation routes. Every blueprint undergoes solar mapping to harmonize indoor living with ambient outdoor light."
    },
    {
      title: "Key Elements of Architectural Refinement",
      content: "From frameless flush-to-wall doors to concealed air vents and dropped ceiling pockets, our detailing hides operational complexity behind minimalist aesthetics."
    }
  ],
  checklist: [
    "Full Structural & Load-Bearing Feasibility Analysis",
    "3D Photorealistic Renderings & Interactive VR Models",
    "Custom Ceiling, Lighting & Acoustic Specifications",
    "Comprehensive Construction & MEP Blueprints",
    "White-Glove Site Inspection & Architectural Sign-Off"
  ],
  faqs: [
    {
      question: "How does Interior Architecture differ from standard interior decoration?",
      answer: "Interior Architecture focuses on structural alterations, spatial flow, wall movements, custom millwork engineering, and technical MEP integration, rather than just selecting loose furniture and paint colors."
    },
    {
      question: "At what stage should I involve your architectural studio?",
      answer: "Ideal engagement begins during the early architectural conceptual phase or pre-construction. This allows us to optimize internal layouts before structural slabs and plumbing lines are finalized."
    },
    {
      question: "Do you handle local municipal building approvals?",
      answer: "Yes, we collaborate closely with certified structural engineers and municipal expeditors to ensure all structural changes fully comply with regional building codes."
    }
  ],
  process: [
    { step: "01", title: "Spatial Analysis", description: "Evaluating site orientation, circulation paths, structural constraints, and daylight mapping." },
    { step: "02", title: "Conceptual Layouts", description: "Developing iterative 2D floor plans, 3D spatial models, and volumetric studies." },
    { step: "03", title: "Detailed Engineering", description: "Creating execution drawings, MEP integration blueprints, and structural specifications." }
  ],
  seo: {
    title: "Interior Architecture & Spatial Design Services | DesignMeInteriors Studio",
    description: "Full spatial restructuring, floorplan engineering, and structural refinement tailored to optimize light flow, proportion, and human experience."
  }
};
