"use client";

import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface InfoCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  blurb: string;
  details?: string[];
}

export default function InfoCard({ icon: Icon, title, blurb }: InfoCardProps) {
  const [open, setOpen] = React.useState(false);
  const prefersReduced = useReducedMotion();
  const contentId = `infocard-${title.replace(/\W+/g, "-")}`;
  type SafeMotionDivProps = {
    id?: string;
    className?: string;
    children?: React.ReactNode;
    initial?: unknown;
    animate?: unknown;
    exit?: unknown;
    transition?: unknown;
  };
  const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-controls={contentId}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
        if (e.key === "Escape") setOpen(false);
      }}
      className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm glass-border supports-[backdrop-filter]:glass hover-lift focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 cursor-pointer select-none"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon aria-hidden className="h-5 w-5 stroke-[1.5]" />
          <div>
            <div className="text-base font-semibold tracking-tight">{title}</div>
            <div className="mt-1 text-sm text-black/70">{blurb}</div>
          </div>
        </div>
        <div className="inline-flex items-center gap-1 text-sm text-black/60">
          <span className="hidden sm:inline">Learn more</span>
          <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <MDiv
            id={contentId}
            initial={prefersReduced ? undefined : { height: 0, opacity: 0 }}
            animate={prefersReduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-sm text-black/80"
          >
            <p>
              {title} — {blurb} We’ll walk you through clear options, simple trade‑offs, and answer questions so you can decide with confidence.
            </p>
          </MDiv>
        )}
      </AnimatePresence>
    </div>
  );
}


