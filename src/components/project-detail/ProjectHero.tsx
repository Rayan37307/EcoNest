import { cn } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";

interface ProjectHeroProps {
  project: {
    name: string;
    tagline: string;
    category: string;
    location: string;
  };
  rating?: number;
  reviewCount?: number;
}

export default function ProjectHero({ project, rating = 0, reviewCount = 0 }: ProjectHeroProps) {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center">
      {/* Placeholder gradient background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-charcoal via-primary-dark to-primary"
        )}
      />

      {/* Dark gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 py-20">
        {/* Category badge */}
        <span
          className={cn(
            "inline-block text-xs uppercase tracking-widest text-gold font-semibold mb-6"
          )}
        >
          {project.category}
        </span>

        {/* Project name */}
        <h1
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
          )}
        >
          {project.name}
        </h1>

        {/* Tagline */}
        <p className="text-xl text-white/80 mt-4 max-w-2xl mx-auto">
          {project.tagline}
        </p>

        {/* Location with icon */}
        <div className="flex items-center justify-center gap-2 mt-6 text-white/60 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{project.location}</span>
        </div>

        {/* Rating */}
        {reviewCount > 0 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <StarRating rating={rating} light showValue />
            <span className="text-sm text-white/60">
              ({reviewCount} review{reviewCount === 1 ? "" : "s"})
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
