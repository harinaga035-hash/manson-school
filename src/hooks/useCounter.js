import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `target` once the element enters the viewport, or immediately if `immediate` is true. */
export function useCounter(target, durationMs = 1800, immediate = false) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    let animId = null;
    let io = null;

    if (immediate) {
      started.current = true;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / durationMs);
        const isFloat = !Number.isInteger(target);
        const eased = 1 - Math.pow(1 - t, 3);
        const rawVal = target * eased;
        setValue(isFloat ? Number(rawVal.toFixed(1)) : Math.round(rawVal));
        if (t < 1) {
          animId = requestAnimationFrame(tick);
        }
      };
      animId = requestAnimationFrame(tick);
      return () => {
        started.current = false;
        if (animId) cancelAnimationFrame(animId);
      };
    }

    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / durationMs);
            const isFloat = !Number.isInteger(target);
            const eased = 1 - Math.pow(1 - t, 3);
            const rawVal = target * eased;
            setValue(isFloat ? Number(rawVal.toFixed(1)) : Math.round(rawVal));
            if (t < 1) {
              animId = requestAnimationFrame(tick);
            }
          };
          animId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);

    return () => {
      started.current = false;
      if (io) io.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [target, durationMs, immediate]);

  return { ref, value };
}
