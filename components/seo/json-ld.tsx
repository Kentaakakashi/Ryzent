import { type FC } from "react";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SECTIONS,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/constants/seo-constants";
import { SERVICES } from "@/constants/services-constants";
import { SKILL_CHIPS } from "@/constants/skills-constants";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  sameAs: SOCIAL_PROFILES,
  knowsAbout: SKILL_CHIPS,
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const sectionId = (hash: string) => `${SITE_URL}/${hash}`;

const sections = SITE_SECTIONS.map((section) => ({
  "@type": "WebPageElement",
  "@id": sectionId(section.hash),
  name: section.name,
  description: section.description,
  url: sectionId(section.hash),
  isPartOf: { "@id": `${SITE_URL}/#webpage` },
}));

const navigation = {
  "@type": "ItemList",
  "@id": `${SITE_URL}/#sections`,
  name: `${SITE_NAME} sections`,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: SITE_SECTIONS.length,
  itemListElement: SITE_SECTIONS.map((section, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: section.name,
    url: sectionId(section.hash),
  })),
};

const webpage = {
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
  hasPart: sections.map((section) => ({ "@id": section["@id"] })),
  significantLink: SITE_SECTIONS.map((section) => sectionId(section.hash)),
};

const focusAreas = {
  "@type": "ItemList",
  "@id": `${SITE_URL}/#focus-areas`,
  name: "Ryzent focus areas",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Thing",
      name: service.title,
      description: service.description,
    },
  })),
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization, website, webpage, navigation, focusAreas, ...sections],
};

export const JsonLd: FC = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
  />
);