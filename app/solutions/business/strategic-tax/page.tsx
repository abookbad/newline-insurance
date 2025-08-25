import SolutionHero from "@/components/sections/SolutionHero";
import TaxWithdrawalHelper from "@/components/sections/TaxWithdrawalHelper";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Strategic Tax Planning"
        subtitle="Coordinate structure, benefits, and distributions with tax professionals."
        image={{ src: "/solutions/business/strategic-tax.jpeg", alt: "Strategic tax planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Strategic Tax Planning</h1>
        <p className="mt-3 text-black/70">Coordinate structure, benefits, and distributions with tax professionals.</p>
        <div className="mt-8 grid gap-8 text-black/80">
          <section>
            <h2 className="text-xl font-semibold">Key concepts</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>Entity selection and compensation mix (W‑2 vs. distributions).</li>
              <li>Bracket management and timing of income/expenses.</li>
              <li>Qualified plans and fringe benefits that reduce taxable income.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">How we collaborate</h2>
            <ol className="mt-3 list-decimal pl-5">
              <li>Coordinate with your CPA/EA to document compliant strategies.</li>
              <li>Model scenarios to target better after‑tax outcomes.</li>
              <li>Update annually to reflect law changes and business growth.</li>
            </ol>
          </section>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Withdrawal tax impact</h2>
          <p className="mt-2 text-black/70">Explore how different sequences affect after‑tax outcomes.</p>
          <div className="mt-4">
            <TaxWithdrawalHelper />
          </div>
        </div>
      </div>
    </>
  );
}


