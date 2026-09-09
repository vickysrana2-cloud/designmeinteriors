import { Blog } from "@/types/blog";

const BLOG_API_URL = "https://68ece284eff9ad3b1403ae8f.mockapi.io/blog";

export const FALLBACK_BLOGS: Blog[] = [
  {
    id: "1",
    title: "Selecting Teak & Terracotta for Modern Nagpur Residences",
    slug: "selecting-natural-teak-and-terracotta-nagpur",
    excerpt:
      "Explore how blending natural local terracotta tiles with handcrafted teak joinery creates passive thermal comfort and luxury in Central India homes.",
    content:
      "Designing homes in Central India requires balancing passive thermal ventilation with timeless architectural luxury. In our Nagpur projects, we often pair handcrafted terracotta wall cladding with rich teak wood millwork.\n\nTerracotta acts as a natural climate regulator, reducing heat absorption during summer months, while teak wood brings warm tactile grain and structural durability to custom joinery, wardrobes, and living room partitions.\n\nKey design considerations include choosing low-VOC matte sealants, integrating concealed warm LED spotlights, and maintaining open central courtyards for cross-ventilation.",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    author: "DesignMeInteriors Studio",
    category: "Residential Architecture",
    published: true,
    createdAt: "2024-11-15T10:00:00.000Z",
  },
  {
    id: "2",
    title: "Biophilic Lighting Principles in Executive Office Spaces",
    slug: "biophilic-lighting-principles-in-office-design",
    excerpt:
      "How circadian LED paneling, acoustic wooden louvers, and vertical planter gardens boost workplace productivity and biophilic wellness.",
    content:
      "Modern office spaces in tech hubs like MIHAN, Nagpur demand more than static cubicles. Integrating biophilic design principles transforms standard commercial spaces into vibrant collaborative environments.\n\nBy synchronizing circadian LED panel lighting with natural sunlight cycles, employee energy levels remain consistent throughout the day. Paired with modular acoustic wooden baffles and indoor air-purifying planter walls, the workplace becomes both sound-insulated and visually refreshing.",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    author: "DesignMeInteriors Studio",
    category: "Commercial Design",
    published: true,
    createdAt: "2024-12-02T11:30:00.000Z",
  },
  {
    id: "3",
    title: "5 Spatial Planning Rules for High-Rise Penthouses",
    slug: "dharampeth-penthouse-spatial-planning",
    excerpt:
      "From Venetian plaster wall finishes to floating brass joinery, here is how we maximize loft proportions and city views in luxury penthouses.",
    content:
      "Designing high-rise penthouses, such as our Dharampeth Sky Penthouse in Nagpur, presents unique spatial opportunities. The goal is to celebrate lofty ceiling heights while establishing intimate living zones.\n\n1. Use continuous floor finishes such as honed marble or smoked walnut to expand visual continuity.\n2. Apply smooth Venetian plaster to reflect natural light softy across expansive living salons.\n3. Integrate double-height glass decks for unobstructed city skyline views.\n4. Design floating joinery and bar islands that create sculptural focal points.",
    coverImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    author: "DesignMeInteriors Studio",
    category: "Interior Architecture",
    published: true,
    createdAt: "2025-01-10T09:15:00.000Z",
  },
  {
    id: "4",
    title: "Turnkey Interior Execution: What Homeowners Should Expect",
    slug: "turnkey-interior-execution-handbook",
    excerpt:
      "A complete guide to hassle-free interior design execution from 3D layouts, material procurement, on-site supervision, to final key handover.",
    content:
      "Opting for turnkey interior project management ensures your dream space is delivered without contractor conflicts or budget overruns.\n\nWith turnkey execution, a single studio manages everything: 2D/3D floor planning, material buying, custom furniture prototyping, electric/plumbing coordination, and on-site quality control.\n\nHomeowners receive regular milestone reports and walk into a fully finished, ready-to-live sanctuary.",
    coverImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    author: "DesignMeInteriors Studio",
    category: "Project Execution",
    published: true,
    createdAt: "2025-02-01T14:20:00.000Z",
  },
];

/**
 * Helper to determine published status
 */

export function isPublished(b: Blog): boolean {
  if (!b) return false;
  const p = b.published;
  if (p === true || p === (true as unknown)) return true;
  if (typeof p === "string" && (p as string).toLowerCase() === "true") return true;
  if (p === false || p === (false as unknown)) return false;
  if (typeof p === "string" && (p as string).toLowerCase() === "false") return false;
  // Default to true if published status is undefined or not set as explicit false
  return true;
}

/**
 * Fetch all published blogs from MockAPI (with reliable fallback)
 */
export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(BLOG_API_URL, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }
    const blogs: Blog[] = await res.json();
    if (!Array.isArray(blogs) || blogs.length === 0) {
      return FALLBACK_BLOGS;
    }
    const publishedOnly = blogs.filter(isPublished);
    return publishedOnly.length > 0 ? publishedOnly : FALLBACK_BLOGS;
  } catch (error) {
    console.warn("API request failed, returning fallback blogs:", error);
    return FALLBACK_BLOGS;
  }
}

/**
 * Fetch all blogs for admin dashboard (including unpublished draft blogs)
 */
export async function getAllBlogsForAdmin(): Promise<Blog[]> {
  try {
    const res = await fetch(BLOG_API_URL, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }
    const blogs: Blog[] = await res.json();
    return Array.isArray(blogs) && blogs.length > 0 ? blogs : FALLBACK_BLOGS;
  } catch (error) {
    console.warn("API request failed, returning fallback blogs:", error);
    return FALLBACK_BLOGS;
  }
}

/**
 * Fetch a single blog by slug from MockAPI
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (!slug) return null;

  try {
    const res = await fetch(`${BLOG_API_URL}?slug=${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const results: Blog[] = await res.json();
      if (Array.isArray(results) && results.length > 0) {
        const match = results.find((b) => b.slug === slug && isPublished(b));
        if (match) return match;
      }
    }

    const allBlogs = await getBlogs();
    return allBlogs.find((b) => b.slug === slug) || null;
  } catch (error) {
    console.warn(`API request for slug "${slug}" failed:`, error);
    const allBlogs = await getBlogs();
    return allBlogs.find((b) => b.slug === slug) || null;
  }
}

/**
 * Create a new blog post on MockAPI
 */
export async function createBlog(
  blogData: Omit<Blog, "id" | "createdAt">
): Promise<Blog> {
  const payload = {
    ...blogData,
    createdAt: new Date().toISOString(),
  };

  const res = await fetch(BLOG_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to create blog post. Status: ${res.status}`);
  }

  return await res.json();
}

/**
 * Update an existing blog post on MockAPI
 */
export async function updateBlog(
  id: string,
  blogData: Partial<Blog>
): Promise<Blog> {
  const res = await fetch(`${BLOG_API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  if (!res.ok) {
    throw new Error(`Failed to update blog post #${id}. Status: ${res.status}`);
  }

  return await res.json();
}

/**
 * Delete a blog post from MockAPI
 */
export async function deleteBlog(id: string): Promise<boolean> {
  const res = await fetch(`${BLOG_API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Failed to delete blog post #${id}. Status: ${res.status}`);
  }

  return true;
}
