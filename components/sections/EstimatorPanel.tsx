"use client";

import React from "react";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import SwitchGroup from "@/components/ui/SwitchGroup";
import Badge from "@/components/ui/Badge";
import Tooltip from "@/components/ui/Tooltip";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

type Term = 10 | 20 | 30;

export function calculatePremium(age: number, coverage: number, term: Term, smoker: boolean) {
  const base = 0.22; // per $1k coverage for age 30, non-smoker, 20-yr
  const ageFactor = 1 + (age - 30) * 0.02;
  const termFactor = { 10: 0.9, 20: 1.0, 30: 1.25 }[term];
  const smokerFactor = smoker ? 1.8 : 1.0;
  const premium = (coverage / 1000) * base * ageFactor * termFactor * smokerFactor;
  return { low: premium * 0.9, high: premium * 1.1 };
}

type MotionDivProps = {
  children?: React.ReactNode;
  className?: string;
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  transition?: unknown;
};

export default function EstimatorPanel() {
  const [age, setAge] = React.useState<number>(30);
  const [coverage, setCoverage] = React.useState<number>(250000);
  const [term, setTerm] = React.useState<Term>(20);
  const [smoker, setSmoker] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [zip, setZip] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [birthday, setBirthday] = React.useState<string>("");
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
  const MDiv = motion.div as unknown as React.ComponentType<MotionDivProps>;

  const { low, high } = calculatePremium(age, coverage, term, smoker);

  const zipValid = /^[0-9]{5}$/.test(zip);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* Step 1: Estimator */}
      {step === 1 && (
        <MDiv
          key="step-1"
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6"
        >
          {/* Top: Price */}
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

          {/* Controls grid */}
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
                options={[
                  { label: "10 years", value: 10 as Term },
                  { label: "20 years", value: 20 as Term },
                  { label: "30 years", value: 30 as Term },
                ]}
                value={term}
                onChange={setTerm}
              />
            </div>
            <div className="h-full flex items-end pb-1">
              <Toggle label="Smoker" checked={smoker} onChange={setSmoker} />
            </div>
          </div>

          <div className="pt-1">
            <Badge>
              Living Benefits Included
              <span className="ml-2">
                <Tooltip content="Chronic, critical, and terminal illness riders included on many policies. Availability varies by state and carrier.">
                  <span aria-hidden>ⓘ</span>
                </Tooltip>
              </span>
            </Badge>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <Button onClick={() => setStep(2)} className="cta-pulse">Continue</Button>
            <Button href="tel:+19517049422" variant="secondary">Speak to an Advisor</Button>
          </div>
        </MDiv>
      )}

      {/* Step 2: ZIP */}
      {step === 2 && (
        <MDiv
          key="step-2"
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6"
        >
          <div>
            <div className="text-sm text-black/70">Enter your ZIP code to see plan availability</div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={5}
              value={zip}
              aria-label="ZIP code"
              onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="e.g., 92501"
            />
            <div className="mt-1 text-xs text-black/60">We use this to show options available in your area.</div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
            <Button
              onClick={() => {
                if (!zipValid) return;
                const params = new URLSearchParams({
                  prefill: "1",
                  age: String(age),
                  coverage: String(coverage),
                  term: String(term),
                  smoker: smoker ? "1" : "0",
                  zip,
                  go: "3",
                });
                window.location.href = `/apply?${params.toString()}`;
              }}
              disabled={!zipValid}
              className="cta-pulse"
            >
              Next
            </Button>
          </div>
        </MDiv>
      )}

      {/* Step 3: Basic info */}
      {step === 3 && (
        <MDiv
          key="step-3"
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
          exit={prefersReduced ? {} : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid gap-4"
        >
          <div>
            <div className="text-lg font-semibold text-[var(--brand)]">Welcome to Newline!</div>
            <div className="text-sm text-black/70">Tell us about yourself.</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-black/70">First name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className="text-sm text-black/70">Last name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                placeholder="Doe"
              />
            </div>
            <div>
              <label className="text-sm text-black/70">Birthday</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
            <Button href="/contact" disabled={!firstName || !lastName || !birthday}>Submit</Button>
          </div>
          <div className="text-xs text-black/60">We respect your privacy. Your info is used to provide personalized options.</div>
        </MDiv>
      )}
    </AnimatePresence>
  );
}

