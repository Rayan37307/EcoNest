import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface AtAGlanceProps {
  project: {
    location: string;
    buildingType: string;
    category: string;
    unitSizes: string;
    landSize: string;
    handoverDate: string;
  };
}

const specs: { label: string; key: keyof AtAGlanceProps["project"] }[] = [
  { label: "Location", key: "location" },
  { label: "Building Type", key: "buildingType" },
  { label: "Category", key: "category" },
  { label: "Unit Sizes", key: "unitSizes" },
  { label: "Land Size", key: "landSize" },
  { label: "Handover Date", key: "handoverDate" },
];

export default function AtAGlance({ project }: AtAGlanceProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="AT A GLANCE"
          title="Project Specifications"
          align="center"
        />

        {/* Grid/table layout */}
        <div className="mt-12 rounded-lg overflow-hidden border border-sand">
          {specs.map((spec, index) => (
            <div
              key={spec.key}
              className={cn(
                "grid grid-cols-1 md:grid-cols-2",
                index < specs.length - 1 && "border-b border-sand",
                index % 2 === 0 ? "bg-cream" : "bg-white"
              )}
            >
              {/* Label */}
              <div className="px-6 py-4">
                <span className="text-xs uppercase tracking-wider text-stone font-semibold">
                  {spec.label}
                </span>
              </div>

              {/* Value */}
              <div className="px-6 py-4 md:border-l border-sand">
                <span className="text-charcoal font-medium">
                  {project[spec.key]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
