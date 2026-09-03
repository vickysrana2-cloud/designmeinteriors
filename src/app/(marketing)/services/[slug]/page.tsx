import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllServices, getServiceBySlug, getRelatedServices } from "@/data/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { ServiceContent } from "@/components/services/ServiceContent";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { CtaBanner } from "@/components/home/CtaBanner";

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
    <div className="bg-[#F5F2EC]">
      {/* Page Hero Header */}
      <ServiceHero service={service} />

      {/* Main Service Content Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Sidebar */}
            <div className="order-2 lg:order-1 lg:col-span-4">
              <ServiceSidebar currentSlug={service.slug} />
            </div>

            {/* Right Column: Main Content */}
            <div className="order-1 space-y-12 lg:order-2 lg:col-span-8">
              {/* Main Hero Image */}
              <div className="relative aspect-[16/9] sm:aspect-[16/8] w-full overflow-hidden rounded-2xl border border-[#D7D0C5] shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* About The Service Section */}
              <div className="space-y-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8060]">
                  About The Service
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#242321]">
                  {service.title}
                </h2>
                <p className="font-light text-base leading-relaxed text-[#706B63] sm:text-lg">
                  {service.description}
                </p>
                {service.additionalDescription && (
                  <p className="font-light text-sm leading-relaxed text-[#706B63]">
                    {service.additionalDescription}
                  </p>
                )}
              </div>

              {/* Service Feature Highlights Grid */}
              <ServiceFeatures features={service.features} />

              {/* Supporting Image Gallery */}
              <ServiceGallery images={service.secondaryImages} title={service.title} />

              {/* Detailed Content Sections & Checklist */}
              <ServiceContent sections={service.sections} checklist={service.checklist} />

              {/* Frequently Asked Questions */}
              <ServiceFAQ faqs={service.faqs} />
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
