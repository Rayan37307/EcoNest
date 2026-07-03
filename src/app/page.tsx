import VideoShowreel from "@/components/home/VideoShowreel";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import StatsCounter from "@/components/home/StatsCounter";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTABanner from "@/components/home/CTABanner";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const leadershipRoles = [
  {
    role: "Founder & Director",
    description:
      "The visionary leader shaping EcoNest with a clear focus on green living, trust, and long-term value.",
  },
  {
    role: "Director",
    description:
      "Guiding strategy, partnerships, and the portfolio of premium developments with a sustainability-first mindset.",
  },
  {
    role: "Managing Director",
    description:
      "Overseeing operations, delivery, and client experience to ensure every project reflects quality and care.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <StatsCounter />
      <FeaturedProjects />
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Leadership"
              title="The Roles Behind EcoNest"
              description="A team of experienced leaders bringing vision, discipline, and a strong green ethos to every development."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {leadershipRoles.map((person, index) => (
              <ScrollReveal key={person.role} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-8 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <span className="text-lg font-semibold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                    {person.role}
                  </p>
                  <p className="text-stone leading-relaxed">{person.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <Testimonials />
      <ContactSection />
    </>
  );
}
