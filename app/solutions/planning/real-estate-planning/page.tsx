import React from "react";
import RealEstateCashflowHelper from "@/components/sections/RealEstateCashflowHelper";

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Real estate planning</h1>
      <p className="mt-3 text-black/70">
        Integrate property choices with cash flow, taxes, and legacy goals.
      </p>
      <div className="mt-8">
        <RealEstateCashflowHelper />
      </div>
    </div>
  );
}

