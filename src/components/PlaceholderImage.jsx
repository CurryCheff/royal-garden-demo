// Reusable placeholder for an image slot. Swap for a real <img> once
// assets are generated — each `promptId` corresponds to a numbered
// prompt in IMAGE_PROMPTS.md.
export default function PlaceholderImage({
  promptId,
  label,
  alt,
  className = "",
  dark = false,
  // "center" suits slots with no foreground text (gallery cards,
  // avatars). "corner" tucks the label away in a fixed corner instead
  // of the true center, so it can't collide with vertically-centered
  // foreground copy (e.g. the hero headline) at any viewport size.
  align = "center",
}) {
  const stripeColor = dark ? "rgba(255,255,255,0.14)" : "rgba(85,80,74,0.1)";
  const corner = align === "corner";

  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${stripeColor} 0px, ${stripeColor} 2px, transparent 2px, transparent 14px)`,
      }}
      className={`relative flex overflow-hidden border-2 border-dashed ${
        corner ? "items-end justify-end" : "items-center justify-center"
      } ${
        dark
          ? "border-stone-100/35 bg-stone-500"
          : "border-stone-400/60 bg-stone-200"
      } ${className}`}
    >
      <div
        className={`flex flex-col gap-2 ${
          corner ? "items-end p-4 text-right" : "items-center p-4 text-center"
        }`}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          className={dark ? "opacity-80" : "opacity-60"}
        >
          <path
            d="M3 17.5L8.5 10l4 5 3-3.5L21 17.5"
            stroke={dark ? "#efebe3" : "#55504a"}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="17" cy="7" r="2" stroke={dark ? "#efebe3" : "#55504a"} strokeWidth="1.4" />
          <rect
            x="2.5"
            y="3.5"
            width="19"
            height="17"
            rx="1.5"
            stroke={dark ? "#efebe3" : "#55504a"}
            strokeWidth="1.4"
          />
        </svg>
        <span
          className={`max-w-[16rem] font-sans text-[11px] uppercase tracking-widest-xl ${
            dark ? "text-stone-100/90" : "text-stone-700/90"
          }`}
        >
          {label}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-sans ${
            dark ? "bg-stone-100/15 text-stone-100/70" : "bg-stone-900/8 text-stone-700/70"
          }`}
        >
          {promptId}
        </span>
      </div>
    </div>
  );
}
