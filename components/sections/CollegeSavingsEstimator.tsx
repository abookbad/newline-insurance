"use client";

import React from "react";
import Card from "@/components/ui/Card";

function futureCost(currentAnnual: number, years: number, inflPct: number): number {
  const factor = (1 + inflPct / 100) ** years;
  return Math.round(currentAnnual * factor * 4); // 4 years
}

function requiredMonthly(target: number, current: number, years: number, returnPct: number): number {
  const months = years * 12;
  const r = returnPct / 100 / 12;
  // Solve for PMT of future value with contributions: FV = current*(1+r)^n + PMT*(((1+r)^n - 1)/r)
  const fvOfCurrent = current * Math.pow(1 + r, months);
  const annuityFactor = (Math.pow(1 + r, months) - 1) / r || months; // handle r=0
  const pmt = Math.max(0, (target - fvOfCurrent) / annuityFactor);
  return Math.round(pmt);
}

export default function CollegeSavingsEstimator() {
  const [childAge, setChildAge] = React.useState(6);
  const [currentAnnual, setCurrentAnnual] = React.useState(28000);
  const [infl, setInfl] = React.useState(4);
  const [currentSaved, setCurrentSaved] = React.useState(5000);
  const [returnPct, setReturnPct] = React.useState(5);

  const years = Math.max(0, 18 - childAge);
  const target = futureCost(currentAnnual, years, infl);
  const monthly = requiredMonthly(target, currentSaved, years, returnPct);

  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm">Child age</label>
          <input type="number" min={0} max={17} value={childAge} onChange={(e) => setChildAge(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Today’s annual cost</label>
          <input type="number" value={currentAnnual} onChange={(e) => setCurrentAnnual(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Cost inflation (%)</label>
          <input type="range" min={0} max={6} value={infl} onChange={(e) => setInfl(Number(e.target.value))} className="w-full" aria-label="Inflation percent" />
          <div className="text-sm">{infl}%</div>
        </div>
        <div>
          <label className="text-sm">Current savings</label>
          <input type="number" value={currentSaved} onChange={(e) => setCurrentSaved(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Expected return (%)</label>
          <input type="range" min={0} max={8} value={returnPct} onChange={(e) => setReturnPct(Number(e.target.value))} className="w-full" aria-label="Expected return" />
          <div className="text-sm">{returnPct}%</div>
        </div>
      </div>
      <div className="mt-4 text-sm">Estimated 4-year cost: <span className="font-semibold">${target.toLocaleString()}</span></div>
      <div className="text-sm">Required monthly savings: <span className="font-semibold">${monthly.toLocaleString()}</span></div>
      <div className="text-xs text-black/60 mt-1">Educational only. Assumptions simplified for planning discussion.</div>
    </Card>
  );
}



