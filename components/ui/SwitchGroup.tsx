"use client";

import React from "react";
import { cn } from "./lib";

type Option<T extends string | number> = { label: string; value: T };

type SwitchGroupProps<T extends string | number> = {
  label?: string;
  options: Option<T>[];
  value: T;
  onChange: (v: T) => void;
};

export default function SwitchGroup<T extends string | number>({ label, options, value, onChange }: SwitchGroupProps<T>) {
  return (
    <div>
      {label && <div className="mb-2 text-sm text-black/70">{label}</div>}
      <div className="inline-flex rounded-2xl border border-black/10 bg-white/60 supports-[backdrop-filter]:bg-white/50 backdrop-blur p-1">
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "px-3 py-2 text-sm rounded-xl transition-colors cursor-pointer",
                active ? "bg-black text-white" : "text-black/70 hover:bg-black/5"
              )}
              aria-pressed={active}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

