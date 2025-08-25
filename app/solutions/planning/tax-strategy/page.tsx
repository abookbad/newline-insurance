import React from "react";
import TaxWithdrawalHelper from "@/components/sections/TaxWithdrawalHelper";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Tax strategy & optimization"
        subtitle="Keep more of what you earn with coordinated, compliant strategies."
        image={{ src: "/solutions/planning/strategic-tax.jpeg", alt: "Tax strategy" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Tax strategy & optimization</h1>
        <p className="mt-3 text-black/70">
          Keep more of what you earn with coordinated, compliant strategies.
        </p>
        <div className="mt-8">
          <TaxWithdrawalHelper />
        </div>
      </div>
    </>
  );
}

