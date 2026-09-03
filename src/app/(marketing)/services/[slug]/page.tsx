import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getAllServices, getServiceBySlug, getRelatedServices } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { RelatedServices } from "@/components/services/RelatedServices";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | DesignMeInteriors Studio",
    };
  }

  return {
    title: service.seo?.title || `${service.title} | DesignMeInteriors Studio Services`,
    description: service.seo?.description || service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function SingleServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.slug);

  return (
    <div className="bg-[#F9F8F5]">
      {/* Hero */}
      <ServiceHero service={service} />

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left: Content & Process */}
            <div className="space-y-12 lg:col-span-8">
              {/* Primary Image */}
              <div className="relative h-[420px] w-full overflow-hidden border border-[#E5DFD5] shadow-md sm:h-[520px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Detailed Description */}
              <div className="space-y-6 text-[#1E1C1A]">
                <h2 className="font-serif text-3xl sm:text-4xl">Service Overview</h2>
                <p className="font-light text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <div className="space-y-6 border-t border-[#DCD5CB] pt-10">
                  <h3 className="font-serif text-2xl text-[#1E1C1A]">Key Deliverables & Capabilities</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 border border-[#E5DFD5] bg-white p-4 shadow-sm">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C86D51] mt-0.5" />
                        <span className="text-sm font-medium text-[#1E1C1A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Secondary Images Gallery */}
              {service.secondaryImages && service.secondaryImages.length > 0 && (
                <div className="space-y-6 border-t border-[#DCD5CB] pt-10">
                  <h3 className="font-serif text-2xl text-[#1E1C1A]">Gallery & Spatial Expressions</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {service.secondaryImages.map((img, idx) => (
                      <div key={idx} className="relative h-64 w-full overflow-hidden border border-[#E5DFD5]">
                        <Image
                          src={img}
                          alt={`${service.title} expression ${idx + 1}`}
                          fill
                          sizes="(max-width: 767px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Steps */}
              {service.process && service.process.length > 0 && (
                <div className="space-y-6 border-t border-[#DCD5CB] pt-10">
                  <h3 className="font-serif text-2xl text-[#1E1C1A]">Execution Methodology</h3>
                  <div className="space-y-4">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex flex-col gap-2 border border-[#E5DFD5] bg-white p-6 sm:flex-row sm:items-center sm:gap-6">
                        <span className="font-serif text-2xl font-bold text-[#C86D51]">{step.step}</span>
                        <div>
                          <h4 className="font-serif text-lg font-semibold text-[#1E1C1A]">{step.title}</h4>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sidebar Sticky Box */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8 rounded-none border border-[#E5DFD5] bg-white p-8 shadow-sm">
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C86D51]">
                    Inquire Capability
                  </span>
                  <h3 className="font-serif text-2xl text-[#1E1C1A]">Interested in {service.title}?</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Contact our principal design studio to discuss site requirements, scheduling, and custom scope proposals.
                  </p>
                </div>

                <Button asChild variant="accent" className="w-full h-12 text-xs uppercase tracking-wider font-semibold">
                  <Link href={`/contact?service=${encodeURIComponent(service.slug)}`} className="flex items-center justify-center gap-2">
                    <span>Request Proposal</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>

                <div className="border-t border-[#F0ECE4] pt-6 space-y-3 text-xs text-muted-foreground">
                  <div>
                    <span className="font-semibold text-[#1E1C1A] block">Turnkey Deliveries:</span>
                    <span>Global Residential & Commercial</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#1E1C1A] block">Lead Time:</span>
                    <span>4-8 weeks initial drafting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices services={related} />

      <CtaBanner />
    </div>
  );
}
