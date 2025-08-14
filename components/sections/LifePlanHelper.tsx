"use client";

import React from "react";
import Tabs from "@/components/ui/Tabs";
import Slider from "@/components/ui/Slider";
import Toggle from "@/components/ui/Toggle";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { calculatePremium } from "@/components/sections/EstimatorPanel";
import { useReducedMotion } from "framer-motion";

type Term = 10 | 20 | 30;
type Plan = "term" | "whole" | "iul";

export default function LifePlanHelper() {
  const [plan, setPlan] = React.useState<Plan>("term");
  const [age, setAge] = React.useState(35);
  const [coverage, setCoverage] = React.useState(300000);
  const [term, setTerm] = React.useState<Term>(20);
  const [smoker, setSmoker] = React.useState(false);
  const [zip, setZip] = React.useState("");
  const prefersReduced = useReducedMotion();
  const { low, high } = calculatePremium(age, coverage, term, smoker);

  const rationale: Record<Plan, string[]> = {
    term: ["Budget‑friendly protection during high‑need years.", "Great for income replacement and mortgage coverage."],
    whole: ["Lifetime coverage with guaranteed premiums.", "Cash value grows predictably over time."],
    iul: ["Flexible premiums with indexed crediting potential.", "Access to living benefits on many designs."],
  };

  const tabs = [
    { value: "term", label: "Term" },
    { value: "whole", label: "Whole" },
    { value: "iul", label: "IUL" },
  ] as const;

  const params = new URLSearchParams({
    prefill: "1",
    age: String(age),
    coverage: String(coverage),
    term: String(term),
    smoker: smoker ? "1" : "0",
    zip,
    go: "1",
  });

  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tabs items={tabs as unknown as { value: Plan; label: string }[]} value={plan} onChange={(v) => setPlan(v as Plan)} ariaLabel="Life insurance plan type" />
        <div className="text-sm text-black/70">Estimated monthly: <span className="font-semibold text-[var(--brand)]">${low.toFixed(0)}–${high.toFixed(0)}</span></div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Slider label="Age" value={age} onChange={setAge} min={18} max={80} />
        <Slider label="Coverage" value={coverage} onChange={setCoverage} min={50000} max={1000000} step={50000} unit="$" />
        <Slider label="Term" value={term} onChange={(v) => setTerm(v as Term)} min={10} max={30} step={10} />
        <Toggle label="Smoker" checked={smoker} onChange={setSmoker} />
        <div>
          <label className="text-sm text-black/70">ZIP</label>
          <input
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, "").slice(0,5))}
            className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
            inputMode="numeric"
            aria-label="ZIP code"
            placeholder="92501"
          />
          <div className="mt-1 text-xs text-black/60">Used to show carrier availability in your area.</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium">Recommended: <span className="text-[var(--brand)] capitalize">{plan}</span></div>
        <ul className="mt-1 text-sm text-black/70 list-disc pl-5">
          {rationale[plan].map((r) => (<li key={r}>{r}</li>))}
        </ul>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Button href={`/apply?${params.toString()}`} className="rounded-full">Continue</Button>
        <Button href="tel:+19517049422" variant="secondary" className="rounded-full">Talk to an advisor</Button>
      </div>
    </Card>
  );
}


