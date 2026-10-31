"use client";

import { Suspense, useEffect, useMemo, useRef, useState, type FC } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "motion/react";
import { useSceneActive } from "@/hooks/use-scene-active";

const LOGO = "/Picsart_26-11-01_01-15-58-790.png";

function makeExtrudedLogo(image: HTMLImageElement) {
  const size = 220;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;

  const scale = Math.min(size / image.width, size / image.height);
  const width = Math.round(image.width * scale);
  const height = Math.round(image.height * scale);
  ctx.drawImage(image, (size - width) / 2, (size - height) / 2, width, height);
  const pixels = ctx.getImageData(0, 0, size, size).data;
  const filled = (x: number, y: number) =>
    x >= 0 && y >= 0 && x < size && y < size && pixels[(y * size + x) * 4 + 3] > 24;

  const edges: Array<[[number, number], [number, number]]> = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!filled(x, y)) continue;
      if (!filled(x, y - 1)) edges.push([[x, y], [x + 1, y]]);
      if (!filled(x + 1, y)) edges.push([[x + 1, y], [x + 1, y + 1]]);
      if (!filled(x, y + 1)) edges.push([[x + 1, y + 1], [x, y + 1]]);
      if (!filled(x - 1, y)) edges.push([[x, y + 1], [x, y]]);
    }
  }

  const key = (p: [number, number]) => p[0] + "," + p[1];
  const starts = new Map<string, number[]>();
  edges.forEach((edge, index) => {
    const k = key(edge[0]);
    const list = starts.get(k) ?? [];
    list.push(index);
    starts.set(k, list);
  });

  const used = new Set<number>();
  const shapes: THREE.Shape[] = [];
  for (let i = 0; i < edges.length; i++) {
    if (used.has(i)) continue;
    const shape = new THREE.Shape();
    const first = edges[i][0];
    let current = edges[i][1];
    shape.moveTo((first[0] - size / 2) / 70, (size / 2 - first[1]) / 70);
    used.add(i);
    let guard = 0;
    while (guard++ < edges.length + 2) {
      shape.lineTo((current[0] - size / 2) / 70, (size / 2 - current[1]) / 70);
      if (key(current) === key(first)) break;
      const next = (starts.get(key(current)) ?? []).find((index) => !used.has(index));
      if (next === undefined) break;
      used.add(next);
      current = edges[next][1];
    }
    if (guard > 3) shapes.push(shape);
  }
  if (!shapes.length) return null;
  return new THREE.ExtrudeGeometry(shapes, {
    depth: 0.22,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 1,
    bevelSize: 0.035,
    bevelThickness: 0.035,
    curveSegments: 2,
  });
}

const LogoMesh: FC = () => {
  const group = useRef<THREE.Group>(null);
  const [geometry, setGeometry] = useState<THREE.ExtrudeGeometry | null>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = LOGO;
    image.onload = () => {
      const nextGeometry = makeExtrudedLogo(image);
      if (nextGeometry) setGeometry(nextGeometry);
      const nextTexture = new THREE.Texture(image);
      nextTexture.colorSpace = THREE.SRGBColorSpace;
      nextTexture.needsUpdate = true;
      setTexture(nextTexture);
    };
    return () => {
      setGeometry((old) => {
        old?.dispose();
        return null;
      });
      setTexture((old) => {
        old?.dispose();
        return null;
      });
    };
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.055;
  });

  if (!geometry) return null;

  return (
    <group ref={group} scale={1.35}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#b9b9b5"
          metalness={0.88}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
      {texture && (
        <mesh position={[0, 0, 0.258]}>
          <planeGeometry args={[3.14, 3.14]} />
          <meshBasicMaterial map={texture} transparent depthWrite={false} />
        </mesh>
      )}
    </group>
  );
};

const Scene: FC = () => (
  <>
    <ambientLight intensity={0.65} />
    <spotLight position={[4, 6, 7]} intensity={95} angle={0.42} penumbra={1} castShadow />
    <pointLight position={[-5, -2, 3]} intensity={24} color="#a9c8ff" />
    <pointLight position={[4, -3, -4]} intensity={18} color="#ffb58f" />
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.22}>
      <LogoMesh />
    </Float>
    <Environment preset="studio" />
  </>
);

export const HeroScene: FC = () => {
  const frame = useRef<HTMLElement>(null);
  const active = useSceneActive({ whenVisible: frame });

  return (
    <figure
      ref={frame}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ width: "100%", height: "100vh" }}
      aria-hidden="true"
    >
      {active && (
        <motion.div
          initial={{ y: 120, opacity: 0, scale: 0.82 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 28, stiffness: 58, mass: 1.1 }}
          className="absolute left-1/2 top-[53%] h-[min(88vw,760px)] w-[min(88vw,760px)] -translate-x-1/2 -translate-y-1/2 md:left-[70%]"
        >
          <Canvas
            dpr={[1, 1.75]}
            camera={{ position: [0, 0, 7.5], fov: 36 }}
            gl={{ alpha: true, antialias: true }}
          >
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </motion.div>
      )}
    </figure>
  );
};
