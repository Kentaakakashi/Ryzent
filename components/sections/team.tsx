"use client";

import { useEffect, useRef, useState, type FC } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";

const MEMBERS = [
  {
    id: "01",
    name: "Member 01",
    role: "Core team member",
    detail: "Profile details to be added",
    frontImage: "/members/member-02-front.svg",
    anchor: "left",
  },
  {
    id: "02",
    name: "Naren Kumar",
    role: "Founder & Studio Lead",
    detail: "Product direction · Engineering",
    frontImage: "/members/member-01-front.svg",
    anchor: "center",
  },
  {
    id: "03",
    name: "Member 03",
    role: "Core team member",
    detail: "Profile details to be added",
    frontImage: "/members/member-03-front.svg",
    anchor: "right",
  },
] as const;

const Lanyard = dynamic(() => import("@/components/react-bits/Lanyard"), {
  ssr: false,
  loading: () => null,
});

const SharedLanyardStage: FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px" }
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative isolate mt-10 h-[520px] w-full overflow-visible bg-transparent sm:h-[600px] lg:h-[650px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[27%] right-[27%] top-0 z-20 h-px bg-gradient-to-r from-white/20 via-lavender/75 to-white/20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[27%] top-[-2px] z-20 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b6a4ff] shadow-[0_0_10px_rgba(182,164,255,0.8)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-2px] z-20 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b6a4ff] shadow-[0_0_10px_rgba(182,164,255,0.8)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[73%] top-[-2px] z-20 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b6a4ff] shadow-[0_0_10px_rgba(182,164,255,0.8)]"
      />

      {ready &&
        MEMBERS.map((member) => (
          <Lanyard
            key={member.id}
            className="lanyard-shared-layer"
            frontImage={member.frontImage}
            backImage="/members/member-back.svg"
            strapImage="/members/strap.svg"
            anchor={member.anchor}
            cardWidthRatio={0.23}
            metal="graphite"
            strapColor="#514775"
            strapWidth={0.4}
            strapLength={0.48}
            gravity={1}
            damping={0.86}
            elasticity={0.22}
            breeze={0}
            size={0.9}
            interactive
            intro={false}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
            }}
          />
        ))}
    </div>
  );
};

export const Team: FC = () => (
  <section id="team" className="relative c-space py-28 md:py-36">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[10%] top-1/4 h-72 w-72 rounded-full bg-royal/15 blur-[130px]" />
      <div className="absolute right-[8%] top-1/3 h-80 w-80 rounded-full bg-coral/10 blur-[150px]" />
    </div>

    <SectionHeader
      eyebrow="The people behind Ryzent"
      title={
        <>
          Three people. <span className="text-gradient">One direction.</span>
        </>
      }
      hint={["Meet", "The team"]}
    />

    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base"
    >
      A small crew shaping the products, systems and experiences that carry the Ryzent name.
      Each credential is interactive — drag it to move, or tap to turn it over.
    </motion.p>

    <div className="mt-9 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-neutral-500">
      <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2">03 members</span>
      <span className="h-px w-8 bg-white/15" />
      <span>Independent software studio</span>
    </div>

    <SharedLanyardStage />

    <div className="grid grid-cols-3 items-start gap-2 sm:gap-4 xl:gap-8">
      {MEMBERS.map((member) => (
        <div key={member.id} className="min-w-0 px-1 text-center sm:px-2">
          <p className="truncate text-[8px] uppercase tracking-[0.13em] text-lavender/90 sm:text-[10px] sm:tracking-[0.28em]">
            {member.id} / 03 · {member.role}
          </p>
          <h3 className="mt-2 break-words text-sm font-semibold leading-tight tracking-tight text-white sm:text-lg">
            {member.name}
          </h3>
          <p className="mt-1 line-clamp-2 break-words text-[10px] leading-snug text-neutral-400 sm:text-xs">
            {member.detail}
          </p>
        </div>
      ))}
    </div>

    <p className="mt-6 text-center text-[8px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px] sm:tracking-[0.24em]">
      Credentials are interactive · Tap to flip · Drag to move
    </p>
  </section>
);
