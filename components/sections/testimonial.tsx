"use client";

import { type FC } from "react";
import { motion } from "motion/react";

const PRINCIPLES = [
  {
    number: "01",
    title: "Useful over noisy",
    body: "A product should solve a real problem or create a meaningful experience. Decoration comes after purpose.",
  },
  {
    number: "02",
    title: "Built, not just imagined",
    body: "Ideas become clearer through prototypes, real-device testing and the willingness to refine what does not work.",
  },
  {
    number: "03",
    title: "Small details matter",
    body: "Interaction, accessibility, performance and the feeling of using a product are part of the engineering—not polish added at the end.",
  },
  {
    number: "04",
    title: "Room for the unexpected",
    body: "Technology should leave space for curiosity: expressive interfaces, unusual mechanics and ideas that do not fit a template.",
  },
];

export const StudioPrinciples: FC = () => (
  <section
    id="principles"
    className="relative c-space section-spacing overflow-hidden"
  >
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-1/3 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-lavender/10 blur-[140px]" />
    </div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-eyebrow"
    >
      Studio principles
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="text-heading mt-3 max-w-3xl"
    >
      A few things we <span className="text-gradient">refuse to compromise.</span>
    </motion.h2>

    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
      {PRINCIPLES.map((principle, index) => (
        <motion.article
          key={principle.number}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="glass gradient-border min-h-48 p-7 md:p-8"
        >
          <p className="text-xs tracking-[0.3em] text-neutral-500">
            {principle.number}
          </p>
          <h3 className="mt-5 text-xl font-bold text-white md:text-2xl">
            {principle.title}
          </h3>
          <p className="mt-3 max-w-xl leading-relaxed text-neutral-400">
            {principle.body}
          </p>
        </motion.article>
      ))}
    </div>
  </section>
);