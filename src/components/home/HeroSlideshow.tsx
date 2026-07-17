"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "@/components/ui/Button";

interface Slide {
  id: number;
  gradient: string;
  label: string;
  heading: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    gradient: "bg-gradient-to-br from-primary-dark via-charcoal to-primary",
    label: "WELCOME TO ECONEST",
    heading: "Crafting Landmarks, Defining Lifestyles",
    subtitle:
      "Discover premium real estate developments that blend architectural excellence with sustainable living across Bangladesh.",
  },
  {
    id: 2,
    gradient: "bg-gradient-to-br from-charcoal via-primary-dark to-charcoal",
    label: "WELCOME TO ECONEST",
    heading: "Where Vision Meets Reality",
    subtitle:
      "From concept to completion, we deliver exceptional residential and commercial spaces that stand the test of time.",
  },
  {
    id: 3,
    gradient: "bg-gradient-to-br from-sand via-primary to-charcoal",
    label: "WELCOME TO ECONEST",
    heading: "Building Tomorrow's Heritage",
    subtitle:
      "Join a community of discerning homeowners who trust EcoNest Properties for uncompromising quality and timeless design.",
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/Residential_tower_with_vertical_…_202607032222.mp4"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Slide content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full px-6 pb-24 md:px-16 lg:pb-32 lg:px-24">
              <div className="max-w-3xl">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">
                  {slide.label}
                </p>
                <h1 className="mb-6 text-4xl font-heading font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                  {slide.heading}
                </h1>
                <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80">
                  {slide.subtitle}
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white hover:text-charcoal"
                  href="/projects"
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={slides[index].id}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gold"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
