"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";
import { ContactInfoCard } from "./contact-info-card";

export const ContactDetails: FC = () => (
  <motion.div {...revealProps()} className="lg:col-span-5">
    <p className="text-eyebrow">Get in touch</p>
    <h2 className="text-heading mt-3">
      Something on your mind? <br />
      <span className="text-gradient">Let's talk.</span>
    </h2>
    <p className="mt-4 leading-relaxed text-neutral-400">
      Have a product idea, feedback on something we're building, or a
      collaboration worth exploring? Send a note with the context. No sales
      script—just a starting point for a useful conversation.
    </p>

    <div className="mt-8 space-y-4">
      <ContactInfoCard
        icon="✦"
        label="Studio"
        value="Independent · Product-led"
        gradient="from-coral/30 to-lavender/30"
      />
      <ContactInfoCard
        icon="⌘"
        label="Areas of interest"
        value="AI · Mobile · Interactive · Games"
        gradient="from-aqua/30 to-mint/30"
      />
      <ContactInfoCard
        icon="↘"
        label="Best way to reach us"
        value="Use the message form"
        gradient="from-royal/30 to-fuchsia/30"
      />
    </div>
  </motion.div>
);