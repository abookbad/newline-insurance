"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import { servicesTabs, ServicesTab } from "@/lib/content";
import { Shield, ScrollText, Calculator, PieChart, GraduationCap, BriefcaseBusiness, Activity, HeartPulse, ChevronDown } from "lucide-react";
import Image from "next/image";
import SharedCtaBar from "@/components/sections/SharedCtaBar";

const iconRegistry: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Shield,
  ScrollText,
  Calculator,
  PieChart,
  GraduationCap,
  BriefcaseBusiness,
  Activity,
  HeartPulse,
};

export type ServicesTabsProps = {
  clientOnly?: boolean; // kept for API consistency; ignored in new spec
  defaultTabId?: string; // default first tab
};

export default function ServicesTabs({ clientOnly = true, defaultTabId = "insurance" }: ServicesTabsProps) {
  const prefersReduced = useReducedMotion();
  const tabs: ServicesTab[] = servicesTabs;
  const initialTab = tabs.find((t) => t.id === defaultTabId) ?? tabs[0];
  const [activeId, setActiveId] = React.useState<string>(initialTab?.id ?? tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  type SafeMotionDivProps = {
    className?: string;
    children?: React.ReactNode;
    initial?: unknown;
    animate?: unknown;
    whileInView?: unknown;
    viewport?: unknown;
    transition?: unknown;
    variants?: unknown;
    role?: string;
    id?: string;
    "aria-labelledby"?: string;
    key?: React.Key;
  };
  const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;

  const panelVariants = prefersReduced
    ? undefined
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <Section id="services" title={active.title} subtitle={active.subheading} headingAlign="center" className="py-16 md:py-24">
      {/* Tabs */}
      <div role="tablist" aria-label="Services" className="w-full">
        {/* Mobile: 2-row grid */}
        <div className="grid grid-cols-2 gap-1 sm:hidden rounded-t-2xl border border-black/10 bg-white/70 p-1 glass-border supports-[backdrop-filter]:glass max-w-md mx-auto justify-items-center">
          {tabs.map((tab) => {
            const isActive = tab.id === active.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={`rounded-2xl px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 cursor-pointer ${
                  isActive ? "bg-[var(--brand)]/10 border-b-2 border-[var(--brand)] text-[var(--brand)]" : "text-black/70 hover:text-black/80 hover:bg-white/80"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Desktop: centered row */}
        <div className="hidden sm:flex w-full justify-center overflow-x-visible rounded-t-2xl border border-black/10 bg-white/70 p-1 glass-border supports-[backdrop-filter]:glass max-w-3xl mx-auto">
          {tabs.map((tab) => {
            const isActive = tab.id === active.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveId(tab.id)}
                className={`whitespace-nowrap rounded-t-2xl px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 cursor-pointer ${
                  isActive ? "bg-[var(--brand)]/10 border-b-2 border-[var(--brand)] text-[var(--brand)]" : "text-black/70 hover:text-black/80 hover:bg-white/80"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel */}
      <MDiv
        key={active.id}
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        initial={prefersReduced ? undefined : "hidden"}
        animate={prefersReduced ? undefined : "show"}
        variants={panelVariants}
        className="rounded-b-2xl border-x border-b border-black/10 bg-white/70 p-6 md:p-8 glass-border supports-[backdrop-filter]:glass"
      >
        {(() => {
          const t = active;
          const HeadingIcon = iconRegistry[
            t.id === "insurance"
              ? "Shield"
              : t.id === "estate"
              ? "ScrollText"
              : t.id === "tax"
              ? "Calculator"
              : t.id === "retirement"
              ? "PieChart"
              : t.id === "college"
              ? "GraduationCap"
              : "BriefcaseBusiness"
          ];
          return (
            <div className="grid gap-6 lg:grid-cols-12">
              {/* Image (right on desktop) */}
              <div className="order-1 lg:order-2 lg:col-span-5">
                <div className="relative rounded-2xl border border-black/10 bg-white/60 glass-border shadow-sm overflow-hidden group">
                  <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(11,34,64,0.09),transparent)]" aria-hidden />
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={t.image?.src ?? "/services/placeholder.jpg"}
                      alt={t.image?.alt ?? t.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                      className={`object-cover rounded-2xl ${prefersReduced ? "" : "group-hover:-translate-y-1 transition-transform"}`}
                      priority={activeId === "insurance"}
                    />
                  </div>
                </div>
              </div>

              {/* Text content (left on desktop) */}
              <div className="order-2 lg:order-1 lg:col-span-7">
                <div className="text-[11px] uppercase tracking-wide text-black/60 select-none">{t.subheading}</div>
                <div className="mt-1 flex items-center gap-2">
                  <HeadingIcon aria-hidden className="h-5 w-5 stroke-[1.5]" />
                  <h3 className="text-lg font-semibold tracking-tight">{t.title}</h3>
                </div>

                {/* Highlights chips */}
                {t.highlights && t.highlights.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {t.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center rounded-full px-3 py-1 text-sm border border-black/10 bg-white/60">
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Subservices grid */}
                {t.subservices && t.subservices.length > 0 && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {t.subservices.map((s) => {
                      const SIcon = iconRegistry[s.icon] ?? Shield;
                      return (
                        <MDiv key={s.heading} initial={prefersReduced ? undefined : { opacity: 0, y: 8 }} whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/60 p-3 glass-border cursor-default">
                          <div className="size-10 rounded-full border border-black/10 bg-white/80 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                            <SIcon aria-hidden className="h-5 w-5 stroke-[1.5]" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{s.heading}</div>
                            <div className="text-sm text-black/70">{s.text}</div>
                          </div>
                        </MDiv>
                      );
                    })}
                  </div>
                )}

                {/* Mini FAQ */}
                {t.faqs && t.faqs.length > 0 && (
                  <div className="mt-4">
                    {t.faqs.map((f, i) => (
                      <FaqItem key={`${f.q}-${i}`} q={f.q} a={f.a} />
                    ))}
                  </div>
                )}

                {t.legalNote && <div className="mt-3 text-xs text-black/60">{t.legalNote}</div>}
              </div>
            </div>
          );
        })()}
      </MDiv>

      <SharedCtaBar />
    </Section>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const panelId = `faq-${q.replace(/\W+/g, "-")}`;
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-3 glass-border mt-2">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left rounded-md px-2 py-1 cursor-pointer hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-sm font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      <div id={panelId} className={`text-sm text-black/70 ${open ? "mt-2" : "hidden"}`}>
        <p>{a}</p>
      </div>
    </div>
  );
}

