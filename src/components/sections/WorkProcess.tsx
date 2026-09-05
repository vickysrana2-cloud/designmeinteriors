import {
  MessageCircle,
  Lightbulb,
  LayoutGrid,
  Settings,
  Home,
  ArrowRight,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Understand the client's requirements, lifestyle, preferences, space, and budget.",
    icon: MessageCircle,
    color: "text-[#D97706]",
    badgeBg: "bg-[#FFF8EC] border-[#FDE68A]",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
  },
  {
    step: "02",
    title: "Concept & Planning",
    description:
      "Develop the design direction, space planning, and initial concepts.",
    icon: Lightbulb,
    color: "text-[#2563EB]",
    badgeBg: "bg-[#EFF6FF] border-[#BFDBFE]",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
  },
  {
    step: "03",
    title: "Design Development",
    description:
      "Finalize materials, colours, furniture, lighting, finishes, and design details.",
    icon: LayoutGrid,
    color: "text-[#9333EA]",
    badgeBg: "bg-[#FAF5FF] border-[#E9D5FF]",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    step: "04",
    title: "Execution",
    description:
      "Coordinate the execution process and ensure the design is implemented according to the approved plan.",
    icon: Settings,
    color: "text-[#E11D48]",
    badgeBg: "bg-[#FFF1F2] border-[#FECDD3]",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
  },
  {
    step: "05",
    title: "Handover",
    description:
      "Complete the final details and deliver the finished space.",
    icon: Home,
    color: "text-[#059669]",
    badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
];

