// Centralized site copy and content. Swap placeholder text/images here
// once real branding and client-approved copy are available.

export const brand = {
  name: "Royal Garden",
  tagline: "Landscaping & Paving",
  phone: "(555) 042-1890",
  // E.164 format (country code + number, digits only) for the wa.me link below.
  whatsappNumber: "15550421890",
  email: "hello@royalgarden.example",
  address: "128 Arbor Hill Road, Kingswood, CA 94210",
  hours: "Mon–Sat, 8am–6pm",
};

const whatsappMessage = "Hi Royal Garden! I'd like to talk about a project.";
export const whatsappUrl = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
export const telUrl = `tel:+${brand.whatsappNumber}`;
export const mailUrl = `mailto:${brand.email}`;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Est. Outdoor Craftsmanship",
  headline: "Transform Your Outdoor Space Into a Living Masterpiece",
  subheading:
    "Royal Garden designs and builds refined landscapes and paved surroundings that elevate every property — crafted with precision, built to endure.",
  cta: "Chat on WhatsApp",
  secondaryCta: "View Our Work",
  imagePrompt: "hero-background",
};

export const services = [
  {
    id: "paving",
    title: "Paving",
    description:
      "Driveways, patios, and walkways built with premium natural stone and precision-cut pavers for a seamless, lasting finish.",
    icon: "paving",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Full-property landscape design and installation — planting, lawns, irrigation, and lighting tailored to your grounds.",
    icon: "landscaping",
  },
  {
    id: "garden-design",
    title: "Garden Design",
    description:
      "Bespoke garden concepts blending structure and botany, from formal parterres to naturalistic, low-maintenance retreats.",
    icon: "garden-design",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Ongoing seasonal care and upkeep programs that keep your landscape and hardscape looking pristine year-round.",
    icon: "maintenance",
  },
];

export const portfolioCategories = ["All", "Paving", "Landscaping", "Garden Design"];

export const portfolioItems = [
  {
    id: 1,
    title: "Hillside Terrace Residence",
    category: "Paving",
    imagePromptBefore: "portfolio-1-before",
    imagePromptAfter: "portfolio-1-after",
  },
  {
    id: 2,
    title: "Coastal Courtyard Garden",
    category: "Garden Design",
    imagePromptBefore: "portfolio-2-before",
    imagePromptAfter: "portfolio-2-after",
  },
  {
    id: 3,
    title: "Estate Driveway & Entrance",
    category: "Paving",
    imagePromptBefore: "portfolio-3-before",
    imagePromptAfter: "portfolio-3-after",
  },
  {
    id: 4,
    title: "Formal Lawn & Hedgerow",
    category: "Landscaping",
    imagePromptBefore: "portfolio-4-before",
    imagePromptAfter: "portfolio-4-after",
  },
  {
    id: 5,
    title: "Poolside Stone Patio",
    category: "Paving",
    imagePromptBefore: "portfolio-5-before",
    imagePromptAfter: "portfolio-5-after",
  },
  {
    id: 6,
    title: "Sunken Garden Retreat",
    category: "Garden Design",
    imagePromptBefore: "portfolio-6-before",
    imagePromptAfter: "portfolio-6-after",
  },
];

export const footerLinks = {
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};
