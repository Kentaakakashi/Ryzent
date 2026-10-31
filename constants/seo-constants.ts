import { HERO_NAME, HERO_ROLE } from "./hero-constants";
import { CONTACT_EMAIL, MY_SOCIALS } from "./social-constants";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  "https://ryzent.netlify.app"
).replace(/\/$/, "");

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = "Ryzent";
export const SITE_TITLE = "Ryzent — Engineer the unexpected";
export const SITE_DESCRIPTION =
  "Ryzent is an independent software studio building digital products, experimental interfaces and carefully engineered experiences.";
export const SITE_TAGLINE =
  "Independent software studio. Engineer the unexpected.";

export const OG_IMAGE = "/opengraph-image";
export const OG_IMAGE_ALT = "Ryzent — Engineer the unexpected";
export const OG_LOCALE = "en_US";
export const OG_IMAGES = [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }];

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const SITE_KEYWORDS = [
  "Ryzent",
  "software studio",
  "digital products",
  "experimental interfaces",
  "software engineering",
  "Android applications",
  "interactive experiences",
  "product engineering",
  "Engineer the unexpected",
];

export const HOME_TITLE = SITE_TITLE;
export const HOME_DESCRIPTION = SITE_DESCRIPTION;

export const ADMIN_TITLE = "Studio enquiries";
export const ADMIN_DESCRIPTION =
  "Private dashboard for Ryzent contact submissions.";
export const ADMIN_LOGIN_TITLE = "Studio sign in";
export const ADMIN_LOGIN_DESCRIPTION =
  "Sign in to the private Ryzent contact dashboard.";

export const SITE_SECTIONS = [
  {
    name: "Home",
    hash: "#top",
    description: "Ryzent — an independent software studio.",
  },
  {
    name: "Systems",
    hash: "#systems",
    description: "Products and systems being developed by Ryzent.",
  },
  {
    name: "Experiments",
    hash: "#experiments",
    description: "Experimental interfaces, procedural visuals and interaction studies.",
  },
  {
    name: "Studio",
    hash: "#studio",
    description: "The philosophy and engineering principles behind Ryzent.",
  },
  {
    name: "Contact",
    hash: "#contact",
    description: "Start a conversation with Ryzent.",
  },
] as const;

export const SOCIAL_PROFILES = MY_SOCIALS.map((social) => social.href);
export const CONTACT_POINT_EMAIL = CONTACT_EMAIL;
