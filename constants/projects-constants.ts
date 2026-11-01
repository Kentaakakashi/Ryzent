import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

// Ryzent's own product work. Private relationship projects are deliberately
// excluded from this public showcase. A blank href means no public project link yet.
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
    title: "Presence Studio",
    category: "Discord companion · In development",
    description:
      "An Android app for creating and organizing custom Discord Rich Presence preset ideas, with a native Kotlin and Jetpack Compose interface.",
    subDescription: [
      "Create, edit, select and delete local presets for Playing, Watching and Listening activities.",
      "Presets support details, state, button fields, artwork asset keys, optional timestamps, and JSON import/export.",
      "Discord sign-in uses a browser-based OAuth2 flow with PKCE; account passwords and user tokens are not requested.",
      "Important: activity publishing to Discord is not implemented yet. Presets currently provide a local preview, and publishing requires integration with Discord's supported Android SDK/RPC route.",
    ],
    href: "https://github.com/Kentaakakashi/Discord-widget",
    logo: "",
    image: "",
    accent: "from-indigo/40 to-fuchsia/10",
    tags: [
      { id: 1, name: "Android", path: "/assets/logos/react.svg" },
      { id: 2, name: "Kotlin", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Jetpack Compose", path: "/assets/logos/react.svg" },
      { id: 4, name: "Discord", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 4,
    title: "API Sentinel",
    category: "API reliability platform · Pre-alpha",
    description:
      "An open-source API observability project aiming to make endpoint health, latency, and service incidents easier to understand.",
    subDescription: [
      "The foundation includes a TypeScript workspace, a Fastify API, initial PostgreSQL/Prisma schema, and Redis/BullMQ queue infrastructure.",
      "Current health endpoints cover process liveness and dependency readiness.",
      "Scheduled HTTP monitoring, historical analytics, incident processing, notifications, authentication and the dashboard remain planned work.",
      "Pre-alpha foundation only: this is not yet a complete monitoring service, and no uptime or monitoring results are fabricated.",
    ],
    href: "https://github.com/Kentaakakashi/API-sentinal",
    logo: "",
    image: "",
    accent: "from-aqua/35 to-indigo/15",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Fastify", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "PostgreSQL", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Observability", path: "/assets/logos/react.svg" },
    ],
  },
  {
    id: 5,
    title: "Northstar",
    category: "Adaptive life planning · Concept study",
    description:
      "A life-planning workspace that turns a distant ambition into a realistic route: understand the goal, account for real constraints, compare possible paths, and keep adapting as life changes.",
    subDescription: [
      "Starts with the intention behind a goal, then makes the user's available time, budget, energy and existing commitments part of the plan.",
      "Compares multiple routes with different timelines and weekly effort, making trade-offs visible instead of presenting one supposedly perfect answer.",
      "Breaks a direction into landmarks and small next actions. The plan stays editable, and a changed week can reshape the route without erasing the larger goal.",
      "The product direction is human-led: suggestions should be explainable and adjustable, never a locked checklist or guilt-driven streak system.",
      "Concept study only. The preview uses an illustrative scenario; live AI planning, accounts, reminders and persistent user plans are not represented as shipped features. No public repository is attached yet.",
    ],
    href: "",
    logo: "",
    image: "",
    accent: "from-amber/30 to-aqua/10",
    tags: [
      { id: 1, name: "Life planning", path: "/assets/logos/react.svg" },
      { id: 2, name: "Adaptive workflows", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Human-centred UX", path: "/assets/logos/react.svg" },
      { id: 4, name: "Product design", path: "/assets/logos/javascript.svg" },
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
