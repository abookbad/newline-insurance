import React from "react";
import EstateChecklistWizard from "@/components/sections/EstateChecklistWizard";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Estate & legacy planning"
        subtitle="Transfer wealth efficiently and support what matters most."
        image={{ src: "/solutions/planning/estate-and-legacy.jpeg", alt: "Estate & legacy planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Estate & legacy planning</h1>
        <p className="mt-3 text-black/70">
          Transfer wealth efficiently and support what matters most.
        </p>
        <div className="mt-8">
          <EstateChecklistWizard />
        </div>
      </div>
    </>
  );
}

