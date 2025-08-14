"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import SwitchGroup from "@/components/ui/SwitchGroup";
import Badge from "@/components/ui/Badge";
import Tooltip from "@/components/ui/Tooltip";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

type Term = 10 | 20 | 30;

function calculatePremium(age: number, coverage: number, term: Term, smoker: boolean) {
  const base = 0.22; // per $1k coverage for age 30, non-smoker, 20-yr
  const ageFactor = 1 + (age - 30) * 0.02;
  const termFactor = { 10: 0.9, 20: 1.0, 30: 1.25 }[term];
  const smokerFactor = smoker ? 1.8 : 1.0;
  const premium = (coverage / 1000) * base * ageFactor * termFactor * smokerFactor;
  return { low: premium * 0.9, high: premium * 1.1 };
}

export default function Estimator() {
  const [age, setAge] = React.useState<number>(30);
  const [coverage, setCoverage] = React.useState<number>(250000);
  const [term, setTerm] = React.useState<Term>(20);
  const [smoker, setSmoker] = React.useState<boolean>(false);
  const prefersReduced = useReducedMotion();
  type SafeMotionSpanProps = {
    children?: React.ReactNode;
    initial?: unknown;
    animate?: unknown;
    exit?: unknown;
    transition?: unknown;
    key?: string;
  };
  const MSpan = motion.span as unknown as React.ComponentType<SafeMotionSpanProps>;

  const { low, high } = calculatePremium(age, coverage, term, smoker);

  return (
    <Section id="estimator" title="Instant Coverage Estimator" subtitle="Get a quick monthly estimate—no email required.">
      <Card className="glass-soft glass-border hover-lift">
        <div className="grid gap-6 p-6">
          <div className="text-center">
            <div className="text-sm text-black/60">Estimated monthly premium</div>
            <div className="mt-1 text-4xl font-semibold tracking-tight">
              <AnimatePresence mode="popLayout" initial={false}>
                <MSpan
                  key={`${low.toFixed(2)}-${high.toFixed(2)}`}
                  initial={prefersReduced ? false : { opacity: 0, y: 8 }}
                  animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
                  exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  ${low.toFixed(2)} – ${high.toFixed(2)}
                </MSpan>
              </AnimatePresence>
            </div>
            <div className="mt-2 text-xs text-black/60">For education only. Final rates vary by underwriting.</div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 items-end">
            <div className="space-y-1">
              <Slider label="Age" value={age} onChange={setAge} min={18} max={85} />
            </div>
            <div className="space-y-1">
              <Slider label="Coverage" value={coverage} onChange={setCoverage} min={50000} max={1000000} step={50000} unit="$" />
            </div>
            <div className="h-full flex items-end">
              <SwitchGroup
                label="Term Length"
                options={[{ label: "10 years", value: 10 as Term }, { label: "20 years", value: 20 as Term }, { label: "30 years", value: 30 as Term }]}
                value={term}
                onChange={setTerm}
              />
            </div>
            <div className="h-full flex items-end pb-1">
              <Toggle label="Smoker" checked={smoker} onChange={setSmoker} />
            </div>
          </div>
          <Badge>
            Living Benefits Included
            <span className="ml-2">
              <Tooltip content="Chronic, critical, and terminal illness riders included on many policies. Availability varies by state and carrier.">
                <span aria-hidden>ⓘ</span>
              </Tooltip>
            </span>
          </Badge>
          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            Continue — See Your Options
          </a>
        </div>
      </Card>
    </Section>
  );
}

