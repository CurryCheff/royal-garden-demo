# Royal Garden — Image Generation Prompts

16 images total. Each entry lists the **placeholder ID** shown in the live
placeholder box (so you can match the generated image to its slot), the
**file it belongs in**, and a detailed prompt for ChatGPT / DALL·E image
generation. All prompts share a consistent aesthetic: deep evergreen,
warm stone gray, terracotta accents, soft golden-hour or overcast-editorial
light, upscale residential/commercial landscaping — never rustic or DIY.

Recommended common suffix for every prompt if your tool supports a style
modifier: `, shot on a full-frame camera, shallow depth of field, natural
light, editorial landscape-architecture photography, no people unless
specified, no text or watermarks, 16:9`.

---

## Hero

**1. Hero Background** (`src/components/Hero.jsx`)
> A sweeping wide-angle photograph of a luxury estate's backyard landscape at golden hour, featuring a manicured lawn, sculpted hedges, a large natural stone patio with built-in seating, and mature trees framing the scene. Warm late-afternoon sunlight rakes across the grass casting long soft shadows. Deep green foliage, warm terracotta and buff stone tones. Feels elegant, expansive, and aspirational — the kind of image used in a premium landscaping company's hero banner. Slightly desaturated, cinematic color grade.

---

## Portfolio — Before & After Pairs

**2. Portfolio 1 — Before** / **3. Portfolio 1 — After**
*Hillside Terrace Residence (Paving)*
> Before: A worn, cracked concrete patio on a sloped backyard, with faded pavers, weeds growing through seams, and an overgrown, neglected hillside garden bed. Overcast, flat lighting, documentary real-estate-inspection photo style.
> After: The same hillside backyard transformed into a tiered natural stone terrace with premium large-format pavers, integrated stone retaining walls, and neatly planted ornamental grasses along the edges. Warm afternoon light, crisp clean lines, premium hardscape photography.

**4. Portfolio 2 — Before** / **5. Portfolio 2 — After**
*Coastal Courtyard Garden (Garden Design)*
> Before: A bare, plain concrete courtyard between two building walls, a few dying potted plants, cracked pavement, and an unused rusty patio set. Flat gray daylight, slightly dreary.
> After: The same courtyard reimagined as a lush coastal garden retreat with layered planting beds, ornamental grasses, a small water feature, and a curved flagstone path. Soft diffused daylight, rich greens with terracotta planters, inviting and serene.

**6. Portfolio 3 — Before** / **7. Portfolio 3 — After**
*Estate Driveway & Entrance (Paving)*
> Before: A cracked, faded asphalt driveway leading to a large home, with patchy edges, weeds along the border, and a plain, unremarkable entrance. Midday flat light.
> After: An elegant paved driveway and entrance using large-format stone pavers in a herringbone pattern, bordered by low manicured hedges and soft landscape lighting fixtures, leading to a grand front entrance. Warm early-evening light with lighting fixtures glowing softly.

**8. Portfolio 4 — Before** / **9. Portfolio 4 — After**
*Formal Lawn & Hedgerow (Landscaping)*
> Before: An unkempt front lawn with patchy grass, overgrown shrubs, and no clear structure, in front of a traditional home. Flat overcast lighting.
> After: The same front lawn transformed into a formal landscape with a crisp manicured lawn, precisely trimmed boxwood hedgerows, and symmetrical planting beds framing the walkway. Bright clear daylight, saturated greens, magazine-quality landscape photography.

**10. Portfolio 5 — Before** / **11. Portfolio 5 — After**
*Poolside Stone Patio (Paving)*
> Before: A dated, cracked concrete pool deck with faded surface, stained edges, and minimal landscaping around an in-ground pool. Bright harsh midday sun.
> After: A refined poolside patio finished in warm natural stone pavers, with built-in loungers, potted olive trees, and low terracotta-toned retaining walls surrounding the pool. Golden-hour lighting reflecting softly off the water.

**12. Portfolio 6 — Before** / **13. Portfolio 6 — After**
*Sunken Garden Retreat (Garden Design)*
> Before: A plain, sunken backyard area with patchy grass, a few scattered weeds, and no defined landscaping structure, bordered by a plain wood fence. Flat gray light.
> After: The same sunken yard transformed into a lush garden retreat with tiered stone steps leading down, layered planting beds, a small stone fire pit seating area, and string lighting overhead. Warm dusk lighting, inviting and intimate atmosphere.

---

## Testimonial Avatars

**14. Avatar 1 — Eleanor Whitfield**
> A warm, professional headshot-style portrait of a woman in her late 50s with an elegant, approachable demeanor, soft natural lighting, neutral warm-gray background, subtle smile, shoulders-up composition. Photorealistic, editorial portrait style — not a stock-photo cliché.

**15. Avatar 2 — Marcus Delgado**
> A warm, professional headshot-style portrait of a man in his mid-40s with a friendly, confident expression, soft natural lighting, neutral warm-gray background, shoulders-up composition. Photorealistic, editorial portrait style.

**16. Avatar 3 — Priya Anand**
> A warm, professional headshot-style portrait of a woman in her mid-30s, business-casual attire, confident and approachable expression, soft natural lighting, neutral warm-gray background, shoulders-up composition. Photorealistic, editorial portrait style.

---

## Notes

- The **Royal Garden logo** in the nav and footer is currently a simple
  coded monogram (circle + "RG" + wordmark in `Navbar.jsx` / `Footer.jsx`),
  not a generated image. Logos are vector/brand assets best made in
  Illustrator or a logo tool once the client is confirmed — not a great
  fit for photographic AI generation, so it's intentionally left out of
  this list.
- Once you have a generated image for a slot, replace the corresponding
  `<PlaceholderImage .../>` usage with a real `<img src="..." alt="..." />`
  (the `alt` text is already written for each slot and can be reused).
