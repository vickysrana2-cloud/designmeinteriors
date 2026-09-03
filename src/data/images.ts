export interface Project {
  id: string;
  title: string;
  category: "residential" | "commercial" | "hospitality" | "conceptual";
  location: string;
  year: string;
  area: string;
  image: string;
  secondaryImages?: string[];
  description: string;
  architect: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
}

export const IMAGES = {
  aboutMain: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  aboutStudio: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  founder: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  teamMember2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  ctaBg: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80",
};

export const PROJECTS: Project[] = [
  {
    id: "villas-sanctuary",
    title: "The Dune Sanctuary",
    category: "residential",
    location: "Malibu, California",
    year: "2024",
    area: "850 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A coastal residence crafted with raw travertine, natural teak, and expansive floor-to-ceiling glass paneling framing sweeping ocean horizons.",
    architect: "Aarav Sharma & Team",
    featured: true,
  },
  {
    id: "aurora-penthouse",
    title: "Aurora Sky Loft",
    category: "residential",
    location: "Tribeca, New York",
    year: "2024",
    area: "520 m²",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Minimalist urban luxury penthouse uniting polished micro-cement, custom dark walnut cabinetry, and tactile linen furnishings.",
    architect: "Aarav Sharma",
    featured: true,
  },
  {
    id: "lumina-headquarters",
    title: "Komorebi Tech HQ",
    category: "commercial",
    location: "Shibuya, Tokyo",
    year: "2023",
    area: "2,400 m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Biophilic workplace design incorporating indoor zen gardens, modular acoustic wood louvers, and indirect warm light scapes.",
    architect: "Elena Rostova",
    featured: true,
  },
  {
    id: "solstice-resort",
    title: "Solstice Wellness Retreat",
    category: "hospitality",
    location: "Kyoto, Japan",
    year: "2024",
    area: "3,800 m²",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A serene spa hotel inspired by Japanese wabi-sabi philosophy, featuring cedar soak tubs, clay plaster walls, and raked gravel courtyards.",
    architect: "Aarav Sharma & Kenji Sato",
    featured: true,
  },
  {
    id: "terracotta-pavilion",
    title: "Monolith Terracotta Villa",
    category: "residential",
    location: "Tuscany, Italy",
    year: "2023",
    area: "620 m²",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Reimagined Italian countryside villa celebrating earthy terracotta tiles, stone archways, and sculpted interior lighting.",
    architect: "Elena Rostova",
    featured: false,
  },
  {
    id: "apex-pavilion-concept",
    title: "The Floating Pavilion",
    category: "conceptual",
    location: "Zurich Lake, Switzerland",
    year: "2025 Concept",
    area: "400 m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "An experimental architectural study exploring cantilevered steel frames suspended over calm waters with integrated solar glass.",
    architect: "DesignMeInteriors Design Lab",
    featured: false,
  }
];

export const SERVICES: Service[] = [
  {
    id: "interior-architecture",
    number: "01",
    title: "Interior Architecture",
    description: "Full spatial restructuring, floorplan engineering, and structural refinement tailored to optimize light flow, proportion, and human experience.",
    features: ["Space Planning & Layouts", "Structural Alterations", "3D Photorealistic Renderings", "Lighting Architecture"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "residential-design",
    number: "02",
    title: "Bespoke Residential Design",
    description: "End-to-end luxury residence crafting—from private coastal estates to high-rise city lofts—balancing timeless elegance with daily comfort.",
    features: ["Custom Cabinetry & Joinery", "Material Specification", "Bespoke Furniture Curation", "Art & Artifact Sourcing"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "commercial-spaces",
    number: "03",
    title: "Commercial & Workspace",
    description: "Brand-defining commercial environments, boutique retail flagship stores, and inspiring corporate headquarters engineered for productivity and distinction.",
    features: ["Brand Space Identity", "Acoustic Engineering", "Modular Spatial Solutions", "Sustainable Certifications"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "turnkey-execution",
    number: "04",
    title: "Turnkey Project Management",
    description: "Comprehensive site supervision, contractor management, procurement, and seamless white-glove installation with rigorous quality standards.",
    features: ["Vendor Management", "Budget & Timeline Control", "On-site Supervision", "White-glove Handover"],
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "DesignMeInteriors transformed our coastal villa into a living masterwork. Their mastery of natural light, warm textures, and spatial flow exceeded every expectation.",
    author: "Marcus & Sophia Vance",
    role: "Private Homeowners",
    company: "Dune Sanctuary Project",
    location: "Malibu, CA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    quote: "Working with DesignMeInteriors on our Tokyo headquarters brought fresh biophilic energy to our company culture. The attention to custom joinery is unmatched.",
    author: "Hiroshi Tanaka",
    role: "Chief Operating Officer",
    company: "Komorebi Tech",
    location: "Tokyo, Japan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    quote: "From the initial mood boards to turnkey delivery, the process was serene and flawlessly executed. They truly understand luxury minimalism.",
    author: "Clara Dupont",
    role: "Founder",
    company: "Maison Dupont Hospitality",
    location: "Paris / Kyoto",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Architectural Intent",
    description: "We initiate with an immersive consultation to uncover your lifestyle, spatial aspirations, site orientation, and aesthetic sensibilities."
  },
  {
    step: "02",
    title: "Spatial Blueprint & Concept Creation",
    description: "Translating concepts into precise spatial layouts, 3D photorealistic visualisations, material palettes, and lighting strategies."
  },
  {
    step: "03",
    title: "Detailed Crafting & Procurement",
    description: "Fleshing out technical shop drawings, custom joinery specs, sourcing rare stone & sustainable timbers, and coordinating specialist artisans."
  },
  {
    step: "04",
    title: "Turnkey Realisation & Styling",
    description: "Meticulous on-site management through construction, custom furniture installation, art placement, and final white-glove reveal."
  }
];
export interface HeroSlide {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: string;
  features: string[];
  previewImage: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image:
      "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-slider1.jpg",

    eyebrow: "FAST AND RELIABLE",

    title: "The Art of Stunning Interior Design",

    description:
      "Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life.",

    projects: "260+",

    features: [
      "Tech Specifications",
      "Design Project",
      "3D Visualisation",
    ],

    previewImage:
      "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-slider1-280x300.jpg",
  },

  {
    id: 2,
    image:
      "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-slider2.jpg",

    eyebrow: "FAST AND RELIABLE",

    title: "Find Your Inspired Interior Design",

    description:
      "Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life.",

    projects: "360+",

    features: [
      "Tech Specifications",
      "Design Project",
      "3D Visualisation",
    ],

    previewImage:
      "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-slider2-280x300.jpg",
  },
];