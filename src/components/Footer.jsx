import { brand, footerLinks, navLinks } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-evergreen-950 pb-8 pt-20 text-stone-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-stone-50/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-50 font-serif text-lg text-stone-50">
                RG
              </span>
              <span className="font-serif text-xl text-stone-50">{brand.name}</span>
            </div>
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
          <p className="font-sans text-xs text-stone-400/70">Demo site — placeholder content</p>
        </div>
      </div>
    </footer>
  );
}
