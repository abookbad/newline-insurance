"use client";

import React from "react";

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  ariaLabelledBy?: string;
}

export default function Popover({ trigger, children, ariaLabelledBy }: PopoverProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="text-sm underline focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 rounded-md"
      >
        {trigger}
      </button>
      {open && (
        <div
          role="dialog"
          aria-labelledby={ariaLabelledBy}
          className="absolute z-50 mt-2 w-64 rounded-2xl border border-black/10 bg-white/80 p-3 shadow-sm glass-border supports-[backdrop-filter]:glass"
        >
          {children}
        </div>
      )}
    </div>
  );
}


