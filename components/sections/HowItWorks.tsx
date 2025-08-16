"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Settings2, CheckCircle2, LifeBuoy } from "lucide-react";

type MotionDivProps = {
  children?: React.ReactNode;
  className?: string;
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
};

const steps = [
  { id: 0, title: "Free Consultation", icon: Sparkles, text: "Share your goals, budget, and timeframe.", bullets: ["Understand your priorities", "Review timelines", "Set next steps"] },
  { id: 1, title: "Personalized Options", icon: Settings2, text: "Compare plans, living benefits, and costs.", bullets: ["Term vs. permanent", "Riders & benefits", "Clear trade‑offs"] },
  { id: 2, title: "Activate Coverage", icon: CheckCircle2, text: "Quick application and underwriting.", bullets: ["Secure e‑sign", "Fast decisions for many", "We help you through"] },
  { id: 3, title: "Ongoing Support", icon: LifeBuoy, text: "Adjust as life changes. We’re here when you need us.", bullets: ["Annual reviews", "Beneficiary updates", "Life events support"] },
];

export default function HowItWorks() {
  const [active, setActive] = React.useState<number>(0);
  const prefersReduced = useReducedMotion();
  const MDiv = motion.div as unknown as React.ComponentType<MotionDivProps>;

  return (
    <Section id="how-it-works" title="How It Works" subtitle="Simple from start to finish.">
      {/* Step selector */}
      <div className="flex flex-wrap items-center gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isActive = active === i;
          return (
            <button
              key={s.title}
              type="button"
              onClick={() => setActive(i)}
              className={`cursor-pointer inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "border-[var(--brand)] bg-white/80 text-[var(--brand)]"
                  : "border-black/10 bg-white/60 text-black/70 hover:bg-white"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden />
              <span>
                Step {i + 1}: {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Progress bar / timeline */}
      <div className="mt-4 h-1 w-full rounded-full bg-black/10">
        <div
          className="h-1 rounded-full bg-[var(--brand)] transition-all"
          style={{ width: `${((active + 1) / steps.length) * 100}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-black/50">
        {steps.map((s, i) => (
          <span key={s.title} className={`${i <= active ? "text-[var(--brand)]/80" : ""}`}>Step {i + 1}</span>
        ))}
      </div>

      {/* Active step content */}
      <Card className="mt-6 glass-soft glass-border">
        <MDiv
          key={active}
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 p-6 sm:grid-cols-2"
        >
          <div>
            <div className="text-xs text-[var(--brand)]/80">Step {active + 1}</div>
            <div className="mt-1 text-lg font-semibold text-[var(--brand)]">{steps[active].title}</div>
            <p className="mt-2 text-sm text-black/70">{steps[active].text}</p>
          </div>
          <ul className="grid gap-2 text-sm text-black/80">
            {steps[active].bullets.map((b) => (
              <li key={b} className="rounded-xl border border-black/10 bg-white/60 px-3 py-2">
                {b}
              </li>
            ))}
          </ul>
        </MDiv>
      </Card>

      <div className="mt-6 flex gap-3 justify-center">
        <Button variant="secondary" onClick={() => setActive((a) => Math.max(0, a - 1))}>
          Back
        </Button>
        <Button onClick={() => setActive((a) => Math.min(steps.length - 1, a + 1))}>
          Next
        </Button>
        <Button href="/apply" variant="secondary">
          Start your application
        </Button>
      </div>
    </Section>
  );
}

