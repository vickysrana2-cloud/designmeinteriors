import { apiFetch } from "./client";
import { Blog } from "@/types/blog";

export const FALLBACK_BLOGS: Blog[] = [
  {
    id: "blog-001",
    title: "Getting Started with Modern Web Development",
    slug: "getting-started-with-modern-web-development",
    excerpt: "A beginner-friendly guide to understanding the fundamentals of modern web development.",
    content: "Modern web development combines HTML, CSS, JavaScript, and powerful frameworks to create fast and engaging digital experiences. This guide covers the essential concepts you need to begin building websites and web applications.",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: "John Doe",
    category: "Web Development",
    published: true,
    createdAt: "2026-08-01T10:00:00Z",
  },
  {
    id: "blog-002",
    title: "Understanding React Components",
    slug: "understanding-react-components",
    excerpt: "Learn how React components work and how they help you build reusable user interfaces.",
    content: "React components are the building blocks of modern React applications. By breaking an interface into small, reusable components, developers can create applications that are easier to maintain, test, and scale.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    author: "Jane Smith",
    category: "React",
    published: true,
    createdAt: "2026-08-05T14:30:00Z",
  },
  {
    id: "blog-003",
    title: "A Practical Guide to TypeScript",
    slug: "practical-guide-to-typescript",
    excerpt: "Discover how TypeScript can make your JavaScript projects safer and easier to maintain.",
    content: "TypeScript adds static typing and modern development features to JavaScript. In this practical guide, we explore interfaces, types, generics, and other features that help developers catch errors early and write more reliable code.",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    author: "Alex Johnson",
    category: "TypeScript",
    published: true,
    createdAt: "2026-08-10T09:15:00Z",
  },
  {
    id: "blog-005",
    title: "Best Practices for Clean Code",
    slug: "best-practices-for-clean-code",
    excerpt: "Simple principles that can help you write code that is easier to understand, test, and maintain.",
    content: "Clean code is not just about making software work. It is about making code understandable and maintainable for everyone on the team. Meaningful names, small functions, consistent formatting, and clear abstractions are some of the practices that make a significant difference.",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    author: "Sarah Wilson",
    category: "Programming",
    published: true,
    createdAt: "2026-08-20T11:20:00Z",
  },
  {
    id: "blog-006",
    title: "Introduction to REST APIs",
    slug: "introduction-to-rest-apis",
    excerpt: "Understand the fundamentals of REST APIs and how applications communicate with each other.",
    content: "REST APIs provide a simple and flexible way for different applications to exchange data over HTTP. Learn about resources, HTTP methods, status codes, endpoints, and common API design practices.",
    coverImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    author: "David Miller",
    category: "Backend",
    published: true,
    createdAt: "2026-08-21T08:30:00Z",
  },
  {
    id: "blog-007",
    title: "How to Build Responsive Websites",
    slug: "how-to-build-responsive-websites",
    excerpt: "Learn the key techniques for creating websites that look great on phones, tablets, and desktops.",
    content: "Responsive web design allows websites to adapt to different screen sizes and devices. Using flexible layouts, CSS media queries, responsive images, and modern CSS features, developers can create consistent experiences across devices.",
    coverImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    author: "Emily Davis",
    category: "Frontend",
    published: true,
    createdAt: "2026-08-22T10:15:00Z",
  },
  {
    id: "blog-008",
    title: "JavaScript Array Methods You Should Know",
    slug: "javascript-array-methods-you-should-know",
    excerpt: "Master the most useful JavaScript array methods for writing cleaner and more efficient code.",
    content: "JavaScript provides many powerful array methods for transforming and processing data. Methods such as map, filter, reduce, find, some, and every can help developers write concise and readable code.",
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    author: "Robert Taylor",
    category: "JavaScript",
    published: true,
    createdAt: "2026-08-23T12:00:00Z",
  },
  {
    id: "blog-010",
    title: "Git and GitHub for Beginners",
    slug: "git-and-github-for-beginners",
    excerpt: "A beginner-friendly introduction to version control using Git and GitHub.",
    content: "Git helps developers track changes, collaborate with teammates, and safely manage project history. This guide explains repositories, commits, branches, merging, pull requests, and common Git workflows.",
    coverImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
    author: "Daniel Anderson",
    category: "Developer Tools",
    published: true,
    createdAt: "2026-08-25T07:30:00Z",
  },
];

/**
 * Fetch all blogs from MockAPI with fallback support
 */
export async function getBlogs(): Promise<Blog[]> {
  try {
    const blogs = await apiFetch<Blog[]>("/blog");
    if (!Array.isArray(blogs)) {
      return FALLBACK_BLOGS;
    }
    const published = blogs.filter((b) => b && b.published !== false);
    return published.length > 0 ? published : FALLBACK_BLOGS;
  } catch (error) {
    console.warn("API request failed, using fallback blog data:", error);
    return FALLBACK_BLOGS;
  }
}

/**
 * Fetch a single blog by slug from MockAPI with fallback support
 */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (!slug) return null;

  try {
    const results = await apiFetch<Blog[]>(`/blog?slug=${encodeURIComponent(slug)}`);
    
    if (Array.isArray(results) && results.length > 0) {
      const match = results.find((b) => b.slug === slug);
      if (match) return match;
    }

    const allBlogs = await getBlogs();
    const exactMatch = allBlogs.find((b) => b.slug === slug);
    if (exactMatch) return exactMatch;
  } catch (error) {
    console.warn(`API request for slug "${slug}" failed, checking fallback data:`, error);
  }

  return FALLBACK_BLOGS.find((b) => b.slug === slug) || null;
}
