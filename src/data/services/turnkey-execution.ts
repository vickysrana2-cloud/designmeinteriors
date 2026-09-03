import { Service } from "@/types/service";

export const turnkeyExecution: Service = {
  slug: "turnkey-execution",
  number: "04",
  title: "Turnkey Project Management",
  shortDescription: "Comprehensive site supervision, contractor management, procurement, and seamless white-glove installation with rigorous standards.",
  description: "Our turnkey service handles every operational aspect of execution. We manage site contractors, custom fabricators, budget allocation, import logistics, and final white-glove styling, giving clients peace of mind from start to finish.",
  image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  secondaryImages: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
  ],
  features: [
    "Global Procurement & Logistics",
    "On-site Supervision & Quality Control",
    "Budget & Milestone Schedule Monitoring",
    "White-glove Handover & Commissioning"
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
