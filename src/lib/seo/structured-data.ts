import { siteConfig } from "@/config/site";
import type { Blog } from "@/types/blog";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ArchitectureFirm",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    description: siteConfig.description,
    sameAs: [siteConfig.links.instagram, siteConfig.links.linkedin],
  };
}

export function buildArticleSchema(post: Blog) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage || siteConfig.ogImage,
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: {
      "@type": "Person",
      name: post.author || siteConfig.shortName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.ogImage,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((element, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: element.name,
      item: `${siteConfig.url}${element.item}`,
    })),
  };
}
