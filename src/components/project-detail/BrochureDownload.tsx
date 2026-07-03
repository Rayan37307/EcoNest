import Button from "@/components/ui/Button";

export default function BrochureDownload() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-sand" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold/5" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Decorative gold accent line */}
        <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
          Download Our Brochure
        </h2>

        {/* Description */}
        <p className="text-stone mt-4 text-lg">
          Get comprehensive details about this project, including floor plans,
          pricing, and specifications.
        </p>

        {/* Download button */}
        <div className="mt-8">
          <Button variant="primary" size="lg">
            <span className="inline-flex items-center gap-2">
              {/* Download icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download Brochure
            </span>
          </Button>
        </div>

        {/* File info */}
        <p className="text-stone/60 text-sm mt-4">
          PDF format, 2.5 MB
        </p>
      </div>
    </section>
  );
}
