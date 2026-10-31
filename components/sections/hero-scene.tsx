"use client";

import { Suspense, useRef, type FC } from "react";
import { motion } from "motion/react";
import { LiquidMetal } from "@paper-design/shaders-react";
import { useSceneActive } from "@/hooks/use-scene-active";

const GemEmblem: FC = () => (
  <motion.div
    initial={{ y: 150, opacity: 0, rotate: -8 }}
    animate={{ y: 0, opacity: 1, rotate: 0 }}
    transition={{ type: "spring", damping: 30, stiffness: 65, mass: 1.1 }}
    className="pointer-events-none absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-1/2 md:left-[70%]"
    aria-hidden="true"
  >
    <motion.div
      animate={{ y: [0, -16, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <LiquidMetal
        width={760}
        height={760}
        image="/Picsart_26-11-01_01-15-58-790.png"
        colorBack="#00000000"
        colorTint="#f5f4ee"
        repetition={2.4}
        softness={0.18}
        shiftRed={0.12}
        shiftBlue={0.12}
        distortion={0.16}
        contour={0.55}
        angle={70}
        speed={1}
        scale={0.6}
        fit="contain"
        style={{
          display: "block",
          width: "min(88vw, 760px)",
          height: "min(88vw, 760px)",
        }}
      />
    </motion.div>
  </motion.div>
);

export const HeroScene: FC = () => {
  const frame = useRef<HTMLElement>(null);
  const active = useSceneActive({ whenVisible: frame });

  return (
    <figure
      ref={frame}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ width: "100%", height: "100vh" }}
    >
      {active && (
        <Suspense fallback={null}>
          <GemEmblem />
        </Suspense>
      )}
    </figure>
  );
};
