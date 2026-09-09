import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Compass, Target, Clock, ShieldCheck, HeartHandshake, Lightbulb, MapPin, Calendar, Award } from "lucide-react";
import { IMAGES, PROJECTS } from "@/data/images";
import { services } from "@/data/services";
import { GuidingPrinciples } from "@/components/sections/GuidingPrinciples";
import { LeadershipTeam } from "@/components/sections/LeadershipTeam";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { ProcessAccordion } from "@/components/home/ProcessAccordion";
import { Button } from "@/components/ui/button";

import { generateSiteMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata = generateSiteMetadata({
  title: "About DesignMe Interiors | Interior Design Studio in Nagpur",
  description:
    "Learn about DesignMe Interiors, a premier Nagpur-based interior design firm founded in 2021. Discover our design philosophy, mission, vision, and approach to residential and commercial spaces.",
  canonicalUrl: "/about",
});

const STATS = [
  { value: "6+", label: "Years of Experience", icon: Clock },
  { value: "2021", label: "Established", icon: Calendar },
  { value: "Nagpur", label: "Based In", icon: MapPin },
  { value: "End-to-End", label: "Interior Solutions", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    number: "01",
    title: "Delivering Consistent Quality",
    description:
      "We maintain high standards of quality, professionalism, and ethics across every stage of a project, building relationships based on trust and long-term collaboration.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Foster Creativity & Designing",
    description:
      "We believe creativity and design innovation are essential to creating distinctive, meaningful, and effective interior spaces.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Seek Help & Help Others",
    description:
      "We believe great work grows through mutual support. We remain open to learning, helping others, and collaborating throughout every project.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Timely Execution of Project",
    description:
      "We respect our clients' time and work according to clear project plans, milestones, and execution schedules to deliver projects on time.",
    icon: Clock,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Understand the client's requirements, lifestyle, preferences, space, and budget.",
  },
  {
    step: "02",
    title: "Concept & Planning",
    description:
      "Develop the design direction, space planning, and initial concepts.",
  },
  {
    step: "03",
    title: "Design Development",
    description:
      "Finalize materials, colours, furniture, lighting, finishes, and design details.",
  },
  {
    step: "04",
    title: "Execution",
    description:
      "Coordinate the execution process and ensure the design is implemented according to the approved plan.",
  },
  {
    step: "05",
    title: "Handover",
    description:
      "Complete the final details and deliver the finished space.",
  },
];

export default function AboutPage() {
  const featuredProjects = PROJECTS.slice(0, 4);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ]);

  return (
    <div className="pt-14 bg-[#F5F2EC] text-[#242321]">
      <JsonLd data={breadcrumbSchema} />
      {/* 1. HERO SECTION */}
      <section className="border-b border-[#D7D0C5] bg-[#F5F2EC] py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* LEFT — CONTENT */}
            <div className="relative z-10 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#9A8060]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
                  ABOUT DESIGNMEINTERIORS
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl leading-[1.1] text-[#242321] sm:text-5xl lg:text-[62px]">
                We create spaces that feel as good as{" "}
                <span className="italic text-[#9A8060]">they look.</span>
              </h1>

              {/* Subheading */}
              <p className="max-w-xl text-base font-light leading-relaxed text-[#706B63] sm:text-lg">
                Combining thoughtful design, functional planning, and quality
                execution to create interiors that are made for the way you live and work.
              </p>

              {/* Information Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-[#D7D0C5] pt-6 max-w-lg">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#706B63]">
                    Experience
                  </span>
                  <span className="mt-1.5 block font-serif text-lg font-medium text-[#242321]">
                    6+ Years
                  </span>
                </div>
                <div className="border-x border-[#D7D0C5] px-4">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#706B63]">
                    Founded
                  </span>
                  <span className="mt-1.5 block font-serif text-lg font-medium text-[#242321]">
                    2021
                  </span>
                </div>
                <div className="pl-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#706B63]">
                    Location
                  </span>
                  <a
                    href="https://share.google/euMVYDVH6dGXc1s87"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 flex items-center gap-1 font-serif text-lg font-medium text-[#242321] hover:text-[#9A8060] transition-colors group"
                    title="Open location in Google Maps"
                  >
                    <span className="group-hover:underline">Nagpur, MH</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#9A8060]" />
                  </a>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  variant="accent"
                  className="px-8 py-6 text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl"
                >
                  <Link href="/contact" className="inline-flex items-center gap-3">
                    <span>Schedule A Call</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT — HERO IMAGE */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#D7D0C5] shadow-2xl">
                <Image
                  src={IMAGES.aboutMain}
                  alt="Nagpur interior design by DesignMeInteriors"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 rounded-2xl border border-[#D7D0C5] bg-[#FCFBF8] p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9A8060]/10 text-[#9A8060]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block font-serif text-sm font-medium text-[#242321]">
                      Nagpur Interior Studio
                    </span>
                    <span className="block text-[10px] text-[#706B63]">
                      Thoughtful & Functional Spaces
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 md:py-28 border-b border-[#D7D0C5] bg-[#FCFBF8]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Image */}
            <div className="lg:col-span-6 relative h-[440px] md:h-[520px] w-full rounded-3xl border border-[#D7D0C5] overflow-hidden shadow-xl">
              <Image
                src={IMAGES.aboutStudio}
                alt="DesignMeInteriors Studio working on custom interiors in Nagpur"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#9A8060]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
                  Who We Are
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#242321]">
                Crafting interiors rooted in clarity, purpose, and comfort.
              </h2>

              <p className="text-base text-[#706B63] font-light leading-relaxed">
                DesignMeInteriors is an interior design firm based in Nagpur, with 6+ years of experience in creating thoughtful and functional interior spaces. We believe great interiors are not simply about decoration—they are about understanding people, their lifestyles, and the way they want to experience their space.
              </p>

              <p className="text-base text-[#706B63] font-light leading-relaxed">
                From the initial concept and space planning to material selection, detailing, and execution, we focus on bringing every element together with purpose. Our approach combines creativity, functionality, quality, and attention to detail to create spaces that are personal, practical, and built to last.
              </p>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#9A8060] text-[#242321] hover:bg-[#9A8060] hover:text-white px-7 py-6 text-xs font-semibold uppercase tracking-wider"
                >
                  <Link href="/contact" className="inline-flex items-center gap-3">
                    <span>Schedule A Call</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY HIGHLIGHTS / STATS */}
      <section className="border-b border-[#D7D0C5] bg-[#E8E1D7] py-16">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#FCFBF8]/80 border border-[#D7D0C5] backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#9A8060]/15 text-[#9A8060]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#242321]">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#706B63]">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 & 5. OUR VISION & OUR MISSION */}
      <section className="py-20 md:py-28 border-b border-[#D7D0C5] bg-[#F5F2EC]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              PURPOSE & DIRECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#242321]">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="rounded-3xl border border-[#D7D0C5] bg-[#FCFBF8] p-8 sm:p-10 shadow-lg space-y-5 relative overflow-hidden group hover:border-[#9A8060] transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9A8060] text-white shadow-md">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
                    FUTURE LOOKING
                  </span>
                  <h3 className="font-serif text-2xl text-[#242321]">Our Vision</h3>
                </div>
              </div>

              <p className="text-base text-[#706B63] font-light leading-relaxed pt-2">
                To lead the industry in sustainable and cost-efficient interior design practices by combining eco-friendly materials, luxurious aesthetics, and innovative solutions that create spaces in harmony with nature.
              </p>
            </div>

            {/* Mission Card */}
            <div className="rounded-3xl border border-[#D7D0C5] bg-[#FCFBF8] p-8 sm:p-10 shadow-lg space-y-5 relative overflow-hidden group hover:border-[#9A8060] transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#242321] text-white shadow-md">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
                    OUR COMMITMENT
                  </span>
                  <h3 className="font-serif text-2xl text-[#242321]">Our Mission</h3>
                </div>
              </div>

              <p className="text-base text-[#706B63] font-light leading-relaxed pt-2">
                Our mission is to deliver personalized interior design solutions within an affordable budget while prioritizing functionality, premium design, quality craftsmanship, and the individual preferences of every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR FOUNDER */}
      <LeadershipTeam />

      {/* 7. OUR DESIGN PHILOSOPHY */}
      <GuidingPrinciples />

      {/* 8. WHAT WE BELIEVE IN — CORE VALUES */}
      <CoreValuesSection />

      {/* 9. HOW WE WORK (PROCESS) */}
      <ProcessAccordion />

      {/* 10. OUR EXPERTISE */}
      <section className="py-20 md:py-28 border-b border-[#D7D0C5] bg-[#F5F2EC]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
              WHAT WE DO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#242321]">
              Our Expertise
            </h2>
            <p className="text-sm font-light text-[#706B63]">
              End-to-end interior services tailored for residential, commercial, and custom spaces in Nagpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv) => (
              <div
                key={srv.slug}
                className="group rounded-3xl border border-[#D7D0C5] bg-[#FCFBF8] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8E1D7]">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl text-[#242321]">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-light text-[#706B63] line-clamp-3 leading-relaxed">
                    {srv.shortDescription || srv.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9A8060] hover:text-[#242321] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SELECTED PROJECTS */}
      <section className="py-20 md:py-28 border-b border-[#D7D0C5] bg-[#FCFBF8]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D7D0C5] pb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060] block mb-2">
                PORTFOLIO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#242321]">
                Spaces We&apos;ve Transformed
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((prj) => (
              <div
                key={prj.id}
                className="group relative overflow-hidden rounded-3xl border border-[#D7D0C5] bg-[#F5F2EC] shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={prj.image}
                    alt={prj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#CAA05C] block">
                      {prj.location} · {prj.category}
                    </span>
                    <h3 className="font-serif text-2xl text-white mt-1">
                      {prj.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CLOSING CTA */}
      <section className="relative overflow-hidden bg-[#E8E1D7] py-20 sm:py-24 text-[#242321]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 relative z-10">
          <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="max-w-2xl space-y-4 flex flex-col items-center lg:items-start">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl leading-tight text-[#242321]">
                Let&apos;s Create a Space That Feels Like Yours
              </h2>
              <p className="text-sm text-[#706B63] max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                Have a space in mind? Let&apos;s discuss your requirements, ideas, and budget and explore what we can create together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                variant="accent"
                className="w-full sm:w-auto px-8 py-6 text-xs font-semibold uppercase tracking-wider shadow-lg"
              >
                <Link href="/contact" className="flex items-center justify-center gap-3">
                  <span>Schedule A Call</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#9A8060] text-[#242321] hover:bg-[#9A8060] hover:text-white px-8 py-6 text-xs font-semibold uppercase tracking-wider"
              >
                <Link href="/projects" className="flex items-center justify-center gap-2">
                  <span>View Our Projects</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

