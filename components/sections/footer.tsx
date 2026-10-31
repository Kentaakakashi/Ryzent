"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { HERO_NAME, MY_SOCIALS } from "@/constants/portfolio-constants";

export const Footer: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer ref={ref} className="c-space relative overflow-hidden pt-16 pb-8">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
        <div className="absolute left-1/2 bottom-[-50%] h-72 w-[80%] -translate-x-1/2 rounded-full bg-royal/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
      >
        <div>
          <div className="flex items-center gap-2 text-base font-semibold tracking-tight text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-royal to-coral text-sm font-black text-white">
              R
            </span>
            <span>{HERO_NAME}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
            Independent software studio. Engineer the unexpected through
            thoughtful products, expressive interfaces and interactive worlds.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-3">
            {MY_SOCIALS.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-colors hover:border-white/30 hover:bg-white/[0.1]"
              >
                <img src={social.icon} alt="" loading="lazy" decoding="async" className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
          <div className="flex gap-3 text-sm text-neutral-500">
            <span>© {new Date().getFullYear()} {HERO_NAME}</span>
            <span>·</span>
            <span>Engineer the unexpected.</span>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 select-none text-center text-[20vw] font-black leading-none text-white/[0.03] md:text-[14rem]"
      >
        RYZENT
      </motion.p>
    </footer>
  );
};