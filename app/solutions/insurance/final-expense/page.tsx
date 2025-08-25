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
        <div className="mt-8">
          <FinalExpenseCostBuilder />
        </div>
      </div>
    </>
  );
}


