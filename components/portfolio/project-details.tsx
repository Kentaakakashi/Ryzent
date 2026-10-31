"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { type ProjectDetailsProps } from "@/types/portfolio-types";

export const ProjectDetails: FC<ProjectDetailsProps> = ({
  title,
  description,
  subDescription,
  tags,
  href,
  closeModal,
}) => {
  const isRepository = href.includes("github.com/");

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-md"
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
        >
          <img src="/assets/close.svg" className="h-5 w-5" alt="" />
        </button>
        <div className="relative h-48 overflow-hidden rounded-t-3xl bg-gradient-to-br from-storm to-indigo md:h-56">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(122,87,219,0.4),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(234,72,132,0.3),transparent_55%)]" />
          <div className="relative flex h-full w-full items-center justify-center">
            <span className="text-7xl font-black text-white/10 md:text-8xl">
              {title.slice(0, 1)}
            </span>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <h5 className="mb-2 text-2xl font-bold text-white md:text-3xl">
            {title}
          </h5>
          <p className="mb-5 text-neutral-400">{description}</p>
          <ul className="mb-6 space-y-3">
            {subDescription.map((subDesc, index) => (
              <li key={index} className="flex gap-3 text-sm text-neutral-300">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-coral to-lavender" />
                <span>{subDesc}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-2 !text-sm"
              >
                <span>{isRepository ? "Open repository" : "Open project"}</span>
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};