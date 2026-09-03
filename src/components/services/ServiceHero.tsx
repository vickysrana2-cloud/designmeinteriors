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
    <section className="border-b border-[#DCD5CB] bg-[#F9F8F5] pb-16 pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {service && (
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-[#C86D51]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Services</span>
          </Link>
        )}

        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-[#C86D51]">
            {displaySubtitle}
          </span>
          <h1 className="font-serif text-4xl text-[#1E1C1A] leading-tight sm:text-6xl">
            {displayTitle}
          </h1>
          <p className="font-light text-base leading-relaxed text-muted-foreground sm:text-lg">
            {displayDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
