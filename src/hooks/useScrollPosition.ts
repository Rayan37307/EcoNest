"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrollPosition {
  scrollY: number;
  isScrolled: boolean;
}

const SCROLL_THRESHOLD = 80;

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    isScrolled: false,
  });

  const handleScroll = useCallback(() => {
    setScrollPosition({
      scrollY: window.scrollY,
      isScrolled: window.scrollY > SCROLL_THRESHOLD,
    });
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Set initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
}
