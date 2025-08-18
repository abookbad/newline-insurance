"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/components/ui/lib";

export interface DropdownMenuProps {
  label: string;
  items: { title: string; href: string }[];
}

export default function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();
  const closeTimer = React.useRef<number | null>(null);
  const [menuTop, setMenuTop] = React.useState<number>(60);
  const [menuLeft, setMenuLeft] = React.useState<number>(0);
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => { setMounted(true); }, []);

  React.useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    if (open) {
      document.addEventListener("keydown", onKeydown);
    }
    return () => document.removeEventListener("keydown", onKeydown);
  }, [open]);

  // Close dropdown on resize; update position on scroll
  React.useEffect(() => {
    const updatePosition = () => {
      if (!open) return;
      const btn = buttonRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      setMenuTop(rect.bottom + 6);
      // Align left edge with trigger, clamped to viewport
      const viewportWidth = window.innerWidth;
      const menuWidth = Math.min(viewportWidth * 0.92, 320);
      const desiredLeft = Math.max(8, Math.min(rect.left, viewportWidth - menuWidth - 8));
      setMenuLeft(desiredLeft);
    };
    const close = () => setOpen(false);
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", close);
    };
  }, []);

  // Track viewport breakpoint and compute dynamic top for mobile
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setMenuTop(Math.max(0, rect.bottom + 2));
    const viewportWidth = window.innerWidth;
    const menuWidth = Math.min(viewportWidth * 0.92, 320);
    const desiredLeft = Math.max(8, Math.min(rect.left, viewportWidth - menuWidth - 8));
    setMenuLeft(desiredLeft);
  }, [open]);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node) && !buttonRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => { clearCloseTimer(); setOpen(true); }}
      onMouseLeave={scheduleClose}
      onFocusCapture={() => { clearCloseTimer(); setOpen(true); }}
      onBlurCapture={(e) => {
        const next = e.relatedTarget as Node | null;
        if (next && wrapperRef.current?.contains(next)) return;
        scheduleClose();
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative px-3 py-2 rounded-[12px] text-sm font-medium text-[var(--brand)]/90 hover:bg-black/5 focus-visible:ring-2 ring-[--brand] ring-offset-2",
          "transition-transform hover:-translate-y-0.5"
        )}
      >
        <span className="relative z-10 inline-flex items-center gap-1.5">
          <span>{label}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
        </span>
        {(() => {
          type SafeMotionSpanProps = {
            className?: string;
            initial?: unknown;
            animate?: unknown;
            transition?: unknown;
            style?: React.CSSProperties;
            children?: React.ReactNode;
          };
          const MSpan = motion.span as unknown as React.ComponentType<SafeMotionSpanProps>;
          return (
            <MSpan
              aria-hidden
              className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand)]/80"
              initial={false}
              animate={{ scaleX: open ? 1 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
            />
          );
        })()}
      </button>
      {open ? (() => {
        type SafeMotionDivProps = {
          children?: React.ReactNode;
          className?: string;
          role?: string;
          "aria-label"?: string;
          initial?: unknown;
          animate?: unknown;
          transition?: unknown;
          ref?: React.Ref<HTMLDivElement>;
          style?: React.CSSProperties;
        };
        const MDiv = motion.div as unknown as React.ComponentType<SafeMotionDivProps>;
        const menu = (
          <MDiv
            ref={menuRef as unknown as React.Ref<HTMLDivElement>}
            role="menu"
            aria-label={label}
            initial={prefersReduced ? false : { opacity: 0, y: -6, scale: 0.98 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{ top: menuTop, left: menuLeft, position: "fixed" as const }}
            className="w-[min(92vw,20rem)] rounded-2xl border glass-border bg-white shadow-lg p-2 z-[9999]"
            onMouseEnter={() => { clearCloseTimer(); setOpen(true); }}
            onMouseLeave={scheduleClose}
          >
            <ul className="grid gap-1" role="none">
              {items.map((item, idx) => {
                type SafeMotionLiProps = {
                  className?: string;
                  children?: React.ReactNode;
                  initial?: unknown;
                  animate?: unknown;
                  transition?: unknown;
                  role?: string;
                };
                const MLi = motion.li as unknown as React.ComponentType<SafeMotionLiProps>;
                return (
                  <MLi
                    key={item.href}
                    initial={prefersReduced ? false : { opacity: 0, x: 10 }}
                    animate={prefersReduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.22, delay: prefersReduced ? 0 : 0.04 * idx, ease: [0.22, 1, 0.36, 1] }}
                    role="none"
                  >
                    <a
                      role="menuitem"
                      href={item.href}
                      className="block w-full text-left px-3 py-2 rounded-xl text-sm text-[var(--brand)]/90 hover:bg-black/5 hover:scale-[1.01] transition-transform focus-visible:ring-2 ring-[--brand] ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </a>
                  </MLi>
                );
              })}
            </ul>
          </MDiv>
        );

        return mounted ? createPortal(menu, document.body) : menu;
      })() : null}
    </div>
  );
}


