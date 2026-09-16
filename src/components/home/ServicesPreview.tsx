"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getAllServices } from "@/data/services";

import "swiper/css";

export function ServicesPreview() {
  const services = getAllServices();

  return (
    <section
      id="our-services"
      className="overflow-hidden bg-[#F5F2EC] py-16 md:py-20 lg:py-24 border-t border-[#D7D0C5]"
    >
      {/* HEADER */}
      <div className="mx-auto mb-14 max-w-[1600px] px-6 md:px-12 lg:mb-20">
        <div className="grid items-start lg:grid-cols-[300px_1fr]">
          {/* Desktop Left Divider Column */}
          <div className="hidden min-h-[160px] border-r border-[#D7D0C5] lg:block">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D7D0C5] bg-[#FCFBF8] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#242321] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9A8060]" />
              Our Services
            </span>
          </div>

          {/* Right Header Text */}
          <div className="lg:pl-14">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D7D0C5] bg-[#FCFBF8] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#242321] shadow-sm lg:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9A8060]" />
              Our Services
            </span>

            <h2 className="max-w-[850px] font-serif text-[clamp(28px,5vw,56px)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#242321] sm:leading-[1.05]">
              Explore Our{" "}
              <span className="italic text-[#9A8060]">
                Interior Design
              </span>{" "}
              Services
            </h2>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="w-full">
        {(() => {
          // If service count is less than 6, duplicate items so Swiper's infinite loop completes seamlessly
          const displayServices =
            services.length > 0 && services.length < 6
              ? [...services, ...services]
              : services;

          return (
            <Swiper
              modules={[Autoplay]}
              loop
              centeredSlides
              slidesPerView={1.09}
              slidesPerGroup={1}
              spaceBetween={20}
              speed={700}
              wrapperClass="!items-start"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.7,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3.1,
                  spaceBetween: 32,
                },
              }}
              className="services-swiper px-5 sm:px-8 lg:px-16 cursor-pointer [&_.swiper-slide]:!cursor-pointer"
            >
              {displayServices.map((service, index) => {
                const isTall = index % 2 === 1;

                return (
                  <SwiperSlide key={`${service.slug}-${index}`}>
                <Link href={`/services/${service.slug}`} className="group block cursor-pointer">
                  <article className="cursor-pointer">
                    {/* IMAGE — alternates short/tall */}
                    <div
                      className={[
                        "relative w-full overflow-hidden rounded-[22px] md:rounded-[28px] border border-[#D7D0C5] bg-[#E8E1D7] shadow-md transition-shadow duration-500 group-hover:shadow-xl",
                        isTall
                          ? "h-[380px] sm:h-[440px] lg:h-[460px]"
                          : "h-[260px] sm:h-[310px] lg:h-[320px]",
                      ].join(" ")}
                    >
                      {/* NUMBER */}
                      <span className="absolute left-6 top-6 z-10 font-mono text-[28px] font-bold leading-none text-white drop-shadow-lg lg:left-8 lg:top-8 lg:text-[32px]">
                        {service.number}
                      </span>

                      {/* MOBILE ONLY UP-RIGHT ARROW BADGE (BOTTOM RIGHT) */}
                      <div className="absolute right-4 bottom-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#191816]/85 text-white backdrop-blur-md border border-white/30 shadow-md sm:hidden">
                        <ArrowUpRight className="h-4.5 w-4.5 text-[#D4B993]" />
                      </div>

                      {/* DARK GRADIENT OVERLAY */}
                      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-50 transition-opacity duration-500 group-hover:opacity-70" />

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 639px) 90vw, (max-width: 1023px) 460px, 545px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="pt-5 lg:pt-6">
                      <h3 className="font-serif text-[23px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#242321] transition-colors duration-300 group-hover:text-[#9A8060] lg:text-[30px]">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-[500px] font-sans text-[15px] font-light leading-[1.6] text-[#706B63] lg:mt-4 lg:text-[16px] line-clamp-3">
                        {service.shortDescription || service.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
          );
        })()}
      </div>
    </section>
  );
}