export default function WorkProcess() {
  return (
    <section className="overflow-hidden bg-[#F2ECE2]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <div className="relative">
        <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-14 sm:px-8 md:px-12 md:pb-14 md:pt-20 lg:px-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
            {/* LEFT CONTENT */}
            <div className="relative z-20 md:col-span-7">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#9A8060]" />

                <span className="text-[10px] font-medium tracking-[0.28em] text-[#806344] sm:text-xs">
                  OUR PROCESS
                </span>
              </div>

              <h2 className="max-w-[720px] font-serif text-[44px] leading-[0.98] tracking-[-0.035em] text-[#1C1A17] sm:text-5xl md:text-[58px] lg:text-[68px]">
                From Idea to Reality
              </h2>

              <p className="mt-6 max-w-[540px] text-sm font-light leading-[1.7] text-[#6E6A62] sm:text-base">
                Our 5-step structured design journey ensures absolute clarity,
                budget management, and on-time execution.
              </p>

              {/* Decorative handwritten text */}
              <div
                className="mt-7 hidden rotate-[-6deg] text-[25px] leading-[0.9] text-[#9A8060] md:block"
                style={{
                  fontFamily:
                    "'Segoe Script', 'Brush Script MT', cursive",
                }}
              >
                Spaces
                <br />
                <span className="ml-5">for a better you</span>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative hidden min-h-[270px] md:col-span-5 md:block">
              <div className="absolute right-0 top-0 h-[270px] w-[92%] overflow-hidden rounded-bl-[32px] rounded-tl-[150px]">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
                  alt="Thoughtful interior design"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-1">
                {["THOUGHTFUL", "DESIGN", "BEAUTIFUL", "LIVING"].map(
                  (text) => (
                    <span
                      key={text}
                      className="text-[9px] font-medium tracking-[0.22em] text-[#1C1A17] lg:text-[10px]"
                    >
                      {text}
                    </span>
                  )
                )}

                <span className="mt-3 h-px w-8 bg-[#1C1A17]/40" />
              </div>
            </div>

            {/* MOBILE HERO IMAGE */}
            <div className="relative h-[220px] overflow-hidden rounded-[28px] md:hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                alt="Thoughtful interior design"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              <div
                className="absolute bottom-5 left-5 rotate-[-5deg] text-[20px] leading-[0.9] text-white"
                style={{
                  fontFamily:
                    "'Segoe Script', 'Brush Script MT', cursive",
                }}
              >
                Spaces
                <br />
                <span className="ml-4">for a better you</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          DESKTOP PROCESS
      ========================================================= */}
      <div className="mx-auto hidden max-w-[1600px] px-6 pb-5 sm:px-8 md:block md:px-12 lg:px-16">
        {/* NUMBER TIMELINE */}
        <div className="relative mb-8 px-[5%]">
          {/* Connecting line */}
          <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-[#C8B79E]" />

          <div className="relative z-10 flex items-center justify-between">
            {PROCESS_STEPS.map((proc, index) => (
              <div
                key={proc.step}
                className={`flex h-[56px] w-[56px] items-center justify-center rounded-full font-serif text-[18px] transition-all duration-300 ${
                  index === 0
                    ? "bg-[#9A7248] text-[#FBF8F2]"
                    : "border border-[#C8B79E] bg-[#F2ECE2] text-[#765C40]"
                }`}
              >
                {proc.step}
              </div>
            ))}
          </div>
        </div>

        {/* STEP CARDS */}
        <div className="grid grid-cols-5 gap-4 lg:gap-5">
          {PROCESS_STEPS.map((proc) => {
            const Icon = proc.icon;

            return (
              <div
                key={proc.step}
                className="group relative overflow-visible rounded-t-[150px] rounded-b-3xl border border-[#E2DCD3] bg-[#FBF9F5]  pb-7  shadow-[0_6px_20px_rgba(44,34,24,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(44,34,24,0.10)]"
              >
                {/* IMAGE */}
                <div className="relative h-[190px] overflow-hidden rounded-t-[150px] rounded-b-[22px]">
                  <img
                    src={proc.image}
                    alt={proc.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Soft image overlay */}
                  <div className="absolute inset-0 bg-black/[0.03]" />
                </div>

                {/* FLOATING ICON */}
                <div className={`relative z-10 mx-auto -mt-[25px] flex h-[50px] w-[50px] items-center justify-center rounded-full border shadow-[0_4px_14px_rgba(0,0,0,0.08)] ${proc.badgeBg}`}>
                  <Icon
                    className={`h-[21px] w-[21px] ${proc.color}`}
                    strokeWidth={1.6}
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-center font-serif text-[18px] leading-tight text-[#1C1A17] lg:text-[19px]">
                  {proc.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mx-auto mt-3 max-w-[220px] text-center text-[12px] font-light leading-[1.65] text-[#6E6A62] lg:text-[13px]">
                  {proc.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-12 flex items-center justify-between border-t border-[#D8D0C4] pt-7">
          <div className="flex items-center gap-4">
            <span className="h-10 w-px bg-[#9A8060]" />

            <p className="text-[10px] font-medium tracking-[0.3em] text-[#806344]">
              IDEAS
              <span className="mx-3 text-[#B5A48F]">•</span>
              PLANNING
              <span className="mx-3 text-[#B5A48F]">•</span>
              DESIGN
              <span className="mx-3 text-[#B5A48F]">•</span>
              EXECUTION
              <span className="mx-3 text-[#B5A48F]">•</span>
              YOUR SPACE
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE PROCESS
      ========================================================= */}
      <div className="px-5 pb-14 md:hidden">
        <div className="relative pl-[50px]">
          {/* Vertical line */}
          <div className="absolute bottom-8 left-[18px] top-5 w-px bg-[#C8B79E]" />

          <div className="space-y-5">
            {PROCESS_STEPS.map((proc, index) => {
              const Icon = proc.icon;

              return (
                <div key={proc.step} className="relative">
                  {/* STEP NUMBER */}
                  <div
                    className={`absolute -left-[50px] top-5 flex h-[38px] w-[38px] items-center justify-center rounded-full font-serif text-[13px] ${
                      index === 0
                        ? "bg-[#9A7248] text-white"
                        : "border border-[#C8B79E] bg-[#F2ECE2] text-[#765C40]"
                    }`}
                  >
                    {proc.step}
                  </div>

                  {/* MOBILE CARD */}
                  <div className="group overflow-hidden rounded-[20px] border border-[#E0D8CD] bg-[#FBF9F5] shadow-[0_5px_18px_rgba(44,34,24,0.05)]">
                    <div className="flex gap-4 p-3">
                      {/* IMAGE */}
                      <div className="relative h-[86px] w-[82px] shrink-0 overflow-hidden rounded-[14px]">
                        <img
                          src={proc.image}
                          alt={proc.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* ICON */}
                        <div className={`absolute bottom-[-1px] right-[-1px] flex h-8 w-8 items-center justify-center rounded-tl-[12px] border-t border-l ${proc.badgeBg}`}>
                          <Icon
                            className={`h-[15px] w-[15px] ${proc.color}`}
                            strokeWidth={1.6}
                          />
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="min-w-0 flex-1 py-1 pr-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-[17px] leading-tight text-[#1C1A17]">
                            {proc.title}
                          </h3>

                          <ArrowRight
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#9A8060]"
                            strokeWidth={1.4}
                          />
                        </div>

                        <p className="mt-2 text-[11px] font-light leading-[1.55] text-[#6E6A62]">
                          {proc.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE FOOTER LABEL */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-[#C8B79E]" />

          <span className="text-[8px] font-medium tracking-[0.28em] text-[#806344]">
            THOUGHTFUL DESIGN · BEAUTIFUL LIVING
          </span>

          <span className="h-px w-7 bg-[#C8B79E]" />
        </div>
      </div>
    </section>
  );
}