// Registry of real images, keyed by the same slug used as each
// PlaceholderImage's `slug` prop (e.g. "hero-background",
// "portfolio-1-before", "avatar-2"). Drop a new file in this folder,
// add one import + map entry here, and it swaps in automatically —
// no component changes needed.

import heroBackground from "./hero-background.jpg";
import portfolio1Before from "./portfolio-1-before.jpg";
import portfolio1After from "./portfolio-1-after.jpg";
import portfolio2Before from "./portfolio-2-before.jpg";
import portfolio2After from "./portfolio-2-after.jpg";
import portfolio3Before from "./portfolio-3-before.jpg";
import portfolio3After from "./portfolio-3-after.jpg";
import portfolio4Before from "./portfolio-4-before.jpg";
import portfolio4After from "./portfolio-4-after.jpg";

export const images = {
  "hero-background": heroBackground,
  "portfolio-1-before": portfolio1Before,
  "portfolio-1-after": portfolio1After,
  "portfolio-2-before": portfolio2Before,
  "portfolio-2-after": portfolio2After,
  "portfolio-3-before": portfolio3Before,
  "portfolio-3-after": portfolio3After,
  "portfolio-4-before": portfolio4Before,
  "portfolio-4-after": portfolio4After,
};
