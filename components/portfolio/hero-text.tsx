"use client";

import { type CSSProperties, type FC } from "react";
import { FlipWords } from "@/components/portfolio/flip-words";
import { FLIP_WORDS, HERO_TAGLINE, HERO_NAME, HERO_ROLE } from "@/constants/portfolio-constants";

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `calc(var(--intro-delay) + ${seconds}s)`,
});

export const HeroText: FC = () => (
  <div className="z-10 mt-24 w-full max-w-4xl text-center md:mt-32 md:text-left">
    <div className="hidden flex-col md:flex c-space">
      <div
        className="reveal mb-6 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md"
        style={delay(0.05)}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-mint opacity-75" />
          <span className="relative h-2 w-2 rounded-full bg-mint" />
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-neutral-300">
          {HERO_ROLE}
        </span>
      </div>

      <h1 className="reveal text-3xl font-light text-neutral-300" style={delay(0.12)}>
        {HERO_NAME}
      </h1>

      <p
        className="reveal mt-2 text-5xl font-bold leading-tight text-gradient lg:text-6xl"
        style={delay(0.19)}
      >
        Ideas into
      </p>

      <div className="reveal" style={delay(0.26)}>
        <FlipWords
          words={[...FLIP_WORDS]}
          className="text-7xl font-black text-white lg:text-8xl"
        />
      </div>

      <p
        className="reveal text-3xl font-semibold text-neutral-300 lg:text-4xl"
        style={delay(0.33)}
      >
        engineered with intent.
      </p>

      <p
        className="reveal mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg"
        style={delay(0.37)}
      >
        {HERO_TAGLINE}
      </p>

      <div className="reveal mt-9 flex flex-wrap gap-4" style={delay(0.43)}>
        <a href="#work" className="btn-primary">
          <span>Explore products</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#contact" className="btn-ghost">
          <span>Contact the studio</span>
        </a>
      </div>
    </div>

    <div className="flex flex-col space-y-5 px-2 md:hidden">
      <div
        className="reveal inline-flex self-center items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5"
        style={delay(0.05)}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-mint opacity-75" />
          <span className="relative h-2 w-2 rounded-full bg-mint" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300">
          {HERO_ROLE}
        </span>
      </div>

      <p className="reveal text-3xl font-light text-neutral-300" style={delay(0.12)}>
        {HERO_NAME}
      </p>

      <p className="reveal text-4xl font-bold text-gradient" style={delay(0.19)}>
        Ideas into
      </p>

      <div className="reveal" style={delay(0.26)}>
        <FlipWords
          words={[...FLIP_WORDS]}
          className="text-5xl font-bold text-white"
        />
      </div>

      <p
        className="reveal text-2xl font-semibold text-neutral-300"
        style={delay(0.33)}
      >
        engineered with intent.
      </p>

      <p
        className="reveal text-sm leading-relaxed text-neutral-400"
        style={delay(0.37)}
      >
        {HERO_TAGLINE}
      </p>

      <div
        className="reveal mt-4 flex flex-col items-center gap-3"
        style={delay(0.43)}
      >
        <a href="#work" className="btn-primary w-full">
          <span>Explore products</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#contact" className="btn-ghost w-full">
          <span>Contact the studio</span>
        </a>
      </div>
    </div>
  </div>
);