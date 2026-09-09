import type { Metadata } from "next";
import { generateSiteMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = generateSiteMetadata({
  title: "Contact DesignMe Interiors | Nagpur Studio & Consultation",
  description:
    "Get in touch with DesignMe Interiors in Nagpur. Schedule a private consultation for residential home design, villa interiors, office spaces, or turnkey execution.",
  canonicalUrl: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
