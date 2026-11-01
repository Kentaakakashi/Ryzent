"use client";

import { useEffect, useRef, useState, type FC } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";

const Lanyard = dynamic(() => import("@/components/react-bits/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-[10px] uppercase tracking-[0.3em] text-white/35">
      Preparing credential
    </div>
  ),
});

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

const MemberCredential: FC<{ member: (typeof MEMBERS)[number] }> = ({ member }) => {
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
    <article className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.012] px-1.5 pb-3 pt-2 shadow-[0_24px_90px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-white/20 sm:rounded-[1.8rem] sm:px-3 sm:pb-5 sm:pt-4">
      <div
        ref={stageRef}
        className="relative h-[245px] w-full min-w-0 sm:h-[390px] lg:h-[450px]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/15 blur-[55px] sm:h-56 sm:w-56 sm:blur-[85px]"
        />
        {ready ? (
          <Lanyard
            frontImage={member.frontImage}
            backImage="/members/member-back.svg"
            strapImage="/members/strap.svg"
            anchor={member.anchor}
            metal="graphite"
            breeze={0}
            size={0.34}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-24 w-16 rounded-xl border border-white/10 bg-white/[0.025] shadow-[0_0_45px_rgba(122,87,219,0.1)] sm:h-36 sm:w-28 sm:rounded-2xl" />
          </div>
        )}
      </div>

      <div className="min-w-0 border-t border-white/10 px-1 pt-2 sm:flex sm:items-start sm:justify-between sm:gap-3 sm:px-2 sm:pt-4">
        <div className="min-w-0">
          <p className="truncate text-[7px] uppercase tracking-[0.08em] text-lavender/90 sm:text-[10px] sm:tracking-[0.28em]">
            {member.id} / 03 · {member.role}
          </p>
          <h3 className="mt-1 break-words text-[11px] font-semibold leading-tight tracking-tight text-white sm:mt-2 sm:truncate sm:text-lg sm:leading-normal sm:text-xl">
            {member.name}
          </h3>
          <p className="mt-1 line-clamp-2 break-words text-[8px] leading-snug text-neutral-400 sm:text-xs">{member.detail}</p>
        </div>
        <span className="mt-1 hidden shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-neutral-500 sm:block">
          Ryzent
        </span>
      </div>
    </article>
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

    <div className="mt-8 grid grid-cols-3 items-stretch gap-2 sm:gap-4 xl:gap-5">
      {MEMBERS.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: index * 0.09 }}
        >
          <MemberCredential member={member} />
        </motion.div>
      ))}
    </div>

    <p className="mt-6 text-center text-[8px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px] sm:tracking-[0.24em]">
      Credentials are interactive · Tap to flip · Drag to move
    </p>
  </section>
);
