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

export const projects: Project[] = [
  {
    id: "1",
    slug: "the-horizon",
    name: "The Horizon",
    tagline: "Where the sky meets luxury living",
    category: "residential",
    location: "Gulshan, Dhaka",
    featured: true,
    description:
      "Rising 32 floors above the city skyline, The Horizon redefines urban luxury with its panoramic views and world-class amenities. Every residence is meticulously designed to maximize natural light and airflow, creating a sanctuary of comfort in the heart of the city. Experience living at new heights with smart home technology and premium finishes throughout.",
    unitSizes: "1,200 - 3,500 sq ft",
    landSize: "72 Katha",
    buildingType: "32-Storey Residential Tower",
    handoverDate: "Q4 2027",
    amenities: [
      "Infinity Swimming Pool",
      "Rooftop Garden",
      "Smart Home System",
      "Gym & Fitness Center",
      "Children's Play Area",
      "Concierge Service",
      "Underground Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
    ],
    galleryCount: 12,
  },
  {
    id: "2",
    slug: "green-valley",
    name: "Green Valley",
    tagline: "Nature-inspired sustainable living",
    category: "residential",
    location: "Baridhara, Dhaka",
    featured: true,
    description:
      "Nestled among lush greenery, Green Valley is EcoNest's flagship eco-friendly residential community. Featuring solar-powered common areas, rainwater harvesting, and expansive green spaces, this project proves that luxury and sustainability can coexist beautifully. Residents enjoy a tranquil environment without compromising on urban conveniences.",
    unitSizes: "1,800 - 4,200 sq ft",
    landSize: "120 Katha",
    buildingType: "Townhouse & Villa Community",
    handoverDate: "Q2 2027",
    amenities: [
      "Solar Power System",
      "Rainwater Harvesting",
      "Community Garden",
      "Jogging Track",
      "Clubhouse",
      "24/7 Security",
      "EV Charging Stations",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
    ],
    galleryCount: 15,
  },
  {
    id: "3",
    slug: "skyline-residence",
    name: "Skyline Residence",
    tagline: "Elevate your lifestyle, literally",
    category: "residential",
    location: "Banani, Dhaka",
    featured: true,
    description:
      "Skyline Residence offers a curated collection of 45 exclusive apartments with double-height ceilings and private terraces. Located in the vibrant Banani neighborhood, it provides the perfect balance of tranquility and connectivity. Each unit features imported marble flooring, designer kitchens, and floor-to-ceiling windows framing the city skyline.",
    unitSizes: "2,100 - 4,800 sq ft",
    landSize: "48 Katha",
    buildingType: "25-Storey Luxury Tower",
    handoverDate: "Q1 2028",
    amenities: [
      "Private Terrace",
      "Wine Cellar",
      "Spa & Sauna",
      "Helipad Access",
      "BBQ Zone",
      "Mini Theater",
      "Valet Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop",
    ],
    galleryCount: 10,
  },
  {
    id: "4",
    slug: "eco-tower",
    name: "Eco Tower",
    tagline: "The future of commercial excellence",
    category: "commercial",
    location: "Motijheel C/A, Dhaka",
    featured: true,
    description:
      "Eco Tower sets the benchmark for sustainable commercial real estate in Bangladesh. This LEED Gold-certified building integrates cutting-edge energy systems with premium office spaces designed for the modern enterprise. With automated climate control, high-speed elevators, and flexible floor plans, Eco Tower empowers businesses to thrive responsibly.",
    unitSizes: "3,000 - 15,000 sq ft per floor",
    landSize: "85 Katha",
    buildingType: "40-Storey Commercial Tower",
    handoverDate: "Q3 2027",
    amenities: [
      "LEED Gold Certification",
      "Automated Parking",
      "Conference Facilities",
      "Food Court",
      "Green Roof",
      "High-Speed Elevators",
      "Backup Power Generation",
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop",
    ],
    galleryCount: 18,
  },
  {
    id: "5",
    slug: "the-oasis",
    name: "The Oasis",
    tagline: "Your private retreat in the city",
    category: "residential",
    location: "Dhanmondi, Dhaka",
    featured: false,
    description:
      "The Oasis brings resort-style living to Dhanmondi with its tropical landscaping and serene water features. This boutique development features only 28 carefully crafted apartments, ensuring privacy and exclusivity for every resident. Enjoy morning yoga by the reflecting pool and evening gatherings at the rooftop lounge.",
    unitSizes: "1,600 - 3,200 sq ft",
    landSize: "35 Katha",
    buildingType: "18-Storey Boutique Residence",
    handoverDate: "Q4 2026",
    amenities: [
      "Reflecting Pool",
      "Rooftop Lounge",
      "Yoga Studio",
      "Landscaped Gardens",
      "Library & Reading Room",
      "Power Backup",
    ],
    images: [
      "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1200&h=800&fit=crop",
    ],
    galleryCount: 8,
  },
  {
    id: "6",
    slug: "metro-living",
    name: "Metro Living",
    tagline: "Connected to everything that matters",
    category: "commercial",
    location: "Uttara, Dhaka",
    featured: false,
    description:
      "Metro Living is a mixed-use development strategically positioned adjacent to the metro rail station in Uttara. Combining modern residential units with retail and office spaces, it creates a vibrant live-work-play environment. The project is designed for young professionals and families who value connectivity and convenience above all else.",
    unitSizes: "850 - 2,200 sq ft",
    landSize: "55 Katha",
    buildingType: "Mixed-Use Complex (28 Storeys)",
    handoverDate: "Q2 2028",
    amenities: [
      "Metro Rail Access",
      "Retail Plaza",
      "Co-working Spaces",
      "Indoor Sports Complex",
      "Daycare Center",
      "Supermarket",
    ],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
    ],
    galleryCount: 14,
  },
  {
    id: "7",
    slug: "sunset-plaza",
    name: "Sunset Plaza",
    tagline: "West-facing elegance, every evening",
    category: "residential",
    location: "Bashundhara R/A, Dhaka",
    featured: false,
    description:
      "Sunset Plaza is architecturally designed to capture breathtaking western sunsets from every west-facing unit. The curved glass facade creates a striking visual landmark while maximizing natural light. Residents enjoy thoughtfully planned interiors with premium fixtures, a state-of-the-art fitness center, and a rooftop infinity pool overlooking the city.",
    unitSizes: "1,400 - 3,800 sq ft",
    landSize: "40 Katha",
    buildingType: "22-Storey Curved Tower",
    handoverDate: "Q1 2029",
    amenities: [
      "Infinity Pool",
      "Sunset Lounge",
      "Fitness Center",
      "Kids' Zone",
      "Multi-Purpose Hall",
      "Landscaped Deck",
    ],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=800&fit=crop",
    ],
    galleryCount: 9,
  },
  {
    id: "8",
    slug: "royal-gardens",
    name: "Royal Gardens",
    tagline: "Timeless elegance, modern comfort",
    category: "residential",
    location: "Nikunja, Dhaka",
    featured: false,
    description:
      "Royal Gardens draws inspiration from classical architecture blended with contemporary design principles. Set within meticulously manicured gardens, each villa and duplex offers unparalleled privacy with grand living spaces. The gated community features a central clubhouse, tennis courts, and a serene lake, creating an enclave of refined living away from the city's bustle.",
    unitSizes: "3,500 - 7,000 sq ft",
    landSize: "200 Katha",
    buildingType: "Gated Villa & Duplex Community",
    handoverDate: "Q3 2028",
    amenities: [
      "Private Lake",
      "Tennis Courts",
      "Clubhouse",
      "Jogging & Cycling Trails",
      "Gated Security",
      "Guest House",
      "Organic Farm Plot",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&h=800&fit=crop",
    ],
    galleryCount: 20,
  },
];
