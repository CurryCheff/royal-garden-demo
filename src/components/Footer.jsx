import { brand, footerLinks, navLinks } from "../data/content";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-evergreen-950 pb-8 pt-20 text-stone-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-stone-50/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Royal Garden Landscapes and Paving logo" className="h-20 w-auto" />
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-stone-300/80">
              Premium landscaping and paving, crafted for properties that deserve more.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-xl text-stone-50/60">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-stone-300/80 transition-colors hover:text-terracotta-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-xl text-stone-50/60">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 font-sans text-sm text-stone-300/80">
              <li>{brand.phone}</li>
              <li>{brand.email}</li>
              <li>{brand.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest-xl text-stone-50/60">
              Follow
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-stone-300/80 transition-colors hover:text-terracotta-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="font-sans text-xs text-stone-400/70">
            &copy; {year} {brand.name}. All rights reserved.
          </p>
          <p className="max-w-md text-center font-sans text-xs text-stone-400/70 sm:text-right">
            Concept demo — hero, portfolio, and testimonial imagery are AI-generated placeholders,
            not real completed projects or client reviews.
          </p>
        </div>
      </div>
    </footer>
  );
}
