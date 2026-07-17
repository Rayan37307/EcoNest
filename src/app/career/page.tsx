"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface Benefit {
  title: string;
  description: string;
}

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: string;
  coverLetter: string;
}

const benefits: Benefit[] = [
  {
    title: "Growth Opportunities",
    description:
      "Chart your own career path with structured mentorship programs, regular performance reviews, and clear advancement tracks within the company.",
  },
  {
    title: "Competitive Benefits",
    description:
      "Enjoy a comprehensive benefits package including health insurance, provident fund, performance bonuses, and annual company retreats.",
  },
  {
    title: "Creative Environment",
    description:
      "Work alongside talented architects, designers, and engineers in a collaborative, idea-driven culture where your creativity is valued.",
  },
  {
    title: "Learning & Development",
    description:
      "Access professional development funds, industry workshops, certification support, and cross-departmental training opportunities.",
  },
];

const jobOpenings: JobOpening[] = [
  {
    title: "Senior Architect",
    department: "Design & Planning",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Lead architectural design for premium residential projects. Requires 8+ years of experience in luxury real estate or hospitality design.",
  },
  {
    title: "Project Manager",
    department: "Project Management",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Oversee end-to-end project delivery from planning to handover. Must have strong experience in construction management and team leadership.",
  },
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Develop and execute digital marketing campaigns across social media, search engines, and email to drive brand awareness and lead generation.",
  },
  {
    title: "Civil Engineer — Structures",
    department: "Engineering",
    location: "Chittagong, Bangladesh",
    type: "Full-time",
    description:
      "Design and review structural systems for residential and commercial developments. Requires expertise in RCC and steel structure design.",
  },
];

export default function CareerPage() {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: "",
    coverLetter: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ApplicationFormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ApplicationFormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.position)
      newErrors.position = "Please select a position.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ApplicationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputBase =
    "w-full rounded-lg border px-4 py-3 text-charcoal placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors duration-200";
  const inputNormal = "border-stone/30 bg-white";
  const inputError = "border-red-400 bg-red-50/50";

  return (
    <main className="overflow-hidden">
      {/* Hero Banner */}
      <section className="min-h-[40vh] bg-charcoal flex items-center justify-center text-center px-4">
        <div>
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Careers
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto">
            Build Your Career with EcoNest Properties
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="WHY ECONEST PROPERTIES"
              title="Why Join Us?"
              description="We believe great things are built by great people. Here's what makes EcoNest Properties a special place to grow your career."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <div className="bg-cream rounded-lg p-8 text-center h-full hover:shadow-md transition-shadow duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
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
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="CURRENT OPENINGS"
              title="Available Positions"
              description="Find a role that matches your skills and passion. We're always looking for exceptional talent."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-16 space-y-6">
            {jobOpenings.map((job, index) => (
              <ScrollReveal key={job.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-stone mb-3">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {job.location}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-stone text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    <Button
                      variant="primary"
                      size="md"
                      className="flex-shrink-0 md:self-center"
                      href="#apply-form"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              label="APPLY NOW"
              title="Submit Your Application"
              description="Ready to join? Fill out the form below and we'll review your application promptly."
              align="center"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {isSubmitted ? (
              <div className="bg-cream rounded-lg p-10 text-center mt-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  Application Submitted!
                </h3>
                <p className="text-stone mb-6 max-w-md mx-auto">
                  Thank you for applying. Our HR team will review your
                  application and reach out within 5–7 business days.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      position: "",
                      resume: "",
                      coverLetter: "",
                    });
                  }}
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={cn(
                      inputBase,
                      errors.name ? inputError : inputNormal
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={cn(
                        inputBase,
                        errors.email ? inputError : inputNormal
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX XXXXXX"
                      className={cn(inputBase, inputNormal)}
                    />
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Position <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={cn(
                      inputBase,
                      errors.position ? inputError : inputNormal
                    )}
                  >
                    <option value="">Select a position...</option>
                    {jobOpenings.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title} — {job.department}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.position}
                    </p>
                  )}
                </div>

                {/* Resume Upload Placeholder */}
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Resume / CV
                  </label>
                  <div className="border-2 border-dashed border-stone/30 rounded-lg p-8 text-center hover:border-primary/40 transition-colors duration-200 cursor-pointer">
                    <svg
                      className="w-10 h-10 text-stone/40 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-stone text-sm font-medium">
                      Drag & drop your resume here, or{" "}
                      <span className="text-primary underline">browse</span>
                    </p>
                    <p className="text-stone/50 text-xs mt-1">
                      PDF, DOC, DOCX — Max 5MB
                    </p>
                    {/* Replace with actual file upload functionality:
                        <input type="file" accept=".pdf,.doc,.docx" className="hidden" /> 
                    */}
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={5}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                    className={cn(inputBase, inputNormal, "resize-none")}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
