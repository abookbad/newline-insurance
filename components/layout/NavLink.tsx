"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/components/ui/lib";
import { motion, useReducedMotion } from "framer-motion";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const prefersReduced = useReducedMotion();
  return (
    <motion.div {...(!prefersReduced ? { whileHover: { y: -1 } } : {})}>
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "relative px-3 py-2 rounded-2xl text-sm font-medium text-[var(--brand)]/90 hover:bg-black/5 transition-transform",
          "focus-visible:ring-2 ring-[--brand] ring-offset-2",
          isActive && "bg-black/5 text-[var(--brand)]",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span
          aria-hidden
          className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand)]/80"
          style={{
            transformOrigin: "left",
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 250ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </Link>
    </motion.div>
  );
}


