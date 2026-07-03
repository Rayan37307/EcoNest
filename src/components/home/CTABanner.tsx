"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden bg-charcoal">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/Land_transforming_into_architecture_202607032252.mp4"
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-charcoal/70" />

      {/* Subtle stone texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,159,145,0.08),transparent_70%)]" />

      {/* Top decorative line */}
      <div className="absolute left-1/2 top-0 h-px w-0 max-w-xs -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative z-10 px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              label="PARTNER WITH US"
              title="From Plots to Possibilities"
              description="Transform your land into a landmark development. Partner with EcoNest to unlock the full potential of your property through our proven expertise in design, construction, and marketing."
              align="center"
              light
            />

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="gold" size="lg" href="/partner">
                Become a Partner
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-charcoal"
                href="/about"
              >
                Learn More
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 h-px w-0 max-w-xs -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
