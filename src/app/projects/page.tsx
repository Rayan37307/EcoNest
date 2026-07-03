"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = new Set(projects.map((p) => p.category));
    return Array.from(uniqueCategories);
  }, []);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <main>
      {/* Hero banner */}
      <section className="relative bg-charcoal py-24 md:py-32">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-charcoal" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <span className="inline-block text-xs uppercase tracking-widest text-gold font-semibold mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
            Our Projects
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of residential and commercial
            developments, each designed with exceptional craftsmanship and
            sustainable living in mind.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <ScrollReveal>
            <div className="flex justify-center mb-12">
              <ProjectFilter
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                categories={categories}
              />
            </div>
          </ScrollReveal>

          {/* Project grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 100}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-stone text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
