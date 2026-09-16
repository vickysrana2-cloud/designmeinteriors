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
    title: "The Teak & Terracotta Villa",
    category: "residential",
    location: "Civil Lines, Nagpur",
    year: "2024",
    area: "650 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A luxury multi-generational family villa in Civil Lines featuring handcrafted teakwood joinery, Italian marble floors, and serene courtyard gardens.",
    architect: "DesignMeInteriors Studio",
    featured: true,
  },
  {
    id: "aurora-penthouse",
    title: "Dharampeth Sky Penthouse",
    category: "residential",
    location: "Dharampeth, Nagpur",
    year: "2024",
    area: "520 m²",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A minimalist luxury penthouse in Dharampeth featuring smooth Venetian plaster finishes, smoked walnut woodwork, and panoramic city views.",
    architect: "DesignMeInteriors Studio",
    featured: true,
  },
  {
    id: "lumina-headquarters",
    title: "MIHAN Corporate Tech Suite",
    category: "commercial",
    location: "MIHAN, Nagpur",
    year: "2023",
    area: "1,800 m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A modern green corporate workplace featuring indoor planter gardens, acoustic wooden louvers, and warm ambient lighting.",
    architect: "DesignMeInteriors Studio",
    featured: true,
  },
  {
    id: "solstice-resort",
    title: "Pench Heritage Eco Resort",
    category: "hospitality",
    location: "Pench Gateway, Nagpur",
    year: "2024",
    area: "2,500 m²",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An eco-friendly boutique spa retreat featuring lime-wash plaster walls, exposed teak roof trusses, and private courtyard pools.",
    architect: "DesignMeInteriors Studio",
    featured: true,
  },
  {
    id: "terracotta-pavilion",
    title: "Ramdaspeth Heritage Residence",
    category: "residential",
    location: "Ramdaspeth, Nagpur",
    year: "2023",
    area: "480 m²",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A refined residential transformation highlighting handcrafted terracotta wall tiles, custom brass joinery, and warm ambient lighting.",
    architect: "DesignMeInteriors Studio",
    featured: false,
  },
  {
    id: "apex-pavilion-concept",
    title: "Futala Lakeside Pavilion",
    category: "conceptual",
    location: "Futala Lake, Nagpur",
    year: "2025 Concept",
    area: "380 m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "An architectural concept for a lakeside eco-residence overlooking Futala Lake, featuring cantilevered glass decks and solar integration.",
    architect: "DesignMeInteriors Studio",
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
    quote: "DesignMeInteriors transformed our Civil Lines villa into a beautiful, comfortable space. Their mastery of natural ventilation and warm teak finishes exceeded our expectations.",
    author: "Rajesh & Ananya Kulkarni",
    role: "Homeowners",
    company: "Civil Lines Villa Project",
    location: "Civil Lines, Nagpur",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    quote: "Working with DesignMeInteriors on our MIHAN corporate office design brought great energy to our workplace. The quality of custom woodwork and acoustic layout is outstanding.",
    author: "Dr. Vikram Deshmukh",
    role: "Managing Director",
    company: "MIHAN Tech Hub",
    location: "MIHAN, Nagpur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    quote: "From initial layout concepts to final delivery of our Dharampeth apartment, the experience was smooth and hassle-free. They truly know how to create functional, elegant spaces.",
    author: "Priya Sharma",
    role: "Homeowner",
    company: "Dharampeth Penthouse",
    location: "Dharampeth, Nagpur",
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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
    eyebrow: "Best interior design studio in nagpur",
    title: "Custom Made Interior Design Studio in Nagpur",
    description:
      "Crafting thoughtful, functional, and luxury interiors for residential homes, apartments, private villas, and commercial offices across Nagpur.",
    projects: "6+",
    features: [
      "2D/3D Floor Layouts",
      "Turnkey Execution",
      "Residential & Commercial",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85",
    eyebrow: "RESIDENTIAL & COMMERCIAL INTERIORS",
    title: "Transforming Spaces with Quality & Purpose",
    description:
      "From custom teak furniture in Civil Lines to nature-inspired offices in MIHAN, we create beautiful, functional, and lasting spaces designed with purpose",
    projects: "100%",
    features: [
      "Modular Kitchen & Millwork",
      "Space Ergonomics",
      "Quality Craftsmanship",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
  },
];