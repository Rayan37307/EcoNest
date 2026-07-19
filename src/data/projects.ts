export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: "residential" | "commercial";
  location: string;
  featured: boolean;
  description: string;
  unitSizes: string;
  landSize: string;
  buildingType: string;
  handoverDate: string;
  amenities: string[];
  images: string[];
  galleryCount: number;
}

export const projects: Project[] = [];
