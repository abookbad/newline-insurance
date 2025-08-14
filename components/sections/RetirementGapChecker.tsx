"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function projectBalance(age: number, retire: number, current: number, monthly: number, returnPct: number): number {
  const months = Math.max(0, (retire - age) * 12);
  const r = returnPct / 100 / 12;
  let balance = current;
  for (let i = 0; i < months; i++) {
    balance = balance * (1 + r) + monthly;
  }
  return Math.round(balance);
}

export default function RetirementGapChecker() {
  const [age, setAge] = React.useState(45);
  const [retire, setRetire] = React.useState(65);
  const [current, setCurrent] = React.useState(150000);
  const [monthly, setMonthly] = React.useState(800);
  const [ret, setRet] = React.useState(6);
  const [targetIncome, setTargetIncome] = React.useState(4500);
  const projected = projectBalance(age, retire, current, monthly, ret);
  const fourPercentRule = Math.round(projected * 0.04 / 12);
  const gap = Math.max(0, targetIncome - fourPercentRule);
  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm">Age</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Target retirement age</label>
          <input type="number" value={retire} onChange={(e) => setRetire(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Current savings</label>
          <input type="number" value={current} onChange={(e) => setCurrent(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Monthly contribution</label>
          <input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Expected return (%)</label>
          <input type="range" min={3} max={8} value={ret} onChange={(e) => setRet(Number(e.target.value))} className="w-full" aria-label="Expected return" />
          <div className="text-sm">{ret}%</div>
        </div>
        <div>
          <label className="text-sm">Target monthly income</label>
          <input type="number" value={targetIncome} onChange={(e) => setTargetIncome(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
      </div>
      <div className="mt-4 text-sm">Projected balance at {retire}: <span className="font-semibold">${projected.toLocaleString()}</span></div>
      <div className="text-sm">Sustainable income (4% rule): <span className="font-semibold">${fourPercentRule.toLocaleString()}</span>/mo</div>
      <div className="text-sm">Gap vs target: <span className="font-semibold">${gap.toLocaleString()}</span>/mo</div>
      <div className="mt-4 flex gap-3">
        <Button href={`/apply?prefill=1&retire=${retire}&monthly=${monthly}&target=${targetIncome}`}>Continue</Button>
        <Button href="tel:+19517049422" variant="secondary">Call Us</Button>
      </div>
    </Card>
  );
}


