import { Service } from "@/types/service";

export const outdoorLandscapeDesign: Service = {
  slug: "outdoor-landscape-design",
  number: "04",
  title: "Outdoor & Landscape Design",
  category: "Landscape",
  shortDescription: "Planning, designing, and arranging outdoor spaces to make them functional, attractive, comfortable, and connected with nature.",
  description: "Crafting seamlessly integrated outdoor living sanctuaries—from tranquil courtyard gardens to swimming pools, stone terraces, and luxury pergolas.",
  additionalDescription: "We believe architectural design should blur the boundaries between indoors and outdoors. Our landscape studio creates outdoor rooms, custom fire features, native plant schemes, and weather-resistant material selections that age gracefully.",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Site Analysis",
      description: "Mapping topography, soil conditions, wind corridors, and natural view lines.",
      icon: "Compass"
    },
    {
      title: "Space Planning and Zoning",
      description: "Defining functional outdoor zones, patios, decks, and seamless garden walkways.",
      icon: "Layers"
    },
    {
      title: "Plant Selection",
      description: "Curating climate-resilient native plants, shade trees, and low-maintenance organic gardens.",
      icon: "Box"
    },
    {
      title: "Water Harvesting",
      description: "Designing eco-friendly rainwater harvesting, efficient drip irrigation, and drainage systems.",
      icon: "ShieldCheck"
    },
    {
      title: "Climate and Sunlight",
      description: "Optimizing sun exposure, seasonal shade structures, and passive cooling micro-climates.",
      icon: "Sun"
    }
  ],
  sections: [
    {
      title: "Harmonizing Architecture & Nature",
      content: "Our outdoor designs prioritize micro-climate comfort, shade orientation, acoustic screening, and year-round outdoor enjoyment."
    },
    {
      title: "Weather-Enduring Craftsmanship",
      content: "We select marine-grade stainless steel, powder-coated aluminum, sustainably harvested ipe timber, and non-porous exterior quartzites built for harsh climates."
    }
  ],
  checklist: [
    "Site Solar Orientation & Soil Drainage Audit",
    "Outdoor Master Plan & 3D Landscape Visualization",
    "Hardscape Stone & Timber Selection",
    "Planting Palette & Irrigation Plan Specification",
    "Landscape Lighting & Outdoor Audio Integration"
  ],
  faqs: [
    {
      question: "Do you design small urban rooftop terraces as well as large estates?",
      answer: "Yes, we design intimate urban balconies and rooftop gardens as well as multi-acre private estates and resort grounds."
    },
    {
      question: "How do you ensure outdoor furniture lasts through harsh weather?",
      answer: "We specify solution-dyed acrylic fabrics, quick-dry foam cushion cores, and powder-coated frames designed to withstand intense UV exposure and heavy rain."
    }
  ],
  process: [
    { step: "01", title: "Site & Climate Audit", description: "Mapping sun angles, wind corridors, soil conditions, and view lines." },
    { step: "02", title: "Master Concept", description: "Designing hardscape layouts, pool profiles, and planting palettes." },
    { step: "03", title: "Installation & Planting", description: "Supervising masonry, carpentry, irrigation setup, and specimen planting." }
  ],
  seo: {
    title: "Outdoor & Landscape Design Services | DesignMeInteriors Studio",
    description: "Planning, designing, and arranging outdoor spaces to make them functional, attractive, comfortable, and connected with nature."
  }
};
