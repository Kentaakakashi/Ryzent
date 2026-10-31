"use client";

import { type FC, type MouseEvent } from "react";
import Image from "next/image";
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
    <span className="inline-flex h-9 w-9 items-center justify-center transition-transform group-hover:scale-105">
      <Image src="/brand/ryzent-emblem.svg" alt="" width={361} height={282} priority className="h-full w-full object-contain" />
    </span>
    <span className="hidden sm:inline text-sm font-semibold tracking-[0.18em]">{HERO_NAME.toUpperCase()}</span>
  </a>
);
