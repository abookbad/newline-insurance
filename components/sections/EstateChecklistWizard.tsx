"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type Step = 1 | 2 | 3;

export default function EstateChecklistWizard() {
  const [step, setStep] = React.useState<Step>(1);
  const [beneficiaries, setBeneficiaries] = React.useState<string>("");
  const [contingents, setContingents] = React.useState<string>("");
  const [docs, setDocs] = React.useState<{ will: boolean; trust: boolean; poa: boolean; medical: boolean }>({ will: false, trust: false, poa: false, medical: false });

  const checklist = [
    beneficiaries && `Primary beneficiaries: ${beneficiaries}`,
    contingents && `Contingent beneficiaries: ${contingents}`,
    docs.will && "Last Will & Testament",
    docs.trust && "Revocable Living Trust",
    docs.poa && "Durable Power of Attorney",
    docs.medical && "Medical Directives (HIPAA)",
  ].filter(Boolean) as string[];

  const download = () => {
    const blob = new Blob([`Estate Checklist\n\n${checklist.map((c) => `• ${c}`).join("\n")}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "estate-checklist.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="p-5 glass-soft glass-border">
      {step === 1 && (
        <div className="grid gap-3">
          <div className="text-sm text-black/70">Who should receive assets first?</div>
          <input value={beneficiaries} onChange={(e) => setBeneficiaries(e.target.value)} placeholder="e.g., Spouse 60%, Child A 40%" className="w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStep(1)} disabled>Back</Button>
            <Button onClick={() => setStep(2)}>Next</Button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="grid gap-3">
          <div className="text-sm text-black/70">If primaries can’t receive assets, who is next?</div>
          <input value={contingents} onChange={(e) => setContingents(e.target.value)} placeholder="e.g., Child B 100%" className="w-full rounded-2xl border border-black/10 bg-white/70 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
            <Button onClick={() => setStep(3)}>Next</Button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="grid gap-3">
          <div className="text-sm text-black/70">Select documents to prepare or review:</div>
          {([
            { k: "will", label: "Last Will & Testament" },
            { k: "trust", label: "Revocable Living Trust" },
            { k: "poa", label: "Durable Power of Attorney" },
            { k: "medical", label: "Medical Directives (HIPAA)" },
          ] as const).map((d) => (
            <label key={d.k} className="inline-flex items-center gap-2 text-sm">
              <input type="checkbox" checked={docs[d.k]} onChange={(e) => setDocs((prev) => ({ ...prev, [d.k]: e.target.checked }))} />
              {d.label}
            </label>
          ))}
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
            <Button onClick={download}>Download checklist</Button>
          </div>
        </div>
      )}
    </Card>
  );
}


