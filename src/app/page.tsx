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
    name: "Md Awlad Hossain",
    image: "/chairman.jpeg",
    description:
      "The visionary leader shaping EcoNest Properties with a clear focus on green living, trust, and long-term value.",
  },
  {
    role: "Managing Director",
    name: "Md Tarequl Islam",
    image: "/managing director.jpeg",
    description:
      "Overseeing operations, delivery, and client experience to ensure every project reflects quality and care.",
  },
  {
    role: "Director",
    name: "Shirin Akther",
    description:
      "Offering seasoned counsel and industry insight to strengthen EcoNest Properties' long-term vision.",
  },
  {
    role: "Director",
    name: "Nusrat Jahan Oishe",
    description:
      "Bringing strategic direction and steady governance to guide EcoNest Properties' continued growth.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <StatsCounter />
      {/* <FeaturedProjects /> */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Leadership"
              title="Our Leadership Team"
              description="A team of experienced leaders bringing vision, discipline, and a strong green ethos to every development."
              align="center"
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {leadershipRoles.map((person, index) => (
              <ScrollReveal key={person.name ?? person.role} delay={index * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 h-full text-center">
                  {person.image && (
                    <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-white/10">
                      <Image
                        src={person.image}
                        alt={person.name ?? person.role}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {person.name && (
                    <p className="text-lg font-bold text-white mb-1">
                      {person.name}
                    </p>
                  )}
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                    {person.role}
                  </p>
                  <p className="text-lg text-white leading-relaxed">{person.description}</p>
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
