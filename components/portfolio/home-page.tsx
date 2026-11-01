"use client";

import { type FC } from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Experiences } from "@/components/sections/experiences";
import { StudioPrinciples } from "@/components/sections/testimonial";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { PageLoader } from "@/components/portfolio/page-loader";
import { GlobeLayer } from "@/components/globe/globe-layer";

export const HomePage: FC = () => (
  <>
    <PageLoader />
    <GlobeLayer />
    <div id="site-content" className="relative z-10 w-full">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Projects />
      <Experiences />
      <StudioPrinciples />
      <Contact />
      <Footer />
    </div>
  </>
);