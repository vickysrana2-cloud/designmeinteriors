import { Blog } from "@/types/blog";
import { BloggerPostListResponse, GetBloggerPostsOptions } from "./types";
import { mapBloggerPostToBlog } from "./mapper";
import { FALLBACK_BLOGS } from "@/lib/api/blog-fallbacks";

/**
 * Fetch list of published posts from Blogger API v3.
 */
export async function getBloggerPosts(options?: GetBloggerPostsOptions): Promise<{
  blogs: Blog[];
  nextPageToken?: string;
}> {
  const apiKey = process.env.BLOGGER_API_KEY;
  const blogId = process.env.BLOGGER_BLOG_ID;

  if (!apiKey || !blogId) {
    console.warn("Blogger API key or Blog ID is missing in environment variables.");
    return { blogs: FALLBACK_BLOGS };
  }

  const queryParams = new URLSearchParams({
    key: apiKey,
    fetchBodies: "true",
    fetchImages: "true",
    orderBy: options?.orderBy || "published",
  });

  if (options?.maxResults) {
    queryParams.append("maxResults", String(options.maxResults));
  }
  if (options?.pageToken) {
    queryParams.append("pageToken", options.pageToken);
  }
  if (options?.label) {
    queryParams.append("labels", options.label);
  }

  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?${queryParams.toString()}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Blogger API request failed with status ${res.status}: ${res.statusText}`);
      return { blogs: FALLBACK_BLOGS };
    }

    const data: BloggerPostListResponse = await res.json();
    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
      return { blogs: FALLBACK_BLOGS };
    }

    const blogs = await Promise.all(data.items.map(mapBloggerPostToBlog));
    return {
      blogs,
      nextPageToken: data.nextPageToken,
    };
  } catch (error) {
    console.error("Failed to fetch posts from Blogger API:", error);
    return { blogs: FALLBACK_BLOGS };
  }
}

/**
 * Fetch a single post by slug.
 */
export async function getBloggerPostBySlug(slug: string): Promise<Blog | null> {
  if (!slug) return null;

  try {
    const { blogs } = await getBloggerPosts({ maxResults: 50 });
    const match = blogs.find((b) => b.slug === slug || b.id === slug);
    if (match) return match;

    // Fallback search in fallback blogs
    return FALLBACK_BLOGS.find((b) => b.slug === slug || b.id === slug) || null;
  } catch (error) {
    console.error(`Error fetching Blogger post by slug "${slug}":`, error);
    return FALLBACK_BLOGS.find((b) => b.slug === slug || b.id === slug) || null;
  }
}

/**
 * Fetch a single post by Blogger ID.
 */
export async function getBloggerPostById(id: string): Promise<Blog | null> {
  const apiKey = process.env.BLOGGER_API_KEY;
  const blogId = process.env.BLOGGER_BLOG_ID;

  if (!id || !apiKey || !blogId) return null;

  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${id}?key=${apiKey}&fetchBodies=true&fetchImages=true`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return null;
    }

    const item = await res.json();
    return await mapBloggerPostToBlog(item);
  } catch (error) {
    console.error(`Failed to fetch Blogger post by ID ${id}:`, error);
    return null;
  }
}

/**
 * Get all unique category labels across published posts.
 */
export async function getBloggerCategories(): Promise<string[]> {
  const { blogs } = await getBloggerPosts({ maxResults: 50 });
  const categorySet = new Set<string>();

  blogs.forEach((blog) => {
    if (blog.category) categorySet.add(blog.category);
    if (blog.labels) {
      blog.labels.forEach((lbl) => categorySet.add(lbl));
    }
  });

  return Array.from(categorySet);
}
