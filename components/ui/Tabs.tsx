"use client";

import React from "react";
import { cn } from "@/components/ui/lib";

export interface TabItem<T extends string | number> {
  value: T;
  label: string;
}

export interface TabsProps<T extends string | number> {
  items: TabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  ariaLabel?: string;
}

export default function Tabs<T extends string | number>({ items, value, onChange, className, ariaLabel }: TabsProps<T>) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={cn("inline-flex rounded-2xl border border-black/10 bg-white/70 p-1 glass-border supports-[backdrop-filter]:bg-white/60 backdrop-blur", className)}>
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={String(it.value)}
            role="tab"
            aria-selected={active}
            aria-controls={`tab-${String(it.value)}`}
            onClick={() => onChange(it.value)}
            className={cn(
              "px-3 py-2 rounded-xl text-sm font-medium focus-visible:ring-2 ring-[var(--brand)] ring-offset-2",
              active ? "bg-[var(--brand)] text-white shadow-sm" : "text-[var(--brand)]/90 hover:bg-black/5"
            )}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}


