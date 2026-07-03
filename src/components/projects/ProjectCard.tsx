import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import StarRating from "@/components/ui/StarRating";
import { getAverageRating, getReviewCount } from "@/data/reviews";
import { projects } from "@/data/projects";

interface ProjectCardProps {
  project: {
    slug: string;
    name: string;
    tagline: string;
    category: string;
    location: string;
    featured: boolean;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const rating = getAverageRating(project.slug);
  const reviewCount = getReviewCount(project.slug);
  const projectData = projects.find((p) => p.slug === project.slug);
  const imageUrl = projectData?.images[0] || "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop";

  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <article
        className={cn(
          "relative overflow-hidden rounded-lg bg-white shadow-sm",
          "hover:shadow-xl transition-all duration-500"
        )}
      >
        {/* Image area */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Actual image */}
          <Image
            src={imageUrl}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay gradient from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />

          {/* Content positioned at bottom-left */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            {/* Category badge */}
            <span
              className={cn(
                "inline-block text-xs uppercase tracking-wider text-gold",
                "font-semibold bg-charcoal/60 px-2 py-1 rounded-sm mb-2"
              )}
            >
              {project.category}
            </span>

            {/* Project name */}
            <h3 className="text-xl font-heading font-bold text-white leading-tight">
              {project.name}
            </h3>

            {/* Location */}
            <p className="text-white/70 text-sm mt-1">{project.location}</p>
          </div>

          {/* Featured indicator */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 bg-gold text-charcoal text-xs font-semibold px-2 py-1 rounded-sm">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Below image - tagline */}
        <div className="p-5">
          <p className="text-stone text-sm line-clamp-2">{project.tagline}</p>
          {reviewCount > 0 && (
            <div className="mt-3 flex items-center gap-2">
              <StarRating rating={rating} size="sm" showValue />
              <span className="text-xs text-stone/70">
                ({reviewCount} review{reviewCount === 1 ? "" : "s"})
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
