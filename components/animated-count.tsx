"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCountProps {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  delayMs?: number;
}

function easeOutExpo(progress: number) {
  if (progress >= 1) {
    return 1;
  }

  return 1 - 2 ** (-10 * progress);
}

export function AnimatedCount({
  value,
  prefix = "",
  suffix = "",
  durationMs = 1100,
  delayMs = 0,
}: AnimatedCountProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frameRef.current = window.requestAnimationFrame(() => setDisplayValue(value));
      return () => {
        if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      };
    }

    let timeoutId: number | null = null;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = easeOutExpo(progress);

      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    timeoutId = window.setTimeout(() => {
      frameRef.current = window.requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [delayMs, durationMs, value]);

  return (
    <span className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
