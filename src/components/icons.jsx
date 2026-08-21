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

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.34 12.78L3.5 20.5l4.36-1.14A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 8.4c.2-.45.4-.46.6-.47.17 0 .37 0 .53 0 .17 0 .4-.06.62.48.23.56.79 1.93.86 2.07.07.14.12.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.56.16.28.71 1.19 1.53 1.93 1.05.95 1.94 1.25 2.22 1.39.28.14.44.12.6-.07.17-.19.7-.82.89-1.1.19-.28.37-.24.62-.14.26.09 1.63.78 1.9.92.28.14.46.21.53.33.07.12.07.68-.16 1.34-.23.65-1.34 1.25-1.85 1.32-.5.07-1.02.31-3.4-.71-2.88-1.24-4.66-4.24-4.8-4.44-.14-.19-1.14-1.55-1.14-2.95 0-1.4.72-2.08.98-2.37Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const iconMap = {
  paving: PavingIcon,
  landscaping: LandscapingIcon,
  "garden-design": GardenDesignIcon,
  maintenance: MaintenanceIcon,
};
