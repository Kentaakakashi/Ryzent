import { type Service } from "@/types/portfolio-types";

// These are Ryzent's product disciplines and areas of exploration,
// not claims of a large agency team or a list of contracted client services.
export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Intelligent Assistants",
    description:
      "Personal software that makes AI feel useful in the flow of everyday work, with thoughtful context, interaction and control.",
    icon: "/assets/ryzent-icons/ai-assistant.svg",
    bullets: [
      "Conversational and task-oriented experiences",
      "Context-aware mobile interaction concepts",
      "Human-friendly interfaces around AI capabilities",
    ],
  },
  {
    id: 2,
    title: "Mobile-First Products",
    description:
      "Focused Android experiences designed around real device constraints, useful workflows and clear, responsive interfaces.",
    icon: "/assets/ryzent-icons/mobile-product.svg",
    bullets: [
      "Android-oriented product experiences",
      "Practical onboarding and personalisation",
      "Responsive interfaces and device-aware workflows",
    ],
  },
  {
    id: 3,
    title: "Interactive Digital Experiences",
    description:
      "Web experiences that go beyond static pages through motion, spatial interfaces, real-time visuals and carefully tuned detail.",
    icon: "/assets/ryzent-icons/interactive-web.svg",
    bullets: [
      "Immersive web interfaces and visual systems",
      "Three-dimensional scenes and shader experiments",
      "Accessible motion and performance-conscious interaction",
    ],
  },
  {
    id: 4,
    title: "Games & Playful Systems",
    description:
      "Small worlds, progression systems and narrative-driven experiences that make software feel memorable.",
    icon: "/assets/logos/react.svg",
    bullets: [
      "Story-led and exploration-focused game concepts",
      "Gamified fitness and habit experiences",
      "Pixel-art worlds and interactive prototypes",
    ],
  },
];