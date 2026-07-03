export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Investing with EcoNest has been the most rewarding decision of my life. The Horizon exceeded every expectation — the build quality is exceptional, and the property value has already appreciated significantly. I trust EcoNest completely with my real estate portfolio.",
    name: "Ahmed Rahman",
    title: "Business Owner & Investor",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: "2",
    quote:
      "From the very first site visit, we could tell that EcoNest prioritizes quality over everything else. Our apartment at Green Valley is a dream home — the natural light, the green spaces, and the community atmosphere are unlike anything else in Dhaka. We couldn't be happier.",
    name: "Fatima Khan",
    title: "Interior Designer",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: "3",
    quote:
      "As an expatriate, I was looking for a developer I could trust to manage the entire process remotely. EcoNest delivered our apartment at Skyline Residence on time and with remarkable transparency. Their communication throughout the project was outstanding.",
    name: "Dr. Karim Uddin",
    title: "Medical Professional, London",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: "4",
    quote:
      "Eco Tower has transformed our business operations. The LEED-certified building not only reduces our carbon footprint but also creates an inspiring workspace for our team. EcoNest understood our commercial needs and delivered a truly world-class facility.",
    name: "Nadia Islam",
    title: "CEO, TechVentures Ltd.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: "5",
    quote:
      "What sets EcoNest apart is their unwavering commitment to their promises. Every milestone was met on schedule, every specification was delivered as agreed, and the after-handover support has been exemplary. Royal Gardens is our forever home, and we recommend EcoNest to everyone we know.",
    name: "Tariq Hassan",
    title: "Retired Civil Engineer",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
];
