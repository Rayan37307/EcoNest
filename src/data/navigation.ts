export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Press Room", href: "/press-room" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Press Room", href: "/press-room" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Residential Projects", href: "/projects?category=residential" },
    { label: "Commercial Projects", href: "/projects?category=commercial" },
    { label: "Property Management", href: "/contact" },
    { label: "Investment Advisory", href: "/contact" },
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591355652505", icon: "facebook" },
];

export const contactInfo = {
  address: "Ka-5/4, Mega Food Court, 1st Floor, Beside Jamuna Future Park, Bashundhara R/A, Dhaka, Bangladesh",
  phone: "+880 1731-883700",
  phone2: "+880 1716-104399",
  email: "econestpropertiesbd@gmail.com",
  hours: "Sun - Thu: 9:00 AM - 6:00 PM",
};
