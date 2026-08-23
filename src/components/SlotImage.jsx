import { useEffect, useRef, useState } from "react";
import { images } from "../assets/images";
import PlaceholderImage from "./PlaceholderImage";

// Drop-in replacement for PlaceholderImage: renders the real photo
// once one exists in the image registry for this `slug`, otherwise
// falls back to the placeholder box. Real photos show a shimmer
// skeleton until they finish loading, both to mask network latency
// on the larger portfolio images and because a brief loading state
// reads as more "alive" than content just popping in.
export default function SlotImage({
  slug,
  promptId,
  label,
  alt,
  className = "",
  dark = false,
  align = "center",
}) {
  const src = images[slug];
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, [src]);

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 overflow-hidden bg-stone-200 transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/70 to-transparent bg-[length:200%_100%]" />
        </div>
      </div>
    );
  }

  return (
    <PlaceholderImage
      promptId={promptId}
      label={label}
      alt={alt}
      className={className}
      dark={dark}
      align={align}
    />
  );
}
