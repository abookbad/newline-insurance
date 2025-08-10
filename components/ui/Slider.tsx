"use client";

import React from "react";

type SliderProps = {
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  label?: string;
  unit?: string;
};

export default function Slider({ value, onChange, min, max, step = 1, label, unit }: SliderProps) {
  return (
    <div className="w-full">
      {label && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-black/70">{label}</span>
          <span className="font-medium">{unit ? `${value.toLocaleString()} ${unit}` : value}</span>
        </div>
      )}
      <input
        type="range"
        className="w-full appearance-none rounded-lg bg-black/10 h-2 accent-black cursor-pointer"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="mt-1 flex justify-between text-[11px] text-black/60">
        <span>{unit ? `${min.toLocaleString()} ${unit}` : min}</span>
        <span>{unit ? `${max.toLocaleString()} ${unit}` : max}</span>
      </div>
    </div>
  );
}

