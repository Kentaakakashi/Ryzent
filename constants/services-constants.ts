import { type Service } from "@/types/portfolio-types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Product engineering",
    description: "Turning a clear product idea into a focused, usable software experience.",
    icon: "/assets/logos/react.svg",
    bullets: ["Product structure", "Interface systems", "Iterative implementation"],
  },
  {
    id: 2,
    title: "Mobile systems",
    description: "Exploring useful Android experiences and mobile-first interaction patterns.",
    icon: "/assets/logos/react.svg",
    bullets: ["Android applications", "Mobile interaction", "Device-aware performance"],
  },
  {
    id: 3,
    title: "Interactive experiences",
    description: "Building responsive interfaces with deliberate motion, depth and feedback.",
    icon: "/assets/logos/tailwindcss.svg",
    bullets: ["Motion systems", "Spatial interface studies", "Responsive interaction"],
  },
  {
    id: 4,
    title: "Experimental technology",
    description: "Prototyping unusual concepts to discover what is useful, delightful or possible.",
    icon: "/assets/logos/javascript.svg",
    bullets: ["Procedural visuals", "Creative coding", "Technical prototypes"],
  },
];
