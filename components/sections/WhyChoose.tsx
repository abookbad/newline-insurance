"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import InfoCard from "@/components/ui/InfoCard";
import { whyChoose, WhyChooseItem, LucideIconName } from "@/lib/content";
import { HeartPulse, MessageSquare, BadgeInfo, Users, PieChart, ShieldCheck } from "lucide-react";

const iconMap: Record<LucideIconName, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  HeartPulse,
  MessageSquare,
  BadgeInfo,
  Users,
  PieChart,
  ShieldCheck,
};

export interface WhyChooseProps {
  items?: WhyChooseItem[];
  className?: string;
}

export default function WhyChoose({ items = whyChoose, className = "" }: WhyChooseProps) {
  const prefersReduced = useReducedMotion();
  type SafeMotionDivProps = {
    className?: string;
    children?: React.ReactNode;
    initial?: unknown;
    whileInView?: unknown;
    viewport?: unknown;
    transition?: unknown;
    variants?: unknown;
    key?: React.Key;
  };
  const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;

  const container = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06 },
      };
  const itemVariants = prefersReduced
    ? {}
    : { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

  return (
    <Section title="Why Choose Newline" subtitle="Modern coverage, human guidance, and clear options." className={`py-16 md:py-24 ${className}`}>
      {!prefersReduced && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -z-10 mx-auto h-64 max-w-5xl rounded-full bg-[radial-gradient(closest-side,rgba(11,34,64,0.06),transparent)]" />
      )}

      <MDiv {...container} className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((it) => {
          const Icon = iconMap[it.icon];
          return (
            <MDiv key={it.id} variants={itemVariants} initial={prefersReduced ? undefined : "hidden"} whileInView={prefersReduced ? undefined : "show"} viewport={{ once: true, amount: 0.2 }}>
              <InfoCard icon={Icon} title={it.title} blurb={it.blurb} />
            </MDiv>
          );
        })}
      </MDiv>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm glass-border supports-[backdrop-filter]:glass">
        <div className="text-sm text-black/70">Want help choosing a plan?</div>
        <a
          href="tel:+19517049422"
          className="inline-flex items-center rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
        >
          Talk to a licensed expert
        </a>
      </div>
    </Section>
  );
}


