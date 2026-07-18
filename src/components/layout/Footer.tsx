import Link from "next/link";
import Image from "next/image";
import { footerLinks, contactInfo, socialLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block ">
              <Image
                src="/logo8.png"
                alt="EcoNest Properties"
                width={1672}
                height={941}
                className="h-25 w-auto"
              />
            </Link>
            <p className="mt-4 text-white text-base leading-relaxed max-w-xs">
              Creating sustainable living spaces that harmonize with nature.
              We build homes that nurture both you and the environment.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex gap-3 text-base text-white">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>{contactInfo.address}</span>
              </li>

              {/* Phone */}
              <li className="flex gap-3 text-base text-white">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <div className="space-y-1">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="block hover:text-gold transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`tel:${contactInfo.phone2}`}
                    className="block hover:text-gold transition-colors duration-200"
                  >
                    {contactInfo.phone2}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-3 text-base text-white">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>

              {/* Hours */}
              <li className="flex gap-3 text-base text-white">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) =>
              renderSocialIconLink(social.label, social.href)
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            © 2026 EcoNest Properties. All Rights Reserved.
          </p>
          <p className="text-sm text-white">
            Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

function renderSocialIconLink(
  label: string,
  href: string
) {
  return (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold text-white hover:text-charcoal transition-colors duration-200"
      aria-label={label}
    >
      <SocialIcon name={label} />
    </a>
  );
}

function SocialIcon({ name }: { name: string }) {
  const props = {
    className: "w-4 h-4",
    fill: "currentColor",
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "Facebook":
      return (
        <svg {...props}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return null;
  }
}
