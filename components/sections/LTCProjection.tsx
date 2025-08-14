"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function LTCProjection() {
  const [daily, setDaily] = React.useState(250);
  const [years, setYears] = React.useState(3);
  const [infl, setInfl] = React.useState(3);
  const days = years * 365;
  const nominal = Math.round(daily * days);
  const factor = (1 + infl / 100) ** years;
  const adjusted = Math.round(nominal * factor);
  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm">Daily cost assumption ($)</label>
          <input type="number" min={100} max={600} step={10} value={daily} onChange={(e) => setDaily(Number(e.target.value || 0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Years of care</label>
          <input type="range" min={1} max={5} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full" aria-label="Years of care" />
          <div className="text-sm">{years} years</div>
        </div>
        <div>
          <label className="text-sm">Inflation (%)</label>
          <input type="range" min={0} max={4} value={infl} onChange={(e) => setInfl(Number(e.target.value))} className="w-full" aria-label="Inflation percent" />
          <div className="text-sm">{infl}%</div>
        </div>
      </div>
      <div className="mt-4 text-sm">Nominal total: <span className="font-semibold">${nominal.toLocaleString()}</span> · Inflation‑adjusted: <span className="font-semibold">${adjusted.toLocaleString()}</span></div>
      <div className="text-sm text-black/70">Consider inflation riders or hybrid life/LTC to address rising care costs.</div>
      <div className="mt-4 flex gap-3">
        <Button href={`/apply?prefill=1&ltc=${adjusted}`}>Continue</Button>
        <Button href="tel:+19517049422" variant="secondary">Call Us</Button>
      </div>
    </Card>
  );
}


