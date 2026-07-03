"use client";

import { useState, useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CarouselArrows from "@/components/ui/CarouselArrows";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StarRating from "@/components/ui/StarRating";
import { projects } from "@/data/projects";
import { getAverageRating, getReviewCount } from "@/data/reviews";
import { cn } from "@/lib/utils";

const featured = projects.filter((p) => p.featured);

const placeholderGradients = [
  "bg-gradient-to-br from-primary-dark via-charcoal to-primary",
  "bg-gradient-to-br from-charcoal via-primary to-sand",
  "bg-gradient-to-br from-sand via-primary-dark to-charcoal",
  "bg-gradient-to-br from-charcoal via-sand to-primary-dark",
];

export default function FeaturedProjects() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const cardWidth = 450; // min-w-[450px] + gap
  const maxIndex = Math.max(0, featured.length - 1);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading
            label="FEATURED PROJECTS"
            title="Discover Our Signature Developments"
            align="center"
          />
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative mt-14">
          {/* Carousel track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${scrollIndex * (450 + 24)}px)`, // card width + gap
              }}
            >
              {featured.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative min-w-[350px] h-[500px] flex-shrink-0 overflow-hidden rounded-lg md:min-w-[450px]"
                >
                  {/* Background placeholder — replace with actual project images */}
                  <div
                    className={cn(
                      "absolute inset-0 transition-transform duration-500 group-hover:scale-105",
                      placeholderGradients[index % placeholderGradients.length]
                    )}
                  />

                  {/* Gradient overlay from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="mb-2 inline-block text-xs uppercase tracking-[0.15em] text-gold">
                      {project.category}
                    </span>
                    <h3 className="mb-1 text-2xl font-heading font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="mb-3 text-sm text-white/70">{project.location}</p>
                    <p className="line-clamp-3 text-sm leading-relaxed text-white/60">
                      {project.tagline}
                    </p>
                    {getReviewCount(project.slug) > 0 && (
                      <div className="mt-3 flex items-center gap-2">
                        <StarRating rating={getAverageRating(project.slug)} size="sm" light showValue />
                        <span className="text-xs text-white/50">
                          ({getReviewCount(project.slug)})
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <CarouselArrows onPrev={handlePrev} onNext={handleNext} />

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {featured.map((_, index) => (
              <button
                key={featured[index].id}
                type="button"
                onClick={() => setScrollIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === scrollIndex
                    ? "w-6 bg-gold"
                    : "w-2 bg-stone/40 hover:bg-stone/70"
                )}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
