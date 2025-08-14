"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function DisabilityBenefitEstimator() {
  const [income, setIncome] = React.useState(6000);
  const [replace, setReplace] = React.useState(60);
  const [elim, setElim] = React.useState<30 | 60 | 90>(90);
  const benefit = Math.round((income * replace) / 100);
  const low = Math.round(benefit * 0.9);
  const high = Math.round(benefit * 1.1);
  const note = elim === 30 ? "Shorter elimination increases premiums." : elim === 60 ? "Balanced waiting period." : "Lower premium with 90‑day waiting.";
  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Gross monthly income</label>
          <input type="number" min={1000} step={100} value={income} onChange={(e) => setIncome(Number(e.target.value || 0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Target replacement (%)</label>
          <input type="range" min={40} max={70} value={replace} onChange={(e) => setReplace(Number(e.target.value))} className="w-full" aria-label="Target replacement percentage" />
          <div className="text-sm">{replace}%</div>
        </div>
        <div>
          <label className="text-sm">Elimination period</label>
          <select value={elim} onChange={(e) => setElim(Number(e.target.value) as 30 | 60 | 90)} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]">
            <option value={30}>30 days</option>
            <option value={60}>60 days</option>
            <option value={90}>90 days</option>
          </select>
        </div>
      </div>
      <div className="mt-4 text-sm">Suggested monthly benefit: <span className="font-semibold">${low.toLocaleString()}–${high.toLocaleString()}</span></div>
      <div className="text-sm text-black/70">{note}</div>
      <div className="mt-4 flex gap-3">
        <Button href={`/apply?prefill=1&benefit=${benefit}&elim=${elim}`}>Continue</Button>
        <Button href="tel:+19517049422" variant="secondary">Call Us</Button>
      </div>
    </Card>
  );
}


