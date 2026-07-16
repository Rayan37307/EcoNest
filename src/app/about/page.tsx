import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in every transaction, building trust that lasts generations.",
  },
  {
    title: "Excellence",
    description:
      "Every detail matters. From architectural design to final finishes, we pursue the highest standards of quality in all we do.",
  },
  {
    title: "Innovation",
    description:
      "We embrace modern technology, sustainable materials, and forward-thinking design to create homes that stand the test of time.",
  },
  {
    title: "Sustainability",
    description:
      "Our developments are thoughtfully planned with the environment in mind — reducing waste, conserving energy, and preserving green spaces.",
  },
];

const milestones = [
  {
    year: "2010",
    title: "Founded",
    description:
      "EcoNest was established with a bold vision to redefine luxury living in Bangladesh.",
  },
  {
    year: "2018",
    title: "50th Project Delivered",
    description:
      "Reached the milestone of completing 50 residential and commercial projects across Dhaka.",
  },
  {
    year: "2021",
    title: "500+ Homeowners",
    description:
      "Surpassed 500 happy homeowners, each a testament to our commitment to quality and trust.",
  },
  {
    year: "2024",
    title: "National Expansion",
    description:
      "Expanded operations to Chittagong and Sylhet, bringing the EcoNest experience to new communities.",
  },
];

const leadershipTeam = [
  {
    role: "Chairman",
    image: "/chairman.jpeg",
    description:
      "The driving force behind EcoNest's legacy, values, and long-term vision for green, meaningful living.",
  },
  {
    role: "Managing Director",
    image: "/managing director.jpeg",
    description:
      "Ensuring smooth execution, operational excellence, and a premium experience for every client.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="min-h-[40vh] bg-charcoal flex items-center justify-center text-center px-4">
        <div>
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto">
            Building Dreams, Creating Legacies
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                A Legacy Built on Trust & Excellence
              </h2>
              <div className="space-y-5 text-stone leading-relaxed">
                <p>
                  Founded in 2010, EcoNest began as a humble endeavor by a group
                  of passionate architects and engineers who shared a singular
                  dream: to transform the landscape of luxury real estate in
                  Bangladesh. What started as a small residential project in
                  Dhaka has since grown into one of the country&apos;s most
                  respected development firms.
                </p>
                <p>
                  From our very first blueprint, we committed ourselves to a set
                  of principles that would define everything we build — integrity
                  in every dealing, uncompromising quality in every material, and
                  a deep respect for the communities we serve. This commitment
                  has earned us the trust of over 500 homeowners and counting.
                </p>
                <p>
                  Today, EcoNest is recognized for its thoughtfully designed
                  residential compounds, cutting-edge commercial spaces, and
                  sustainable urban developments. Our projects blend modern
                  architecture with the warmth and richness of Bangladeshi
                  culture, creating living spaces that feel both contemporary and
                  deeply rooted.
                </p>
                <p>
                  As we look to the future, our mission remains the same: to
                  craft exceptional spaces where families thrive, businesses
                  flourish, and communities grow stronger. We are not just
                  building structures — we are building the foundation for a
                  better tomorrow.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-[4/3] bg-sand rounded-lg flex items-center justify-center">
                <div className="text-center text-stone/60">
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">Company Photo</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Purpose & Direction"
              title="Mission & Vision"
              description="Guided by purpose, driven by vision — every decision we make serves our founding ideals."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Our Mission
                </h3>
                <p className="text-stone leading-relaxed">
                  To deliver premium living and working spaces that exceed
                  expectations — combining innovative design, superior
                  craftsmanship, and sustainable practices to create environments
                  where people truly flourish. We are committed to making the
                  dream of owning a beautiful, quality home an attainable reality
                  for families across Bangladesh.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm h-full">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Our Vision
                </h3>
                <p className="text-stone leading-relaxed">
                  To be the most trusted and admired real estate developer in
                  Bangladesh — known not only for the quality of our buildings
                  but for the positive impact we have on communities and the
                  environment. We aspire to set new benchmarks in sustainable
                  urban development and become a regional leader in ethical
                  real estate practices.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Leadership"
              title="Chairman & Managing Director"
              description="The people behind EcoNest bring experience, integrity, and a shared commitment to delivering refined living spaces."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
            {leadershipTeam.map((person, index) => (
              <ScrollReveal key={person.role} delay={index * 0.1}>
                <div className="bg-cream rounded-lg p-8 h-full shadow-sm text-center">
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
                  <p className="text-stone leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="What Guides Us"
              title="Our Core Values"
              description="The principles that shape every project, every partnership, and every promise we make."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="text-center p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-5">
                    <span className="text-2xl font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="Our Journey"
              title="Key Milestones"
              description="A look back at the moments that defined who we are today."
              align="center"
            />
          </ScrollReveal>

          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <ScrollReveal
                    key={milestone.year}
                    delay={index * 0.1}
                    direction={isEven ? "left" : "right"}
                  >
                    <div
                      className={`relative flex items-start gap-6 md:gap-12 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content */}
                      <div className="flex-1 md:text-right">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                          <span className="text-gold font-bold text-sm tracking-wider">
                            {milestone.year}
                          </span>
                          <h3 className="text-lg font-bold text-charcoal mt-1 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-stone text-sm leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Dot */}
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center border-4 border-cream md:absolute md:left-1/2 md:-translate-x-1/2 mt-4 md:mt-6">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>

                      {/* Spacer for alignment */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
