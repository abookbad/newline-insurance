"use client";

import React from "react";
import Card from "@/components/ui/Card";

export default function KeyPersonCoverageEstimator() {
  const [revenue, setRevenue] = React.useState(1200000);
  const [contributionPct, setContributionPct] = React.useState(20);
  const [monthsToRecover, setMonthsToRecover] = React.useState(12);
  const [hiringCost, setHiringCost] = React.useState(50000);

  const monthlyRevenue = revenue / 12;
  const contribution = (monthlyRevenue * contributionPct) / 100;
  const lossWindow = Math.max(1, monthsToRecover);
  const operatingLoss = Math.round(contribution * lossWindow);
  const suggested = Math.round(operatingLoss + hiringCost);

  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm">Annual revenue</label>
          <input type="number" value={revenue} onChange={(e) => setRevenue(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Key person contribution (%)</label>
          <input type="range" min={5} max={50} value={contributionPct} onChange={(e) => setContributionPct(Number(e.target.value))} className="w-full" aria-label="Contribution percent" />
          <div className="text-sm">{contributionPct}% (~${Math.round(contribution).toLocaleString()}/mo)</div>
        </div>
        <div>
          <label className="text-sm">Months to recover</label>
          <input type="range" min={3} max={24} value={monthsToRecover} onChange={(e) => setMonthsToRecover(Number(e.target.value))} className="w-full" aria-label="Months to recover" />
          <div className="text-sm">{monthsToRecover} months</div>
        </div>
        <div>
          <label className="text-sm">Hiring/onboarding cost</label>
          <input type="number" value={hiringCost} onChange={(e) => setHiringCost(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
      </div>
      <div className="mt-4 text-sm">Estimated operating loss window: <span className="font-semibold">${operatingLoss.toLocaleString()}</span></div>
      <div className="text-sm">Suggested key person coverage: <span className="font-semibold">${suggested.toLocaleString()}</span></div>
      <div className="text-xs text-black/60 mt-1">Educational estimate only. We’ll refine with margins, seasonality, and other buffers.</div>
    </Card>
  );
}



