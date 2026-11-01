"use client";

import { useState, type FC, type MouseEvent } from "react";
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



const NorthstarConceptPreview: FC = () => {
  const [route, setRoute] = useState<"steady" | "focused" | "flexible">("steady");
  const [timeTight, setTimeTight] = useState(false);

  const routeOptions = [
    { id: "steady" as const, name: "Steady", duration: "18 months", load: "4–5 hrs / week", note: "Room to learn and test" },
    { id: "focused" as const, name: "Focused", duration: "12 months", load: "7–9 hrs / week", note: "More momentum, less slack" },
    { id: "flexible" as const, name: "Flexible", duration: "24 months", load: "2–3 hrs / week", note: "Protects your breathing room" },
  ];

  const selectedRoute = routeOptions.find((option) => option.id === route) ?? routeOptions[0];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f1f0e9] text-[#26312b]">
      <div className="flex h-full min-h-0">
        <aside className="flex w-[48px] shrink-0 flex-col border-r border-[#e4e3dc] bg-[#f8f7f2] sm:w-[78px] md:w-[104px]">
          <div className="flex h-11 shrink-0 items-center justify-center gap-2 border-b border-[#e8e7df] sm:h-12 md:justify-start md:px-3">
            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-[10px] bg-[#263b32] text-[15px] text-[#d9e4c6] shadow-sm">✳</div>
            <div className="hidden min-w-0 md:block"><p className="text-[10px] font-bold tracking-[0.04em]">northstar</p><p className="text-[6px] tracking-[0.18em] text-[#9b9e91]">PERSONAL OS</p></div>
          </div>
          <div className="px-1.5 pt-3 sm:px-2 md:px-2.5">
            <p className="mb-2 hidden px-2 text-[6px] font-semibold tracking-[0.16em] text-[#a3a596] md:block">YOUR SPACE</p>
            <div className="mb-1 flex items-center justify-center gap-2 rounded-lg bg-[#e9ede4] px-1.5 py-2 text-[#2b4639] md:justify-start md:px-2.5"><span className="text-[12px]">⌂</span><span className="hidden text-[8px] font-semibold md:block">Overview</span></div>
            <div className="mb-1 flex items-center justify-center gap-2 rounded-lg px-1.5 py-2 text-[#929789] md:justify-start md:px-2.5"><span className="text-[12px]">◎</span><span className="hidden text-[8px] md:block">My paths</span></div>
            <div className="mb-1 flex items-center justify-center gap-2 rounded-lg px-1.5 py-2 text-[#929789] md:justify-start md:px-2.5"><span className="text-[12px]">◷</span><span className="hidden text-[8px] md:block">Milestones</span></div>
            <div className="mb-1 flex items-center justify-center gap-2 rounded-lg px-1.5 py-2 text-[#929789] md:justify-start md:px-2.5"><span className="text-[12px]">▤</span><span className="hidden text-[8px] md:block">Field notes</span></div>
            <div className="my-3 hidden border-t border-[#e7e6de] md:block" />
            <p className="mb-2 hidden px-2 text-[6px] font-semibold tracking-[0.16em] text-[#a3a596] md:block">TOOLS</p>
            <div className="flex items-center justify-center gap-2 px-1.5 py-2 text-[#a0a394] md:justify-start md:px-2.5"><span className="text-[12px]">⌘</span><span className="hidden text-[8px] md:block">Compass</span></div>
          </div>
          <div className="mt-auto border-t border-[#e8e7df] p-1.5 sm:p-2">
            <div className="flex items-center justify-center gap-2 rounded-lg bg-[#efeee7] p-1.5 md:justify-start md:p-2">
              <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#d9d8ca] text-[7px] font-semibold text-[#566354]">A</div>
              <div className="hidden min-w-0 md:block"><p className="text-[8px] font-semibold text-[#566354]">Alex Morgan</p><p className="text-[6px] text-[#a0a394]">Personal space</p></div>
            </div>
          </div>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <header className="flex h-11 shrink-0 items-center justify-between border-b border-[#e4e3dc] bg-[#fbfaf6] px-2.5 sm:px-4 md:px-5">
            <div className="flex min-w-0 items-center gap-1.5 text-[7px] sm:gap-2 sm:text-[8px]"><span className="text-[#a1a294]">Personal space</span><span className="text-[#c2c1b7]">/</span><span className="truncate font-semibold text-[#465449]">Overview</span></div>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5"><span className="hidden text-[7px] text-[#a1a294] sm:inline">All changes saved</span><span className="rounded-full border border-[#dedfd5] bg-white px-2 py-1 text-[6px] font-semibold tracking-[0.12em] text-[#77816e] sm:text-[7px]">DESIGN STUDY</span><div className="grid h-6 w-6 place-items-center rounded-full bg-[#e0e5d9] text-[7px] font-semibold text-[#4c624f]">AM</div></div>
          </header>

          <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden p-2.5 sm:gap-2.5 sm:p-4 md:gap-3 md:p-5">
            <div className="flex shrink-0 items-end justify-between gap-2">
              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#8b9a70]" /><p className="text-[6px] font-semibold uppercase tracking-[0.17em] text-[#879278] sm:text-[7px]">Your north star / active path</p></div>
                <h2 className="text-[clamp(15px,2.5vw,24px)] font-semibold leading-tight tracking-[-0.055em] text-[#2d3a31]">Make progress feel possible.</h2>
                <p className="mt-0.5 hidden text-[7px] text-[#858a7c] sm:block sm:text-[8px]">A direction worth moving toward, with enough room for real life.</p>
              </div>
              <span className="mb-0.5 shrink-0 rounded-full border border-[#e0dfd6] bg-white/70 px-2 py-1 text-[6px] text-[#828879] sm:px-2.5 sm:text-[7px]">PLAN 01 · 18 MONTHS</span>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-[1.3fr_.82fr] gap-2 sm:gap-3">
              <div className="flex min-h-0 flex-col gap-2 sm:gap-2.5">
                <section className="relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[13px] bg-[#2d4036] p-3 text-[#f5f3e9] sm:rounded-[16px] sm:p-4 md:p-5">
                  <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border border-[#d6dfc5]/10 sm:h-48 sm:w-48"><div className="absolute inset-4 rounded-full border border-dashed border-[#d6dfc5]/15" /><div className="absolute inset-10 rounded-full bg-[#d6dfc5]/[0.05]" /><div className="absolute inset-0 grid place-items-center text-[54px] font-extralight text-[#d6dfc5]/15 sm:text-[76px]">✳</div></div>
                  <div className="relative z-10 flex items-center justify-between gap-2"><span className="rounded-full border border-[#d6dfc5]/20 bg-white/[0.06] px-2 py-1 text-[6px] font-semibold tracking-[0.16em] text-[#dbe3cf] sm:text-[7px]">THE BIG PICTURE</span><span className="text-[6px] tracking-[0.13em] text-[#d6dfc5]/55 sm:text-[7px]">01 / 03</span></div>
                  <div className="relative z-10 my-3 sm:my-4">
                    <p className="text-[7px] uppercase tracking-[0.18em] text-[#d6dfc5]/55">I&apos;M WORKING TOWARD</p>
                    <h3 className="mt-1.5 max-w-[340px] text-[clamp(17px,3vw,29px)] font-medium leading-[1.02] tracking-[-0.06em]">Build an independent <span className="font-serif italic text-[#d7e2c1]">product studio.</span></h3>
                    <p className="mt-2 max-w-[300px] text-[7px] leading-relaxed text-[#e4e8dc]/65 sm:text-[8px]">Turn a broad ambition into a sequence of small experiments, useful skills and real releases.</p>
                  </div>
                  <div className="relative z-10 flex items-center justify-between gap-2 border-t border-white/[0.12] pt-2.5 sm:pt-3">
                    <div><p className="text-[6px] uppercase tracking-[0.15em] text-[#d6dfc5]/50">Current direction</p><p className="mt-0.5 text-[7px] font-medium text-[#f4f2e9] sm:text-[8px]">Learn · build · validate</p></div>
                    <span className="rounded-lg bg-[#dbe4cd] px-2.5 py-1.5 text-[6px] font-semibold text-[#304238] sm:text-[7px]">EDIT INTENTION ↗</span>
                  </div>
                </section>

                <section className="min-h-0 flex-1 overflow-hidden rounded-[13px] border border-[#e3e2d9] bg-[#fbfaf6] p-2.5 sm:rounded-[15px] sm:p-3">
                  <div className="flex items-center justify-between gap-2"><div><h3 className="text-[8px] font-semibold text-[#3e4b40] sm:text-[9px]">Choose a route, not a rigid rule.</h3><p className="mt-0.5 text-[6px] text-[#999b8e] sm:text-[7px]">Same north star. Different pace.</p></div><span className="text-[6px] text-[#8a927e]">3 OPTIONS</span></div>
                  <div className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2">
                    {routeOptions.map((option) => (
                      <button key={option.id} type="button" aria-pressed={route === option.id} onClick={() => setRoute(option.id)} className={route === option.id ? "min-w-0 rounded-lg border border-[#7f9477] bg-[#edf1e8] p-1.5 text-left shadow-[inset_0_0_0_1px_rgba(127,148,119,0.12)] sm:p-2" : "min-w-0 rounded-lg border border-[#e9e7df] bg-white p-1.5 text-left hover:border-[#b9c1b1] sm:p-2"}>
                        <div className="flex items-center justify-between gap-1"><span className="truncate text-[6px] font-semibold text-[#4a5849] sm:text-[7px]">{option.name}</span><span className={route === option.id ? "h-1.5 w-1.5 shrink-0 rounded-full bg-[#768d6d]" : "h-1.5 w-1.5 shrink-0 rounded-full bg-[#deded5]"} /></div>
                        <p className="mt-1 text-[8px] font-semibold leading-none text-[#354438] sm:text-[10px]">{option.duration}</p>
                        <p className="mt-1 truncate text-[5px] text-[#929588] sm:text-[6px]">{option.load}</p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2 border-t border-[#eeede6] pt-2">
                    <p className="min-w-0 truncate text-[6px] text-[#8b9083] sm:text-[7px]">{selectedRoute.note} · {selectedRoute.duration.toLowerCase()}</p>
                    <span className="shrink-0 text-[6px] font-semibold text-[#708369]">SELECTED ↗</span>
                  </div>
                </section>

                <section className="shrink-0 rounded-[13px] border border-[#e3e2d9] bg-[#fbfaf6] p-2.5 sm:rounded-[15px] sm:p-3">
                  <div className="mb-2 flex items-center justify-between gap-2"><h3 className="text-[7px] font-semibold text-[#485347] sm:text-[8px]">The next few landmarks</h3><span className="text-[6px] text-[#a0a292]">A DIRECTION, NOT A DEADLINE</span></div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="border-l-2 border-[#8c9b7b] pl-1.5"><p className="text-[5px] font-semibold tracking-[0.1em] text-[#88927d] sm:text-[6px]">01 · NOW</p><p className="mt-1 text-[6px] font-semibold text-[#465347] sm:text-[7px]">Find a problem</p><p className="mt-0.5 text-[5px] text-[#a0a292] sm:text-[6px]">2–3 weeks</p></div>
                    <div className="border-l-2 border-[#d7d8cc] pl-1.5"><p className="text-[5px] font-semibold tracking-[0.1em] text-[#a0a292] sm:text-[6px]">02 · NEXT</p><p className="mt-1 text-[6px] font-semibold text-[#626b5d] sm:text-[7px]">Build a small test</p><p className="mt-0.5 text-[5px] text-[#a0a292] sm:text-[6px]">1–2 months</p></div>
                    <div className="border-l-2 border-[#e3e2d9] pl-1.5"><p className="text-[5px] font-semibold tracking-[0.1em] text-[#a0a292] sm:text-[6px]">03 · LATER</p><p className="mt-1 text-[6px] font-semibold text-[#626b5d] sm:text-[7px]">Release v1</p><p className="mt-0.5 text-[5px] text-[#a0a292] sm:text-[6px]">When ready</p></div>
                  </div>
                </section>
              </div>

              <div className="flex min-h-0 flex-col gap-2 sm:gap-2.5">
                <section className="shrink-0 rounded-[13px] border border-[#e3e2d9] bg-[#fbfaf6] p-2.5 sm:rounded-[15px] sm:p-3">
                  <div className="flex items-center justify-between gap-2"><div><h3 className="text-[8px] font-semibold text-[#465247] sm:text-[9px]">Reality check</h3><p className="mt-0.5 text-[6px] text-[#a0a292] sm:text-[7px]">Built around your actual week.</p></div><span className="grid h-6 w-6 place-items-center rounded-lg bg-[#edf0e8] text-[11px] text-[#75856c]">⌁</span></div>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between gap-2 border-b border-[#efeee8] pb-1.5"><div><p className="text-[6px] text-[#a0a292]">Available time</p><p className="mt-0.5 text-[7px] font-semibold text-[#4a574a]">5 hours / week</p></div><span className="rounded-md bg-[#eef1e9] px-1.5 py-1 text-[5px] font-semibold text-[#71816a]">MODERATE</span></div>
                    <div className="flex items-center justify-between gap-2 border-b border-[#efeee8] pb-1.5"><div><p className="text-[6px] text-[#a0a292]">Starting budget</p><p className="mt-0.5 text-[7px] font-semibold text-[#4a574a]">Low / self-funded</p></div><span className="rounded-md bg-[#f4f0e7] px-1.5 py-1 text-[5px] font-semibold text-[#9a8660]">PROTECT IT</span></div>
                    <div className="flex items-center justify-between gap-2"><div><p className="text-[6px] text-[#a0a292]">Energy pattern</p><p className="mt-0.5 text-[7px] font-semibold text-[#4a574a]">Variable week to week</p></div><span className="rounded-md bg-[#eef1e9] px-1.5 py-1 text-[5px] font-semibold text-[#71816a]">FLEXIBLE</span></div>
                  </div>
                </section>

                <section className={timeTight ? "shrink-0 rounded-[13px] border border-[#d6dfcc] bg-[#edf1e8] p-2.5 sm:rounded-[15px] sm:p-3" : "shrink-0 rounded-[13px] border border-[#e5e0d4] bg-[#f8f5ec] p-2.5 sm:rounded-[15px] sm:p-3"}>
                  <div className="flex items-center justify-between gap-2"><div className="flex items-center gap-1.5"><span className="text-[10px] text-[#8b977d]">↗</span><p className="text-[7px] font-semibold text-[#59634f] sm:text-[8px]">When life changes</p></div><span className="rounded-full border border-[#e2dfd2] bg-white/70 px-1.5 py-0.5 text-[5px] text-[#8e927e]">LIVE DEMO</span></div>
                  <p className="mt-1.5 text-[6px] leading-relaxed text-[#858a79] sm:text-[7px]">{timeTight ? "Your available time dropped. Northstar shifts the pace instead of treating the change like failure." : "A busy month is coming up. See how the plan responds without throwing the goal away."}</p>
                  <div className="mt-2 flex items-center justify-between gap-2"><div className="min-w-0"><p className="text-[6px] font-semibold text-[#56624e]">{timeTight ? "Flexible route selected" : "Time is tighter than usual"}</p><p className="mt-0.5 text-[5px] text-[#9a9d8d]">{timeTight ? "2–3 hours / week · lower pressure" : "Try a smaller weekly commitment"}</p></div><button type="button" onClick={() => { setTimeTight((value) => !value); setRoute(timeTight ? "steady" : "flexible"); }} className="shrink-0 rounded-lg bg-[#33483a] px-2 py-1.5 text-[5px] font-semibold text-white hover:bg-[#405844] sm:text-[6px]">{timeTight ? "UNDO CHANGE" : "REPLAN ↗"}</button></div>
                </section>

                <section className="flex min-h-0 flex-1 flex-col justify-between rounded-[13px] bg-[#e6e9df] p-2.5 sm:rounded-[15px] sm:p-3">
                  <div><div className="flex items-center gap-1.5"><span className="grid h-5 w-5 place-items-center rounded-md bg-white/75 text-[10px] text-[#71836d]">✦</span><p className="text-[7px] font-semibold text-[#485747] sm:text-[8px]">Your next small move</p></div><p className="mt-2 text-[9px] font-semibold leading-tight tracking-[-0.02em] text-[#3f4b40] sm:text-[11px]">Talk to three people about a problem they wish was easier.</p><p className="mt-1.5 text-[6px] text-[#879080] sm:text-[7px]">One conversation at a time. No need to build anything yet.</p></div>
                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-[#cfd5c8] pt-2"><span className="text-[6px] font-medium text-[#75806e]">20–30 MIN · THIS WEEK</span><span className="grid h-6 w-6 place-items-center rounded-full bg-[#34483a] text-[10px] text-white">→</span></div>
                </section>
              </div>
            </div>

            <div className="flex shrink-0 items-center justify-between gap-2 px-0.5 text-[5px] text-[#a0a292] sm:text-[6px]"><span>Northstar · an adaptive planning concept</span><span className="text-right">Example scenario · no live AI or saved user plan</span></div>
          </div>
        </main>
      </div>
    </div>
  );
};


const ApiSentinelConceptPreview: FC = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#f3f5f7] text-[#252c36]">
    <div className="flex h-full min-h-0">
      <aside className="flex w-[52px] shrink-0 flex-col bg-[#171d26] text-white sm:w-[94px] md:w-[118px]">
        <div className="flex h-10 shrink-0 items-center gap-1.5 border-b border-white/[0.08] px-2 sm:h-12 sm:gap-2 sm:px-3">
          <div className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#c7f06b] text-[13px] font-black text-[#202719] sm:h-7 sm:w-7 sm:text-base">S</div>
          <div className="hidden min-w-0 sm:block"><p className="truncate text-[10px] font-semibold tracking-[-0.02em] md:text-[11px]">Sentinel</p><p className="text-[7px] text-white/40">WORKSPACE</p></div>
        </div>
        <div className="px-1.5 pt-3 sm:px-2.5 sm:pt-4">
          <p className="mb-2 hidden px-2 text-[7px] font-semibold tracking-[0.13em] text-white/30 sm:block">OBSERVABILITY</p>
          <div className="mb-1 flex items-center justify-center gap-2 rounded-md bg-white/[0.09] px-1.5 py-2 text-white sm:justify-start sm:px-2.5"><span className="text-[11px] text-[#c7f06b]">◫</span><span className="hidden text-[8px] font-medium sm:block md:text-[9px]">Overview</span></div>
          <div className="mb-1 flex items-center justify-center gap-2 rounded-md px-1.5 py-2 text-white/55 sm:justify-start sm:px-2.5"><span className="text-[11px]">⌁</span><span className="hidden text-[8px] sm:block md:text-[9px]">Monitors</span></div>
          <div className="mb-1 flex items-center justify-center gap-2 rounded-md px-1.5 py-2 text-white/55 sm:justify-start sm:px-2.5"><span className="text-[11px]">◷</span><span className="hidden text-[8px] sm:block md:text-[9px]">Incidents</span><span className="ml-auto hidden rounded bg-white/10 px-1 text-[7px] sm:inline">0</span></div>
          <div className="my-3 hidden border-t border-white/[0.08] sm:block" />
          <p className="mb-2 hidden px-2 text-[7px] font-semibold tracking-[0.13em] text-white/30 sm:block">CONFIGURATION</p>
          <div className="flex items-center justify-center gap-2 rounded-md px-1.5 py-2 text-white/45 sm:justify-start sm:px-2.5"><span className="text-[11px]">⚙</span><span className="hidden text-[8px] sm:block md:text-[9px]">Settings</span></div>
        </div>
        <div className="mt-auto border-t border-white/[0.08] p-1.5 sm:p-2.5">
          <div className="flex items-center justify-center gap-2 rounded-md bg-white/[0.05] p-1.5 sm:justify-start sm:p-2">
            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#353e4c] text-[7px] font-semibold text-white/75">NK</div>
            <div className="hidden min-w-0 sm:block"><p className="truncate text-[8px] font-medium">Developer</p><p className="text-[7px] text-white/35">Free workspace</p></div>
          </div>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-10 shrink-0 items-center justify-between border-b border-[#dfe3e8] bg-white px-2.5 sm:h-12 sm:px-4 md:px-5">
          <div className="flex min-w-0 items-center gap-1.5 text-[7px] sm:gap-2 sm:text-[8px] md:text-[9px]"><span className="text-[#8b95a2]">Workspace</span><span className="text-[#b7bec8]">/</span><span className="truncate font-semibold text-[#3a4350]">Overview</span></div>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5"><span className="hidden text-[7px] text-[#8b95a2] md:inline">Last updated just now</span><span className="rounded border border-[#e0e4e9] bg-[#f8f9fb] px-1.5 py-1 text-[6px] font-medium text-[#687281] sm:px-2 sm:text-[7px]">PREVIEW MODE</span><a href="https://github.com/Kentaakakashi/API-sentinal" target="_blank" rel="noopener noreferrer" className="rounded border border-[#dce2e8] bg-white px-1.5 py-1 text-[6px] font-medium text-[#586574] hover:bg-[#f5f7f9] sm:px-2 sm:py-1.5 sm:text-[7px]">Source ↗</a></div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden p-2.5 sm:gap-3 sm:p-4 md:gap-3.5 md:p-5">
          <div className="flex shrink-0 items-start justify-between gap-2">
            <div className="min-w-0"><div className="mb-1 flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#d69b35]" /><p className="text-[6px] font-semibold uppercase tracking-[0.12em] text-[#9b752e] sm:text-[7px]">Concept dashboard · sample data</p></div><h2 className="text-[clamp(16px,2.6vw,24px)] font-semibold leading-tight tracking-[-0.045em] text-[#222a34]">Service overview</h2><p className="mt-0.5 hidden text-[7px] text-[#77818e] sm:block sm:text-[8px]">A single place to inspect endpoint health and reliability.</p></div>
            <div className="flex shrink-0 items-center gap-1.5"><span className="hidden rounded-md border border-[#dce1e7] bg-white px-2 py-1.5 text-[7px] text-[#5d6876] md:inline">Last 24 hours⌄</span><span className="rounded-md bg-[#252d38] px-2 py-1.5 text-[7px] font-medium text-white sm:px-2.5 sm:text-[8px]">+ Add monitor</span></div>
          </div>

          <div className="shrink-0 rounded-md border border-[#e8d4a8] bg-[#fff9eb] px-2.5 py-1.5 sm:px-3 sm:py-2"><p className="text-[6px] leading-relaxed text-[#785d2b] sm:text-[7px] md:text-[8px]"><span className="font-semibold">Design study only.</span> Endpoint results, counts and charts below are illustrative interface data. The current project has health endpoints and infrastructure foundations; scheduled HTTP monitoring is not yet implemented.</p></div>

          <div className="grid shrink-0 grid-cols-3 gap-1.5 sm:gap-2.5">
            <section className="min-w-0 rounded-md border border-[#e0e4e9] bg-white p-2 sm:rounded-lg sm:p-3"><p className="text-[6px] font-medium text-[#788391] sm:text-[7px]">MONITORS</p><div className="mt-1 flex items-end justify-between gap-1"><p className="text-[clamp(16px,2.5vw,23px)] font-semibold leading-none tracking-[-0.05em] text-[#29323e]">12</p><span className="hidden text-[6px] text-[#7a8592] sm:inline">configured</span></div><div className="mt-2 h-1 overflow-hidden rounded-sm bg-[#edf0f3]"><div className="h-full w-[82%] bg-[#7184a1]" /></div><p className="mt-1 text-[6px] text-[#8a94a0] sm:text-[7px]">8 HTTP · 4 heartbeat</p></section>
            <section className="min-w-0 rounded-md border border-[#e0e4e9] bg-white p-2 sm:rounded-lg sm:p-3"><p className="text-[6px] font-medium text-[#788391] sm:text-[7px]">HEALTHY</p><div className="mt-1 flex items-end justify-between gap-1"><p className="text-[clamp(16px,2.5vw,23px)] font-semibold leading-none tracking-[-0.05em] text-[#29323e]">10<span className="ml-1 text-[8px] font-normal text-[#8a94a0]">/ 12</span></p><span className="hidden rounded bg-[#e7f4ec] px-1 py-0.5 text-[6px] text-[#357b55] sm:inline">83.3%</span></div><div className="mt-2 h-1 overflow-hidden rounded-sm bg-[#edf0f3]"><div className="h-full w-[83%] bg-[#3f9b6b]" /></div><p className="mt-1 text-[6px] text-[#8a94a0] sm:text-[7px]">Illustrative status split</p></section>
            <section className="min-w-0 rounded-md border border-[#e0e4e9] bg-white p-2 sm:rounded-lg sm:p-3"><p className="text-[6px] font-medium text-[#788391] sm:text-[7px]">OPEN INCIDENTS</p><div className="mt-1 flex items-end justify-between gap-1"><p className="text-[clamp(16px,2.5vw,23px)] font-semibold leading-none tracking-[-0.05em] text-[#29323e]">02</p><span className="hidden text-[6px] text-[#b47732] sm:inline">needs review</span></div><div className="mt-2 flex h-1 overflow-hidden rounded-sm bg-[#edf0f3]"><div className="h-full w-[17%] bg-[#d69b35]" /></div><p className="mt-1 text-[6px] text-[#8a94a0] sm:text-[7px]">Example incident count</p></section>
          </div>

          <section className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-md border border-[#e0e4e9] bg-white sm:rounded-lg">
            <div className="flex shrink-0 items-center justify-between border-b border-[#e7eaee] px-2.5 py-2 sm:px-3.5 sm:py-2.5"><div><h3 className="text-[8px] font-semibold text-[#333c48] sm:text-[9px]">Monitors</h3><p className="mt-0.5 text-[6px] text-[#8b95a1] sm:text-[7px]">Recent check results · example endpoints only</p></div><div className="flex items-center gap-1"><span className="hidden rounded border border-[#e2e6eb] px-1.5 py-1 text-[6px] text-[#6c7785] sm:inline">All environments⌄</span><span className="rounded border border-[#e2e6eb] px-1.5 py-1 text-[6px] text-[#6c7785]">Filter</span></div></div>
            <div className="grid shrink-0 grid-cols-[minmax(0,1.6fr)_0.55fr_0.68fr_0.66fr] gap-1 border-b border-[#e7eaee] bg-[#f8f9fb] px-2.5 py-1.5 text-[6px] font-semibold uppercase tracking-[0.05em] text-[#929ba6] sm:px-3.5 sm:py-2 sm:text-[7px]"><span>Endpoint</span><span>Status</span><span>Latency</span><span>Last check</span></div>
            <div className="flex min-h-0 flex-1 flex-col justify-evenly">
              {[
                {method:"GET",host:"api.example.com/v1/users",label:"User API",status:"Operational",statusClass:"bg-[#e9f5ee] text-[#357b55]",dot:"bg-[#40966a]",latency:"142 ms",latencyClass:"text-[#4b5968]",time:"18 sec ago",width:"42%"},
                {method:"GET",host:"api.example.com/health",label:"Health endpoint",status:"Operational",statusClass:"bg-[#e9f5ee] text-[#357b55]",dot:"bg-[#40966a]",latency:"38 ms",latencyClass:"text-[#4b5968]",time:"24 sec ago",width:"17%"},
                {method:"POST",host:"api.example.com/v1/events",label:"Event ingestion",status:"Degraded",statusClass:"bg-[#fff2df] text-[#956323]",dot:"bg-[#d49a39]",latency:"824 ms",latencyClass:"text-[#b47732]",time:"31 sec ago",width:"88%"},
                {method:"GET",host:"status.example.com",label:"Public status",status:"Paused",statusClass:"bg-[#eff1f4] text-[#737e8b]",dot:"bg-[#9ba4af]",latency:"—",latencyClass:"text-[#8d97a3]",time:"Paused",width:"0%"},
              ].map((endpoint) => <div key={endpoint.host} className="grid min-h-0 grid-cols-[minmax(0,1.6fr)_0.55fr_0.68fr_0.66fr] items-center gap-1 border-b border-[#eef0f3] px-2.5 py-2 last:border-0 sm:px-3.5 sm:py-2.5">
                <div className="min-w-0"><div className="flex min-w-0 items-center gap-1"><span className="shrink-0 rounded-sm border border-[#dce5ee] bg-[#f3f7fb] px-1 py-0.5 font-mono text-[5px] font-semibold text-[#61768b] sm:text-[6px]">{endpoint.method}</span><p className="truncate font-mono text-[6px] text-[#394451] sm:text-[7px] md:text-[8px]">{endpoint.host}</p></div><p className="mt-0.5 truncate text-[6px] text-[#929ba6] sm:text-[7px]">{endpoint.label}</p></div>
                <div className="min-w-0"><span className={`inline-flex items-center gap-1 rounded-sm px-1 py-1 text-[5px] font-medium sm:px-1.5 sm:text-[6px] md:text-[7px] ${endpoint.statusClass}`}><span className={`h-1 w-1 shrink-0 rounded-full ${endpoint.dot}`} /><span className="truncate">{endpoint.status}</span></span></div>
                <div className="min-w-0"><p className={`truncate font-mono text-[6px] sm:text-[7px] md:text-[8px] ${endpoint.latencyClass}`}>{endpoint.latency}</p><div className="mt-1 h-1 max-w-[54px] overflow-hidden rounded-sm bg-[#edf0f3]"><div className="h-full rounded-sm bg-[#98a6b9]" style={{width:endpoint.width}} /></div></div>
                <p className="truncate text-[6px] text-[#818c99] sm:text-[7px]">{endpoint.time}</p>
              </div>)}
            </div>
            <div className="flex shrink-0 items-center justify-between border-t border-[#e7eaee] bg-[#fbfcfd] px-2.5 py-1.5 text-[6px] text-[#87919d] sm:px-3.5 sm:py-2 sm:text-[7px]"><span>Showing 4 of 12 sample monitors</span><span className="font-medium text-[#5b6877]">View all →</span></div>
          </section>

          <div className="grid shrink-0 grid-cols-[1.25fr_.75fr] gap-1.5 sm:gap-2.5">
            <section className="rounded-md border border-[#e0e4e9] bg-white p-2 sm:rounded-lg sm:p-3"><div className="flex items-start justify-between gap-2"><div><h3 className="text-[7px] font-semibold text-[#3b4551] sm:text-[8px]">Response time</h3><p className="mt-0.5 text-[6px] text-[#929ba6]">Illustrative 24-hour trend</p></div><p className="shrink-0 text-[8px] font-semibold text-[#394451] sm:text-[10px]">182 <span className="text-[6px] font-normal text-[#929ba6]">ms avg.</span></p></div><svg viewBox="0 0 320 58" preserveAspectRatio="none" className="mt-1.5 h-8 w-full sm:h-10 md:h-12" role="img" aria-label="Illustrative response-time line chart"><path d="M0 45 H320 M0 29 H320 M0 13 H320" stroke="#e9edf1" strokeWidth="1" fill="none" /><path d="M0 41 L18 38 L34 40 L50 27 L66 31 L82 35 L98 19 L114 26 L130 30 L146 17 L162 22 L178 34 L194 28 L210 41 L226 35 L242 19 L258 24 L274 12 L290 26 L306 21 L320 24 L320 58 L0 58 Z" fill="#dbe8df" opacity="0.65" /><path d="M0 41 L18 38 L34 40 L50 27 L66 31 L82 35 L98 19 L114 26 L130 30 L146 17 L162 22 L178 34 L194 28 L210 41 L226 35 L242 19 L258 24 L274 12 L290 26 L306 21 L320 24" stroke="#4b8d6c" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" fill="none" /></svg><div className="mt-1 flex justify-between text-[5px] text-[#a0a8b2] sm:text-[6px]"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>NOW</span></div></section>
            <section className="rounded-md border border-[#e0e4e9] bg-white p-2 sm:rounded-lg sm:p-3"><h3 className="text-[7px] font-semibold text-[#3b4551] sm:text-[8px]">Build status</h3><p className="mt-0.5 text-[6px] text-[#929ba6]">Actual project scope</p><div className="mt-2 space-y-1.5 sm:mt-2.5 sm:space-y-2"><div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#45916a]" /><span className="min-w-0 flex-1 truncate text-[6px] text-[#586472] sm:text-[7px]">Health endpoints</span><span className="text-[5px] font-semibold text-[#43845f] sm:text-[6px]">BUILT</span></div><div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c99a42]" /><span className="min-w-0 flex-1 truncate text-[6px] text-[#586472] sm:text-[7px]">Scheduled checks</span><span className="text-[5px] font-semibold text-[#9b752e] sm:text-[6px]">PLANNED</span></div><div className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c99a42]" /><span className="min-w-0 flex-1 truncate text-[6px] text-[#586472] sm:text-[7px]">Incident workflow</span><span className="text-[5px] font-semibold text-[#9b752e] sm:text-[6px]">PLANNED</span></div></div></section>
          </div>
          <div className="flex shrink-0 items-center justify-between gap-2 px-0.5 text-[6px] text-[#9aa3ad] sm:text-[7px]"><span>API Sentinel · product direction</span><span>All values are fictional UI samples</span></div>
        </div>
      </main>
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
  const isNorthstarConcept = project.id === 5;

  return (
    <div className="order-1 lg:order-2 lg:col-span-7">
      <div style={{ perspective: "1400px" }} className="relative">
        <motion.div onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-midnight shadow-2xl shadow-black/50 md:aspect-[16/10]">
          {isTheoConcept && showPreview ? <TheoConceptPreview /> : isRyuConcept && showPreview ? <RyuConceptPreview /> : isPresenceStudioConcept && showPreview ? <PresenceStudioConceptPreview /> : isApiSentinelConcept && showPreview ? <ApiSentinelConceptPreview /> : isNorthstarConcept && showPreview ? <NorthstarConceptPreview /> : <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`} />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center"><span className="text-[10rem] font-black leading-none tracking-tighter text-white/[0.08] md:text-[14rem]">{padIndex(index + 1)}</span></div>
            {project.image ? <Image src={project.image} alt={`${project.title} project artwork`} fill sizes="(min-width: 1024px) 58vw, 100vw" className="pointer-events-none select-none object-cover object-top" /> : <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center"><span className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[-0.08em] text-white/85">{project.title}</span><span className="mt-3 text-[10px] uppercase tracking-[0.45em] text-white/45">RYZENT / PRODUCT LAB</span></div>}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" /><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.4),transparent_45%)]" />
          </>}
          {!isApiSentinelConcept && !isNorthstarConcept && <div style={{ transform: "translateZ(70px)" }} className="pointer-events-none absolute left-5 right-5 top-5 flex items-center justify-between"><span className={`${BADGE} text-white/90`}>{isTheoConcept || isRyuConcept || isPresenceStudioConcept ? "Concept preview" : project.image ? "Project artwork" : "In development"}</span><span className={`${BADGE} text-white/70`}>{formatCounter(index, total)}</span></div>}
          {project.href && !isApiSentinelConcept && !isNorthstarConcept && <a href={project.href} target="_blank" rel="noopener noreferrer" style={{ transform: "translateZ(80px)" }} className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md hover:border-white/40"><span>{isRepository ? "Open repository" : "Open project"}</span><span aria-hidden>↗</span></a>}
          {!isApiSentinelConcept && !isNorthstarConcept && <div style={{ transform: "translateZ(50px)" }} className={`${BADGE} pointer-events-none absolute bottom-5 left-5 text-white/85`}>{project.title}</div>}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </div>
  );
};
