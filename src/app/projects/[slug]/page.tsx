import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  getReviewsByProjectSlug,
  getAverageRating,
  getReviewCount,
} from "@/data/reviews";
import ProjectHero from "@/components/project-detail/ProjectHero";
import AtAGlance from "@/components/project-detail/AtAGlance";
import ProjectGallery from "@/components/project-detail/ProjectGallery";
import Amenities from "@/components/project-detail/Amenities";
import ProjectReviews from "@/components/project-detail/ProjectReviews";
import BrochureDownload from "@/components/project-detail/BrochureDownload";
import ProjectContact from "@/components/project-detail/ProjectContact";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Static params for build-time generation
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | EcoNest Properties",
    };
  }

  return {
    title: `${project.name} | EcoNest Properties Real Estate`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — EcoNest Properties Real Estate`,
      description: project.tagline,
      type: "website",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Gallery: project's own images plus curated interior/architecture shots
  const galleryExtras = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
  ];
  const placeholderImages = [...project.images, ...galleryExtras];

  return (
    <main>
      <ScrollReveal>
        <ProjectHero
          project={{
            name: project.name,
            tagline: project.tagline,
            category: project.category,
            location: project.location,
          }}
          rating={getAverageRating(project.slug)}
          reviewCount={getReviewCount(project.slug)}
        />
      </ScrollReveal>

      <ScrollReveal>
        <AtAGlance
          project={{
            location: project.location,
            buildingType: project.buildingType,
            category: project.category,
            unitSizes: project.unitSizes,
            landSize: project.landSize,
            handoverDate: project.handoverDate,
          }}
        />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectGallery
          images={placeholderImages}
          projectName={project.name}
        />
      </ScrollReveal>

      <ScrollReveal>
        <Amenities amenities={project.amenities} />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectReviews
          projectSlug={project.slug}
          reviews={getReviewsByProjectSlug(project.slug)}
        />
      </ScrollReveal>

      <ScrollReveal>
        <BrochureDownload />
      </ScrollReveal>

      <ScrollReveal>
        <ProjectContact />
      </ScrollReveal>
    </main>
  );
}
