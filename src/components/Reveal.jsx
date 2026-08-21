import { useRef } from "react";
import { useReveal } from "../hooks/useGsap";

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  y = 40,
  delay = 0,
  ...props
}) {
  const ref = useRef(null);
  useReveal(ref, { y, delay });

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}
