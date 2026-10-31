import { type FC } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { padIndex } from "@/helpers/format-helpers";

export const ProjectsHeader: FC<{ total: number }> = ({ total }) => (
  <div className="c-space pt-24 md:pt-32">
    <SectionHeader
      eyebrow={`Ryzent Products · ${padIndex(total)}`}
      title={
        <>
          Ideas taking <span className="text-gradient">their own shape.</span>
        </>
      }
      hint={["Scroll", "Explore"]}
    />
    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
      A look at the products and worlds currently being explored under the
      Ryzent name. Each project has its own purpose, identity and pace of
      development.
    </p>
  </div>
);