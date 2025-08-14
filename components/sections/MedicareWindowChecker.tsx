"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type Window = "IEP" | "AEP" | "OEP" | "Special" | "Outside";

function determineWindow(age: number, hasPartA: boolean, hasPartB: boolean, lastChangeMonths: number, disabilityOrEsrd: boolean): { win: Window; note: string } {
  if (disabilityOrEsrd) return { win: "Special", note: "You may qualify for a Special Enrollment Period due to disability/ESRD." };
  if (!hasPartA || !hasPartB) {
    if (age >= 64 && age <= 65) return { win: "IEP", note: "Initial Enrollment Period around age 65." };
  }
  if (lastChangeMonths <= 3) return { win: "OEP", note: "Likely within an Open Enrollment window after a recent change." };
  const now = new Date();
  const isAEP = now.getMonth() >= 9 || now.getMonth() === 0; // Oct–Dec or Jan submission
  if (isAEP) return { win: "AEP", note: "Annual Election Period (Oct 15 – Dec 7)." };
  return { win: "Outside", note: "You may be outside standard windows—ask us about Special Enrollment." };
}

export default function MedicareWindowChecker() {
  const [age, setAge] = React.useState(65);
  const [hasA, setHasA] = React.useState(false);
  const [hasB, setHasB] = React.useState(false);
  const [lastMonths, setLastMonths] = React.useState(12);
  const [esrd, setEsrd] = React.useState(false);

  const { win, note } = determineWindow(age, hasA, hasB, lastMonths, esrd);

  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-black/70">Age</label>
          <input type="number" min={60} max={90} value={age} onChange={(e) => setAge(Number(e.target.value || 0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div className="flex items-center gap-2">
          <input id="hasA" type="checkbox" checked={hasA} onChange={(e) => setHasA(e.target.checked)} className="h-4 w-4" />
          <label htmlFor="hasA" className="text-sm">Has Part A</label>
        </div>
        <div className="flex items-center gap-2">
          <input id="hasB" type="checkbox" checked={hasB} onChange={(e) => setHasB(e.target.checked)} className="h-4 w-4" />
          <label htmlFor="hasB" className="text-sm">Has Part B</label>
        </div>
        <div>
          <label className="text-sm text-black/70">Months since last plan change</label>
          <input type="number" min={0} max={120} value={lastMonths} onChange={(e) => setLastMonths(Number(e.target.value || 0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div className="flex items-center gap-2">
          <input id="esrd" type="checkbox" checked={esrd} onChange={(e) => setEsrd(e.target.checked)} className="h-4 w-4" />
          <label htmlFor="esrd" className="text-sm">Disability or ESRD</label>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm">Window: <span className="font-semibold">{win}</span></div>
        <div className="text-sm text-black/70 mt-0.5">{note}</div>
      </div>

      <div className="mt-4 flex gap-3">
        <Button href="tel:+19517049422" className="rounded-full" variant="secondary">Call a licensed expert</Button>
        <Button href="/contact" className="rounded-full">Request a review</Button>
      </div>
    </Card>
  );
}


