"use client";

import { ServiceFeature } from "@/types/service";
import { Compass, Layers, Box, Sun, ShieldCheck, CheckCircle2, LucideIcon } from "lucide-react";

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
    <div className="space-y-6">
      <h3 className="font-serif text-2xl text-[#242321]">
        Service Feature Highlights
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {features.slice(0, 4).map((item, idx) => {
          const isObject = typeof item !== "string";
          const title = isObject ? item.title : item;
          const description = isObject
            ? item.description
            : "Precision architectural implementation tailored to elevate spatial comfort and brand expression.";
          const iconName = isObject ? item.icon : undefined;
          const IconComponent = (iconName && ICON_MAP[iconName]) || CheckCircle2;

          return (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-[#D7D0C5] bg-[#FCFBF8] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9A8060] hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7D0C5] bg-[#F5F2EC] text-[#9A8060] transition-colors duration-300 group-hover:bg-[#9A8060] group-hover:text-white">
                  <IconComponent className="h-5 w-5" />
                </div>

                <h4 className="font-serif text-lg font-semibold text-[#242321] transition-colors duration-300 group-hover:text-[#9A8060]">
                  {title}
                </h4>

                <p className="text-xs leading-relaxed text-[#706B63] font-light">
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
