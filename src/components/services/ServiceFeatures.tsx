"use client";

import { ServiceFeature } from "@/types/service";
import {
  Compass,
  Layers,
  Box,
  Sun,
  ShieldCheck,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Compass,
  Layers,
  Box,
  Sun,
  ShieldCheck,
  CheckCircle2,
};

interface ServiceFeaturesProps {
  features?: (string | ServiceFeature)[];
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <div className="w-full">
      <div
        className="
          grid
          grid-cols-1
          gap-y-12
          gap-x-10
          lg:grid-cols-2
          lg:gap-x-16
          lg:gap-y-14
        "
      >
        {features.map((item, idx) => {
          const isObject = typeof item !== "string";

          const title = isObject ? item.title : item;

          const description = isObject
            ? item.description
            : "Precision architectural implementation tailored to elevate spatial comfort and brand expression.";

          const iconName = isObject ? item.icon : undefined;

          const IconComponent =
            (iconName && ICON_MAP[iconName]) || CheckCircle2;

          return (
            <div
  key={idx}
  className="
    flex
    w-full
    flex-col
    items-center
    text-center

    lg:flex-row
    lg:items-start
    lg:gap-6
    lg:text-left
  "
>
  {/* Icon */}
  <div
    className="
      mx-auto
      flex
      h-[68px]
      w-[68px]
      min-w-[68px]
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-[#D2A052]
      text-white

      lg:mx-0
      lg:h-[100px]
      lg:w-[100px]
      lg:min-w-[100px]
    "
  >
    <IconComponent
      className="
        h-6
        w-6
        stroke-[1.5]

        lg:h-9
        lg:w-9
      "
    />
  </div>

  {/* Content */}
  <div
    className="
      mt-5
      w-full
      text-center

      lg:mt-0
      lg:pt-0.5
      lg:text-left
    "
  >
    <h4
      className="
        font-sans
        text-[19px]
        font-bold
        leading-[1.25]
        tracking-[-0.3px]
        text-[#111111]

        lg:text-[28px]
      "
    >
      {title}
    </h4>

    <p
      className="
        mx-auto
        mt-3
        max-w-[330px]
        font-sans
        text-[15px]
        font-normal
        leading-[1.55]
        text-[#4F5968]

        lg:mx-0
        lg:mt-5
        lg:max-w-[430px]
        lg:text-[18px]
        lg:leading-[1.55]
      "
    >
      {description}
    </p>
  </div>
</div>
          );
        })}
      </div>
    </div>
  );
}