import { Blog } from "@/types/blog";
import { BloggerPost } from "./types";
import { DEFAULT_FALLBACK_IMAGE } from "@/lib/constants/images";
import { resolveBloggerPostVideos } from "./resolver";

/**
 * Extracts the first image URL from HTML string if available.
 */
export function extractFirstImage(htmlContent?: string): string | null {
  if (!htmlContent) return null;
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/i;
  const match = htmlContent.match(imgRegex);
  if (match && match[1]) {
    const src = match[1].trim();
    if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
      return src;
    }
  }
  return null;
}

/**
 * Strips HTML tags and generates a clean plain text excerpt.
 */
export function extractExcerpt(htmlContent?: string, maxLength = 200): string {
  if (!htmlContent) return "";
  
  const text = htmlContent
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + "...";
}

/**
 * Converts text into a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Extracts a stable URL slug from Blogger post.
 * First checks filename in Blogger post URL, then falls back to title slugify.
 */
export function generateSlug(post: BloggerPost): string {
  if (post.url) {
    try {
      const urlObj = new URL(post.url);
      const pathname = urlObj.pathname; // e.g. /2026/09/my-post-title.html
      const filename = pathname.split("/").pop(); // e.g. my-post-title.html
      if (filename) {
        const cleanName = filename.replace(/\.html$/i, "").trim();
        if (cleanName) {
          return slugify(cleanName);
        }
      }
    } catch {
      // Ignore URL parsing errors
    }
  }

  const titleSlug = slugify(post.title || "");
  return titleSlug || `post-${post.id}`;
}

/**
 * Maps Blogger API post object to normalized website Blog model.
 */
export async function mapBloggerPostToBlog(post: BloggerPost): Promise<Blog> {
  let resolvedContent = post.content || "";
  try {
    resolvedContent = await resolveBloggerPostVideos(post.content || "", post.url);
  } catch (err) {
    console.error(`Error resolving Blogger post videos for post ID ${post.id}:`, err);
    resolvedContent = post.content || "";
  }

  const extractedImg = post.images?.[0]?.url || extractFirstImage(resolvedContent);
  const coverImage = extractedImg || DEFAULT_FALLBACK_IMAGE;
  const excerpt = extractExcerpt(resolvedContent, 220);
  const slug = generateSlug(post);

  const labels = Array.isArray(post.labels) ? post.labels : [];
  const category = labels.length > 0 ? labels[0] : "Architecture & Design";
  const author = post.author?.displayName || "DesignMeInteriors Studio";

  return {
    id: post.id,
    title: post.title || "Untitled Article",
    slug,
    excerpt,
    content: resolvedContent,
    coverImage,
    author,
    category,
    labels,
    published: true,
    createdAt: post.published || new Date().toISOString(),
    updatedAt: post.updated || post.published || new Date().toISOString(),
    bloggerUrl: post.url || "",
  };
}
