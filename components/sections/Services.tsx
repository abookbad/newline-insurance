"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesContent } from "@/lib/content";
import {
  Shield,
  PiggyBank,
  Feather,
  PieChart,
  BriefcaseBusiness,
} from "lucide-react";

const iconRegistry: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Shield,
  PiggyBank,
  Feather,
  PieChart,
  BriefcaseBusiness,
};

export default function Services() {
  const prefersReduced = useReducedMotion();
  type MotionDivProps = {
    className?: string;
    children?: React.ReactNode;
    initial?: unknown;
    whileInView?: unknown;
    viewport?: unknown;
    transition?: unknown;
    variants?: unknown;
    key?: React.Key;
  };
  const MDiv = motion.div as unknown as React.ComponentType<MotionDivProps>;
  const container = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      };
  const listVariants = prefersReduced
    ? {}
    : {
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const disclaimerId = "services-disclaimer";

  return (
    <Section id="services" title={servicesContent.heading} subtitle={servicesContent.subheading}>
      <MDiv
        {...container}
        className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
      >
        {servicesContent.items.map((item, idx) => {
          const Icon = iconRegistry[item.icon] ?? Shield;
          return (
            <MDiv
              key={item.id}
              variants={listVariants}
              initial={prefersReduced ? undefined : "hidden"}
              whileInView={prefersReduced ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: prefersReduced ? 0 : idx * 0.06 }}
            >
              <ServiceCard
                icon={Icon}
                title={item.title}
                lead={item.lead}
                bullets={item.bullets}
                analytics={{ estimate: "cta:quote", call: "cta:call" }}
                disclaimerId={disclaimerId}
              />
            </MDiv>
          );
        })}
      </MDiv>

      {/* Extras */}
      <div className="mt-8 md:mt-12">
        <div className="text-sm font-semibold text-[var(--brand)]">{servicesContent.extras.heading}</div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {servicesContent.extras.items.map((ex) => (
            <div key={ex.title} className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-black/80 glass-border supports-[backdrop-filter]:glass">
              <div className="font-medium">{ex.title}</div>
              <div className="text-black/70">{ex.detail}</div>
            </div>
          ))}
        </div>
      </div>

      <p id={disclaimerId} className="mt-6 text-xs text-black/60">
        {servicesContent.disclaimer}
      </p>
    </Section>
  );
}


