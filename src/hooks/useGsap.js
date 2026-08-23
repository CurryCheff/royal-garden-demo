import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Fades + slides a single element in as it enters the viewport.
 */
export function useReveal(ref, { y = 40, delay = 0, start = "top 85%" } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [ref, y, delay, start]);
}

/**
 * Staggers the reveal of matching children inside a container as it
 * enters the viewport — fading in while sliding from `x`/`y` offsets
 * to their resting position. Pass a positive `x` (e.g. 120) to have
 * items enter from the right; leave `y` for the usual slide-up.
 */
export function useStaggerReveal(
  containerRef,
  selector,
  { x = 0, y = 40, stagger = 0.12, start = "top 80%" } = {}
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const items = container.querySelectorAll(selector);
      gsap.fromTo(
        items,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [containerRef, selector, x, y, stagger, start]);
}

/**
 * Subtle parallax drift on a background element as the page scrolls
 * past its container.
 */
export function useParallax(ref, { speed = 0.35 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -speed * 40 },
        {
          yPercent: speed * 40,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [ref, speed]);
}
