import { Service } from "@/types/service";

export const interiorArchitecture: Service = {
  slug: "interior-architecture",
  number: "01",
  title: "Interior Architecture",
  shortDescription: "Full spatial restructuring, floorplan engineering, and structural refinement tailored to optimize light flow and human experience.",
  description: "Interior Architecture goes beyond superficial decoration. We engineer and reimagine physical environments from structural layouts to ceiling details, ensuring proportion, natural lighting, and architectural harmony in every project.",
  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    "Space Planning & Layout Engineering",
    "Structural Alterations & Partition Strategy",
    "3D Photorealistic Renderings & BIM",
    "Architectural Lighting & Ceiling Design"
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
