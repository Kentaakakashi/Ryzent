"use client";

import { useState, type FC } from "react";
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
    anchor: "center",
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
    anchor: "center",
  },
] as const;

const MemberCredential: FC<{ member: (typeof MEMBERS)[number] }> = ({ member }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <article className="relative min-w-0 text-center">
      <div className="relative flex h-[330px] w-full flex-col items-center sm:h-[390px] lg:h-[430px]">
        <div aria-hidden="true" className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-gradient-to-b from-lavender/70 to-white/35" />
        <button
          type="button"
          aria-label={`Flip ${member.name}'s credential`}
          onClick={() => setFlipped((value) => !value)}
          className="absolute left-1/2 top-6 z-10 w-[min(88%,170px)] -translate-x-1/2 cursor-pointer border-0 bg-transparent p-0 transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-lavender sm:w-[min(90%,210px)]"
        >
          <span className="relative block">
            <span aria-hidden="true" className="absolute left-1/2 top-[-24px] h-6 w-px -translate-x-1/2 bg-gradient-to-b from-white/40 to-lavender/70" />
            <img
              src={flipped ? "/members/member-back.svg" : member.frontImage}
              alt={`${member.name} Ryzent credential`}
              draggable={false}
              className="block h-auto w-full drop-shadow-[0_18px_28px_rgba(0,0,0,0.38)]"
            />
          </span>
        </button>
      </div>

      <div className="mx-auto mt-1 min-w-0 max-w-[16rem] px-1 pt-1 sm:mt-2 sm:px-2">
        <p className="truncate text-[8px] uppercase tracking-[0.13em] text-lavender/90 sm:text-[10px] sm:tracking-[0.28em]">
          {member.id} / 03 · {member.role}
        </p>
        <h3 className="mt-2 break-words text-sm font-semibold leading-tight tracking-tight text-white sm:text-lg">
          {member.name}
        </h3>
        <p className="mt-1 line-clamp-2 break-words text-[10px] leading-snug text-neutral-400 sm:text-xs">{member.detail}</p>
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

    <div className="relative mt-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[16.666%] top-0 z-0 h-px bg-gradient-to-r from-white/20 via-lavender/70 to-white/20" />
      <span aria-hidden="true" className="pointer-events-none absolute left-[16.666%] top-[-2px] z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b6a4ff] shadow-[0_0_10px_rgba(182,164,255,0.8)]" />
      <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-2px] z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b6a4ff] shadow-[0_0_10px_rgba(182,164,255,0.8)]" />
      <span aria-hidden="true" className="pointer-events-none absolute left-[83.333%] top-[-2px] z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-[#b6a4ff] shadow-[0_0_10px_rgba(182,164,255,0.8)]" />
      <div className="grid grid-cols-3 items-start gap-2 sm:gap-4 xl:gap-8">
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
    </div>

    <p className="mt-6 text-center text-[8px] uppercase tracking-[0.12em] text-neutral-500 sm:text-[10px] sm:tracking-[0.24em]">
      Credentials are interactive · Tap to flip · Drag to move
    </p>
  </section>
);
