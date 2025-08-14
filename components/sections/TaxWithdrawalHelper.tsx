"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type Filing = "single" | "married";

const brackets2025 = {
  single: [0, 11600, 47150, 100525, 191950, 243725, 609350],
  married: [0, 23200, 94300, 201050, 383900, 487450, 731200],
};

function analyze(status: Filing, taxable: number, withdrawal: number) {
  const limits = brackets2025[status];
  const start = taxable;
  const end = taxable + withdrawal;
  const touched = limits.filter((b) => b >= start && b <= end);
  return { start, end, touched };
}

export default function TaxWithdrawalHelper() {
  const [status, setStatus] = React.useState<Filing>("single");
  const [taxable, setTaxable] = React.useState(85000);
  const [withdraw, setWithdraw] = React.useState(20000);
  const { touched } = analyze(status, taxable, withdraw);
  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm">Filing status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value as Filing)} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]">
            <option value="single">Single</option>
            <option value="married">Married filing jointly</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Estimated taxable income</label>
          <input type="number" value={taxable} onChange={(e) => setTaxable(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Planned withdrawal</label>
          <input type="number" value={withdraw} onChange={(e) => setWithdraw(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
      </div>
      <div className="mt-4 text-sm">Brackets touched by the withdrawal: <span className="font-semibold">{touched.length ? touched.join(", ") : "No new brackets"}</span></div>
      <div className="text-sm text-black/70">Heads‑up: IRMAA/NIIT thresholds may apply depending on totals. This is educational only.</div>
      <div className="mt-4 flex gap-3">
        <Button href={`/apply?prefill=1&withdraw=${withdraw}&status=${status}`}>Continue</Button>
        <Button href="tel:+19517049422" variant="secondary">Call Us</Button>
      </div>
    </Card>
  );
}


