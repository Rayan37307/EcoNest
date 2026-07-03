"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

interface UseCountUpReturn {
  count: number;
  ref: React.RefObject<HTMLDivElement | null>;
}

// Ease-out cubic easing function
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp({
  end,
  duration = 2000,
  startOnView = true,
}: UseCountUpOptions): UseCountUpReturn {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.round(easedProgress * end);

      setCount(currentValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [end, duration]);

  useEffect(() => {
    if (hasStarted) {
      startAnimation();
    }

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [hasStarted, startAnimation]);

  // IntersectionObserver to trigger animation when in view
  useEffect(() => {
    if (!startOnView || !ref.current) return;

    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [startOnView]);

  return { count, ref };
}
