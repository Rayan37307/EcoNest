import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/data/navigation";

interface PressRelease {
  date: string;
  title: string;
  excerpt: string;
}

interface MediaCoverage {
  publication: string;
  date: string;
  headline: string;
  category: string;
}

const featuredArticle = {
  publication: "The Daily Star",
  date: "June 15, 2026",
  title: "EcoNest Sets New Benchmark for Sustainable Luxury Living in Dhaka",
  excerpt:
    "In an exclusive interview, EcoNest's CEO discusses the company's groundbreaking approach to combining eco-friendly design with premium residential living. The feature highlights their flagship EcoVista Residences project, which has earned LEED certification and is setting new standards for green building practices in Bangladesh's real estate sector.",
  category: "Feature",
};

const pressReleases: PressRelease[] = [
  {
    date: "May 28, 2026",
    title: "EcoNest Announces Expansion to Chittagong with Three New Projects",
    excerpt:
      "The company has unveiled plans to invest BDT 500 crore in three new residential and mixed-use developments in the port city, marking a significant milestone in its national expansion strategy.",
  },
  {
    date: "April 12, 2026",
    title: "EcoNest Wins 'Best Sustainable Developer' at Bangladesh Real Estate Awards 2026",
    excerpt:
      "For the third consecutive year, EcoNest has been recognized for its commitment to sustainable construction practices and community-focused development at the prestigious national awards ceremony.",
  },
  {
    date: "March 5, 2026",
    title: "EcoNest Partners with JAAGO Foundation for Education Initiative",
    excerpt:
      "A new CSR partnership will fund the construction of two primary schools in underserved communities, providing quality education access to over 600 children annually.",
  },
  {
    date: "January 18, 2026",
    title: "EcoNest Launches EcoVista Residences — Dhaka's First LEED-Certified Tower",
    excerpt:
      "The grand launch of EcoVista Residences introduces Bangladesh's first LEED-certified residential high-rise, featuring solar panels, rainwater harvesting, and smart home technology.",
  },
];

const mediaCoverage: MediaCoverage[] = [
  {
    publication: "The Daily Star",
    date: "June 15, 2026",
    headline: "EcoNest Sets New Benchmark for Sustainable Luxury Living in Dhaka",
    category: "Feature",
  },
  {
    publication: "Dhaka Tribune",
    date: "May 30, 2026",
    headline: "Green Building Revolution: How EcoNest Is Changing the Game",
    category: "Opinion",
  },
  {
    publication: "The Business Standard",
    date: "April 14, 2026",
    headline: "EcoNest Sweeps Bangladesh Real Estate Awards 2026",
    category: "News",
  },
  {
    publication: "Prothom Alo",
    date: "March 8, 2026",
    headline: "ইকোনেস্ট-এর নতুন শিক্ষা উদ্যোগ: দুইটি বিদ্যালয় নির্মাণ শুরু",
    category: "News",
  },
  {
    publication: "Your Placeholder Here",
    date: "February 10, 2026",
    headline: "Why Homebuyers Are Choosing EcoNest in 2026",
    category: "Analysis",
  },
];

export default function PressRoomPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="min-h-[40vh] bg-charcoal flex items-center justify-center text-center px-4">
        <div>
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Media & Press
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Press Room
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto">
            In the News
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Featured"
              title="Latest Coverage"
              description="Our most recent feature in national media."
              align="center"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Placeholder */}
                <div className="aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-charcoal/10 to-primary/10 flex items-center justify-center min-h-[300px]">
                  <div className="text-center text-stone/50">
                    <svg
                      className="w-16 h-16 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    <p className="text-sm font-medium">Article Image</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                      {featuredArticle.category}
                    </span>
                    <span className="text-stone text-sm">
                      {featuredArticle.publication}
                    </span>
                    <span className="text-stone/50 text-sm">
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-stone leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div>
                    <Button variant="primary" size="md" href="#">
                      Read Full Article →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="PRESS RELEASES"
              title="Official Announcements"
              description="Stay updated with the latest news and announcements from EcoNest."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {pressReleases.map((release, index) => (
              <ScrollReveal key={release.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold text-sm font-medium">
                      {release.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-3 leading-snug">
                    {release.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed flex-1">
                    {release.excerpt}
                  </p>
                  <div className="mt-5">
                    <Button variant="ghost" size="sm" href="#">
                      Read More →
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="MEDIA COVERAGE"
              title="As Seen In"
              description="EcoNest has been featured in leading publications across Bangladesh."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-16 space-y-4">
            {mediaCoverage.map((item, index) => (
              <ScrollReveal key={item.headline} delay={index * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 md:p-6 rounded-lg border border-stone/10 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
                  {/* Publication badge */}
                  <div className="flex-shrink-0 w-full sm:w-40">
                    <p className="font-bold text-charcoal text-sm">
                      {item.publication}
                    </p>
                    <p className="text-stone/50 text-xs">{item.date}</p>
                  </div>

                  {/* Category & Headline */}
                  <div className="flex-1">
                    <span className="inline-flex items-center rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium text-stone mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="text-charcoal font-medium leading-snug">
                      {item.headline}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <svg
                      className="w-5 h-5 text-stone/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download Assets / Press Kit */}
      <section className="py-20 md:py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download Press Kit
            </h2>
            <p className="text-cream/70 leading-relaxed mb-8">
              Access our official logos, brand guidelines, company fact sheet,
              high-resolution project images, and executive bios — everything you
              need for your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" href="#">
                Download Full Kit (ZIP)
              </Button>
              <Button variant="outline" size="lg" href="#" className="border-cream/30 text-cream hover:bg-cream/10">
                Brand Guidelines (PDF)
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Media Inquiries
            </h2>
            <p className="text-stone leading-relaxed mb-6">
              For press inquiries, interview requests, or media partnerships,
              please reach out to our communications team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-stone">
              <a
                href="mailto:press@econest.com.bd"
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                press@econest.com.bd
              </a>
              <span className="text-stone/30 hidden sm:block">|</span>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {contactInfo.phone}
                </a>
                <span className="text-stone/30 hidden sm:block">|</span>
                <a
                  href={`tel:${contactInfo.phone2}`}
                  className="flex items-center gap-2 text-primary font-medium hover:underline sm:gap-2"
                >
                  {contactInfo.phone2}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
