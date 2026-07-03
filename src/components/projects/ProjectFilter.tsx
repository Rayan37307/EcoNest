"use client";

import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  categories: string[];
}

export default function ProjectFilter({
  activeFilter,
  onFilterChange,
  categories,
}: ProjectFilterProps) {
  const filters = ["All", ...categories];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {filters.map((filter) => {
        const isActive = filter === activeFilter;

        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={cn(
              "px-5 py-2 rounded-sm text-sm uppercase tracking-wider transition-colors duration-300",
              isActive
                ? "bg-primary text-white"
                : "bg-sand text-stone hover:bg-primary/20"
            )}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
