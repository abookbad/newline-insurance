import React from "react";
import { cn } from "./lib";

type BadgeProps = React.PropsWithChildren<{
  className?: string;
}>;

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium text-black/80", className)}>
      {children}
    </span>
  );
}

