import React from "react";
import { cn } from "./lib";

type CardProps = React.PropsWithChildren<{
  className?: string;
  variant?: "default" | "transparent";
}>;

export default function Card({ children, className, variant = "default" }: CardProps) {
  const base =
    variant === "transparent"
      ? "rounded-2xl border border-black/10 bg-white/10 supports-[backdrop-filter]:bg-white/5 backdrop-blur-sm shadow-sm"
      : "rounded-2xl border border-black/10 bg-white/60 supports-[backdrop-filter]:bg-white/50 backdrop-blur shadow-sm glass-soft glass-border glass-sheen";
  return (
    <div
      className={cn(base, className)}
    >
      {children}
    </div>
  );
}

