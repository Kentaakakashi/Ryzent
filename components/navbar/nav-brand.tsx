"use client";

import Image from "next/image";
import { type FC, type MouseEvent } from "react";
import { HERO_NAME } from "@/constants/hero-constants";
import { goToAnchor } from "@/helpers/scroll-helpers";

export const NavBrand: FC = () => (
  <a
    href="#home"
    onClick={(event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      goToAnchor("#home");
    }}
    className="group flex items-center gap-2 text-base font-semibold tracking-tight text-white"
  >
    <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg transition-transform group-hover:scale-105">
      <Image
        src="/Picsart_26-11-01_01-15-58-790.png"
        alt="Ryzent logo"
        width={32}
        height={32}
        priority
        className="h-full w-full object-contain"
      />
    </span>
    <span className="hidden sm:inline">{HERO_NAME}</span>
  </a>
);
