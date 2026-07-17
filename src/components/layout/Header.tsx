"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white",
          isScrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 rounded-md px-3 py-1.5">
              <Image
                src="/eco.png"
                alt="EcoNest Properties"
                width={666}
                height={375}
                priority
                className="h-14 w-auto md:h-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm uppercase tracking-wider transition-colors duration-200",
                    pathname === link.href
                      ? "text-primary font-medium"
                      : "text-charcoal/70 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side: CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex px-5 py-2.5 bg-primary text-white text-sm uppercase tracking-wider rounded-sm transition-colors duration-200 hover:bg-primary-dark"
              >
                Contact
              </Link>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
                aria-label="Open menu"
              >
                <span className="block w-6 h-0.5 bg-charcoal transition-all duration-300" />
                <span className="block w-6 h-0.5 bg-charcoal transition-all duration-300" />
                <span className="block w-4 h-0.5 bg-charcoal transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
