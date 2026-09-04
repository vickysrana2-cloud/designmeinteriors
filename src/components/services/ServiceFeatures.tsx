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
        {features.slice(0, 4).map((item, idx) => {
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
                items-start
                gap-6
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-[100px]
                  w-[100px]
                  min-w-[100px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D2A052]
                  text-white
                "
              >
                <IconComponent className="h-9 w-9 stroke-[1.5]" />
              </div>

              {/* Content */}
              <div className="pt-0.5">
                <h4
                  className="
                    font-sans
                    text-[28px]
                    font-bold
                    leading-[1.15]
                    tracking-[-0.5px]
                    text-[#111111]
                  "
                >
                  {title}
                </h4>

                <p
                  className="
                    mt-5
                    max-w-[430px]
                    font-sans
                    text-[18px]
                    font-normal
                    leading-[1.55]
                    text-[#4F5968]
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