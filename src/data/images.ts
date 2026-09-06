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
    description: "A coastal home crafted with natural stone, warm teak wood, and large glass windows overlooking beautiful ocean views.",
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
    description: "A modern luxury city penthouse featuring smooth micro-cement finishes, dark walnut woodwork, and soft linen furniture.",
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
    description: "A modern green workplace featuring indoor plant gardens, soundproof wooden panels, and warm ambient lighting.",
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
    description: "A peaceful spa hotel inspired by traditional Japanese design, featuring natural wood tubs, clay walls, and stone garden courtyards.",
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
    description: "A modern Italian countryside villa highlighting terracotta floor tiles, classic stone archways, and warm custom lighting.",
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
    description: "An innovative design concept featuring steel frames suspended over calm water with integrated solar glass panels.",
    architect: "DesignMeInteriors Design Lab",
    featured: false,
  }
];

export const SERVICES: Service[] = [
  {
    id: "interior-architecture",
    number: "01",
    title: "Interior Architecture",
    description: "Complete floor plan design, space planning, and structural layouts to maximize natural light and overall room comfort.",
    features: ["Space Planning & Layouts", "Wall & Room Alterations", "3D Photorealistic Views", "Custom Lighting Plans"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "residential-design",
    number: "02",
    title: "Residential Interior Design",
    description: "Complete home interior design—from private villas to modern apartments—combining beauty, function, and everyday comfort.",
    features: ["Custom Furniture & Cabinets", "Material & Finish Selection", "Curated Furniture Sourcing", "Decor & Lighting Setup"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "commercial-spaces",
    number: "03",
    title: "Commercial & Office Design",
    description: "Professional office spaces, retail stores, and commercial interiors designed to boost productivity and showcase your brand.",
    features: ["Brand Space Design", "Soundproofing Solutions", "Flexible Office Layouts", "Eco-Friendly Materials"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "turnkey-execution",
    number: "04",
    title: "Turnkey Project Management",
    description: "Complete project management from start to finish, including contractor supervision, material buying, and final hassle-free handover.",
    features: ["Contractor Management", "Budget & Schedule Tracking", "On-site Quality Supervision", "Complete Ready-to-Move Handover"],
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "DesignMeInteriors transformed our home into a beautiful, comfortable space. Their mastery of natural light and warm textures exceeded our expectations.",
    author: "Marcus & Sophia Vance",
    role: "Homeowners",
    company: "Dune Sanctuary Project",
    location: "Malibu, CA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    quote: "Working with DesignMeInteriors on our office design brought great energy to our workplace. The quality of custom woodwork and layout design is outstanding.",
    author: "Hiroshi Tanaka",
    role: "Chief Operating Officer",
    company: "Komorebi Tech",
    location: "Tokyo, Japan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    quote: "From initial design ideas to final delivery, the whole experience was smooth and hassle-free. They truly know how to create timeless, functional spaces.",
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
    title: "Initial Consultation",
    description:
      "We start with a friendly discussion to understand your ideas, lifestyle, space requirements, and budget.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
  },
  {
    step: "02",
    title: "Concept & Layout Planning",
    description:
      "We convert your ideas into detailed floor plans, 3D visual designs, material options, and lighting ideas.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=90",
  },
  {
    step: "03",
    title: "Material Selection & Crafting",
    description:
      "We finalize technical drawings, select quality materials, custom furniture pieces, and work with skilled craftspeople.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
  },
  {
    step: "04",
    title: "Execution & Final Handover",
    description:
      "We manage site work, install custom furniture, complete finishing touches, and deliver your fully completed space.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
  },
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