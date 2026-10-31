import { type Transition } from "motion/react";
import { type Project } from "@/types/portfolio-types";

export const MY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Theo",
    category: "Android · Personal assistant",
    description: "A context-aware Android assistant project focused on conversation, screen awareness and everyday utility.",
    subDescription: [
      "A mobile-first assistant experience under active development.",
      "Designed around useful context and direct interaction.",
    ],
    href: "https://github.com/Kentaakakashi/Theo-AI",
    logo: "",
    image: "",
    accent: "from-aqua/30 to-storm/10",
    tags: [],
  },
  {
    id: 2,
    title: "Ryu",
    category: "Fitness · Progression system",
    description: "A gamified training companion focused on consistency, progression and personal goals.",
    subDescription: [
      "A workout and progression experience under active development.",
      "Designed to make training history and goals easier to follow.",
    ],
    href: "https://github.com/Kentaakakashi/Ryu-Workout",
    logo: "",
    image: "",
    accent: "from-storm/40 to-aqua/10",
    tags: [],
  },
  {
    id: 3,
    title: "The God Who Forgot",
    category: "Game · Narrative RPG",
    description: "A 2D pixel-art narrative role-playing game exploring memory, identity and a forgotten world.",
    subDescription: [
      "A story-led 2D game under active development.",
      "Built around exploration and narrative rather than combat.",
    ],
    href: "https://github.com/Kentaakakashi/The-God-Who-Forgot",
    logo: "",
    image: "",
    accent: "from-navy/40 to-aqua/10",
    tags: [],
  },
];

export const TILT_SPRING: Transition = { stiffness: 200, damping: 18 };
export const TILT_RANGE: { x: [number, number]; y: [number, number] } = {
  x: [10, -10],
  y: [-14, 14],
};
export const TRACK_SPRING: Transition = { stiffness: 60, damping: 20 };
export const PREVIEW_WINDOW = 1;
