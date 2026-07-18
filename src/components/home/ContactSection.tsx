"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591355652505",
    icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // TODO: Replace with actual form submission (API call, email service, etc.)
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section className="w-full bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column — Info */}
          <ScrollReveal direction="left">
            <div>
              <SectionHeading
                label="GET IN TOUCH"
                title="Connect. Collaborate. Create."
                description="Whether you're interested in our developments, exploring partnership opportunities, or simply want to learn more — we'd love to hear from you."
                align="left"
                light
              />

              <div className="mt-10 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white">
                      Office Address
                    </p>
                    <p className="mt-1 text-base leading-relaxed text-white">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white">
                      Phone
                    </p>
                    <p className="mt-1 text-base text-white">
                      {contactInfo.phone}
                    </p>
                    <p className="mt-0.5 text-base text-white">
                      {contactInfo.phone2}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white">
                      Email
                    </p>
                    <p className="mt-1 text-base text-white">
                      {contactInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="mb-4 text-sm uppercase tracking-wider text-white">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-gold hover:border-gold hover:text-charcoal"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column — Form */}
          <ScrollReveal direction="right">
            <div>
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-lg bg-white/5 border border-white/10 p-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                    <svg
                      className="h-8 w-8 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Thank You
                  </h3>
                  <p className="mt-3 text-lg text-white">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-6 text-sm text-gold underline underline-offset-4 hover:text-primary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-lg bg-white/5 border border-white/10 p-8 md:p-10"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm uppercase tracking-wider text-white"
                    >
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={cn(
                        "w-full border bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:outline-none focus:ring-1",
                        errors.name
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-white/30 focus:border-gold focus:ring-gold"
                      )}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm uppercase tracking-wider text-white"
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={cn(
                        "w-full border bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:outline-none focus:ring-1",
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-white/30 focus:border-gold focus:ring-gold"
                      )}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm uppercase tracking-wider text-white"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full border border-white/30 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm uppercase tracking-wider text-white"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={cn(
                        "w-full resize-none border bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 transition-colors focus:outline-none focus:ring-1",
                        errors.message
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                          : "border-white/30 focus:border-gold focus:ring-gold"
                      )}
                      placeholder="Tell us about your inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
