import { Metadata } from "next";
import { getAllServices } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Architectural & Interior Services | DesignMeInteriors Studio",
  description: "Comprehensive architectural design, space planning, bespoke interiors, and white-glove turnkey execution.",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="bg-[#F5F2EC]">
      <ServiceHero
        title="Comprehensive Architectural & Interior Services."
        subtitle="Capabilities & Expertise"
        description="From initial spatial discovery and 3D visualization to custom millwork procurement and turnkey project execution, explore our architectural offerings."
      />

      <section className="py-20">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <ServiceGrid services={services} />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
