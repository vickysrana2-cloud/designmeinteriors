"use client";

import * as React from "react";
import Image, { ImageProps } from "next/image";
import { Building2 } from "lucide-react";

export const DEFAULT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

interface BlogImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  fallbackSrc?: string;
  category?: string;
}

export function BlogImage({
  src,
  fallbackSrc: _fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  alt = "Blog article cover",
  className,
  category,
  ...props
}: BlogImageProps) {
  const isValidSrc = (url?: string | null): url is string => {
    if (!url || typeof url !== "string") return false;
    const trimmed = url.trim();
    if (
      trimmed.length === 0 ||
      trimmed === "null" ||
      trimmed === "undefined" ||
      trimmed === "[object Object]"
    ) {
      return false;
    }
    return (
      trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("/")
    );
  };

  const [hasError, setHasError] = React.useState<boolean>(false);
  const [prevSrc, setPrevSrc] = React.useState<string | null | undefined>(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setHasError(false);
  }

  const validSource = isValidSrc(src) ? src.trim() : null;

  // Render stylized luxury architectural fallback icon container if missing, invalid, or on load error
  if (!validSource || hasError) {
    return (
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#191816] via-[#242321] to-[#322F2C] text-[#9A8060] p-6 text-center shadow-inner overflow-hidden">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#9A8060]/40 bg-[#191816]/90 text-[#CAA05C] shadow-lg mb-2">
          <Building2 className="h-6 w-6" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A8060]">
          {category || "DesignMeInteriors Studio"}
        </span>
        <span className="text-xs text-[#D7D0C5] font-serif font-medium mt-1 line-clamp-1 max-w-[200px]">
          {alt !== "Blog article cover" ? alt : "Spatial Journal"}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={validSource}
      alt={alt}
      className={className}
      unoptimized={validSource.includes("unsplash.com") || validSource.includes("http")}
      onError={() => {
        setHasError(true);
      }}
    />
  );
}
