"use client";

import * as React from "react";
import Image, { ImageProps } from "next/image";

export const DEFAULT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

interface BlogImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  fallbackSrc?: string;
}

export function BlogImage({
  src,
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  alt = "Blog article cover",
  className,
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

  const initialSrc = isValidSrc(src) ? src.trim() : fallbackSrc;
  const [imgSrc, setImgSrc] = React.useState<string>(initialSrc);
  const [hasError, setHasError] = React.useState<boolean>(false);

  const [prevSrc, setPrevSrc] = React.useState<string | null | undefined>(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setImgSrc(isValidSrc(src) ? src.trim() : fallbackSrc);
    setHasError(false);
  }

  return (
    <Image
      {...props}
      src={hasError ? fallbackSrc : imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}
