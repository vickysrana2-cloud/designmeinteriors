import * as React from "react";

interface MediaIframeProps {
  src: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  [key: string]: any;
}

export function MediaIframe({
  src,
  title = "Embedded Media",
  width,
  height,
  className = "",
  ...props
}: MediaIframeProps) {
  const numW = width ? parseFloat(String(width)) : 0;
  const numH = height ? parseFloat(String(height)) : 0;
  const hasCustomAspect = numW > 0 && numH > 0;
  const aspectRatioStyle = hasCustomAspect
    ? { aspectRatio: `${numW} / ${numH}` }
    : undefined;

  return (
    <div
      className={`relative w-full max-w-full rounded-2xl overflow-hidden my-8 border border-[#D7D0C5] bg-[#191816] shadow-md ${
        !hasCustomAspect ? "aspect-video" : ""
      } ${className}`}
      style={aspectRatioStyle}
    >
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0 min-h-[220px]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        {...props}
      />
    </div>
  );
}

interface MediaVideoProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function MediaVideo({ children, className = "", ...props }: MediaVideoProps) {
  return (
    <div
      className={`w-full max-w-full rounded-2xl overflow-hidden my-8 border border-[#D7D0C5] bg-[#191816] shadow-md ${className}`}
    >
      <video
        controls
        playsInline
        className="w-full max-h-[600px] block rounded-2xl"
        {...props}
      >
        {children}
      </video>
    </div>
  );
}
