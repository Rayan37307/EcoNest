"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, socialLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[300px] bg-cream shadow-2xl transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close Button */}
        <div className="flex items-center justify-end p-6">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-charcoal/5 hover:bg-charcoal/10 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 text-charcoal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "py-3 text-lg font-medium border-b border-sand transition-colors duration-200",
                pathname === link.href
                  ? "text-primary"
                  : "text-charcoal hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="px-6 pt-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center px-6 py-3 bg-primary text-white text-sm uppercase tracking-wider rounded-sm transition-colors duration-200 hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="flex items-center gap-4 pt-6 border-t border-sand">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-charcoal/5 hover:bg-primary hover:text-white text-charcoal transition-colors duration-200"
                aria-label={social.label}
              >
                {renderSocialIcon(social.label)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function renderSocialIcon(label: string) {
  const iconProps = {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
  };

  switch (label.toLowerCase()) {
    case "facebook":
      return (
        <svg {...iconProps}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5l-5-5L7.5 9.5l3 3 6-6L18 8l-7.5 8.5z" />
        </svg>
      );
  }
}
