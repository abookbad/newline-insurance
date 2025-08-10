"use client";

import React from "react";

type TooltipProps = React.PropsWithChildren<{
  content: string;
}>;

export default function Tooltip({ children, content }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 whitespace-pre rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
      >
        {content}
      </span>
    </span>
  );
}

