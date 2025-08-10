"use client";

import React from "react";
import { cn } from "./lib";

type ToggleProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
};

export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      {label && <span className="text-sm text-black/80">{label}</span>}
      <span
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            onChange(!checked);
          }
        }}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full border border-black/10 transition-colors",
          checked ? "bg-black" : "bg-black/10"
        )}
      >
        <span
          className={cn(
            "inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform",
            checked ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </span>
    </label>
  );
}

