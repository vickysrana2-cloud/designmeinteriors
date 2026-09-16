"use client";

import { GALLERY_CATEGORIES, GalleryCategory } from "@/data/galleryData";

interface GalleryFiltersProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  itemCounts: Record<GalleryCategory, number>;
}

export function GalleryFilters({
  activeCategory,
  onSelectCategory,
  itemCounts,
}: GalleryFiltersProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth">
      <div className="flex items-center gap-2.5 min-w-max px-1">
        {GALLERY_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const count = itemCounts[category] || 0;

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              aria-pressed={isActive}
              aria-label={`Filter by ${category} (${count} items)`}
              className={`
                relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ease-out cursor-pointer active:scale-95
                ${
                  isActive
                    ? "bg-[#3A2920] text-[#FCFBF8] shadow-md border border-[#3A2920]"
                    : "bg-[#FCFBF8] text-[#706B63] border border-[#D7D0C5] hover:border-[#9A8060] hover:text-[#242321]"
                }
              `}
            >
              <span>{category}</span>
              <span
                className={`
                  rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none transition-colors
                  ${
                    isActive
                      ? "bg-[#9A8060] text-[#FCFBF8]"
                      : "bg-[#E8E1D7] text-[#706B63]"
                  }
                `}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
