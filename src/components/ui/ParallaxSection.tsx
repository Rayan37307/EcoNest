"use client";

import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImage?: string;
  overlay?: string;
  speed?: number;
  className?: string;
  height?: string;
}

function getOverlayClass(overlay?: string): string {
  if (!overlay) return "";
  switch (overlay) {
    case "dark":
      return "bg-black/50";
    case "light":
      return "bg-white/50";
    default:
      return overlay;
  }
}

export default function ParallaxSection({
  children,
  bgImage,
  overlay,
  speed = 0.5,
  className,
  height = "min-h-[60vh]",
}: ParallaxSectionProps) {
  return (
    <section
      className={cn("relative overflow-hidden", height, className)}
    >
      {/* Parallax Background */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${bgImage})`,
            transform: `scale(${1 + speed * 0.1})`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className={cn("absolute inset-0", getOverlayClass(overlay))}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
