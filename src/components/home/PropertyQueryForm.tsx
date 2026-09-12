"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { cn, formatNumber } from "@/lib/utils";

type Intent = "buy" | "sell";

const intents = [
  {
    value: "buy" as const,
    label: "I want to buy",
    description: "Find a plot, flat, or building that fits your budget.",
  },
  {
    value: "sell" as const,
    label: "I want to sell",
    description: "List your property with us and reach serious buyers.",
  },
];

const propertyTypes = [
  { value: "land", label: "Land / Plot", defaultUnit: "katha" },
  { value: "apartment", label: "Apartment / Flat", defaultUnit: "sqft" },
  { value: "house", label: "House / Building", defaultUnit: "sqft" },
  { value: "commercial", label: "Commercial Space", defaultUnit: "sqft" },
];

const areas = [
  { value: "shornali-abashon", label: "Shornali Abashon" },
  { value: "bashundhara-ra", label: "Bashundhara R/A" },
  { value: "purbachal-new-town", label: "Purbachal New Town" },
];

const budgetRanges = [
  { value: "under-50-lakh", label: "Under ৳50 Lakh" },
  { value: "50-lakh-1-crore", label: "৳50 Lakh – ৳1 Crore" },
  { value: "1-2-crore", label: "৳1 Crore – ৳2 Crore" },
  { value: "2-5-crore", label: "৳2 Crore – ৳5 Crore" },
  { value: "5-10-crore", label: "৳5 Crore – ৳10 Crore" },
  { value: "above-10-crore", label: "Above ৳10 Crore" },
];

const sizeUnits = [
  { value: "katha", label: "Katha" },
  { value: "bigha", label: "Bigha" },
  { value: "decimal", label: "Decimal" },
  { value: "sqft", label: "Sq. Ft" },
];

const timelines = [
  { value: "immediately", label: "Immediately" },
  { value: "1-3-months", label: "Within 1 – 3 months" },
  { value: "3-6-months", label: "Within 3 – 6 months" },
  { value: "just-exploring", label: "Just exploring for now" },
];

