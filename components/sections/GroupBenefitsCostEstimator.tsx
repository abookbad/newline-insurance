"use client";

import React from "react";
import Card from "@/components/ui/Card";

export default function GroupBenefitsCostEstimator() {
  const [employees, setEmployees] = React.useState(15);
  const [medicalPerEmp, setMedicalPerEmp] = React.useState(550);
  const [dentalPerEmp, setDentalPerEmp] = React.useState(35);
  const [visionPerEmp, setVisionPerEmp] = React.useState(12);
  const [employerShare, setEmployerShare] = React.useState(70);

  const grossMonthly = employees * (medicalPerEmp + dentalPerEmp + visionPerEmp);
  const employerMonthly = Math.round(grossMonthly * employerShare / 100);
  const employeeMonthly = grossMonthly - employerMonthly;

  return (
    <Card className="p-5 glass-soft glass-border">
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm">Number of employees</label>
          <input type="number" min={1} value={employees} onChange={(e) => setEmployees(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Medical premium per employee ($/mo)</label>
          <input type="number" value={medicalPerEmp} onChange={(e) => setMedicalPerEmp(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Dental premium per employee ($/mo)</label>
          <input type="number" value={dentalPerEmp} onChange={(e) => setDentalPerEmp(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Vision premium per employee ($/mo)</label>
          <input type="number" value={visionPerEmp} onChange={(e) => setVisionPerEmp(Number(e.target.value||0))} className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
        </div>
        <div>
          <label className="text-sm">Employer share (%)</label>
          <input type="range" min={0} max={100} value={employerShare} onChange={(e) => setEmployerShare(Number(e.target.value))} className="w-full" aria-label="Employer share percent" />
          <div className="text-sm">{employerShare}%</div>
        </div>
      </div>
      <div className="mt-4 text-sm">Estimated employer cost: <span className="font-semibold">${employerMonthly.toLocaleString()}</span>/mo</div>
      <div className="text-sm">Estimated employee payroll deductions: <span className="font-semibold">${employeeMonthly.toLocaleString()}</span>/mo (total)</div>
    </Card>
  );
}



