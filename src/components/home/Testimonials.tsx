"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

// Only keep ScrollReveal for the section heading, not for carousel items

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  return (
    <section
      className="relative w-full overflow-hidden bg-charcoal py-20 md:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,162,101,0.05),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading
            label="TESTIMONIALS"
            title="What Our Clients Say"
            align="center"
            light
          />
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="relative mt-14 min-h-[350px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out",
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              )}
            >
              <div className="mx-auto max-w-3xl text-center">
                {/* Decorative quote mark */}
                <div className="mb-6 text-6xl leading-none text-gold/40 md:text-7xl">
                  &ldquo;
                </div>

                {/* Quote text */}
                <blockquote className="mb-8 text-2xl leading-relaxed font-heading italic text-white md:text-3xl">
                  {testimonial.quote}
                </blockquote>

                {/* Divider */}
                <div className="mx-auto mb-6 h-px w-12 bg-gold/50" />

                {/* Client info */}
                <div className="flex flex-col items-center gap-3">
                  {/* Photo */}
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <p className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-base text-white">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={testimonials[index].id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-6 bg-gold"
                  : "w-2 bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
