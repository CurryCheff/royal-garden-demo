import { useRef } from "react";
import { testimonials } from "../data/content";
import { useStaggerReveal } from "../hooks/useGsap";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function Testimonials() {
  const gridRef = useRef(null);
  useStaggerReveal(gridRef, "[data-testimonial-card]", { stagger: 0.14, y: 40 });

  return (
    <section id="testimonials" className="bg-stone-50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-sans text-xs uppercase tracking-widest-xl text-terracotta-600">
            Client Word
          </span>
          <h2 className="mt-4 font-serif text-4xl text-stone-900 sm:text-5xl">
            Trusted By Homeowners &amp; Businesses Alike
          </h2>
        </Reveal>

        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              data-testimonial-card
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-8"
            >
              <span className="font-serif text-5xl leading-none text-terracotta-500">&ldquo;</span>
              <p className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-stone-800">
                {t.quote}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <PlaceholderImage
                  promptId={t.avatarPrompt}
                  label="Avatar"
                  alt={`Portrait of ${t.name}`}
                  className="h-14 w-14 shrink-0 rounded-full"
                />
                <div>
                  <p className="font-sans text-sm font-medium text-stone-900">{t.name}</p>
                  <p className="font-sans text-xs text-stone-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
