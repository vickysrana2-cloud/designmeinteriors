"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryItems, GALLERY_CATEGORIES, GalleryCategory, GalleryItem } from "@/data/galleryData";
import { GalleryFilters } from "./GalleryFilters";
import { GalleryCard } from "./GalleryCard";
import { GalleryLightbox } from "./GalleryLightbox";
import { FolderOpen } from "lucide-react";

export function GalleryContainer() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Compute counts per category dynamically
  const itemCounts = useMemo(() => {
    const counts: Record<GalleryCategory, number> = {} as Record<GalleryCategory, number>;
    GALLERY_CATEGORIES.forEach((cat) => {
      if (cat === "All") {
        counts[cat] = galleryItems.length;
      } else {
        counts[cat] = galleryItems.filter((item) => item.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter items based on activeCategory
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Index navigation for Lightbox slideshow
  const selectedIndex = useMemo(() => {
    if (!selectedItem) return -1;
    return filteredItems.findIndex((item) => item.id === selectedItem.id);
  }, [selectedItem, filteredItems]);

  const handleNextItem = () => {
    if (selectedIndex === -1 || filteredItems.length === 0) return;
    const nextIndex = (selectedIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrevItem = () => {
    if (selectedIndex === -1 || filteredItems.length === 0) return;
    const prevIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section className="bg-[#F5F2EC] py-12 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 space-y-10">
        {/* Category Filters Bar */}
        <GalleryFilters
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          itemCounts={itemCounts}
        />

        {/* Gallery Grid or Empty State */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredItems.map((item, index) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={index}
                  onClick={setSelectedItem}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-3xl border border-dashed border-[#D7D0C5] bg-[#FCFBF8]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8E1D7] text-[#9A8060] mb-4">
                <FolderOpen size={28} />
              </div>
              <h3 className="font-serif text-xl text-[#242321] font-medium">
                No projects available in this category yet
              </h3>
              <p className="text-sm text-[#706B63] max-w-md mt-2">
                We regularly update our portfolio with new projects. Please check back soon or browse our other categories.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-6 rounded-full bg-[#3A2920] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FCFBF8] hover:bg-[#5A3A28] transition-colors"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelectNext={handleNextItem}
        onSelectPrev={handlePrevItem}
      />
    </section>
  );
}
