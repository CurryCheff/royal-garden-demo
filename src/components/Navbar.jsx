import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "../hooks/useGsap";
import { brand, navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onUpdate: (self) => setScrolled(self.scroll() > 80),
    });
    triggerRef.current = st;
    return () => st.kill();
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-stone-50/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border font-serif text-lg transition-colors duration-500 ${
              solid
                ? "border-evergreen-700 text-evergreen-700"
                : "border-stone-50 text-stone-50"
            }`}
          >
            RG
          </span>
          <span
            className={`flex flex-col leading-none transition-colors duration-500 ${
              solid ? "text-stone-900" : "text-stone-50"
            }`}
          >
            <span className="font-serif text-xl tracking-wide">{brand.name}</span>
            <span className="text-[10px] uppercase tracking-widest-xl opacity-70">
              {brand.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm uppercase tracking-wider transition-colors duration-300 hover:opacity-70 ${
                solid ? "text-stone-700" : "text-stone-50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-terracotta-600 px-6 py-2.5 font-sans text-sm uppercase tracking-wider text-stone-50 transition-colors duration-300 hover:bg-terracotta-700"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${
              solid ? "bg-stone-900" : "bg-stone-50"
            } ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              solid ? "bg-stone-900" : "bg-stone-50"
            } ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-stone-200 bg-stone-50 px-6 pb-6 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 font-sans text-sm uppercase tracking-wider text-stone-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-terracotta-600 px-6 py-3 text-center font-sans text-sm uppercase tracking-wider text-stone-50"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
