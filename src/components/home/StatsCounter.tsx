"use client";

import { useIntersection } from "@/hooks/useIntersection";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/data/stats";
import { cn } from "@/lib/utils";

function StatCard({
  value,
  suffix,
  label,
  shouldAnimate,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  shouldAnimate: boolean;
  delay: number;
}) {
  const { count, ref } = useCountUp({
    end: shouldAnimate ? value : 0,
    duration: 2000,
    startOnView: false,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center px-6 py-12 transition-all duration-700",
        shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-5xl font-heading font-bold text-white md:text-6xl">
        {shouldAnimate ? count : 0}
        {suffix}
      </span>
      <span className="mt-2 text-base uppercase tracking-[0.15em] text-white">
        {label}
      </span>
    </div>
  );
}

export default function StatsCounter() {
  const [sectionRef, isInView] = useIntersection<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section ref={sectionRef} className="w-full bg-charcoal">
      {/* Subtle top decorative line */}
      <div className="mx-auto h-px max-w-xs bg-gold/30" />

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4 md:gap-0">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            shouldAnimate={isInView}
            delay={index * 150}
          />
        ))}
      </div>

      {/* Subtle bottom decorative line */}
      <div className="mx-auto h-px max-w-xs bg-gold/30" />
    </section>
  );
}
