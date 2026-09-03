import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { getAllProjects, getProjectBySlug, getRelatedProjects } from "@/data/projects";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Button } from "@/components/ui/button";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | DesignMeInteriors Studio",
    };
  }

  return {
    title: project.seo?.title || `${project.title} — Portfolio | DesignMeInteriors Studio`,
    description: project.seo?.description || project.shortDescription || project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.slug);

  return (
    <div className="bg-[#F9F8F5]">
      {/* Hero */}
      <ProjectHero project={project} />

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left: Content & Media */}
            <div className="space-y-12 lg:col-span-8">
              {/* Primary Main Image */}
              <div className="relative h-[450px] w-full overflow-hidden border border-[#E5DFD5] shadow-md sm:h-[580px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1023px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Narrative & Concept */}
              <div className="space-y-6 text-[#1E1C1A]">
                <h2 className="font-serif text-3xl sm:text-4xl">Design Concept & Architecture</h2>
                <p className="font-light text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-6 border-t border-[#DCD5CB] pt-10">
                  <h3 className="font-serif text-2xl text-[#1E1C1A]">Architectural Highlights</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 border border-[#E5DFD5] bg-white p-4 shadow-sm">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C86D51] mt-0.5" />
                        <span className="text-sm font-medium text-[#1E1C1A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Secondary Images Gallery */}
              {project.secondaryImages && project.secondaryImages.length > 0 && (
                <div className="space-y-6 border-t border-[#DCD5CB] pt-10">
                  <h3 className="font-serif text-2xl text-[#1E1C1A]">Spatial Documentation</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {project.secondaryImages.map((img, idx) => (
                      <div key={idx} className="relative h-72 w-full overflow-hidden border border-[#E5DFD5]">
                        <Image
                          src={img}
                          alt={`${project.title} view ${idx + 1}`}
                          fill
                          sizes="(max-width: 767px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies / Craftsmanship */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="space-y-6 border-t border-[#DCD5CB] pt-10">
                  <h3 className="font-serif text-2xl text-[#1E1C1A]">Materials & Engineering</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="border border-[#E5DFD5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1E1C1A] shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sidebar Specs */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8 border border-[#E5DFD5] bg-white p-8 shadow-sm">
                <div className="space-y-2 border-b border-[#F0ECE4] pb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C86D51]">
                    Commission Specs
                  </span>
                  <h3 className="font-serif text-2xl text-[#1E1C1A]">{project.title}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  {project.category && (
                    <div className="flex justify-between border-b border-[#F0ECE4] pb-3">
                      <span className="text-muted-foreground uppercase tracking-wider font-medium">Category</span>
                      <span className="font-semibold text-[#1E1C1A] uppercase">{project.category}</span>
                    </div>
                  )}

                  {project.location && (
                    <div className="flex justify-between border-b border-[#F0ECE4] pb-3">
                      <span className="text-muted-foreground uppercase tracking-wider font-medium">Location</span>
                      <span className="font-semibold text-[#1E1C1A]">{project.location}</span>
                    </div>
                  )}

                  {project.year && (
                    <div className="flex justify-between border-b border-[#F0ECE4] pb-3">
                      <span className="text-muted-foreground uppercase tracking-wider font-medium">Completion</span>
                      <span className="font-semibold text-[#1E1C1A]">{project.year}</span>
                    </div>
                  )}

                  {project.area && (
                    <div className="flex justify-between border-b border-[#F0ECE4] pb-3">
                      <span className="text-muted-foreground uppercase tracking-wider font-medium">Footprint</span>
                      <span className="font-semibold text-[#1E1C1A]">{project.area}</span>
                    </div>
                  )}

                  {project.architect && (
                    <div className="flex justify-between pb-1">
                      <span className="text-muted-foreground uppercase tracking-wider font-medium">Lead Architect</span>
                      <span className="font-semibold text-[#1E1C1A]">{project.architect}</span>
                    </div>
                  )}
                </div>

                <Button asChild variant="accent" className="w-full h-12 text-xs uppercase tracking-wider font-semibold">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    <span>Commission Similar Work</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProjects projects={related} />

      <CtaBanner />
    </div>
  );
}
