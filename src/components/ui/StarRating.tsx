import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  light?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

const starPath =
  "M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5z";

export default function StarRating({
  rating,
  size = "md",
  showValue = false,
  light = false,
  className,
}: StarRatingProps) {
  const clampedRating = Math.max(0, Math.min(5, rating));

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => {
          const fillPercent = Math.max(0, Math.min(1, clampedRating - index)) * 100;
          return (
            <span key={index} className="relative inline-block leading-none">
              <svg
                className={cn(sizeMap[size], light ? "text-white/25" : "text-stone/30")}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d={starPath} />
              </svg>
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercent}%` }}
              >
                <svg className={cn(sizeMap[size], "text-gold")} viewBox="0 0 20 20" fill="currentColor">
                  <path d={starPath} />
                </svg>
              </span>
            </span>
          );
        })}
      </div>
      {showValue && (
        <span
          className={cn(
            "text-sm font-semibold",
            light ? "text-white" : "text-charcoal"
          )}
        >
          {clampedRating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
