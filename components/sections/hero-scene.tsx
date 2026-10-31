"use client";

import { Suspense, useRef, type FC } from "react";
import { Canvas, useFrame, type RootState } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Astronaut } from "@/components/portfolio/astronaut";
import { Loader } from "@/components/portfolio/loader";
import { useSceneActive } from "@/hooks/use-scene-active";
import GridScan from "@/components/ui/GridScan";

const Rig: FC = () => {
  useFrame((state: RootState, delta: number) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x * 0.286 * state.viewport.aspect, 1 + state.mouse.y * 0.286, 3],
      0.5,
      delta
    );
  });
  return null;
};

export const HeroScene: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const frame = useRef<HTMLElement>(null);
  const active = useSceneActive({ whenVisible: frame });

  return (
    <figure
      ref={frame}
      className="absolute inset-0"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="absolute inset-0 z-0">
        <GridScan
          linesColor="#4d4757"
          scanColor="#e0ff66"
          cells={8}
          depth={3.6}
          parallax={1}
          dpr={1}
          scanDuration={2.4}
          scanDelay={1.6}
          clickEffect="ping"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Canvas
        camera={{ position: [0, 1, 3] }}
        frameloop={active ? "always" : "never"}
        gl={{ alpha: true }}
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      >
        <Suspense fallback={<Loader />}>
          <Float>
            <Astronaut
              scale={isMobile ? 0.23 : undefined}
              position={isMobile ? [0, -1.5, 0] : undefined}
            />
          </Float>
          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};
