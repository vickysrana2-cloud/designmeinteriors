import Link from "next/link";
import { ArrowLeft, Circle } from "lucide-react";
import { Service } from "@/types/service";

interface ServiceHeroProps {
  service?: Service;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ServiceHero({ service, title, subtitle, description }: ServiceHeroProps) {
  const displayTitle = title || service?.title || "Explore Our Comprehensive Interior Design Services.";
  const displaySubtitle = subtitle || (service?.number ? `Capabilities / ${service.number}` : "OUR SERVICES");
  const displayDesc = service?.shortDescription || service?.description || description || "We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.";

  return (
    <section
      className="relative border-b border-[#D7D0C5] bg-cover bg-center bg-no-repeat pb-16 pt-32 md:pb-24 overflow-hidden"
      style={{ backgroundImage: "url('/services_bg.jpg')" }}
    >
      {/* Warm Ivory overlay */}
      <div className="absolute inset-0 bg-[#F5F2EC]/92 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#706B63]">
          <Link href="/" className="transition-colors hover:text-[#9A8060]">
            Home
          </Link>
          <span className="text-[#9A8060]">•</span>
          {service ? (
            <>
              <Link href="/services" className="transition-colors hover:text-[#9A8060]">
                Services
              </Link>
              <span className="text-[#9A8060]">•</span>
              <span className="text-[#242321]">{service.title}</span>
            </>
          ) : (
            <span className="text-[#242321]">Services</span>
          )}
        </div>

        {service && (
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#706B63] transition-colors hover:text-[#9A8060]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Services</span>
          </Link>
        )}

        <div className="max-w-4xl space-y-4">
          {/* Eyebrow with Dot Icon */}
          <div className="flex items-center gap-2">
            <Circle className="h-2 w-2 fill-[#9A8060] text-[#9A8060]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              {displaySubtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl text-[#242321] leading-tight sm:text-6xl lg:text-7xl">
            {displayTitle}
          </h1>

          {/* Intro Description */}
          <p className="font-light text-base leading-relaxed text-[#706B63] sm:text-xl max-w-2xl pt-2">
            {displayDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
