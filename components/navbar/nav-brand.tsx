"use client";

import Image from "next/image";
import { type FC, type MouseEvent } from "react";
import { goToAnchor } from "@/helpers/scroll-helpers";

export const NavBrand: FC = () => (
  <a
    href="#home"
    aria-label="Ryzent home"
    onClick={(event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      goToAnchor("#home");
    }}
    onContextMenu={(event) => event.preventDefault()}
    onDragStart={(event) => event.preventDefault()}
    className="group flex select-none items-center gap-2 text-base font-semibold tracking-tight text-white"
  >
    <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
      <Image
        src="/Picsart_26-11-01_01-15-58-790.png"
        alt=""
        width={32}
        height={32}
        priority
        draggable={false}
        className="pointer-events-none h-full w-full select-none object-contain"
      />
    </span>
    <Image
      src="/ryzent-wordmark.svg"
      alt="Ryzent"
      width={1540}
      height={180}
      priority
      draggable={false}
      className="pointer-events-none h-auto w-[118px] select-none sm:w-[142px]"
    />
  </a>
);
