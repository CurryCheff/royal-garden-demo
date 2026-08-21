import { useRef } from "react";
import { process } from "../data/content";
import { useStaggerReveal } from "../hooks/useGsap";
import Reveal from "./Reveal";

export default function Process() {
  const listRef = useRef(null);
  useStaggerReveal(listRef, "[data-process-step]", { stagger: 0.15, y: 30 });

  return (
    <section id="process" className="bg-evergreen-950 py-28 text-stone-50 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-sans text-xs uppercase tracking-widest-xl text-terracotta-400">
            How We Work
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">A Clear Path From Vision to Finished Ground</h2>
        </Reveal>

        <div ref={listRef} className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, index) => (
            <div key={item.step} data-process-step className="relative">
              <span className="font-serif text-6xl text-stone-50/15">{item.step}</span>
              <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-stone-200/75">
                {item.description}
              </p>
              {index < process.length - 1 && (
                <span className="absolute right-[-1.5rem] top-3 hidden h-px w-8 bg-stone-50/20 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
