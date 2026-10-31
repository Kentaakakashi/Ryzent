"use client";

import { type FC } from "react";
import { HeroText } from "@/components/portfolio/hero-text";
import { ParallaxBackground } from "@/components/portfolio/parallax-background";

export const Hero: FC = () => (
  <section
    id="home"
    className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start"
  >
    <HeroText />
    <ParallaxBackground />

    <a
      href="#about"
      className="reveal absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-neutral-400 hover:text-white transition-colors z-10"
      style={{ animationDelay: "calc(var(--intro-delay) + 1.2s)" }}
      aria-label="Scroll down"
    >
      <span>Scroll</span>
      <span className="relative block h-10 w-px overflow-hidden bg-white/10">
        <span className="scroll-hint-sweep absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-coral to-transparent" />
      </span>
    </a>
  </section>
);
