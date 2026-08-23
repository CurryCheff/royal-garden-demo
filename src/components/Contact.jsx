import { useRef } from "react";
import { brand, whatsappUrl, telUrl, mailUrl } from "../data/content";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "./icons";
import { useStaggerReveal } from "../hooks/useGsap";
import Reveal from "./Reveal";

const ctaCards = [
  {
    id: "whatsapp",
    href: whatsappUrl,
    external: true,
    Icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat instantly",
  },
  {
    id: "call",
    href: telUrl,
    external: false,
    Icon: PhoneIcon,
    label: "Call Us",
    value: brand.phone,
  },
  {
    id: "email",
    href: mailUrl,
    external: false,
    Icon: MailIcon,
    label: "Email Us",
    value: brand.email,
  },
];

export default function Contact() {
  const gridRef = useRef(null);
  useStaggerReveal(gridRef, "[data-cta-card]", { stagger: 0.12, y: 40 });

  return (
    <section id="contact" className="bg-stone-100 py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="font-sans text-xs uppercase tracking-widest-xl text-terracotta-600">
            Get Started
          </span>
          <h2 className="mt-4 font-serif text-4xl text-stone-900 sm:text-5xl">
            Let's Talk About Your Project
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans leading-relaxed text-stone-700">
            Reach out directly using whichever method is easiest — we typically respond within
            one business day.
          </p>
        </Reveal>

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ctaCards.map(({ id, href, external, Icon, label, value }) => (
            <a
              key={id}
              href={href}
              data-cta-card
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-8 transition-all duration-400 hover:-translate-y-2 hover:border-evergreen-700/30 hover:shadow-[0_24px_48px_-24px_rgba(20,42,31,0.35)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-evergreen-800 text-stone-50 transition-colors duration-300 group-hover:bg-terracotta-600">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-stone-900">{label}</h3>
              <p className="mt-2 font-sans text-sm text-stone-700">{value}</p>
            </a>
          ))}
        </div>

        <p className="mt-10 font-sans text-sm text-stone-500">Available {brand.hours}</p>
      </div>
    </section>
  );
}
