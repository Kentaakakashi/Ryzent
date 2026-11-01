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


const RyuConceptPreview: FC = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#11130f] text-[#f0f1e8]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(210,243,107,0.13),transparent_38%),radial-gradient(ellipse_at_100%_90%,rgba(154,174,91,0.09),transparent_38%)]" />
    <div className="relative flex h-full flex-col gap-2 p-3 sm:gap-3.5 sm:p-5 md:gap-4 md:p-6">
      <header className="flex shrink-0 items-center justify-between border-b border-white/[0.09] pb-2 sm:pb-3">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-xl border border-[#d2f36b]/30 bg-[#d2f36b]/[0.09] text-[15px] font-black italic tracking-[-0.12em] text-[#d2f36b] shadow-[0_0_25px_rgba(210,243,107,0.10)]">R</div>
          <div><p className="text-[12px] font-black tracking-[0.2em]">RYU</p><p className="mt-0.5 text-[8px] tracking-[0.14em] text-white/35">TRAIN WITH INTENT</p></div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full border border-[#d2f36b]/20 bg-[#d2f36b]/[0.06] px-3 py-1.5 text-[8px] tracking-[0.12em] text-[#d2f36b] sm:inline-flex">✦ 5 DAY STREAK</span>
          <div className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-gradient-to-br from-[#4b5140] to-[#20231c] text-[9px] font-semibold text-white/80">NK</div>
        </div>
      </header>

      <div className="flex shrink-0 items-end justify-between gap-2">
        <div>
          <p className="mb-1.5 flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-[#d2f36b]/75"><span className="h-px w-5 bg-[#d2f36b]/70" /> YOUR TRAINING SPACE</p>
          <h2 className="text-[clamp(19px,3vw,30px)] font-semibold leading-[0.98] tracking-[-0.055em]">Earn your <span className="text-[#d2f36b]">next level.</span></h2>
        </div>
        <span className="mb-0.5 shrink-0 text-[8px] tracking-[0.13em] text-white/30">TODAY / TRAINING LOG</span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[1.28fr_.72fr] gap-2 sm:gap-3">
        <section className="relative flex min-h-0 flex-col justify-between overflow-hidden rounded-[18px] border border-white/[0.12] bg-[linear-gradient(145deg,rgba(42,47,34,0.92),rgba(24,27,21,0.96)_62%,rgba(17,19,15,0.98))] p-2.5 sm:p-4 md:p-5">
          <div className="pointer-events-none absolute -right-8 top-4 h-36 w-36 rounded-full border border-[#d2f36b]/10 sm:h-44 sm:w-44"><div className="absolute inset-3 rounded-full border border-dashed border-[#d2f36b]/15" /><div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(210,243,107,0.13),transparent_68%)]" /><span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[62px] font-black italic tracking-[-0.12em] text-[#d2f36b]/25 sm:text-[78px]">鍛</span></div>
          <div className="relative z-10 flex items-center justify-between gap-2">
            <span className="rounded-full border border-[#d2f36b]/25 bg-[#d2f36b]/[0.08] px-2.5 py-1 text-[7px] uppercase tracking-[0.17em] text-[#d2f36b] sm:text-[8px]">TODAY&apos;S CONTRACT</span>
            <span className="text-[8px] tracking-[0.12em] text-white/35">01 / 03</span>
          </div>
          <div className="relative z-10 my-auto py-3">
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">UP NEXT</p>
            <h3 className="mt-1.5 text-[clamp(18px,3vw,29px)] font-semibold leading-[0.98] tracking-[-0.055em]">Upper body<br /> <span className="text-[#d2f36b]">focus.</span></h3>
            <p className="mt-2 max-w-[220px] hidden text-[9px] leading-relaxed text-white/[0.48] sm:block sm:text-[10px]">Push strength, shoulder control and clean reps. One set at a time.</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[7px] tracking-[0.1em] text-white/[0.65]">20 MIN</span>
              <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[7px] tracking-[0.1em] text-white/[0.65]">3 EXERCISES</span>
              <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[7px] tracking-[0.1em] text-white/[0.65]">FOUNDATION</span>
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
            <span className="text-[8px] text-white/40">Your next rep starts here.</span>
            <span className="inline-flex items-center gap-2 rounded-lg bg-[#d2f36b] px-3 py-2 text-[8px] font-bold tracking-[0.08em] text-[#171b10] shadow-[0_5px_22px_rgba(210,243,107,0.15)]">VIEW SESSION <span className="text-[11px]">↗</span></span>
          </div>
        </section>

        <div className="grid min-h-0 grid-rows-[1.12fr_.88fr] gap-2.5 sm:gap-3">
          <section className="flex min-h-0 flex-col items-center justify-center rounded-[18px] border border-white/[0.11] bg-white/[0.035] p-2 sm:p-3">
            <div className="mb-1 flex w-full items-center justify-between text-[7px] uppercase tracking-[0.16em] text-white/[0.38]"><span>PLAYER LEVEL</span><span className="text-[#d2f36b]">DISCIPLE</span></div>
            <div className="relative my-1 grid aspect-square w-[clamp(66px,10vw,112px)] place-items-center rounded-full p-[5px]" style={{background:"conic-gradient(#d2f36b 0deg 246deg, rgba(255,255,255,.08) 246deg 360deg)"}}>
              <div className="grid h-full w-full place-items-center rounded-full border border-white/[0.06] bg-[#171a14]">
                <div className="text-center"><p className="text-[7px] tracking-[0.15em] text-white/35">LEVEL</p><p className="text-[clamp(23px,3.3vw,34px)] font-semibold leading-none tracking-[-0.08em] text-[#f0f1e8]">08</p></div>
              </div>
            </div>
            <div className="mt-1 w-full">
              <div className="flex items-center justify-between text-[7px] text-white/45"><span>2,480 XP</span><span>3,000 XP</span></div>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[82%] rounded-full bg-[#d2f36b] shadow-[0_0_10px_rgba(210,243,107,0.45)]" /></div>
            </div>
          </section>
          <section className="flex min-h-0 flex-col justify-between rounded-[18px] border border-white/[0.11] bg-white/[0.035] p-2.5 sm:p-3.5">
            <p className="text-[7px] uppercase tracking-[0.16em] text-white/[0.38]">WEEK AT A GLANCE</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2.5">
              <div><p className="text-[clamp(18px,2.6vw,25px)] font-semibold leading-none tracking-[-0.06em]">04</p><p className="mt-1 text-[7px] text-white/40">SESSIONS</p></div>
              <div><p className="text-[clamp(18px,2.6vw,25px)] font-semibold leading-none tracking-[-0.06em]">05<span className="ml-0.5 text-[10px] text-[#d2f36b]">↗</span></p><p className="mt-1 text-[7px] text-white/40">DAY STREAK</p></div>
            </div>
            <div className="flex h-5 items-end gap-1">
              {[34,55,43,77,60,92,48].map((height, i) => <div key={i} className="flex-1 rounded-t-[3px] bg-[#d2f36b]/[0.15]" style={{height:height + "%",background:i===4?"#d2f36b":undefined}} />)}
            </div>
          </section>
        </div>
      </div>

      <section className="shrink-0 rounded-[16px] border border-white/[0.10] bg-black/20 px-2.5 py-2 sm:px-4 sm:py-2.5">
        <div className="mb-2 flex items-center justify-between gap-2"><div className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-md bg-[#d2f36b]/10 text-[10px] text-[#d2f36b]">✦</span><p className="text-[8px] font-semibold tracking-[0.12em]">DAILY QUESTS</p></div><span className="text-[7px] tracking-[0.1em] text-white/35">BONUS XP AVAILABLE</span></div>
        <div className="grid grid-cols-2 gap-3">
          <div className="min-w-0"><div className="flex items-center justify-between gap-1 text-[7px]"><span className="truncate text-white/[0.65]">Log a training session</span><span className="shrink-0 text-[#d2f36b]">+50 XP</span></div><div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-2/3 rounded-full bg-[#d2f36b]" /></div></div>
          <div className="min-w-0"><div className="flex items-center justify-between gap-1 text-[7px]"><span className="truncate text-white/[0.65]">Complete 3 exercises</span><span className="shrink-0 text-[#d2f36b]">+30 XP</span></div><div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full w-1/3 rounded-full bg-[#d2f36b]" /></div></div>
        </div>
      </section>

      <div className="flex shrink-0 items-center justify-between text-[7px] uppercase tracking-[0.17em] text-white/25"><span>Illustrative data · concept UI</span><span>RYU / TRAIN WITH INTENT</span></div>
    </div>
  </div>
);


const PresenceStudioConceptPreview: FC = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#0c0b13] text-[#f5f3ff]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(124,88,255,0.21),transparent_42%),radial-gradient(ellipse_at_100%_100%,rgba(59,130,246,0.12),transparent_42%)]" />
    <div className="relative flex h-full flex-col gap-2.5 p-3 sm:gap-3.5 sm:p-5 md:p-6">
      <header className="flex shrink-0 items-center justify-between border-b border-white/[0.09] pb-2.5 sm:pb-3.5">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-violet-300/25 bg-gradient-to-br from-violet-400/25 to-blue-400/10 shadow-[0_0_26px_rgba(139,92,246,0.13)] sm:h-9 sm:w-9">
            <span className="text-base font-black text-violet-200">◈</span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold tracking-[0.015em] sm:text-sm">Presence Studio</p>
            <p className="mt-0.5 text-[7px] uppercase tracking-[0.2em] text-white/35 sm:text-[8px]">Discord activity designer</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-2.5 py-1.5 text-[7px] uppercase tracking-[0.14em] text-violet-200/90 sm:px-3 sm:text-[8px]">Preset workspace</span>
      </header>

      <div className="flex shrink-0 items-end justify-between gap-3">
        <div>
          <p className="mb-1 flex items-center gap-1.5 text-[7px] uppercase tracking-[0.2em] text-violet-200/65 sm:text-[8px]"><span className="h-px w-4 bg-violet-300/70" /> DESIGN YOUR STATUS</p>
          <h2 className="text-[clamp(17px,3vw,27px)] font-semibold leading-[1.02] tracking-[-0.055em]">Make your presence <span className="text-violet-300">yours.</span></h2>
        </div>
        <span className="mb-0.5 hidden shrink-0 text-[7px] uppercase tracking-[0.13em] text-white/30 sm:block">ANDROID / LOCAL PRESETS</span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[.92fr_1.08fr] gap-2 sm:gap-3">
        <section className="flex min-h-0 flex-col overflow-hidden rounded-[15px] border border-white/[0.10] bg-[#171621]/90 sm:rounded-[18px]">
          <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-2.5 py-2 sm:px-4 sm:py-3">
            <span className="text-[7px] font-semibold uppercase tracking-[0.15em] text-white/60 sm:text-[8px]">Profile preview</span>
            <span className="flex items-center gap-1 text-[7px] text-emerald-300/80"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" /> MOCKUP</span>
          </div>
          <div className="relative min-h-[35px] shrink-0 overflow-hidden bg-[linear-gradient(115deg,#4c2d78,#272c64_55%,#1a526b)] sm:min-h-[48px]">
            <div className="absolute -right-3 -top-8 h-20 w-20 rounded-full border border-white/10 sm:h-28 sm:w-28" /><div className="absolute right-5 top-2 h-10 w-10 rounded-full bg-violet-300/10 blur-lg sm:h-16 sm:w-16" />
          </div>
          <div className="relative flex min-h-0 flex-1 flex-col px-2.5 pb-2.5 sm:px-4 sm:pb-4">
            <div className="-mt-4 flex items-end justify-between sm:-mt-5">
              <div className="grid h-9 w-9 place-items-center rounded-[13px] border-[3px] border-[#171621] bg-gradient-to-br from-violet-300 via-indigo-400 to-cyan-300 text-[14px] font-black text-[#171323] sm:h-12 sm:w-12 sm:text-lg">K</div>
              <span className="mb-1 rounded-md border border-white/[0.08] bg-white/[0.04] px-1.5 py-1 text-[6px] text-white/45 sm:px-2 sm:text-[7px]">PROFILE CARD</span>
            </div>
            <div className="mt-1.5 sm:mt-2">
              <p className="text-[10px] font-bold sm:text-[13px]">kenta_k</p>
              <p className="mt-0.5 text-[7px] text-white/35 sm:text-[8px]">building things, one commit at a time</p>
            </div>
            <div className="mt-2.5 rounded-xl border border-white/[0.08] bg-[#22212d] p-2 sm:mt-3 sm:rounded-[14px] sm:p-3">
              <div className="mb-1.5 flex items-center gap-1.5 sm:mb-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-300" /><span className="text-[6px] font-semibold uppercase tracking-[0.12em] text-white/40 sm:text-[7px]">Playing a game</span></div>
              <div className="flex gap-2">
                <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-lg border border-violet-200/15 bg-[linear-gradient(145deg,#8b5cf6,#33245f_60%,#111827)] sm:h-12 sm:w-12 sm:rounded-xl"><span className="text-lg font-black italic text-white/85 sm:text-2xl">R</span></div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="truncate text-[8px] font-semibold sm:text-[10px]">Ryu</p>
                  <p className="mt-0.5 line-clamp-2 text-[7px] leading-relaxed text-white/65 sm:text-[8px]">Building my next level</p>
                  <p className="mt-1 truncate text-[6px] text-white/35 sm:text-[7px]">One set at a time</p>
                </div>
              </div>
              <div className="mt-2 flex gap-1.5 sm:mt-3"><span className="flex-1 rounded-md border border-white/[0.09] py-1 text-center text-[6px] text-white/65 sm:text-[7px]">Open project</span><span className="flex-1 rounded-md border border-white/[0.09] py-1 text-center text-[6px] text-white/65 sm:text-[7px]">View details</span></div>
            </div>
            <div className="mt-auto hidden items-center gap-1.5 pt-2 text-[7px] text-white/30 sm:flex"><span className="h-1 w-1 rounded-full bg-violet-300/80" />Local visual preview only</div>
          </div>
        </section>

        <section className="flex min-h-0 flex-col overflow-hidden rounded-[15px] border border-violet-200/[0.12] bg-[linear-gradient(155deg,rgba(35,29,54,0.95),rgba(19,18,29,0.98)_68%)] sm:rounded-[18px]">
          <div className="flex shrink-0 items-center justify-between border-b border-white/[0.08] px-2.5 py-2 sm:px-4 sm:py-3">
            <div><p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-white/75 sm:text-[8px]">Preset editor</p><p className="mt-0.5 text-[6px] text-white/35 sm:text-[7px]">Custom activity details</p></div>
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-1 text-[6px] text-white/45 sm:px-2 sm:text-[7px]">01 / 03</span>
          </div>
          <div className="flex min-h-0 flex-1 flex-col gap-2 p-2.5 sm:gap-2.5 sm:p-4">
            <div className="grid grid-cols-3 gap-1 rounded-lg border border-white/[0.08] bg-black/20 p-1">
              <span className="rounded-md bg-violet-300/15 py-1.5 text-center text-[7px] font-semibold text-violet-200 sm:text-[8px]">Playing</span>
              <span className="rounded-md py-1.5 text-center text-[7px] text-white/40 sm:text-[8px]">Watching</span>
              <span className="rounded-md py-1.5 text-center text-[7px] text-white/40 sm:text-[8px]">Listening</span>
            </div>
            <div className="min-h-0">
              <p className="mb-1 text-[6px] uppercase tracking-[0.13em] text-white/40 sm:text-[7px]">Details</p>
              <div className="rounded-lg border border-white/[0.09] bg-black/20 px-2.5 py-2 text-[7px] text-white/80 sm:px-3 sm:py-2.5 sm:text-[8px]">Building my next level</div>
            </div>
            <div className="min-h-0">
              <p className="mb-1 text-[6px] uppercase tracking-[0.13em] text-white/40 sm:text-[7px]">State</p>
              <div className="rounded-lg border border-white/[0.09] bg-black/20 px-2.5 py-2 text-[7px] text-white/65 sm:px-3 sm:py-2.5 sm:text-[8px]">One set at a time</div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-2"><p className="text-[6px] text-white/35 sm:text-[7px]">ARTWORK KEY</p><p className="mt-1 truncate text-[7px] text-violet-200 sm:text-[8px]">ryu_activity</p></div>
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.025] p-2"><p className="text-[6px] text-white/35 sm:text-[7px]">TIMESTAMPS</p><p className="mt-1 text-[7px] text-white/65 sm:text-[8px]">Optional</p></div>
            </div>
            <div className="mt-auto flex items-center justify-between gap-2 border-t border-white/[0.08] pt-2 sm:pt-2.5">
              <div className="min-w-0"><p className="text-[7px] font-semibold text-white/75 sm:text-[8px]">Local preset draft</p><p className="mt-0.5 text-[6px] text-white/35 sm:text-[7px]">JSON import / export</p></div>
              <span className="shrink-0 rounded-lg border border-violet-200/20 bg-violet-300/10 px-2.5 py-2 text-[7px] font-semibold text-violet-100 sm:px-3 sm:text-[8px]">EDIT PRESET</span>
            </div>
          </div>
        </section>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-2 rounded-lg border border-amber-200/10 bg-amber-200/[0.035] px-2.5 py-2 sm:px-3.5">
        <div className="flex min-w-0 items-center gap-2"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-amber-200/[0.08] text-[9px] text-amber-200/80">i</span><p className="truncate text-[7px] text-white/60 sm:text-[8px]">Illustrative concept · activities are not published to Discord</p></div>
        <span className="hidden shrink-0 text-[7px] uppercase tracking-[0.12em] text-white/30 sm:block">Kotlin / Compose</span>
      </div>
    </div>
  </div>
);


const ApiSentinelConceptPreview: FC = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#090d12] text-[#e7edf5]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(45,212,191,0.13),transparent_42%),radial-gradient(ellipse_at_0%_100%,rgba(59,130,246,0.10),transparent_40%)]" />
    <div className="relative flex h-full flex-col gap-3 p-3 sm:gap-4 sm:p-5 md:p-6">
      <header className="flex shrink-0 items-center justify-between border-b border-white/[0.09] pb-3">
        <div className="flex items-center gap-2.5"><div className="grid h-8 w-8 place-items-center rounded-xl border border-teal-300/25 bg-teal-300/[0.08] text-lg font-black text-teal-200">⌁</div><div><p className="text-[11px] font-semibold sm:text-sm">API Sentinel</p><p className="mt-0.5 text-[7px] uppercase tracking-[0.19em] text-white/35 sm:text-[8px]">Service observability</p></div></div>
        <span className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-2.5 py-1.5 text-[7px] uppercase tracking-[0.12em] text-amber-200 sm:text-[8px]">Pre-alpha</span>
      </header>
      <div className="flex shrink-0 items-end justify-between gap-3"><div><p className="mb-1 flex items-center gap-1.5 text-[7px] uppercase tracking-[0.2em] text-teal-200/65 sm:text-[8px]"><span className="h-px w-4 bg-teal-300/70" /> SYSTEM OVERVIEW</p><h2 className="text-[clamp(18px,3vw,28px)] font-semibold leading-none tracking-[-0.055em]">Know what&apos;s <span className="text-teal-300">going on.</span></h2></div><span className="hidden text-[7px] uppercase tracking-[0.14em] text-white/30 sm:block">DASHBOARD / CONCEPT</span></div>
      <div className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3">
        <section className="rounded-xl border border-white/[0.09] bg-white/[0.035] p-2.5 sm:rounded-2xl sm:p-3.5"><p className="text-[6px] uppercase tracking-[0.13em] text-white/40 sm:text-[8px]">Endpoints</p><p className="mt-1.5 text-[clamp(18px,3vw,28px)] font-semibold leading-none">08</p><p className="mt-1.5 text-[6px] text-white/35 sm:text-[8px]">Illustrative count</p></section>
        <section className="rounded-xl border border-white/[0.09] bg-white/[0.035] p-2.5 sm:rounded-2xl sm:p-3.5"><p className="text-[6px] uppercase tracking-[0.13em] text-white/40 sm:text-[8px]">Median latency</p><p className="mt-1.5 text-[clamp(18px,3vw,28px)] font-semibold leading-none">124<span className="ml-0.5 text-[10px] text-white/45">ms</span></p><p className="mt-1.5 text-[6px] text-white/35 sm:text-[8px]">Mock metric only</p></section>
        <section className="rounded-xl border border-white/[0.09] bg-white/[0.035] p-2.5 sm:rounded-2xl sm:p-3.5"><p className="text-[6px] uppercase tracking-[0.13em] text-white/40 sm:text-[8px]">Incidents</p><p className="mt-1.5 text-[clamp(18px,3vw,28px)] font-semibold leading-none">—</p><p className="mt-1.5 text-[6px] text-white/35 sm:text-[8px]">No live data</p></section>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_.85fr] gap-2 sm:gap-3">
        <section className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-white/[0.09] bg-[#101720]/90 sm:rounded-2xl">
          <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-2.5 py-2.5 sm:px-4 sm:py-3"><div><p className="text-[7px] font-semibold uppercase tracking-[0.15em] text-white/75 sm:text-[8px]">Endpoint registry</p><p className="mt-0.5 text-[6px] text-white/35 sm:text-[7px]">Example service list</p></div><span className="rounded-md border border-white/10 px-2 py-1 text-[6px] text-white/45">FILTERS</span></div>
          <div className="flex min-h-0 flex-1 flex-col justify-evenly px-2.5 sm:px-4">
            {[
              {method:"GET",name:"/api/health",status:"READY",color:"text-emerald-300",bar:"w-[28%]",latency:"42 ms"},
              {method:"GET",name:"/api/v1/users",status:"SAMPLE",color:"text-teal-200",bar:"w-[54%]",latency:"124 ms"},
              {method:"POST",name:"/api/v1/events",status:"SAMPLE",color:"text-teal-200",bar:"w-[73%]",latency:"218 ms"},
              {method:"GET",name:"/api/metrics",status:"PLANNED",color:"text-amber-200",bar:"w-[39%]",latency:"—"},
            ].map((endpoint) => <div key={endpoint.name} className="border-b border-white/[0.055] py-2 last:border-0 sm:py-2.5"><div className="flex items-center gap-1.5 sm:gap-2"><span className="w-7 shrink-0 rounded bg-white/[0.055] py-1 text-center text-[6px] font-bold text-teal-200/80 sm:w-9 sm:text-[7px]">{endpoint.method}</span><span className="min-w-0 flex-1 truncate font-mono text-[7px] text-white/75 sm:text-[9px]">{endpoint.name}</span><span className={`shrink-0 text-[5px] font-semibold tracking-[0.1em] sm:text-[6px] ${endpoint.color}`}>{endpoint.status}</span></div><div className="mt-1.5 flex items-center gap-2"><div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.07]"><div className={`h-full rounded-full bg-teal-300/70 ${endpoint.bar}`} /></div><span className="w-10 text-right font-mono text-[6px] text-white/35 sm:w-12 sm:text-[7px]">{endpoint.latency}</span></div></div>)}
          </div>
        </section>
        <div className="grid min-h-0 grid-rows-[1fr_.85fr] gap-2 sm:gap-3">
          <section className="flex min-h-0 flex-col rounded-xl border border-white/[0.09] bg-[#101720]/90 p-2.5 sm:rounded-2xl sm:p-3.5"><div className="flex items-center justify-between"><p className="text-[7px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-[8px]">Latency profile</p><span className="text-[6px] text-white/30">SAMPLE</span></div><div className="mt-3 flex min-h-0 flex-1 items-end gap-1.5 sm:gap-2">{[30,43,36,58,48,74,52,88,63,70,45,58].map((height,i)=><div key={i} className="flex h-full flex-1 items-end"><div className="w-full rounded-t-[3px] bg-teal-300/50" style={{height:`${height}%`,opacity:0.35+(i%4)*0.15}} /></div>)}</div><div className="mt-2 flex justify-between text-[6px] text-white/30"><span>OLDER</span><span>RECENT</span></div></section>
          <section className="flex min-h-0 flex-col rounded-xl border border-white/[0.09] bg-[#101720]/90 p-2.5 sm:rounded-2xl sm:p-3.5"><p className="text-[7px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-[8px]">Pipeline status</p><div className="mt-2.5 space-y-2 sm:mt-3"><div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" /><span className="flex-1 text-[7px] text-white/60 sm:text-[8px]">API foundation</span><span className="text-[6px] text-emerald-200/80">EXISTS</span></div><div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" /><span className="flex-1 text-[7px] text-white/60 sm:text-[8px]">Scheduled checks</span><span className="text-[6px] text-amber-200/80">PLANNED</span></div><div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" /><span className="flex-1 text-[7px] text-white/60 sm:text-[8px]">Alert delivery</span><span className="text-[6px] text-amber-200/80">PLANNED</span></div></div></section>
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-between gap-2 rounded-lg border border-amber-200/10 bg-amber-200/[0.035] px-2.5 py-2 sm:px-3.5"><div className="flex min-w-0 items-center gap-2"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-amber-200/[0.08] text-[9px] text-amber-200/80">i</span><p className="truncate text-[7px] text-white/60 sm:text-[8px]">Concept dashboard · metrics are illustrative, not live telemetry</p></div><span className="hidden shrink-0 text-[7px] uppercase tracking-[0.12em] text-white/30 sm:block">TYPESCRIPT / FASTIFY</span></div>
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
  const isRyuConcept = project.id === 2;
  const isPresenceStudioConcept = project.id === 3;
  const isApiSentinelConcept = project.id === 4;

  return (
    <div className="order-1 lg:order-2 lg:col-span-7">
      <div style={{ perspective: "1400px" }} className="relative">
        <motion.div onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-midnight shadow-2xl shadow-black/50 md:aspect-[16/10]">
          {isTheoConcept && showPreview ? <TheoConceptPreview /> : isRyuConcept && showPreview ? <RyuConceptPreview /> : isPresenceStudioConcept && showPreview ? <PresenceStudioConceptPreview /> : isApiSentinelConcept && showPreview ? <ApiSentinelConceptPreview /> : <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`} />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center"><span className="text-[10rem] font-black leading-none tracking-tighter text-white/[0.08] md:text-[14rem]">{padIndex(index + 1)}</span></div>
            {project.image ? <Image src={project.image} alt={`${project.title} project artwork`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="pointer-events-none select-none object-cover object-top" /> : <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center"><span className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[-0.08em] text-white/85">{project.title}</span><span className="mt-3 text-[10px] uppercase tracking-[0.45em] text-white/45">RYZENT / PRODUCT LAB</span></div>}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" /><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.4),transparent_45%)]" />
          </>}
          <div style={{ transform: "translateZ(70px)" }} className="pointer-events-none absolute left-5 right-5 top-5 flex items-center justify-between"><span className={`${BADGE} text-white/90`}>{isTheoConcept || isRyuConcept || isPresenceStudioConcept || isApiSentinelConcept ? "Concept preview" : project.image ? "Project artwork" : "In development"}</span><span className={`${BADGE} text-white/70`}>{formatCounter(index, total)}</span></div>
          {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" style={{ transform: "translateZ(80px)" }} className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md hover:border-white/40"><span>{isRepository ? "Open repository" : "Open project"}</span><span aria-hidden>↗</span></a>}
          <div style={{ transform: "translateZ(50px)" }} className={`${BADGE} pointer-events-none absolute bottom-5 left-5 text-white/85`}>{project.title}</div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </div>
  );
};
