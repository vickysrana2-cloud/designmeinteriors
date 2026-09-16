export interface GalleryItem {
  id: string;
  title: string;
  category: 
    | "Living Spaces"
    | "Bedrooms"
    | "Kitchens"
    | "Bathrooms"
    | "Office & Workspaces"
    | "Commercial Spaces"
    | "Custom Furniture & Joinery"
    | "Completed Projects"
    | "Before & After";
  image: string; // Main display image
  images?: string[]; // Multiple photos for Completed Projects
  beforeImage?: string; // For Before & After
  afterImage?: string; // For Before & After
  location: string;
  projectType: "Residential" | "Commercial" | "Turnkey" | "Concept";
  description: string;
  featured?: boolean;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Living Spaces",
  "Bedrooms",
  "Kitchens",
  "Bathrooms",
  "Office & Workspaces",
  "Commercial Spaces",
  "Custom Furniture & Joinery",
  "Completed Projects",
  "Before & After",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const galleryItems: GalleryItem[] = [
  // 1. Living Spaces
  {
    id: "living-001",
    title: "Civil Lines Luxury Living Salon",
    category: "Living Spaces",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    location: "Civil Lines, Nagpur",
    projectType: "Residential",
    description: "Double-height living space featuring custom teak paneling, Italian beige marble, and warm ambient accent lighting.",
    featured: true,
  },
  {
    id: "living-002",
    title: "Dharampeth Sky Villa Lounge",
    category: "Living Spaces",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    location: "Dharampeth, Nagpur",
    projectType: "Residential",
    description: "Minimalist open-plan living room with Venetian plaster walls, sculptural seating, and floor-to-ceiling balcony views.",
    featured: true,
  },
  {
    id: "living-003",
    title: "Ramdaspeth Heritage Residence Living",
    category: "Living Spaces",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    location: "Ramdaspeth, Nagpur",
    projectType: "Residential",
    description: "Traditional Central Indian terracotta accents paired with plush low-slung seating and warm brass joinery details.",
  },

  // 2. Bedrooms
  {
    id: "bedroom-001",
    title: "Master Suite with Fluted Wood Backdrop",
    category: "Bedrooms",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
    location: "Civil Lines, Nagpur",
    projectType: "Residential",
    description: "Serene master sanctuary featuring bespoke fluted oak headboard, integrated LED cove lighting, and soft woven textiles.",
    featured: true,
  },
  {
    id: "bedroom-002",
    title: "Minimalist Japandi Bedroom",
    category: "Bedrooms",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85",
    location: "Wardha Road, Nagpur",
    projectType: "Residential",
    description: "Clean aesthetic with low-profile platform bed, natural linen upholstery, and subtle floating bedside tables.",
  },

  // 3. Kitchens
  {
    id: "kitchen-001",
    title: "Smoked Walnut Modular Kitchen",
    category: "Kitchens",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    location: "Ramdaspeth, Nagpur",
    projectType: "Residential",
    description: "High-end modular kitchen with Blum hardware, quartz waterfall counter island, and integrated appliance towers.",
    featured: true,
  },
  {
    id: "kitchen-002",
    title: "Matte Charcoal & Teak Breakfast Bar",
    category: "Kitchens",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85",
    location: "Civil Lines, Nagpur",
    projectType: "Residential",
    description: "Contemporary kitchen layout featuring handleless matte cabinetry and warm natural teak floating breakfast bar.",
  },

  // 4. Bathrooms
  {
    id: "bathroom-001",
    title: "Travertine & Brushed Gold Spa Bath",
    category: "Bathrooms",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
    location: "Dharampeth, Nagpur",
    projectType: "Residential",
    description: "Luxury master bathroom wrapped in floor-to-ceiling travertine tiles with brass rainfall shower fixtures and ambient backlighting.",
    featured: true,
  },
  {
    id: "bathroom-002",
    title: "Monochrome Matte Black Powder Room",
    category: "Bathrooms",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=85",
    location: "Civil Lines, Nagpur",
    projectType: "Residential",
    description: "Dramatic powder room featuring micro-cement finish walls, custom stone basin, and vertical bronze bar lighting.",
  },

  // 5. Office & Workspaces
  {
    id: "office-001",
    title: "Executive Director Suite",
    category: "Office & Workspaces",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    location: "MIHAN, Nagpur",
    projectType: "Commercial",
    description: "Sophisticated private executive office with acoustic wooden ceiling baffles, leather upholstery, and panoramic glass facade.",
    featured: true,
  },
  {
    id: "office-002",
    title: "Creative Collaborative Lounge",
    category: "Office & Workspaces",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85",
    location: "MIHAN IT Park, Nagpur",
    projectType: "Commercial",
    description: "Open workstation layout with biophilic planter dividers, ergonomic desk systems, and circadian ceiling lights.",
  },

  // 6. Commercial Spaces
  {
    id: "commercial-001",
    title: "Boutique Fashion Showroom",
    category: "Commercial Spaces",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85",
    location: "Sadar, Nagpur",
    projectType: "Commercial",
    description: "High-end luxury retail space with micro-topping concrete flooring, brass clothing displays, and warm focal spotlighting.",
    featured: true,
  },
  {
    id: "commercial-002",
    title: "Solstice Eco Resort Reception Lounge",
    category: "Commercial Spaces",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    location: "Pench Gateway, Nagpur",
    projectType: "Commercial",
    description: "Boutique eco-resort lounge incorporating hand-rendered lime plaster walls, exposed roof trusses, and peaceful water pool views.",
  },

  // 7. Custom Furniture & Joinery
  {
    id: "furniture-001",
    title: "Handcrafted Teak Dining Table & Credenza",
    category: "Custom Furniture & Joinery",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=85",
    location: "Nagpur Workshop",
    projectType: "Turnkey",
    description: "Solid Central Indian teakwood dining ensemble finished in matte organic sealant with seamless dovetail joinery.",
    featured: true,
  },
  {
    id: "furniture-002",
    title: "Sculptural Brass & Marble Bar Cabinet",
    category: "Custom Furniture & Joinery",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1600&q=85",
    location: "Dharampeth, Nagpur",
    projectType: "Turnkey",
    description: "Custom entertaining console featuring fluted green marble doors, brushed brass inlay, and warm internal glass shelf lights.",
  },

  // 8. Completed Projects (Multi-image project showcase)
  {
    id: "completed-001",
    title: "Villa Sanctuary — Civil Lines Estate",
    category: "Completed Projects",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85",
    ],
    location: "Civil Lines, Nagpur",
    projectType: "Turnkey",
    description: "Full-home interior execution encompassing living, dining, master suites, and private landscaped courtyard views.",
    featured: true,
  },
  {
    id: "completed-002",
    title: "MIHAN Corporate Tech Suite",
    category: "Completed Projects",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85",
    ],
    location: "MIHAN, Nagpur",
    projectType: "Commercial",
    description: "12,000 sq.ft. commercial headquarters turnkey execution featuring collaborative zones, executive suites, and acoustic boardrooms.",
    featured: true,
  },

  // 9. Before & After (Interactive comparison slider support)
  {
    id: "before-after-001",
    title: "Dharampeth Living Room Transformation",
    category: "Before & After",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    location: "Dharampeth, Nagpur",
    projectType: "Residential",
    description: "Complete spatial overhaul converting a dark dated salon into an open, light-filled modern sanctuary wrapped in teak and marble.",
    featured: true,
  },
  {
    id: "before-after-002",
    title: "Modular Kitchen Remodel",
    category: "Before & After",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    beforeImage: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1600&q=85",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    location: "Ramdaspeth, Nagpur",
    projectType: "Residential",
    description: "Transforming an outdated closed kitchen into a sleek, open-plan ergonomic cooking hub with smart storage solutions.",
    featured: true,
  },
];
