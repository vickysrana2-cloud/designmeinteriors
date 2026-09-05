import { Metadata } from "next";
import { getAllServices } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Explore Our Comprehensive Interior Design Services | DesignMeInteriors Studio",
  description: "We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="bg-[#F5F2EC] min-h-screen">
      {/* Antra Services 03 Header Hero */}
      <ServiceHero />

      {/* Main 6-Service Grid (3 Columns) */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* Initiation Call to Action Banner */}
      <CtaBanner />
    </div>
  );
}
