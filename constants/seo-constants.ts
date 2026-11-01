import { HERO_LOCATION, HERO_NAME, HERO_ROLE } from "./hero-constants";
import { MY_SOCIALS } from "./social-constants";

// Ryzent currently publishes on this Netlify domain. Update this constant when
// the studio moves to an owned domain; never inherit the upstream template URL.
export const SITE_URL = "https://ryzent.netlify.app";

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = HERO_NAME;
export const SITE_TITLE = "Ryzent — Engineer the Unexpected";

export const SITE_DESCRIPTION =
  "Ryzent is an independent software studio exploring intelligent assistants, mobile-first products, interactive web experiences and original games.";

export const SITE_TAGLINE =
  "Engineer the unexpected. Thoughtful software, expressive interfaces and worlds worth exploring.";

// No verified Ryzent social-preview artwork is available yet. Do not reuse
// the upstream developer's personal Open Graph image.
export const OG_IMAGE = "";
export const OG_IMAGE_ALT = "Ryzent — Engineer the Unexpected";
export const OG_LOCALE = "en_IN";
export const OG_IMAGES: string[] = [];

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_KEYWORDS = [
  "Ryzent",
  "Independent software studio",
  "Android applications",
  "AI assistants",
  "Interactive web experiences",
  "Three-dimensional web",
  "Indie games",
  "Godot games",
  "Mobile-first software",
  "Theo AI assistant",
  "Ryu fitness RPG",
  "The God Who Forgot",
  HERO_NAME,
  HERO_ROLE,
  HERO_LOCATION,
];

export const HOME_TITLE = SITE_TITLE;
export const HOME_DESCRIPTION = SITE_DESCRIPTION;

export const ADMIN_TITLE = "Contact submissions";
export const ADMIN_DESCRIPTION =
  "Private dashboard for contact submissions. Not part of the public site.";
export const ADMIN_LOGIN_TITLE = "Sign in";
export const ADMIN_LOGIN_DESCRIPTION =
  "Sign in to the private contact submissions dashboard.";

export const SITE_SECTIONS = [
  { name: "Home", hash: "#home", description: "Ryzent — Engineer the Unexpected." },
  {
    name: "Studio",
    hash: "#about",
    description: "The ideas, product philosophy and areas of exploration behind Ryzent.",
  },
  {
    name: "Team",
    hash: "#team",
    description: "The people shaping Ryzent and the work behind the studio.",
  },
  {
    name: "Focus Areas",
    hash: "#services",
    description: "Intelligent assistants, mobile-first products, interactive digital experiences and games.",
  },
  {
    name: "Products",
    hash: "#work",
    description: "Theo, Ryu and The God Who Forgot — original Ryzent projects in development.",
  },
  {
    name: "Studio Log",
    hash: "#experience",
    description: "The ongoing development story of the Ryzent studio.",
  },
  {
    name: "Principles",
    hash: "#principles",
    description: "The ideas that guide how Ryzent approaches product development.",
  },
  {
    name: "Contact",
    hash: "#contact",
    description: "Contact Ryzent about a product idea, feedback or collaboration.",
  },
] as const;

export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);
// No public email address is configured. Structured data intentionally omits it.
export const CONTACT_POINT_EMAIL = "";