export interface Review {
  id: string;
  projectSlug: string;
  author: string;
  authorRole: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export const reviews: Review[] = [
  // The Horizon
  {
    id: "1",
    projectSlug: "the-horizon",
    author: "Shafiqul Alam",
    authorRole: "Homeowner since 2025",
    rating: 5,
    date: "2026-05-12",
    title: "Worth every taka",
    comment:
      "The views from the 24th floor are unmatched in Gulshan. Build quality, finishing, and the amenities all feel genuinely premium — not just marketing talk.",
    verified: true,
  },
  {
    id: "2",
    projectSlug: "the-horizon",
    author: "Mehjabin Chowdhury",
    authorRole: "Verified Buyer",
    rating: 4,
    date: "2026-02-03",
    title: "Great tower, minor handover delays",
    comment:
      "Loved the smart home features and the infinity pool. Handover slipped by about six weeks, but the EcoNest team communicated clearly throughout.",
    verified: true,
  },

  // Green Valley
  {
    id: "3",
    projectSlug: "green-valley",
    author: "Fatima Khan",
    authorRole: "Resident",
    rating: 5,
    date: "2026-04-20",
    title: "Sustainable living done right",
    comment:
      "Our electricity bill dropped noticeably thanks to the solar common areas, and the community garden has become the heart of our weekends. A dream home.",
    verified: true,
  },
  {
    id: "4",
    projectSlug: "green-valley",
    author: "Rezaul Karim",
    authorRole: "Homeowner since 2024",
    rating: 5,
    date: "2025-11-08",
    title: "The green spaces make it",
    comment:
      "Coming from a congested part of Dhaka, the jogging track and open lawns here feel like a different city entirely. EV charging was a nice surprise too.",
    verified: true,
  },
  {
    id: "5",
    projectSlug: "green-valley",
    author: "Nusrat Jahan",
    authorRole: "Verified Buyer",
    rating: 4,
    date: "2025-09-15",
    title: "Peaceful and well maintained",
    comment:
      "Rainwater harvesting actually works as advertised. Only gripe is limited visitor parking during weekends, otherwise a fantastic community.",
    verified: true,
  },

  // Skyline Residence
  {
    id: "6",
    projectSlug: "skyline-residence",
    author: "Dr. Karim Uddin",
    authorRole: "Homeowner, London-based",
    rating: 5,
    date: "2026-01-22",
    title: "Managed remotely without a hitch",
    comment:
      "I purchased sight unseen while living abroad. EcoNest's transparency and regular video updates made the entire process stress-free. The finished unit matched every promise.",
    verified: true,
  },
  {
    id: "7",
    projectSlug: "skyline-residence",
    author: "Adiba Rahman",
    authorRole: "Verified Buyer",
    rating: 4,
    date: "2025-12-02",
    title: "Exclusive and quiet",
    comment:
      "Only 45 units in the whole building means it never feels crowded. The private terrace and imported marble flooring were the deciding factors for us.",
    verified: true,
  },

  // Eco Tower
  {
    id: "8",
    projectSlug: "eco-tower",
    author: "Nadia Islam",
    authorRole: "CEO, TechVentures Ltd.",
    rating: 5,
    date: "2026-03-30",
    title: "A genuinely LEED-worthy building",
    comment:
      "Our energy costs are down, natural light fills every floor, and clients are consistently impressed the moment they walk into the lobby.",
    verified: true,
  },
  {
    id: "9",
    projectSlug: "eco-tower",
    author: "Imran Hossain",
    authorRole: "Tenant, Managing Director",
    rating: 4,
    date: "2025-10-19",
    title: "Solid commercial space",
    comment:
      "High-speed elevators and reliable backup power mean zero downtime for our operations. Would like more food court variety, but otherwise excellent.",
    verified: true,
  },

  // The Oasis
  {
    id: "10",
    projectSlug: "the-oasis",
    author: "Farhana Ahmed",
    authorRole: "Homeowner since 2025",
    rating: 5,
    date: "2026-06-01",
    title: "Resort living in Dhanmondi",
    comment:
      "Morning yoga by the reflecting pool has become a ritual. Only 28 units means the building genuinely feels private and boutique.",
    verified: true,
  },
  {
    id: "11",
    projectSlug: "the-oasis",
    author: "Sabbir Ahmed",
    authorRole: "Verified Buyer",
    rating: 4,
    date: "2026-01-11",
    title: "Charming, tranquil, well located",
    comment:
      "The rooftop lounge and tropical landscaping give it a resort feel rarely found this close to the city center. Library room is a lovely touch.",
    verified: false,
  },

  // Metro Living
  {
    id: "12",
    projectSlug: "metro-living",
    author: "Tanvir Hasan",
    authorRole: "Resident, Young Professional",
    rating: 4,
    date: "2025-08-27",
    title: "Unbeatable connectivity",
    comment:
      "Being steps from the metro station has cut my commute in half. The co-working space downstairs is a huge bonus for freelance days.",
    verified: true,
  },
  {
    id: "13",
    projectSlug: "metro-living",
    author: "Ruma Akter",
    authorRole: "Verified Buyer",
    rating: 4,
    date: "2025-07-14",
    title: "Great for young families",
    comment:
      "The daycare center and supermarket on-site make daily life so much easier. Retail plaza gets a bit noisy on weekends, but manageable.",
    verified: true,
  },

  // Sunset Plaza
  {
    id: "14",
    projectSlug: "sunset-plaza",
    author: "Zara Islam",
    authorRole: "Homeowner since 2025",
    rating: 5,
    date: "2026-05-29",
    title: "Sunsets exactly as promised",
    comment:
      "Every evening the living room glows gold. The curved glass facade isn't just for looks — the natural light throughout the day is incredible.",
    verified: true,
  },
  {
    id: "15",
    projectSlug: "sunset-plaza",
    author: "Omar Faruk",
    authorRole: "Verified Buyer",
    rating: 4,
    date: "2025-12-20",
    title: "Beautiful building, active fitness center",
    comment:
      "The rooftop infinity pool overlooking the city is the highlight for our family. Kids' zone keeps our children entertained on weekends.",
    verified: true,
  },

  // Royal Gardens
  {
    id: "16",
    projectSlug: "royal-gardens",
    author: "Tariq Hassan",
    authorRole: "Homeowner, Retired Civil Engineer",
    rating: 5,
    date: "2026-02-17",
    title: "Our forever home",
    comment:
      "Every milestone during construction was met on schedule. The private lake and organic farm plot give this gated community a rare, timeless character.",
    verified: true,
  },
  {
    id: "17",
    projectSlug: "royal-gardens",
    author: "Lubna Sultana",
    authorRole: "Verified Buyer",
    rating: 5,
    date: "2025-10-05",
    title: "Grand, private, impeccably maintained",
    comment:
      "The clubhouse and tennis courts are always well kept, and the after-handover support team responds within hours. Highly recommend for families.",
    verified: true,
  },
];

export function getReviewsByProjectSlug(slug: string): Review[] {
  return reviews.filter((review) => review.projectSlug === slug);
}

export function getAverageRating(slug: string): number {
  const projectReviews = getReviewsByProjectSlug(slug);
  if (projectReviews.length === 0) return 0;

  const total = projectReviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / projectReviews.length) * 10) / 10;
}

export function getReviewCount(slug: string): number {
  return getReviewsByProjectSlug(slug).length;
}

export function getOverallAverageRating(): number {
  if (reviews.length === 0) return 0;

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
}
