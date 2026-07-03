import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface AmenitiesProps {
  amenities: string[];
}

export default function Amenities({ amenities }: AmenitiesProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="AMENITIES"
          title="Elevated Living, Thoughtfully Designed"
          align="center"
        />

        {/* Grid of amenity items */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity}
              className={cn(
                "flex flex-col items-center text-center p-5 rounded-lg",
                "border border-sand bg-white hover:shadow-md transition-shadow duration-300"
              )}
            >
              {/* Placeholder image area */}
              <div
                className={cn(
                  "w-16 h-16 rounded-lg mb-4",
                  // Varying warm gradients for visual interest
                  index % 4 === 0 && "bg-gradient-to-br from-primary/20 to-sand",
                  index % 4 === 1 && "bg-gradient-to-br from-gold/20 to-cream",
                  index % 4 === 2 &&
                    "bg-gradient-to-br from-primary-dark/15 to-sand",
                  index % 4 === 3 &&
                    "bg-gradient-to-br from-stone/20 to-cream"
                )}
              />

              {/* Amenity name */}
              <span className="text-sm text-charcoal font-medium leading-tight">
                {amenity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
