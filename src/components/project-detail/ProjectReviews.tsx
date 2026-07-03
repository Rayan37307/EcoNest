import StarRating from "@/components/ui/StarRating";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getAverageRating, getReviewCount, type Review } from "@/data/reviews";

interface ProjectReviewsProps {
  projectSlug: string;
  reviews: Review[];
}

function formatReviewDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function ProjectReviews({ projectSlug, reviews }: ProjectReviewsProps) {
  const average = getAverageRating(projectSlug);
  const count = getReviewCount(projectSlug);

  if (count === 0) return null;

  return (
    <section className="w-full bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading
            label="RESIDENT REVIEWS"
            title="What Homeowners Are Saying"
            align="center"
            description={`Rated ${average.toFixed(1)} out of 5 based on ${count} review${
              count === 1 ? "" : "s"
            }`}
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-6 flex justify-center">
            <StarRating rating={average} size="lg" showValue />
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.id} delay={index * 80}>
              <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <StarRating rating={review.rating} size="sm" />
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Verified Buyer
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-lg font-semibold text-charcoal">
                  {review.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">
                  {review.comment}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-sand pt-4">
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{review.author}</p>
                    <p className="text-xs text-stone">{review.authorRole}</p>
                  </div>
                  <p className="text-xs text-stone/70">{formatReviewDate(review.date)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
