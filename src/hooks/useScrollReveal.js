import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Adds .is-visible to elements matching the selector when they scroll into view. */
export function useScrollReveal(selector = ".msb-reveal") {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Use a small timeout to allow the DOM to fully render after route changes
    const timer = setTimeout(() => {
      const els = Array.from(document.querySelectorAll(selector));
      if (els.length === 0) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );
      els.forEach((el) => io.observe(el));
      
      return () => io.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [selector, pathname]);
}
