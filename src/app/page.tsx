import Image from "next/image";
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
    role: "Chairman",
    image: "/chairman.jpeg",
    description:
      "The visionary leader shaping EcoNest Properties with a clear focus on green living, trust, and long-term value.",
  },
  {
    role: "Managing Director",
    image: "/managing director.jpeg",
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
              title="Chairman & Managing Director"
              description="A team of experienced leaders bringing vision, discipline, and a strong green ethos to every development."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
            {leadershipRoles.map((person, index) => (
              <ScrollReveal key={person.role} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-8 shadow-sm h-full text-center">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-primary/10">
                    <Image
                      src={person.image}
                      alt={person.role}
                      fill
                      className="object-cover"
                    />
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
