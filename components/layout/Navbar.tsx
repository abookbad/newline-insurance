"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { navLinks } from "@/lib/content";
import NavLink from "@/components/layout/NavLink";
import DropdownMenu from "@/components/layout/DropdownMenu";
import Button from "@/components/ui/Button";
import { cn } from "@/components/ui/lib";

type SafeMotionLiProps = {
  children?: React.ReactNode;
  className?: string;
  initial?: unknown;
  animate?: unknown;
  transition?: unknown;
  key?: string | number;
};
const MLi = motion.li as unknown as React.ComponentType<SafeMotionLiProps>;

export default function Navbar() {
  const prefersReduced = useReducedMotion();
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const barRef = React.useRef<HTMLDivElement | null>(null);
  const firstFocusableRef = React.useRef<HTMLButtonElement | null>(null);
  const lastFocusableRef = React.useRef<HTMLAnchorElement | null>(null);
  const [panelTop, setPanelTop] = React.useState<number>(56);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if (!open) return;
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement)?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement)?.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  // Compute mobile panel top based on the rendered navbar height
  React.useEffect(() => {
    const updateTop = () => {
      const bar = barRef.current;
      if (!bar) return;
      const rect = bar.getBoundingClientRect();
      // Use viewport-relative top for a fixed panel; minimal gap
      setPanelTop(Math.max(0, rect.bottom + 2));
    };
    updateTop();
    window.addEventListener("resize", updateTop);
    window.addEventListener("scroll", updateTop, { passive: true });
    return () => {
      window.removeEventListener("resize", updateTop);
      window.removeEventListener("scroll", updateTop);
    };
  }, []);

  // Recompute position whenever menu opens
  React.useEffect(() => {
    if (!open) return;
    const bar = barRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    setPanelTop(Math.max(0, rect.bottom + 2));
  }, [open]);

  return (
    <>
      {/* Wrapper to avoid motion typing issues while preserving animation */}
      {(() => {
        type SafeMotionHeaderProps = {
          children?: React.ReactNode;
          className?: string;
          initial?: unknown;
          animate?: unknown;
          transition?: unknown;
        };
        const MHeader = motion.header as unknown as React.ComponentType<SafeMotionHeaderProps>;
        return (
          <MHeader
            initial={prefersReduced ? false : { opacity: 0, y: -10 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 z-40 bg-transparent"
          >
            <div className="py-2 relative">
              <div ref={barRef} className="mx-auto w-[min(94vw,1200px)] grid items-center grid-cols-[220px,1fr,auto] gap-x-4 rounded-2xl glass-border bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur-md shadow-sm px-3 py-2">
                {/* Left: Logo */}
                <Link href="/" className="col-start-1 row-span-2 self-stretch w-full h-full flex items-center justify-center gap-2 rounded-2xl px-2 hover:bg-black/5 focus-visible:ring-2 ring-[--brand] ring-offset-2">
                  <Image src="/mainPage/hero/heroLogoExtended.png" alt="Newline Financial & Insurance Solutions" width={180} height={30} className="h-7 w-auto sm:h-8" />
                </Link>

                {/* Center: Single-row nav (desktop) */}
                {(() => {
                  const order = ["Insurance Solutions", "Business Solutions", "Planning Services", "Agency Platform", "About Us", "Contact"] as const;
                  const links = navLinks.filter((l) => (order as readonly string[]).includes(l.title));
                  return (
                    <nav className="hidden md:flex col-start-2 items-center justify-center gap-x-1 overflow-x-auto whitespace-nowrap">
                      {links.map((l) => (
                        l.children ? (
                          <DropdownMenu key={l.title} label={l.title} items={l.children} />
                        ) : (
                          <NavLink key={l.href} href={l.href!}>{l.title}</NavLink>
                        )
                      ))}
                    </nav>
                  );
                })()}

                {/* Right: CTAs split by row */}
                <div className="hidden md:flex col-start-3 items-center justify-end gap-2">
                  <Button variant="primary" href="/apply" className="rounded-[12px] hover:shadow-[0_0_0_4px_rgba(11,34,64,0.08)] hover-lift">Get a Quote</Button>
                </div>
                

                {/* Mobile hamburger */}
                <button
                  type="button"
                  aria-label="Open menu"
                  onClick={() => setOpen((v) => !v)}
                  className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-black/5 focus-visible:ring-2 ring-[--brand] ring-offset-2"
                >
                  <span className="sr-only">Toggle menu</span>
                  {open ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile panel */}
            {(() => {
              type SafeMotionAsideProps = {
                children?: React.ReactNode;
                className?: string;
                role?: string;
                "aria-modal"?: string;
                "aria-label"?: string;
                initial?: unknown;
                animate?: unknown;
                transition?: unknown;
                ref?: React.Ref<HTMLDivElement>;
                style?: React.CSSProperties;
              };
              const MAside = motion.aside as unknown as React.ComponentType<SafeMotionAsideProps>;
              return (
                <MAside
                  key={open ? "open" : "closed"}
                  ref={panelRef as unknown as React.Ref<HTMLDivElement>}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile navigation"
                  initial={prefersReduced ? false : { opacity: 0, y: -8, scale: 0.98 }}
                  animate={open ? (prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }) : (prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 })}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-[calc(100%+2px)] w-[92vw] max-w-md glass-soft glass-border bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur-md border border-black/10 shadow-xl md:hidden rounded-2xl",
                    open ? "pointer-events-auto" : "pointer-events-none opacity-0"
                  )}
                >
              <div className="flex h-14 items-center justify-between px-4 border-b border-black/10">
                <span className="font-semibold text-[var(--brand)]">Menu</span>
                <button
                  ref={firstFocusableRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-black/5 focus-visible:ring-2 ring-[--brand] ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <span aria-hidden className="block h-0.5 w-6 bg-[var(--brand)] rotate-45 translate-y-0.5"></span>
                </button>
              </div>
              <nav className="p-4">
                <ul className="grid gap-1">
                  {navLinks.map((l, i) => (
                    <MLi
                      key={l.title}
                      initial={!prefersReduced && open ? { opacity: 0, x: 12 } : undefined}
                      animate={open && !prefersReduced ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: open && !prefersReduced ? i * 0.03 : 0 }}
                      className="opacity-100"
                    >
                      {l.children ? (
                        <details className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-2 rounded-2xl hover:bg-black/5">
                            <span className="text-sm font-medium text-[var(--brand)]/90">{l.title}</span>
                            <span className="text-[var(--brand)]/60">▾</span>
                          </summary>
                          <ul className="mt-1 pl-3 grid gap-1">
                            {l.children.map((c) => (
                              <li key={c.href}>
                                <a href={c.href} className="block px-3 py-2 rounded-xl text-sm text-[var(--brand)]/90 hover:bg-black/5 hover:scale-[1.01] transition-transform" onClick={() => setOpen(false)}>
                                  {c.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : (
                        <a href={l.href!} className="block px-3 py-2 rounded-2xl text-sm text-[var(--brand)]/90 hover:bg-black/5" onClick={() => setOpen(false)}>
                          {l.title}
                        </a>
                      )}
                    </MLi>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto p-4 border-t border-black/10">
                <div className="grid gap-2">
                  <Button variant="primary" href="/apply">Get a Quote</Button>
                </div>
                <a
                  ref={lastFocusableRef}
                  href="#"
                  onClick={(e) => { e.preventDefault(); setOpen(false); }}
                  className="sr-only"
                >
                  end
                </a>
              </div>
                </MAside>
              );
            })()}
          </MHeader>
        );
      })()}
    </>
  );
}


