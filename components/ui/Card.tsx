import React from "react";
import { cn } from "./lib";

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/10 bg-white/60 supports-[backdrop-filter]:bg-white/50 backdrop-blur shadow-sm glass-soft glass-border glass-sheen",
        className
      )}
    >
      {children}
    </div>
  );
}

