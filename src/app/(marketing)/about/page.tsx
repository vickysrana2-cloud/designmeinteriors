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
    <div className="pt-28 pb-20 bg-[#F5F2EC]">
      {/* Page Hero */}
      <section className="border-b border-[#D7D0C5] bg-[#F5F2EC] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* LEFT — CONTENT */}
            <div className="relative z-10">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-[#9A8060]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A8060]">
                  About DesignMeInteriors Studio
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-[#242321] sm:text-6xl lg:text-[68px]">
                We design timeless spaces where{" "}
                <span className="italic text-[#9A8060]">human life</span>{" "}
                unfolds in harmony.
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-[#706B63] sm:text-lg">
                Established in 2010, DesignMeInteriors is a multi-disciplinary
                architecture and interior design laboratory. We work closely
                with private individuals, developers, and visionaries to
                manifest extraordinary built environments.
              </p>

              {/* Studio Information */}
              <div className="mt-10 grid max-w-xl grid-cols-2 border-t border-[#D7D0C5] pt-6 sm:grid-cols-3">
                <div className="border-r border-[#D7D0C5] pr-5">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#706B63]">
                    Established
                  </span>

                  <span className="mt-2 block font-serif text-xl text-[#242321]">
                    2010
                  </span>
                </div>

                <div className="border-r border-[#D7D0C5] px-5">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#706B63]">
                    Discipline
                  </span>

                  <span className="mt-2 block font-serif text-xl text-[#242321]">
                    Architecture
                  </span>
                </div>

                <div className="pl-5">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#706B63]">
                    Focus
                  </span>

                  <span className="mt-2 block font-serif text-xl text-[#242321]">
                    Human Life
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — IMAGE COMPOSITION */}
            <div className="relative">
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#D7D0C5]">
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
              <div className="absolute -left-4 top-8 rounded-xl bg-[#242321] px-4 py-3 text-[#FCFBF8] shadow-lg sm:-left-6">
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[#FCFBF8]/60">
                  Studio
                </span>

                <span className="font-serif text-xl">Est. 2010</span>
              </div>

              {/* Floating experience card */}
              <div className="absolute -bottom-6 right-4 rounded-xl bg-[#FCFBF8] border border-[#D7D0C5] px-6 py-5 shadow-xl sm:-right-6">
                <div className="flex items-end gap-3">
                  <span className="font-serif text-4xl leading-none text-[#242321]">
                    15
                  </span>

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-[#706B63]">
                      Years
                    </span>

                    <span className="block text-xs text-[#242321]">
                      of shaping spaces
                    </span>
                  </div>
                </div>
              </div>

              {/* Vertical label */}
              <div className="absolute -right-10 top-10 hidden lg:block">
                <span className="text-[9px] uppercase tracking-[0.35em] text-[#706B63] [writing-mode:vertical-rl]">
                  Architecture · Interiors · Life
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-24 border-b border-[#D7D0C5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[480px] w-full rounded-2xl border border-[#D7D0C5] overflow-hidden shadow-xl">
              <Image
                src={IMAGES.aboutMain}
                alt="DesignMeInteriors Studio Material Library"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9A8060] font-semibold">
                Our Ethos
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#242321]">
                Architecture as a quiet dialogue between space and soul.
              </h2>
              <p className="text-sm text-[#706B63] leading-relaxed">
                We believe that the spaces we inhabit directly shape our inner
                state. In an era dominated by superficial decoration and fast
                construction, DesignMeInteriors champions slow, deliberate craftsmanship,
                enduring natural materials, and spatial purity.
              </p>
              <p className="text-sm text-[#706B63] leading-relaxed">
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

      <section className="border-b border-[#D7D0C5] bg-[#F5F2EC] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Header */}
          <div className="mb-14 border-b border-[#D7D0C5] pb-10">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-8 bg-[#9A8060]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9A8060]">
                Distinction
              </span>
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h3 className="max-w-3xl font-serif text-3xl leading-[0.95] text-[#242321] sm:text-5xl md:text-4xl">
                Awards & Global
                Recognition
              </h3>
            </div>
          </div>

          {/* Editorial Award Grid */}
          <div className="border border-[#D7D0C5]">
            {/* Main Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Featured Award */}
              {AWARDS[0] && (
                <article
                  className="
    group
    border-b
    border-[#D7D0C5]
    transition-colors
    duration-500
    bg-[#FCFBF8]
    hover:bg-[#E8E1D7]
    lg:border-b-0
    lg:border-r
  "
                >
                  <div className="p-6 sm:p-8 md:p-10">
                    {/* Year */}
                    <div className="mb-10 flex items-start justify-between">
                      <span className="font-sans text-7xl font-light tracking-[-0.06em] text-[#D7D0C5] sm:text-8xl">
                        {AWARDS[0].year}
                      </span>

                      <span className="border border-[#D7D0C5] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#706B63]">
                        {AWARDS[0].issuer}
                      </span>
                    </div>

                    {/* Award Info */}
                    <div className="mb-8">
                      <h3 className="font-serif text-2xl text-[#242321] sm:text-3xl">
                        {AWARDS[0].title}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#706B63]">
                        {AWARDS[0].project}
                      </p>
                    </div>

                    {/* Featured Image */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#E8E1D7]">
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
  border-[#D7D0C5]
  p-6
  transition-colors
  duration-500
  ease-out
  bg-[#FCFBF8]
  hover:bg-[#E8E1D7]
  sm:p-8
  md:p-10
"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-sans text-4xl font-medium tracking-[-0.04em] text-[#242321]">
                        {award.year}
                      </span>

                      <span className="border border-[#D7D0C5] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#706B63]">
                        {award.issuer}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-xl text-[#242321] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                        {award.title}
                      </h3>

                      <p className="mt-2 text-xs text-[#706B63]">
                        {award.project}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Bottom Awards */}
            {AWARDS.length > 3 && (
              <div className="grid grid-cols-1 border-t border-[#D7D0C5] md:grid-cols-2">
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
                border-[#D7D0C5]
                p-6
                transition-colors
                duration-300
                bg-[#FCFBF8]
                hover:bg-[#E8E1D7]
                md:border-r
                md:p-8
                lg:p-10
                last:md:border-r-0
              "
                  >
                    <div className="flex items-start justify-between gap-6">
                      <span className="font-sans text-3xl font-medium tracking-[-0.04em] text-[#242321]">
                        {award.year}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#706B63]">
                        {award.issuer}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-[#242321] transition-transform duration-300 group-hover:translate-x-1">
                        {award.title}
                      </h3>

                      <p className="mt-1 text-xs text-[#706B63]">
                        {award.project}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Small Footer */}
          <div className="mt-6 flex items-center justify-between text-[9px] uppercase tracking-[0.25em] text-[#706B63]">
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
