import { Service } from "@/types/service";

export const commercialSpaces: Service = {
  slug: "commercial-spaces",
  number: "03",
  title: "Commercial & Workspace",
  category: "Commercial",
  shortDescription: "Brand-defining commercial environments, boutique retail flagship stores, and inspiring corporate headquarters engineered for productivity.",
  description: "We design biophilic, performance-driven commercial spaces that elevate company culture and showcase brand identity. From acoustics to flexible spatial modules, our designs foster collaboration, innovation, and well-being.",
  additionalDescription: "In commercial interior design, physical environments act as powerful catalysts for talent retention, brand storytelling, and strategic productivity. We craft workspaces that balance acoustic quiet zones with vibrant collaborative foyers.",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Spatial Brand Identity",
      description: "Translating brand values into tactile architectural finishes, custom reception desks, and branded foyers.",
      icon: "ShieldCheck"
    },
    {
      title: "Acoustic Engineering",
      description: "Custom micro-perforated acoustic timber wall panels, felt ceilings, and noise-damping conference pods.",
      icon: "Layers"
    },
    {
      title: "Biophilic Work Environments",
      description: "Integrating indoor green atrium gardens, natural timber, and daylight harvesting systems.",
      icon: "Sun"
    },
    {
      title: "Flexible Modular Pods",
      description: "Reconfigurable workspace dividers, hot-desking setups, and private executive boardrooms.",
      icon: "Compass"
    }
  ],
  sections: [
    {
      title: "Types of Commercial Spaces We Design",
      content: "Our commercial portfolio spans tech headquarters, boutique wealth management offices, luxury retail flagship stores, hospitality lounges, and creative design agency studios."
    },
    {
      title: "Key Elements of High-Performance Workspace Design",
      content: "We engineer intelligent airflow systems, anti-glare ergonomic lighting schemes, and seamless AV/tech integration so technology works invisibly in the background."
    }
  ],
  checklist: [
    "Workplace Ergonomic & Flow Audit",
    "Brand Spatial Identity Integration Blueprint",
    "Acoustic Simulation & Sound Transmission Control",
    "Commercial Grade MEP, HVAC & Fire Safety Planning",
    "Phased Occupancy & Minimal Business Disruption Delivery"
  ],
  faqs: [
    {
      question: "How do you minimize downtime during a commercial renovation?",
      answer: "We develop phased construction schedules and perform high-impact installations during off-hours or weekends, keeping your business fully operational throughout the transformation."
    },
    {
      question: "Do your commercial designs adhere to sustainability certifications?",
      answer: "Yes, our designs incorporate recycled timber, low-VOC finishes, energy-efficient LED automation, and biophilic standards aligned with LEED and WELL building benchmarks."
    },
    {
      question: "Can you assist with commercial IT and audio-visual integration?",
      answer: "We work directly with commercial IT integrators to ensure video conferencing, cable management, and automated acoustic barriers are seamlessly hidden within millwork."
    }
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
