"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ProjectContact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-primary"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-heading font-bold text-charcoal">
            Thank You!
          </h3>
          <p className="text-stone mt-3">
            We&apos;ve received your inquiry and will get back to you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          label="GET IN TOUCH"
          title="Interested in This Project?"
          align="center"
        />

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          {/* Two column row: Name + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-stone font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-sm bg-white border border-sand",
                  "text-charcoal placeholder:text-stone/40",
                  "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                  "transition-colors duration-200"
                )}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-wider text-stone font-semibold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-sm bg-white border border-sand",
                  "text-charcoal placeholder:text-stone/40",
                  "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                  "transition-colors duration-200"
                )}
                placeholder="Your phone number"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider text-stone font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={cn(
                "w-full px-4 py-3 rounded-sm bg-white border border-sand",
                "text-charcoal placeholder:text-stone/40",
                "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                "transition-colors duration-200"
              )}
              placeholder="Your email address"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider text-stone font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={cn(
                "w-full px-4 py-3 rounded-sm bg-white border border-sand resize-none",
                "text-charcoal placeholder:text-stone/40",
                "focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                "transition-colors duration-200"
              )}
              placeholder="Tell us about your requirements..."
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
