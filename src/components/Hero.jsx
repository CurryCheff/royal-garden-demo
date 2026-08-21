import { useRef } from "react";
import { useParallax } from "../hooks/useGsap";
import { hero } from "../data/content";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  const bgRef = useRef(null);
  useParallax(bgRef, { speed: 0.4 });

  return (
    <section id="top" className="relative isolate flex h-screen min-h-[640px] items-center overflow-hidden bg-evergreen-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div ref={bgRef} className="absolute inset-[-10%]">
          <PlaceholderImage
            promptId="1 — hero-background"
            label="Hero Background: sweeping estate landscape at golden hour"
            alt="Wide-angle photograph of a manicured estate garden and stone patio at golden hour"
            className="h-full w-full"
            dark
            align="corner"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-evergreen-950/95 via-evergreen-950/45 to-evergreen-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-evergreen-950/60 via-transparent to-evergreen-950/20" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal delay={0.1}>
            <span className="mb-6 inline-block font-sans text-xs uppercase tracking-widest-xl text-terracotta-400">
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.25}>
            <h1 className="font-serif text-5xl leading-[1.08] text-stone-50 sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-stone-200/90 sm:text-lg">
              {hero.subheading}
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <WhatsAppButton
                iconClassName="h-5 w-5"
                className="flex items-center gap-2 rounded-full bg-terracotta-600 px-8 py-4 font-sans text-sm uppercase tracking-wider text-stone-50 transition-colors duration-300 hover:bg-terracotta-700"
              >
                {hero.cta}
              </WhatsAppButton>
              <a
                href="#portfolio"
                className="group flex items-center gap-2 font-sans text-sm uppercase tracking-wider text-stone-50"
              >
                {hero.secondaryCta}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone-50/70 sm:flex">
        <span className="font-sans text-[10px] uppercase tracking-widest-xl">Scroll</span>
        <span className="h-10 w-px bg-stone-50/40" />
      </div>
    </section>
  );
}
