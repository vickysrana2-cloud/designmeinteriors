import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Service } from "@/types/service";

interface ServiceHeroProps {
  service?: Service;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ServiceHero({ service, title, subtitle, description }: ServiceHeroProps) {
  const displayTitle = service?.title || title || "Architectural & Interior Services";
  const displaySubtitle = subtitle || (service?.number ? `Capabilities / ${service.number}` : "Our Expertise");
  const displayDesc = service?.shortDescription || service?.description || description || "Comprehensive architectural design, space planning, bespoke interiors, and white-glove turnkey execution.";

  return (
    <section
      className="relative border-b border-[#D7D0C1] bg-cover bg-center bg-no-repeat pb-16 pt-32 md:pb-20 overflow-hidden"
      style={{ backgroundImage: "url('/services_bg.jpg')" }}
    >
      {/* Warm Ivory overlay for crystal-clear text readability */}
      <div className="absolute inset-0 bg-[#F5F2EC]/90 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
        {service && (
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#706B63] transition-colors hover:text-[#9A8060]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Services</span>
          </Link>
        )}

        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
            {displaySubtitle}
          </span>
          <h1 className="font-serif text-4xl text-[#242321] leading-tight sm:text-6xl">
            {displayTitle}
          </h1>
          <p className="font-light text-base leading-relaxed text-[#706B63] sm:text-lg">
            {displayDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
