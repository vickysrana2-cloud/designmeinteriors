import { Blog } from "@/types/blog";
import {
  getBloggerPosts,
  getBloggerPostBySlug,
  getBloggerPostById,
  getBloggerCategories,
} from "@/lib/blogger/blogger";
import { FALLBACK_BLOGS } from "./blog-fallbacks";

export { FALLBACK_BLOGS };

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
  return true;
}

/**
 * Fetch all published blogs from Blogger API v3 (Server or Client via API route)
 */
export async function getBlogs(): Promise<Blog[]> {
  // If running in browser, fetch through server API route to protect API key
  if (typeof window !== "undefined") {
    try {
      const res = await fetch("/api/blogs");
      if (res.ok) {
        const blogs: Blog[] = await res.json();
        if (Array.isArray(blogs) && blogs.length > 0) {
          return blogs;
        }
      }
      return FALLBACK_BLOGS;
    } catch (err) {
      console.warn("Client fetch /api/blogs failed, returning fallback blogs:", err);
      return FALLBACK_BLOGS;
    }
  }

  // Server-side execution
  try {
    const { blogs } = await getBloggerPosts({ maxResults: 50 });
    return blogs && blogs.length > 0 ? blogs : FALLBACK_BLOGS;
  } catch (error) {
    console.warn("Blogger API server fetch failed, returning fallback blogs:", error);
    return FALLBACK_BLOGS;
  }
}

/**
 * Fetch all blogs for admin dashboard
 */
export async function getAllBlogsForAdmin(): Promise<Blog[]> {
  return await getBlogs();
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (!slug) return null;

  if (typeof window !== "undefined") {
    try {
      const res = await fetch(`/api/blogs/${encodeURIComponent(slug)}`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn(`Client fetch /api/blogs/${slug} failed:`, err);
    }
  }

  return await getBloggerPostBySlug(slug);
}

/**
 * Fetch a single blog post by ID
 */
export async function getBlogById(id: string): Promise<Blog | null> {
  if (!id) return null;
  return await getBloggerPostById(id);
}

/**
 * Fetch all categories/labels available across blogs
 */
export async function getCategories(): Promise<string[]> {
  return await getBloggerCategories();
}
