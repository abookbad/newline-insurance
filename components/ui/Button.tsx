"use client";

import React from "react";
import { cn } from "./lib";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
  href?: string;
};

const base =
  "inline-flex items-center justify-center rounded-[12px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
const variants: Record<string, string> = {
  primary:
    "bg-[var(--brand)] text-white hover:brightness-110 shadow-sm px-5 py-3",
  secondary:
    "bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 text-[var(--brand)] border border-[color:rgba(11,34,64,0.18)] hover:bg-white px-5 py-3",
  ghost: "bg-transparent hover:bg-black/5 px-3 py-2 text-[var(--brand)]",
};

export default function Button({
  className,
  variant = "primary",
  children,
  href,
  ...props
}: ButtonProps) {
  if (href) {
    const { onClick: _onClick, ...rest } = props;
    return (
      <a href={href} className={cn(base, variants[variant], className)} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

