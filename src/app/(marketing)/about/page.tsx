import Image from "next/image";
import { IMAGES } from "@/data/images";
import { CtaBanner } from "@/components/home/CtaBanner";
import { GuidingPrinciples } from "@/components/sections/GuidingPrinciples";
import { LeadershipTeam } from "@/components/sections/LeadershipTeam";

export const metadata = {
  title: "About Studio — DesignMeInteriors",
  description:
    "Learn about DesignMeInteriors architecture studio philosophy, team, award history, and design approach.",
};

const AWARDS = [
  {
    year: "2024",
    title: "International Architecture Award",
    project: "Dune Sanctuary Villa",
    issuer: "ArchDaily",
  },
  {
    year: "2023",
    title: "Gold Design Excellence",
    project: "Komorebi Tech HQ",
    issuer: "Design Prize Asia",
  },
  {
    year: "2023",
    title: "Residential Interior of the Year",
    project: "Aurora Sky Loft",
    issuer: "Architectural Digest",
  },
  {
    year: "2022",
    title: "Best Hospitality Concept",
    project: "Solstice Retreat",
    issuer: "Frame Awards",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F9F8F5]">
      {/* Page Hero */}
      <section className="border-b border-[#DCD5CB] bg-[#F9F8F5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* LEFT — CONTENT */}
            <div className="relative z-10">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C86D51]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86D51]">
                  About DesignMeInteriors Studio
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-[#1E1C1A] sm:text-6xl lg:text-[68px]">
                We design timeless spaces where{" "}
                <span className="italic text-[#C86D51]">human life</span>{" "}
                unfolds in harmony.
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                Established in 2010, DesignMeInteriors is a multi-disciplinary
                architecture and interior design laboratory. We work closely
                with private individuals, developers, and visionaries to
                manifest extraordinary built environments.
              </p>

              {/* Studio Information */}
              <div className="mt-10 grid max-w-xl grid-cols-2 border-t border-[#DCD5CB] pt-6 sm:grid-cols-3">
                <div className="border-r border-[#DCD5CB] pr-5">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Established
                  </span>

                  <span className="mt-2 block font-serif text-xl text-[#1E1C1A]">
                    2010
                  </span>
                </div>

                <div className="border-r border-[#DCD5CB] px-5">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Discipline
                  </span>

                  <span className="mt-2 block font-serif text-xl text-[#1E1C1A]">
                    Architecture
                  </span>
                </div>

                <div className="pl-5">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Focus
                  </span>

                  <span className="mt-2 block font-serif text-xl text-[#1E1C1A]">
                    Human Life
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — IMAGE COMPOSITION */}
            <div className="relative">
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={IMAGES.aboutMain}
                  alt="DesignMeInteriors Studio interior architecture"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Year marker */}
              <div className="absolute -left-4 top-8 bg-[#1E1C1A] px-4 py-3 text-white shadow-lg sm:-left-6">
                <span className="block text-[9px] uppercase tracking-[0.25em] text-white/60">
                  Studio
                </span>

                <span className="font-serif text-xl">Est. 2010</span>
              </div>

              {/* Floating experience card */}
              <div className="absolute -bottom-6 right-4 bg-white px-6 py-5 shadow-xl sm:-right-6">
                <div className="flex items-end gap-3">
                  <span className="font-serif text-4xl leading-none text-[#1E1C1A]">
                    15
                  </span>

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Years
                    </span>

                    <span className="block text-xs text-[#1E1C1A]">
                      of shaping spaces
                    </span>
                  </div>
                </div>
              </div>

              {/* Vertical label */}
              <div className="absolute -right-10 top-10 hidden lg:block">
                <span className="text-[9px] uppercase tracking-[0.35em] text-muted-foreground [writing-mode:vertical-rl]">
                  Architecture · Interiors · Life
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-24 border-b border-[#DCD5CB]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[480px] w-full border border-[#E5DFD5] overflow-hidden shadow-xl">
              <Image
                src={IMAGES.aboutMain}
                alt="DesignMeInteriors Studio Material Library"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C86D51] font-semibold">
                Our Ethos
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E1C1A]">
                Architecture as a quiet dialogue between space and soul.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe that the spaces we inhabit directly shape our inner
                state. In an era dominated by superficial decoration and fast
                construction, DesignMeInteriors champions slow, deliberate craftsmanship,
                enduring natural materials, and spatial purity.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our collaborative studio practice unites master architects,
                interior specialists, lighting designers, and master carpenters
                under a unified vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GuidingPrinciples />

      {/* Leadership Team */}
      <LeadershipTeam />

      {/* Awards & Recognition */}

      <section className="border-b border-[#DCD5CB] bg-[#F9F8F5] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Header */}
          <div className="mb-14 border-b border-[#DCD5CB] pb-10">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-8 bg-[#C86D51]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C86D51]">
                Distinction
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h3 className="max-w-3xl font-serif text-3xl leading-[0.95] text-[#1E1C1A] sm:text-5xl md:text-4xl">
                Awards & Global
                Recognition
              </h3>
            </div>
          </div>

          {/* Editorial Award Grid */}
          <div className="border border-[#DCD5CB]">
            {/* Main Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Featured Award */}
              {AWARDS[0] && (
                <article
                  className="
    group
    border-b
    border-[#DCD5CB]
    transition-colors
    duration-500
    bg-gray-300
    hover:bg-[#ECEAE6]
    lg:border-b-0
    lg:border-r
  "
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    {/* Year */}
                    <div className="mb-10 flex items-start justify-between">
                      <span className="font-sans text-7xl font-light tracking-[-0.06em] text-[#DCD5CB] sm:text-8xl">
                        {AWARDS[0].year}
                      </span>

                      <span className="border border-[#DCD5CB] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        {AWARDS[0].issuer}
                      </span>
                    </div>

                    {/* Award Info */}
                    <div className="mb-8">
                      <h3 className="font-serif text-2xl text-[#1E1C1A] sm:text-3xl">
                        {AWARDS[0].title}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {AWARDS[0].project}
                      </p>
                    </div>

                    {/* Featured Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#E5DFD5]">
                      <Image
                        src={IMAGES.aboutMain}
                        alt={AWARDS[0].project}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.03]
                  "
                      />

                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                    </div>
                  </div>
                </article>
              )}

              {/* Right Side Awards */}
              <div className="grid grid-cols-1">
                {AWARDS.slice(1, 3).map((award) => (
                  <article
                    key={`${award.year}-${award.title}`}
                    className="
  group
  flex
  min-h-[240px]
  flex-col
  justify-between
  border-b
  border-[#DCD5CB]
  p-6
  transition-colors
  duration-500
  ease-out
  hover:bg-[#ECEAE6]
  sm:p-8
  md:p-10
"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-sans text-4xl font-medium tracking-[-0.04em] text-[#1E1C1A]">
                        {award.year}
                      </span>

                      <span className="border border-[#DCD5CB] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        {award.issuer}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl text-[#1E1C1A] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                        {award.title}
                      </h3>

                      <p className="mt-2 text-xs text-muted-foreground">
                        {award.project}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Bottom Awards */}
            {AWARDS.length > 3 && (
              <div className="grid grid-cols-1 border-t border-[#DCD5CB] md:grid-cols-2">
                {AWARDS.slice(3).map((award) => (
                  <article
                    key={`${award.year}-${award.title}`}
                    className="
                group
                flex
                min-h-[180px]
                flex-col
                justify-between
                border-b
                border-[#DCD5CB]
                p-6
                transition-colors
                duration-300
                hover:bg-[#ECEAE6]
                md:border-r
                md:p-8
                lg:p-10
                last:md:border-r-0
              "
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-sans text-3xl font-medium tracking-[-0.04em] text-[#1E1C1A]">
                        {award.year}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        {award.issuer}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-[#1E1C1A] transition-transform duration-300 group-hover:translate-x-1">
                        {award.title}
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {award.project}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Small Footer */}
          <div className="mt-6 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>DesignMeInteriors Studio</span>
            <span>Selected Recognition</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
