"use client";

import React from "react";
import Card from "@/components/ui/Card";

export default function RealEstateCashflowHelper() {
  const [rent, setRent] = React.useState(2500);
  const [mortgage, setMortgage] = React.useState(1800);
  const [taxIns, setTaxIns] = React.useState(400);
  const [other, setOther] = React.useState(50);
  const [vacancyPct, setVacancyPct] = React.useState(5);
  const [maintPct, setMaintPct] = React.useState(7);

  const vacancy = Math.round((rent * vacancyPct) / 100);
  const maintenance = Math.round((rent * maintPct) / 100);
  const expenses = mortgage + taxIns + other + vacancy + maintenance;
  const net = rent - expenses;

  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm">Monthly rent</label>
          <input type="number" value={rent} onChange={(e) => setRent(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Mortgage PITI</label>
          <input type="number" value={mortgage} onChange={(e) => setMortgage(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Taxes & insurance (extra)</label>
          <input type="number" value={taxIns} onChange={(e) => setTaxIns(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Other monthly costs</label>
          <input type="number" value={other} onChange={(e) => setOther(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Vacancy allowance (%)</label>
          <input type="range" min={0} max={15} value={vacancyPct} onChange={(e) => setVacancyPct(Number(e.target.value))} className="w-full" aria-label="Vacancy percent" />
          <div className="text-sm">{vacancyPct}% (${vacancy.toLocaleString()})</div>
        </div>
        <div>
          <label className="text-sm">Maintenance reserve (%)</label>
          <input type="range" min={0} max={15} value={maintPct} onChange={(e) => setMaintPct(Number(e.target.value))} className="w-full" aria-label="Maintenance percent" />
          <div className="text-sm">{maintPct}% (${maintenance.toLocaleString()})</div>
        </div>
      </div>
      <div className="mt-4 text-sm">Estimated monthly net cash flow: <span className="font-semibold">${net.toLocaleString()}</span></div>
      <div className="text-xs text-black/60 mt-1">Educational only. Actual results vary by market, financing, and upkeep.</div>
    </Card>
  );
}



