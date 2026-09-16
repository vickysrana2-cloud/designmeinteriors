"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none cursor-ew-resize rounded-2xl border border-[#D7D0C5] bg-[#191816] ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
      role="slider"
      aria-label={`Before and After comparison slider for ${title}`}
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After Image (Background) */}
      <div className="relative w-full h-full min-h-[350px] sm:min-h-[450px]">
        <Image
          src={afterImage}
          alt={`After transformation - ${title}`}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 z-10 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FCFBF8] backdrop-blur-md">
          After
        </div>
      </div>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute top-0 left-0 bottom-0 overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <div 
          className="relative h-full min-h-[350px] sm:min-h-[450px]"
          style={{
            width: containerWidth ? `${containerWidth}px` : "100%",
          }}
        >
          <Image
            src={beforeImage}
            alt={`Before transformation - ${title}`}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FCFBF8] backdrop-blur-md">
            Before
          </div>
        </div>
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-[#FCFBF8] shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[#3A2920] border-2 border-[#FCFBF8] text-[#FCFBF8] shadow-xl transition-transform active:scale-110">
          <MoveHorizontal size={18} />
        </div>
      </div>
    </div>
  );
}
