// Minimal line-icon set for the Services section. Swap for branded
// iconography later — kept as inline SVG so color inherits via
// currentColor.

export function PavingIcon(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect x="4" y="4" width="13" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="21" y="4" width="15" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="4" y="21" width="15" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="23" y="21" width="13" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function LandscapingIcon(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M20 6c5 4 7 8 7 12a7 7 0 1 1-14 0c0-4 2-8 7-12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M20 25v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13 35h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function GardenDesignIcon(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 8v24M8 20h24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="11" r="1.6" fill="currentColor" />
      <circle cx="29" cy="20" r="1.6" fill="currentColor" />
      <circle cx="20" cy="29" r="1.6" fill="currentColor" />
      <circle cx="11" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function MaintenanceIcon(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M24 8l8 8-3 3-8-8 3-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M21 11l-11 11c-1.5 1.5-1.5 6-1.5 6s4.5 0 6-1.5l11-11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8.5 28.5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export const iconMap = {
  paving: PavingIcon,
  landscaping: LandscapingIcon,
  "garden-design": GardenDesignIcon,
  maintenance: MaintenanceIcon,
};
