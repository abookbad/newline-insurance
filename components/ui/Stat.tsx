import React from "react";

type StatProps = {
  label: string;
  value: string | number;
  sub?: string;
};

export default function Stat({ label, value, sub }: StatProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 supports-[backdrop-filter]:bg-white/50 backdrop-blur p-4">
      <div className="text-xs uppercase tracking-wide text-black/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {sub && <div className="mt-1 text-xs text-black/60">{sub}</div>}
    </div>
  );
}

