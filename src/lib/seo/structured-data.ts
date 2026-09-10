import { siteConfig } from "@/config/site";
import type { Blog } from "@/types/blog";
import type { Service } from "@/types/service";
import type { Project } from "@/types/project";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["InteriorDesigner", "LocalBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: "DesignMe Interiors",
    alternateName: "DesignMeInteriors Studio",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/designMeLogo.svg`,
      width: 180,
      height: 55,
    },
    image: [
      siteConfig.ogImage,
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Premier interior design studio in Nagpur specializing in residential homes, luxury villas, apartments, corporate offices, and commercial spaces.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹₹ - ₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Saraswati Palace, Wanjari Nagar",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      postalCode: "440003",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.1458,
      longitude: 79.0882,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Nagpur",
        containedInPlace: {
          "@type": "State",
          name: "Maharashtra",
        },
      },
      { "@type": "Place", name: "Dharampeth, Nagpur" },
      { "@type": "Place", name: "Civil Lines, Nagpur" },
      { "@type": "Place", name: "Ramdaspeth, Nagpur" },
      { "@type": "Place", name: "Wardha Road, Nagpur" },
      { "@type": "Place", name: "MIHAN, Nagpur" },
      { "@type": "Place", name: "Futala Lake, Nagpur" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.pinterest,
      siteConfig.links.linkedin,
      siteConfig.links.youtube,
    ],
    knowsAbout: [
      "Interior Design in Nagpur",
      "Residential Interior Design",
      "Commercial Interior Design",
      "Office Interior Design",
      "Turnkey Interior Execution",
      "2D/3D Interior Layouts & Renderings",
      "Home Renovation & Remodeling",
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: "DesignMe Interiors",
    url: siteConfig.url,
    description: "Interior design studio serving Nagpur and Maharashtra.",
    publisher: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    inLanguage: "en-US",
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "DesignMe Interiors",
    url: siteConfig.url,
    logo: `${siteConfig.url}/designMeLogo.svg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.pinterest,
      siteConfig.links.linkedin,
      siteConfig.links.youtube,
    ],
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.category || "Interior Design",
    description: service.description,
    provider: {
      "@type": "InteriorDesigner",
      name: "DesignMe Interiors",
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: {
      "@type": "City",
      name: "Nagpur",
    },
    url: `${siteConfig.url}/services/${service.slug}`,
    image: service.image,
  };
}

export function buildProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.description || project.shortDescription,
    image: project.image,
    creator: {
      "@type": "Organization",
      name: "DesignMe Interiors",
    },
    locationCreated: {
      "@type": "Place",
      name: project.location || "Nagpur, Maharashtra",
    },
    url: `${siteConfig.url}/projects/${project.slug}`,
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
      name: "DesignMe Interiors",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/designMeLogo.svg`,
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
      item: element.item.startsWith("http")
        ? element.item
        : `${siteConfig.url}${element.item.startsWith("/") ? "" : "/"}${element.item}`,
    })),
  };
}
