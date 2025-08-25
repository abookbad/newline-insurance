import React from "react";
import FinalExpenseCostBuilder from "@/components/sections/FinalExpenseCostBuilder";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Final Expense"
        subtitle="Smaller, simplified policies to help loved ones handle funeral and last expenses."
        image={{ src: "/solutions/insurance/final-expense.jpeg", alt: "Final expense" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Final Expense</h1>
        <p className="mt-3 text-black/70">
          Smaller, simplified policies to help loved ones handle funeral and last expenses.
        </p>
        <div className="mt-8 grid gap-6 text-black/80">
          <section>
            <h2 className="text-xl font-semibold">Who it’s for</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>Those wanting a modest, predictable policy for final costs</li>
              <li>Applicants preferring simplified underwriting</li>
              <li>Families aiming to protect savings for other goals</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Next steps</h2>
            <ol className="mt-3 list-decimal pl-5">
              <li>Quick call to size coverage and budget</li>
              <li>Choose a carrier with suitable approval criteria</li>
              <li>Simple application and fast decision</li>
            </ol>
          </section>
        </div>
        <div className="mt-8">
          <FinalExpenseCostBuilder />
        </div>
      </div>
    </>
  );
}


