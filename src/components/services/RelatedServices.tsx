import { Service } from "@/types/service";
import { ServiceGrid } from "./ServiceGrid";

interface RelatedServicesProps {
  services: Service[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="bg-[#F5F2EC] py-20 border-t border-[#D7D0C5]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-12">
        <div className="max-w-xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
            Complementary Capabilities
          </span>
          <h2 className="font-serif text-3xl text-[#242321] sm:text-4xl">
            Related Studio Services
          </h2>
        </div>

        <ServiceGrid services={services} />
      </div>
    </section>
  );
}