interface QueryForm {
  intent: Intent;
  propertyType: string;
  area: string;
  budgetRange: string;
  exactAmount: string;
  size: string;
  sizeUnit: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

type QueryErrors = Partial<Record<keyof QueryForm, string>>;

const emptyForm: QueryForm = {
  intent: "buy",
  propertyType: "",
  area: "",
  budgetRange: "",
  exactAmount: "",
  size: "",
  sizeUnit: "katha",
  timeline: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

const fieldBase =
  "w-full rounded-sm border bg-transparent px-4 py-3 text-base text-white transition-colors placeholder:text-white/40 focus:outline-none focus:ring-1";

const fieldState = (hasError?: string) =>
  hasError
    ? "border-red-400 focus:border-red-500 focus:ring-red-500"
    : "border-white/30 focus:border-gold focus:ring-gold";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white";

const optionalClass = "normal-case tracking-normal text-white/50";

// Native <option> elements don't inherit the dark field styling in every browser.
const optionClass = "bg-charcoal text-white";

const labelOf = (options: { value: string; label: string }[], value: string) =>
  options.find((option) => option.value === value)?.label ?? "—";

export default function PropertyQueryForm() {
  const [form, setForm] = useState<QueryForm>(emptyForm);
  const [errors, setErrors] = useState<QueryErrors>({});
  const [submitted, setSubmitted] = useState<QueryForm | null>(null);

  const isSelling = form.intent === "sell";
  const priceLabel = isSelling ? "Expected Price Range" : "Budget Range";

  const validate = (): boolean => {
    const next: QueryErrors = {};

    if (!form.propertyType) {
      next.propertyType = "Please choose a property type";
    }

    if (!form.area) {
      next.area = "Please select an area";
    }

    if (!form.budgetRange) {
      next.budgetRange = isSelling
        ? "Please select your expected price range"
        : "Please select your budget range";
    }

    if (!form.size.trim()) {
      next.size = "Please enter the size";
    } else if (!(Number(form.size) > 0)) {
      next.size = "Size must be a number greater than zero";
    }

    if (!form.name.trim()) {
      next.name = "Name is required";
    }

    const phone = form.phone.replace(/[\s-]/g, "");
    if (!phone) {
      next.phone = "Phone number is required";
    } else if (!/^(?:\+?880|0)1[3-9]\d{8}$/.test(phone)) {
      next.phone = "Enter a valid Bangladeshi mobile number";
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field: keyof QueryForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePropertyTypeChange = (value: string) => {
    const preset = propertyTypes.find((type) => type.value === value);
    setForm((prev) => ({
      ...prev,
      propertyType: value,
      sizeUnit: preset?.defaultUnit ?? prev.sizeUnit,
    }));
    if (errors.propertyType) {
      setErrors((prev) => ({ ...prev, propertyType: undefined }));
    }
  };

  // Keep only digits so the amount can be formatted with thousand separators.
  const handleAmountChange = (value: string) => {
    handleChange("exactAmount", value.replace(/\D/g, ""));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // TODO: Replace with actual form submission (API call, CRM, email service, etc.)
      setSubmitted(form);
    }
  };

  if (submitted) {
    const summary = [
      { term: "Looking to", value: submitted.intent === "buy" ? "Buy" : "Sell" },
      { term: "Property type", value: labelOf(propertyTypes, submitted.propertyType) },
      { term: "Preferred area", value: labelOf(areas, submitted.area) },
      {
        term: submitted.intent === "sell" ? "Expected price" : "Budget",
        value: submitted.exactAmount
          ? `৳${formatNumber(Number(submitted.exactAmount))}`
          : labelOf(budgetRanges, submitted.budgetRange),
      },
      {
        term: "Size",
        value: `${submitted.size} ${labelOf(sizeUnits, submitted.sizeUnit)}`,
      },
      ...(submitted.timeline
        ? [{ term: "Timeline", value: labelOf(timelines, submitted.timeline) }]
        : []),
    ];

    return (
      <section id="property-query" className="w-full bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          <ScrollReveal>
            <div className="rounded-lg border border-white/10 bg-white/5 p-10 text-center md:p-14">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
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
              <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">
                Your Request Is With Us
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-white/80">
                Thank you, {submitted.name.split(" ")[0]}. One of our property
                consultants will call you on {submitted.phone} within 24 hours
                with options that match your requirement.
              </p>

              <dl className="mt-10 divide-y divide-white/10 border-y border-white/10 text-left">
                {summary.map((item) => (
                  <div
                    key={item.term}
                    className="flex items-baseline justify-between gap-6 py-3"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                      {item.term}
                    </dt>
                    <dd className="text-right text-base font-medium text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(null);
                  setForm(emptyForm);
                }}
                className="mt-8 text-sm text-gold underline underline-offset-4 hover:text-white"
              >
                Submit another request
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="property-query" className="w-full bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading
            label="Property Enquiry"
            title="Tell Us What You're Looking For"
            description="Share your budget, preferred area, and plot or unit size — our consultants will come back to you with matching options in Shornali Abashon, Bashundhara R/A, and Purbachal New Town."
            align="center"
            light
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mt-14 rounded-lg border border-white/10 bg-white/5 p-8 md:p-12"
            noValidate
          >
            {/* Intent — buy or sell */}
            <fieldset>
              <legend className={labelClass}>
                I am looking to <span className="text-red-400">*</span>
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                {intents.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "cursor-pointer rounded-sm border p-5 transition-colors",
                      form.intent === option.value
                        ? "border-gold bg-gold/10"
                        : "border-white/20 hover:border-gold/50"
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="intent"
                        value={option.value}
                        checked={form.intent === option.value}
                        onChange={() => handleChange("intent", option.value)}
                        className="h-4 w-4 accent-gold"
                      />
                      <span className="text-base font-semibold text-white">
                        {option.label}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-white/70">
                      {option.description}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {/* Property type */}
              <div>
                <label htmlFor="query-property-type" className={labelClass}>
                  Property Type <span className="text-red-400">*</span>
                </label>
                <select
                  id="query-property-type"
                  value={form.propertyType}
                  onChange={(e) => handlePropertyTypeChange(e.target.value)}
                  className={cn(fieldBase, fieldState(errors.propertyType))}
                >
                  <option value="" className={optionClass}>
                    Select property type
                  </option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value} className={optionClass}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.propertyType && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.propertyType}
                  </p>
                )}
              </div>

              {/* Area */}
              <div>
                <label htmlFor="query-area" className={labelClass}>
                  Area <span className="text-red-400">*</span>
                </label>
                <select
                  id="query-area"
                  value={form.area}
                  onChange={(e) => handleChange("area", e.target.value)}
                  className={cn(fieldBase, fieldState(errors.area))}
                >
                  <option value="" className={optionClass}>
                    Select an area
                  </option>
                  {areas.map((area) => (
                    <option key={area.value} value={area.value} className={optionClass}>
                      {area.label}
                    </option>
                  ))}
                </select>
                {errors.area && (
                  <p className="mt-1 text-sm text-red-400">{errors.area}</p>
                )}
              </div>

              {/* Budget / expected price range */}
              <div>
                <label htmlFor="query-budget" className={labelClass}>
                  {priceLabel} <span className="text-red-400">*</span>
                </label>
                <select
                  id="query-budget"
                  value={form.budgetRange}
                  onChange={(e) => handleChange("budgetRange", e.target.value)}
                  className={cn(fieldBase, fieldState(errors.budgetRange))}
                >
                  <option value="" className={optionClass}>
                    Select a range
                  </option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value} className={optionClass}>
                      {range.label}
                    </option>
                  ))}
                </select>
                {errors.budgetRange && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.budgetRange}
                  </p>
                )}
              </div>

              {/* Exact amount */}
              <div>
                <label htmlFor="query-amount" className={labelClass}>
                  Exact Amount in Tk{" "}
                  <span className={optionalClass}>(optional)</span>
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-white/50">
                    ৳
                  </span>
                  <input
                    id="query-amount"
                    type="text"
                    inputMode="numeric"
                    value={
                      form.exactAmount
                        ? formatNumber(Number(form.exactAmount))
                        : ""
                    }
                    onChange={(e) => handleAmountChange(e.target.value)}
                    className={cn(fieldBase, fieldState(), "pl-9")}
                    placeholder="1,50,00,000"
                  />
                </div>
              </div>

              {/* Size */}
              <div>
                <label htmlFor="query-size" className={labelClass}>
                  Size of Land / House <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-3">
                  <input
                    id="query-size"
                    type="number"
                    min="0"
                    step="any"
                    value={form.size}
                    onChange={(e) => handleChange("size", e.target.value)}
                    className={cn(fieldBase, fieldState(errors.size), "flex-1")}
                    placeholder="e.g. 5"
                  />
                  <label htmlFor="query-size-unit" className="sr-only">
                    Size unit
                  </label>
                  <select
                    id="query-size-unit"
                    value={form.sizeUnit}
                    onChange={(e) => handleChange("sizeUnit", e.target.value)}
                    className={cn(fieldBase, fieldState(), "w-32 shrink-0")}
                  >
                    {sizeUnits.map((unit) => (
                      <option key={unit.value} value={unit.value} className={optionClass}>
                        {unit.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.size && (
                  <p className="mt-1 text-sm text-red-400">{errors.size}</p>
                )}
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="query-timeline" className={labelClass}>
                  Timeline <span className={optionalClass}>(optional)</span>
                </label>
                <select
                  id="query-timeline"
                  value={form.timeline}
                  onChange={(e) => handleChange("timeline", e.target.value)}
                  className={cn(fieldBase, fieldState())}
                >
                  <option value="" className={optionClass}>
                    Select a timeline
                  </option>
                  {timelines.map((timeline) => (
                    <option key={timeline.value} value={timeline.value} className={optionClass}>
                      {timeline.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact details */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Your Contact Details
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="query-name" className={labelClass}>
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="query-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={cn(fieldBase, fieldState(errors.name))}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="query-phone" className={labelClass}>
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="query-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={cn(fieldBase, fieldState(errors.phone))}
                    placeholder="+880 1XXX-XXXXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="query-email" className={labelClass}>
                    Email <span className={optionalClass}>(optional)</span>
                  </label>
                  <input
                    id="query-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={cn(fieldBase, fieldState(errors.email))}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="query-notes" className={labelClass}>
                    Additional Requirements{" "}
                    <span className={optionalClass}>(optional)</span>
                  </label>
                  <textarea
                    id="query-notes"
                    rows={4}
                    value={form.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                    className={cn(fieldBase, fieldState(), "resize-none")}
                    placeholder={
                      isSelling
                        ? "Plot number, road, mutation status, why you're selling..."
                        : "Corner plot, south facing, road width, payment plan..."
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm text-white/60">
                Fields marked <span className="text-red-400">*</span> are
                required. We never share your details with third parties.
              </p>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto"
              >
                {isSelling ? "Submit Listing Request" : "Send My Requirement"}
              </Button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
