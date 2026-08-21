import { useRef } from "react";
import { services } from "../data/content";
import { iconMap } from "./icons";
import { useStaggerReveal } from "../hooks/useGsap";
import Reveal from "./Reveal";

export default function Services() {
  const gridRef = useRef(null);
  useStaggerReveal(gridRef, "[data-service-card]", { stagger: 0.12, y: 50 });

  return (
    <section id="services" className="bg-stone-50 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <span className="font-sans text-xs uppercase tracking-widest-xl text-terracotta-600">
            What We Do
          </span>
          <h2 className="mt-4 font-serif text-4xl text-stone-900 sm:text-5xl">
            Grounds, Reimagined With Precision
          </h2>
          <p className="mt-5 font-sans leading-relaxed text-stone-700">
            From foundational hardscape to living design, every service is delivered with the
            same standard of craftsmanship — refined, durable, and built around your property.
          </p>
        </Reveal>

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                data-service-card
                className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-8 transition-all duration-400 hover:-translate-y-2 hover:border-evergreen-700/30 hover:shadow-[0_24px_48px_-24px_rgba(20,42,31,0.35)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-evergreen-800 text-stone-50 transition-colors duration-300 group-hover:bg-terracotta-600">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-stone-900">{service.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-stone-700">
                  {service.description}
                </p>
                <span className="mt-6 font-sans text-xs uppercase tracking-widest-xl text-evergreen-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
