import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

interface Initiative {
  title: string;
  description: string;
  gradient: string;
  stat: string;
}

interface ImpactStat {
  value: string;
  label: string;
}

interface Partner {
  name: string;
}

const initiatives: Initiative[] = [
  {
    title: "Education for All",
    description:
      "We believe every child deserves access to quality education. Through our school-building program and scholarship fund, EcoNest has helped construct fully equipped schools in underserved communities across Bangladesh. We also provide annual scholarships to meritorious students from low-income families, covering tuition, books, and supplies — giving them the tools they need to build a brighter future.",
    gradient: "from-blue-900/20 to-emerald-900/20",
    stat: "10 Schools Built",
  },
  {
    title: "Green Bangladesh",
    description:
      "Environmental stewardship is at the heart of our corporate identity. Our Green Bangladesh initiative focuses on large-scale tree plantation drives, community garden development, and advocacy for sustainable urban planning. Every EcoNest project includes dedicated green spaces, and we plant over 200 trees for every building we complete — ensuring that our growth contributes to a healthier, greener Bangladesh.",
    gradient: "from-emerald-900/20 to-lime-900/20",
    stat: "1,000+ Trees Planted",
  },
  {
    title: "Community Development",
    description:
      "We invest in the communities where we build. From clean water access projects to vocational training programs for youth and women, our community development initiatives are designed to create lasting, meaningful impact. We organize annual health camps, skill-building workshops, and cultural events that bring neighbors together and strengthen the social fabric of the areas we serve.",
    gradient: "from-amber-900/20 to-orange-900/20",
    stat: "50+ Events",
  },
];

const impactStats: ImpactStat[] = [
  {
    value: "500+",
    label: "Families Supported",
  },
  {
    value: "10",
    label: "Schools Built",
  },
  {
    value: "1,000+",
    label: "Trees Planted",
  },
  {
    value: "50+",
    label: "Community Events",
  },
];

const partners: Partner[] = [
  { name: "BRAC" },
  { name: "JAAGO Foundation" },
  { name: "Center for Disability in Development" },
  { name: "Bangladesh Environmental Lawyers Association" },
  { name: "Volunteer for Bangladesh" },
  { name: "Teach for Bangladesh" },
];

export default function CSRPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="min-h-[40vh] bg-charcoal flex items-center justify-center text-center px-4">
        <div>
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Corporate Social Responsibility
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our CSR
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto">
            Making a Difference Beyond Buildings
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeading
              label="Our Commitment"
              title="Building a Better Bangladesh"
              description=""
              align="center"
            />
            <p className="text-stone leading-relaxed text-lg mt-6">
              At EcoNest, we believe that the measure of a great company lies not
              just in the quality of its buildings, but in the positive impact it
              has on society. Our CSR philosophy is rooted in the idea that
              business success and social responsibility go hand in hand. From
              education and environmental conservation to community empowerment,
              we are deeply committed to creating value that extends far beyond
              our project sites. Every initiative we undertake reflects our core
              belief that sustainable development must serve not only today&apos;s
              homeowners but also the generations to come.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="OUR INITIATIVES"
              title="What We Do for the Community"
              description="Three pillars of change that guide our social impact efforts across Bangladesh."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {initiatives.map((initiative, index) => (
              <ScrollReveal key={initiative.title} delay={index * 0.15}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div
                    className={`aspect-[16/9] bg-gradient-to-br ${initiative.gradient} flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-charcoal/60 mb-1">
                        {initiative.stat}
                      </div>
                      <p className="text-charcoal/40 text-sm">Image Placeholder</p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-charcoal mb-4">
                      {initiative.title}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed flex-1">
                      {initiative.description}
                    </p>
                    <div className="mt-6">
                      <Button variant="ghost" size="sm" href="#">
                        Learn More →
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="OUR IMPACT"
              title="Numbers That Matter"
              description="A snapshot of the impact we've made through our CSR initiatives."
              align="center"
              light
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {impactStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-3">
                    {stat.value}
                  </div>
                  <p className="text-cream/70 text-sm md:text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NGO Partners */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="OUR PARTNERS"
              title="NGO Partners"
              description="We collaborate with trusted organizations to maximize the reach and effectiveness of our social initiatives."
              align="center"
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner.name} delay={index * 0.08}>
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-sand flex items-center justify-center hover:bg-cream transition-colors duration-200">
                  <span className="text-stone text-xs font-medium text-center px-2 leading-tight">
                    {partner.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Want to Partner With Us?
            </h2>
            <p className="text-stone leading-relaxed mb-8">
              We&apos;re always open to collaborating with NGOs, community
              organizations, and individuals who share our vision for a better
              Bangladesh. Get in touch to explore partnership opportunities.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Contact Us
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
