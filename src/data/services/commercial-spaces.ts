import { Service } from "@/types/service";

export const commercialSpaces: Service = {
  slug: "commercial-spaces",
  number: "03",
  title: "Commercial & Workspace",
  shortDescription: "Brand-defining commercial environments, boutique retail flagship stores, and inspiring corporate headquarters engineered for productivity.",
  description: "We design biophilic, performance-driven commercial spaces that elevate company culture and showcase brand identity. From acoustics to flexible spatial modules, our designs foster collaboration, innovation, and well-being.",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    "Brand Spatial Identity & Storytelling",
    "Acoustic Engineering & Ergonomics",
    "Modular & Reconfigurable Workspace",
    "Biophilic & Sustainability Standards"
  ],
  process: [
    { step: "01", title: "Brand Strategy Alignment", description: "Mapping spatial requirements to organizational workflows and brand vision." },
    { step: "02", title: "Spatial Blueprinting", description: "Designing collaborative zones, quiet pods, and welcoming public foyers." },
    { step: "03", title: "Build Execution", description: "Coordinating commercial trade partners for seamless buildout and tech integration." }
  ],
  seo: {
    title: "Commercial & Workspace Interior Architecture | DesignMeInteriors Studio",
    description: "Brand-defining commercial environments, boutique retail flagship stores, and inspiring corporate headquarters engineered for productivity."
  }
};
