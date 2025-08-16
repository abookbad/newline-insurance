"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/components/ui/lib";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const prefersReduced = useReducedMotion();
  // Type-safe wrapper for motion.div to accept className and whileHover
  const MDiv = motion.div as unknown as React.ComponentType<{
    children?: React.ReactNode;
    className?: string;
    "aria-current"?: string;
    whileHover?: unknown;
  }>;
  const MSpan = motion.span as unknown as React.ComponentType<{
    className?: string;
    "aria-hidden"?: boolean;
    initial?: unknown;
    animate?: unknown;
    transition?: unknown;
    style?: React.CSSProperties;
  }>;
  return (
    <MDiv
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative px-3 py-2 rounded-[12px] text-sm font-medium text-[var(--brand)]/90 hover:bg-black/5 transition-transform",
        "focus-visible:ring-2 ring-[--brand] ring-offset-2 hover:-translate-y-0.5",
        isActive && "bg-black/5 text-[var(--brand)]",
        className
      )}
      {...(!prefersReduced ? { whileHover: { y: -1 } } : {})}
    >
      <Link href={href} {...props} className="relative z-10">
        {children}
      </Link>
      <MSpan
        aria-hidden
        className="absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand)]/80"
        initial={false}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </MDiv>
  );
}


