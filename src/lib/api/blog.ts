import { Blog } from "@/types/blog";

const BLOG_API_URL = "https://68ece284eff9ad3b1403ae8f.mockapi.io/blog";

/**
 * Fetch all published blogs from MockAPI
 */
export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(BLOG_API_URL, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }
    const blogs: Blog[] = await res.json();
    if (!Array.isArray(blogs)) {
      return [];
    }
    return blogs.filter((b) => b && b.published !== false);
  } catch (error) {
    console.warn("API request failed:", error);
    return [];
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
    return Array.isArray(blogs) ? blogs : [];
  } catch (error) {
    console.warn("API request failed:", error);
    return [];
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
        const match = results.find((b) => b.slug === slug);
        if (match) return match;
      }
    }

    const allBlogs = await getBlogs();
    return allBlogs.find((b) => b.slug === slug) || null;
  } catch (error) {
    console.warn(`API request for slug "${slug}" failed:`, error);
    return null;
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
