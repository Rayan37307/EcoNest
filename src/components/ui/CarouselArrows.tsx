"use client";

import { cn } from "@/lib/utils";

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export default function CarouselArrows({
  onPrev,
  onNext,
  className,
}: CarouselArrowsProps) {
  return (
    <div
      className={cn(
        "absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10",
        className
      )}
    >
      {/* Previous Arrow */}
      <button
        type="button"
        onClick={onPrev}
        className="pointer-events-auto w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 ml-4"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        type="button"
        onClick={onNext}
        className="pointer-events-auto w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 mr-4"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
