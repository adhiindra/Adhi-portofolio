"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface UseParallaxReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}

/**
 * Reusable parallax hook. Tracks an element's scroll progress and returns
 * a `y` motion value offset by the given speed, plus an optional opacity fade.
 */
export function useParallax(
  speed = 0.5,
  fadeOut = false
): UseParallaxReturn {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress [0, 1] to a Y offset
  const range = 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  // Optional opacity fade: fully visible in middle, fades at edges
  const opacity = useTransform(
    scrollYProgress,
    fadeOut ? [0, 0.2, 0.8, 1] : [0, 0, 1, 1],
    fadeOut ? [0, 1, 1, 0] : [1, 1, 1, 1]
  );

  return { ref, y, opacity };
}

/** Hook for full-page scroll progress (0 at top, 1 at bottom) */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return scrollYProgress;
}
