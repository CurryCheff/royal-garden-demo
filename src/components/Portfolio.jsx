import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../hooks/useGsap";
import { portfolioCategories, portfolioItems } from "../data/content";
import PlaceholderImage from "./PlaceholderImage";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const container = gridRef.current;
    if (!container) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        container.querySelectorAll("[data-gallery-card]"),
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }
      );
    }, container);

    // Filtering changes the grid's row count, which shifts every
    // section below it — recalculate trigger positions once the new
    // layout has been painted.
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="portfolio" className="bg-stone-100 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="font-sans text-xs uppercase tracking-widest-xl text-terracotta-600">
              Our Work
            </span>
            <h2 className="mt-4 font-serif text-4xl text-stone-900 sm:text-5xl">
              Before &amp; After Transformations
            </h2>
            <p className="mt-5 font-sans leading-relaxed text-stone-700">
              A selection of recent projects, showing the property as it stood and as our team
              left it.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2 font-sans text-xs uppercase tracking-wider transition-colors duration-300 ${
                  activeCategory === cat
                    ? "border-evergreen-800 bg-evergreen-800 text-stone-50"
                    : "border-stone-300 bg-transparent text-stone-700 hover:border-evergreen-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              data-gallery-card
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white"
            >
              <div className="grid grid-cols-2 gap-px bg-stone-200">
                <div className="relative">
                  <PlaceholderImage
                    promptId={`${item.id}a — ${item.imagePromptBefore}`}
                    label="Before"
                    alt={`${item.title} — before photo`}
                    className="aspect-[3/4] w-full"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-stone-900/70 px-2.5 py-1 text-[10px] uppercase tracking-wider text-stone-50">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <PlaceholderImage
                    promptId={`${item.id}b — ${item.imagePromptAfter}`}
                    label="After"
                    alt={`${item.title} — after photo`}
                    className="aspect-[3/4] w-full"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-terracotta-600 px-2.5 py-1 text-[10px] uppercase tracking-wider text-stone-50">
                    After
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <h3 className="font-serif text-lg text-stone-900">{item.title}</h3>
                <span className="font-sans text-xs uppercase tracking-wider text-evergreen-700">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
