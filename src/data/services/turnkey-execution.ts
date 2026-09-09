import { Service } from "@/types/service";

export const turnkeyExecution: Service = {
  slug: "turnkey-execution",
  number: "04",
  title: "Turnkey Project Management",
  category: "Turnkey Execution",
  shortDescription: "Comprehensive site supervision, contractor management, procurement, and seamless white-glove installation with rigorous standards.",
  description: "Our turnkey service handles every operational aspect of execution. We manage site contractors, custom fabricators, budget allocation, import logistics, and final white-glove styling, giving clients peace of mind from start to finish.",
  additionalDescription: "Turnkey delivery bridges the gap between vision and reality. By maintaining a single point of accountability, we shield clients from vendor friction, cost overruns, and construction delays while enforcing white-glove precision.",
  image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    {
      title: "Material Sourcing & Procurement",
      description: "Direct sourcing management for premium natural stone, quality finishes, and bespoke lighting.",
      icon: "Compass"
    },
    {
      title: "On-Site Daily Supervision",
      description: "Resident architectural site engineers managing trade partners, tolerances, and milestone sign-offs.",
      icon: "ShieldCheck"
    },
    {
      title: "Strict Budget & Milestone Audit",
      description: "Transparent financial tracking, fixed-sum contractor agreements, and zero surprise billings.",
      icon: "Layers"
    },
    {
      title: "White-Glove Handover",
      description: "Complete post-construction deep clean, climate commissioning, and white-glove furniture styling.",
      icon: "Sun"
    }
  ],
  sections: [
    {
      title: "End-to-End Execution Management",
      content: "Our project managers oversee structural mason work, electrical rough-ins, plumbing pressure testing, custom millwork installation, and automated home system commissioning under strict quality assurance checklists."
    },
    {
      title: "Key Elements of White-Glove Project Handover",
      content: "Before client handover, every room undergoes rigorous snagging audits, climate system balancing, and deep architectural cleaning so your sanctuary is pristine on day one."
    }
  ],
  checklist: [
    "Single Point of Project Manager Accountability",
    "Vetted Specialist Trade & Artisan Onboarding",
    "Real-Time Digital Milestone Progress Reporting",
    "Comprehensive Material Quality & Stress Testing",
    "Final Snag-Free Guarantee & White-Glove Handover"
  ],
  faqs: [
    {
      question: "How do you guarantee project budget control?",
      answer: "We establish detailed fixed-price Bill of Quantities (BOQ) during pre-construction. Any design additions require explicit written variation approvals, preventing unexpected budget inflation."
    },
    {
      question: "Will I need to manage site contractors myself?",
      answer: "Not at all. Our dedicated project manager handles daily contractor coordination, safety protocols, material deliveries, and technical trade questions on your behalf."
    },
    {
      question: "What warranties do you provide post-handover?",
      answer: "We provide a 12-month comprehensive defects liability warranty and structural sign-off documentation, along with dedicated maintenance support."
    }
  ],
  process: [
    { step: "01", title: "Contractor Onboarding", description: "Vetting specialists, establishing timelines, and setting quality benchmarks." },
    { step: "02", title: "Site Supervision", description: "Daily architectural oversight, material inspections, and milestone verifications." },
    { step: "03", title: "Unveiling & Handover", description: "Conducting snag lists, deep cleaning, and client orientation." }
  ],
  seo: {
    title: "Turnkey Architectural Project Management | DesignMeInteriors Studio",
    description: "Comprehensive site supervision, contractor management, procurement, and seamless white-glove installation with rigorous quality standards."
  }
};
