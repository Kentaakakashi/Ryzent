"use client";

import { type FC, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { TILT_RANGE, TILT_SPRING } from "@/constants/projects-constants";
import { formatCounter, padIndex } from "@/helpers/format-helpers";
import { type ProjectPreviewProps } from "@/types/project-types";

const BADGE =
  "rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] backdrop-blur-md";

export const ProjectPreview: FC<ProjectPreviewProps> = ({
  project,
  index,
  total,
}) => {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], TILT_RANGE.x),
    TILT_SPRING
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], TILT_RANGE.y),
    TILT_SPRING
  );

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const handleLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  const isRepository = project.href.includes("github.com/");

  return (
    <div className="order-1 lg:order-2 lg:col-span-7">
      <div style={{ perspective: "1400px" }} className="relative">
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-midnight shadow-2xl shadow-black/50 md:aspect-[16/10]"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`}
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-[10rem] font-black leading-none tracking-tighter text-white/[0.08] md:text-[14rem]">
              {padIndex(index + 1)}
            </span>
          </div>

          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} project artwork`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="pointer-events-none select-none object-cover object-top"
            />
          ) : (
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <span className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[-0.08em] text-white/85">
                {project.title}
              </span>
              <span className="mt-3 text-[10px] uppercase tracking-[0.45em] text-white/45">
                RYZENT / PRODUCT LAB
              </span>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.4),transparent_45%)]" />

          <div
            style={{ transform: "translateZ(70px)" }}
            className="pointer-events-none absolute left-5 right-5 top-5 flex items-center justify-between"
          >
            <span className={`${BADGE} text-white/90`}>
              {project.image ? "Project artwork" : "In development"}
            </span>
            <span className={`${BADGE} text-white/70`}>
              {formatCounter(index, total)}
            </span>
          </div>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transform: "translateZ(80px)" }}
              className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md hover:border-white/40"
            >
              <span>{isRepository ? "Open repository" : "Open project"}</span>
              <span aria-hidden>↗</span>
            </a>
          )}

          <div
            style={{ transform: "translateZ(50px)" }}
            className={`${BADGE} pointer-events-none absolute bottom-5 left-5 text-white/85`}
          >
            {project.title}
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </div>
  );
};