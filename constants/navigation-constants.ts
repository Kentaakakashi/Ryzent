export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#about" },
  { label: "Focus", href: "#services" },
  { label: "Products", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const NAV_OFFSET = 72;

export const NAV_OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: "-40% 0px -50% 0px",
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

export const NAV_SCROLLED_AT = 20;