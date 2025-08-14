"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function bandFor(total: number): number {
  if (total <= 7000) return 5000;
  if (total <= 12000) return 10000;
  if (total <= 17000) return 15000;
  return 20000;
}

export default function FinalExpenseCostBuilder() {
  const [service, setService] = React.useState(6000);
  const [burial, setBurial] = React.useState(4000);
  const [transport, setTransport] = React.useState(1200);
  const [support, setSupport] = React.useState(1500);
  const total = service + burial + transport + support;
  const band = bandFor(total);
  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: "Funeral service", v: service, s: setService },
          { label: "Burial / Cremation", v: burial, s: setBurial },
          { label: "Transportation", v: transport, s: setTransport },
          { label: "Family support", v: support, s: setSupport },
        ].map((row) => (
          <div key={row.label}>
            <label className="text-sm text-black/70">{row.label}</label>
            <input type="range" min={0} max={10000} step={250} value={row.v} onChange={(e) => row.s(Number(e.target.value))} className="w-full" aria-label={row.label} />
            <div className="text-sm">${row.v.toLocaleString()}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm">
        Estimated need: <span className="font-semibold">${total.toLocaleString()}</span> · Suggested coverage band: <span className="font-semibold">${band.toLocaleString()}</span>
      </div>
      <div className="mt-4 flex gap-3">
        <Button href={`/apply?prefill=1&coverage=${band}`}>Continue</Button>
        <Button href="tel:+19517049422" variant="secondary">Call Us</Button>
      </div>
    </Card>
  );
}


