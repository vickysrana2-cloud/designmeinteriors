import { Service } from "@/types/service";

export const interior2d3dLayouts: Service = {
  slug: "interior-2d-3d-layouts",
  number: "06",
  title: "Interior 2D/3D Layouts",
  category: "Visualization",
  shortDescription: "Realistic 3D visualizations to help you envision your space before it's built in real life.",
  description: "Ultra-realistic 3D walkthrough renderings, detailed 2D architectural CAD floor plans, and interactive spatial models ensuring zero ambiguity before construction begins.",
  additionalDescription: "Visualization is the ultimate tool for spatial decision-making. We generate photorealistic lighting simulations, material texture renders, and millimeter-precise 2D construction drawings that eliminate guesswork for builders and clients.",
  image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Photorealistic 3D Renderings",
      description: "High-resolution 4K interior stills capturing natural daylight, artificial lighting, and exact material textures.",
      icon: "Sun"
    },
    {
      title: "2D Architectural Floor Plans",
      description: "Dimensioned CAD floor plans, ceiling reflection layouts, and electrical point placement drawings.",
      icon: "Layers"
    },
    {
      title: "3D Virtual Walkthroughs",
      description: "Immersive 360-degree virtual walkthrough tours allowing you to experience room proportions interactively.",
      icon: "Compass"
    },
    {
      title: "Millwork Shop Drawings",
      description: "Detailed 1:20 joinery section views for custom cabinetry, wardrobes, and stone details.",
      icon: "ShieldCheck"
    }
  ],
  sections: [
    {
      title: "Clarity Before Construction",
      content: "Our 3D modeling process allows you to test multiple furniture configurations, paint options, and lighting schemes in real-time before ordering materials."
    },
    {
      title: "Precision Construction Documentation",
      content: "For contractors and craftsmen, we deliver comprehensive 2D CAD packages detailing electrical outlets, plumbing rough-ins, wall finishes, and tile layouts."
    }
  ],
  checklist: [
    "Millimeter-Accurate Site Laser Measurement Survey",
    "Comprehensive 2D CAD Floor Plan & Furniture Layout Package",
    "3D Photorealistic Still Renderings (Day & Night Scenes)",
    "360-Degree Interactive Virtual Walkthrough Link",
    "Contractor-Ready Joinery & Electrical Construction Sheets"
  ],
  faqs: [
    {
      question: "Can 3D renders show the exact materials and furniture I want to buy?",
      answer: "Yes, we map 3D models using exact material texture maps from stone, timber, and fabric suppliers, as well as true-to-scale 3D models of specified furniture pieces."
    },
    {
      question: "How long does it take to produce a 3D visualization package?",
      answer: "Initial 2D layouts and preliminary 3D clay models are ready within 5 to 7 business days, with full 4K photorealistic renders completed shortly after."
    }
  ],
  process: [
    { step: "01", title: "Spatial Measurement", description: "Conducting site laser scans or reviewing existing architectural CAD files." },
    { step: "02", title: "2D & 3D Drafting", description: "Building precise 3D digital models and applying material textures." },
    { step: "03", title: "4K Render Delivery", description: "Delivering high-resolution image sets, CAD documentation, and virtual tours." }
  ],
  seo: {
    title: "Interior 2D & 3D Layouts | DesignMeInteriors Studio",
    description: "Realistic 3D visualizations to help you envision your space before it's built in real life."
  }
};
