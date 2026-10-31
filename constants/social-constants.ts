import { type SocialLink } from "@/types/portfolio-types";

export const MY_SOCIALS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Kentaakakashi",
    icon: "/assets/socials/github.svg",
  },
];

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
