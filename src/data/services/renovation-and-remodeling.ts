import { Service } from "@/types/service";

export const renovationAndRemodeling: Service = {
  slug: "renovation-and-remodeling",
  number: "05",
  title: "Renovation and Remodeling",
  category: "Renovation",
  shortDescription: "Overhauling existing spaces to modernize and improve functionality and aesthetics.",
  description: "Comprehensive structural overhauls, historic building restorations, and layout re-engineering. We breathe new life into existing structures with modern craftsmanship and spatial purity.",
  additionalDescription: "Renovating requires a deep respect for structural integrity combined with bold spatial reimagining. We specialize in converting dated layouts into open-plan, light-filled spaces while upgrading insulation, plumbing, and smart home technology.",
  image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Structural Layout Re-Engineering",
      description: "Removing load-bearing walls, installing steel beams, and creating open-concept living spaces.",
      icon: "Layers"
    },
    {
      title: "Historic & Period Restoration",
      description: "Restoring historic plaster moldings, hardwood floors, and original architectural details.",
      icon: "ShieldCheck"
    },
    {
      title: "Kitchen & Bath Overhauls",
      description: "Custom cabinetry, hidden pantries, spa-grade steam showers, and stone island slabs.",
      icon: "Compass"
    },
    {
      title: "MEP & Smart Energy Upgrades",
      description: "Integrating high-efficiency HVAC systems, radiant floor heating, and smart home automation.",
      icon: "Sun"
    }
  ],
  sections: [
    {
      title: "Transforming Existing Spaces",
      content: "We transform aging structures into modern, energy-efficient residences and commercial properties tailored for modern lifestyles."
    },
    {
      title: "Uncompromising Quality Control",
      content: "Our team manages every phase of demolition, structural reinforcement, trade installations, and fine surface finishes with strict quality assurance."
    }
  ],
  checklist: [
    "Structural & Architectural Survey Inspection",
    "Demolition & Steel Beam Engineering Specifications",
    "Custom Cabinetry & Bathroom Joinery Drawings",
    "Energy Efficiency & HVAC Upgrade Integration",
    "Turnkey Construction Management & Quality Handover"
  ],
  faqs: [
    {
      question: "Do you handle permit acquisition for structural modifications?",
      answer: "Yes, our architectural team submits all engineering calculations and permit drawings to municipal building authorities for approval."
    },
    {
      question: "How do you handle unexpected structural issues in older homes?",
      answer: "We perform invasive site audits prior to construction and maintain contingency allowances to address legacy wiring, plumbing, or structural settling promptly."
    }
  ],
  process: [
    { step: "01", title: "Site Inspection", description: "Evaluating structural condition, MEP systems, and spatial potential." },
    { step: "02", title: "Permit Drawings", description: "Creating detailed engineering blueprints and securing municipal permits." },
    { step: "03", title: "Construction", description: "Executing demolition, structural upgrades, millwork, and final styling." }
  ],
  seo: {
    title: "Renovation & Remodeling Services | DesignMeInteriors Studio",
    description: "Overhauling existing spaces to modernize and improve functionality and aesthetics."
  }
};
