"use client";

import { type FC, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { TILT_RANGE, TILT_SPRING } from "@/constants/projects-constants";
import { formatCounter, padIndex } from "@/helpers/format-helpers";
import { type ProjectPreviewProps } from "@/types/project-types";

const BADGE = "rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] backdrop-blur-md";

const TheoConceptPreview: FC = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#080b13] text-white">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_0%,rgba(104,82,255,0.22),transparent_48%),radial-gradient(ellipse_at_0%_100%,rgba(44,199,209,0.10),transparent_42%)]" />
    <div className="relative flex h-full flex-col p-4 sm:p-6 md:p-7">
      <div className="flex items-center justify-between border-b border-white/[0.09] pb-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-violet-300/30 bg-gradient-to-br from-violet-400/30 to-cyan-300/10 shadow-[0_0_28px_rgba(129,107,255,0.18)]"><span className="h-3 w-3 rounded-full bg-gradient-to-br from-cyan-200 to-violet-400 shadow-[0_0_14px_rgba(125,211,252,0.9)]" /></div>
          <div className="min-w-0"><p className="truncate text-sm font-semibold tracking-wide">Theo</p><p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-emerald-300/90"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Personal assistant concept</p></div>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-white/50">Gemini</span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-3 py-4 sm:gap-4">
        <div className="flex items-end gap-2"><div className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-400/30 to-cyan-300/20 text-[10px] font-bold">T</div><div className="max-w-[88%] rounded-2xl rounded-bl-md border border-white/[0.09] bg-white/[0.055] px-3.5 py-2.5 sm:px-4 sm:py-3"><p className="text-[10px] leading-relaxed text-white/85 sm:text-xs">Yo, what are we figuring out today?</p><p className="mt-1.5 text-[9px] text-white/35">Theo · just now</p></div></div>
        <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md border border-violet-300/20 bg-violet-400/[0.13] px-3.5 py-2.5 sm:px-4 sm:py-3"><p className="text-[10px] leading-relaxed text-white/90 sm:text-xs">Help me understand something, but explain it simply.</p></div>
        <div className="flex items-end gap-2"><div className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-400/30 to-cyan-300/20 text-[10px] font-bold">T</div><div className="max-w-[90%] rounded-2xl rounded-bl-md border border-white/[0.09] bg-white/[0.055] px-3.5 py-2.5 sm:px-4 sm:py-3"><p className="text-[10px] leading-relaxed text-white/85 sm:text-xs">Bet. We’ll start with the core idea, then build it up step by step. No textbook-wall-of-text energy. ✦</p><div className="mt-2 flex items-center gap-1"><span className="h-1 w-1 rounded-full bg-cyan-200/80" /><span className="h-1 w-1 rounded-full bg-violet-300/80" /><span className="h-1 w-1 rounded-full bg-fuchsia-300/80" /><span className="ml-1 text-[9px] text-white/35">Tutor mode</span></div></div></div>
      </div>
      <div className="mt-auto rounded-2xl border border-white/[0.12] bg-white/[0.045] p-2 sm:p-2.5"><div className="flex items-center gap-2"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-sm text-white/55">＋</span><span className="min-w-0 flex-1 truncate text-[10px] text-white/35 sm:text-xs">Talk to Theo...</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-sm shadow-lg shadow-violet-950/40">↑</span></div></div>
      <div className="mt-2 flex items-center justify-between text-[8px] uppercase tracking-[0.2em] text-white/25 sm:text-[9px]"><span>Concept UI · not a live app</span><span>Android first</span></div>
    </div>
  </div>
);

export const ProjectPreview: FC<ProjectPreviewProps> = ({ project, index, total, showPreview }) => {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], TILT_RANGE.x), TILT_SPRING);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], TILT_RANGE.y), TILT_SPRING);
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };
  const handleLeave = () => { pointerX.set(0.5); pointerY.set(0.5); };
  const isRepository = project.href.includes("github.com/");
  const isTheoConcept = project.id === 1;

  return (
    <div className="order-1 lg:order-2 lg:col-span-7">
      <div style={{ perspective: "1400px" }} className="relative">
        <motion.div onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-midnight shadow-2xl shadow-black/50 md:aspect-[16/10]">
          {isTheoConcept && showPreview ? <TheoConceptPreview /> : <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`} />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center"><span className="text-[10rem] font-black leading-none tracking-tighter text-white/[0.08] md:text-[14rem]">{padIndex(index + 1)}</span></div>
            {project.image ? <Image src={project.image} alt={`${project.title} project artwork`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="pointer-events-none select-none object-cover object-top" /> : <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center"><span className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[-0.08em] text-white/85">{project.title}</span><span className="mt-3 text-[10px] uppercase tracking-[0.45em] text-white/45">RYZENT / PRODUCT LAB</span></div>}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" /><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.4),transparent_45%)]" />
          </>}
          <div style={{ transform: "translateZ(70px)" }} className="pointer-events-none absolute left-5 right-5 top-5 flex items-center justify-between"><span className={`${BADGE} text-white/90`}>{isTheoConcept ? "Concept preview" : project.image ? "Project artwork" : "In development"}</span><span className={`${BADGE} text-white/70`}>{formatCounter(index, total)}</span></div>
          {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" style={{ transform: "translateZ(80px)" }} className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md hover:border-white/40"><span>{isRepository ? "Open repository" : "Open project"}</span><span aria-hidden>↗</span></a>}
          <div style={{ transform: "translateZ(50px)" }} className={`${BADGE} pointer-events-none absolute bottom-5 left-5 text-white/85`}>{project.title}</div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </div>
  );
};
