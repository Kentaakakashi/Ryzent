import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

// Ryzent's own product work. Private relationship projects are deliberately
// excluded from this public showcase.
export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Theo",
    category: "Personal AI assistant · In development",
    description:
      "A personal Android assistant designed to feel less like a chatbot and more like a capable everyday companion: conversational, context-aware and genuinely useful.",
    subDescription: [
      "Built around a best-friend-style assistant personality that can switch naturally between casual conversation, practical help and tutor-like explanations.",
      "Gemini is the primary AI direction, with an Android-first product experience rather than a dependency on local desktop hardware.",
      "The longer-term product direction explores screen-aware context, a movable assistant interface and useful notification and media interactions.",
      "Active development project. The repository is the source of truth for features that are implemented versus planned.",
    ],
    href: "https://github.com/Kentaakakashi/Theo-AI-mobile",
    logo: "",
    image: "",
    accent: "from-aqua/40 to-royal/10",
    tags: [
      { id: 1, name: "Android", path: "/assets/logos/react.svg" },
      { id: 2, name: "Gemini", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "AI assistant", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Mobile UX", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 2,
    title: "Ryu",
    category: "Fitness RPG · In development",
    description:
      "A gamified fitness experience that treats training like a progression journey, combining personal goals, workout planning and game-inspired motivation.",
    subDescription: [
      "Designed around a guided onboarding flow that gathers the user's goals and relevant training context before suggesting a plan.",
      "The intended overview brings together personal stats, sensible nutrition guidance and a clear weekly workout structure.",
      "Custom workout-day planning is part of the product direction, so people can adapt the routine instead of being locked into one template.",
      "Active development project. Health and nutrition guidance must use confirmed user inputs and age-appropriate safeguards, not guessed measurements.",
    ],
    href: "https://github.com/Kentaakakashi/Ryu-Workout",
    logo: "",
    image: "",
    accent: "from-fuchsia/40 to-royal/10",
    tags: [
      { id: 1, name: "Fitness", path: "/assets/logos/react.svg" },
      { id: 2, name: "Gamification", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Mobile-first", path: "/assets/logos/react.svg" },
      { id: 4, name: "Personalisation", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 3,
    title: "The God Who Forgot",
    category: "Narrative RPG · In development",
    description:
      "A 2D pixel-art role-playing game about a forgotten god, built around exploration, atmosphere and a story that unfolds through the world itself.",
    subDescription: [
      "A top-down world built for exploration, with side-scroller-style interiors when entering buildings.",
      "No combat: the focus is on narrative, environmental discovery and meaningful gameplay interactions.",
      "Planned for Android and developed with Godot 4.7.1 using a phone-first, cost-conscious workflow.",
      "An original game project in development, with its own world, characters and visual direction.",
    ],
    href: "https://github.com/Kentaakakashi/The-God-Who-Forgot",
    logo: "",
    image: "",
    accent: "from-lavender/40 to-aqua/10",
    tags: [
      { id: 1, name: "Godot 4", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "2D pixel art", path: "/assets/logos/react.svg" },
      { id: 3, name: "Narrative design", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Android", path: "/assets/logos/react.svg" },
    ],
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };

export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};

export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };

export const PREVIEW_WINDOW = 1;