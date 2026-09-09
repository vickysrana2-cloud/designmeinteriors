import { Metadata } from "next";
import { getAllServices } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CtaBanner } from "@/components/home/CtaBanner";
import { generateSiteMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = generateSiteMetadata({
  title: "Interior Design Services in Nagpur | DesignMe Interiors",
  description:
    "Explore end-to-end interior design services in Nagpur. From residential homes and luxury villas to commercial offices, 2D/3D layouts, and turnkey execution.",
  canonicalUrl: "/services",
});

export default function ServicesPage() {
  const services = getAllServices();
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
  ]);

  return (
    <div className="bg-[#F5F2EC] min-h-screen">
      <JsonLd data={breadcrumbs} />
      {/* Services Header Hero */}
      <ServiceHero />

      {/* Main Service Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
