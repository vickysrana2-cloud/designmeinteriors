import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { getAllServices } from "@/data/services";
import { getAllProjects } from "@/data/projects";
import { getBlogs } from "@/lib/api/blog";

export async function GET() {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/blog",
    "/contact",
  ];

  const services = getAllServices();
  const projects = getAllProjects();
  let blogPosts: { slug: string; updatedAt?: string; createdAt?: string }[] = [];
  try {
    blogPosts = await getBlogs();
  } catch (err) {
    console.error("Failed to fetch blog posts for sitemap:", err);
  }

  const urls = [
    ...staticRoutes.map((route) => `<url><loc>${baseUrl}${route}</loc><changefreq>${route === "" ? "daily" : "weekly"}</changefreq><priority>${route === "" ? "1.0" : "0.8"}</priority></url>`),
    ...services.map((s) => `<url><loc>${baseUrl}/services/${s.slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`),
    ...projects.map((p) => `<url><loc>${baseUrl}/projects/${p.slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`),
    ...blogPosts.map((b) => `<url><loc>${baseUrl}/blog/${b.slug}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
