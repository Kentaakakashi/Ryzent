"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-10 lg:col-span-7"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
        The studio
      </p>
      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
        Ideas deserve more than another concept screen.
      </h3>
      <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
        Ryzent is an independent software studio built around a simple belief:
        technology should be capable, considered and genuinely useful. The
        studio explores ideas across intelligent assistants, mobile-first
        products, interactive interfaces and original digital worlds.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        The work is product-led. Each project has its own identity and purpose:
        Theo explores a more personal kind of AI assistance, Ryu turns fitness
        into a progression-driven experience, and The God Who Forgot is a
        story-led world built around exploration rather than combat.
      </p>
      <p className="mt-4 leading-relaxed text-neutral-400">
        Ryzent values hands-on engineering, resourceful experimentation and
        iteration on real devices. The goal is not to ship noise. It is to turn
        interesting ideas into coherent products, then keep improving the
        details that make them worth using.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#work" className="btn-primary">
          <span>Explore the products</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#principles" className="btn-ghost">
          <span>How we think</span>
        </a>
      </div>
    </motion.div>
  );
};