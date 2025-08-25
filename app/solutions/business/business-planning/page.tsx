import SolutionHero from "@/components/sections/SolutionHero";
import KeyPersonCoverageEstimator from "@/components/sections/KeyPersonCoverageEstimator";
import GroupBenefitsCostEstimator from "@/components/sections/GroupBenefitsCostEstimator";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Business planning"
        subtitle="Entity structure, continuity, key person coverage, and benefits strategies tailored to your business."
        image={{ src: "/solutions/business/business-planning.jpeg", alt: "Business planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Business planning</h1>
        <p className="mt-3 text-black/70">Entity structure, continuity, key person coverage, and benefits strategies tailored to your business.</p>
        <div className="mt-8 grid gap-8 text-black/80">
          <section>
            <h2 className="text-xl font-semibold">Where we focus</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>Entity selection and ownership structure aligned to goals and liability.</li>
              <li>Continuity plans for partners and family—buy‑sell funding and documentation.</li>
              <li>Key person coverage sized to operating risk and hiring timelines.</li>
              <li>Benefits strategy to compete for talent within a clear budget.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Our process</h2>
            <ol className="mt-3 list-decimal pl-5">
              <li>Discovery: inventory people, roles, cash flow, and risk exposures.</li>
              <li>Design: outline structure options, policies, and benefits trade‑offs.</li>
              <li>Implement: coordinate documents and carriers; set a maintenance cadence.</li>
              <li>Review: revisit as staffing, revenue, and laws change.</li>
            </ol>
          </section>
        </div>
        <div className="mt-10 grid gap-8">
          <section>
            <h2 className="text-xl font-semibold">Key person coverage</h2>
            <p className="mt-2 text-black/70">Rough in a benefit to cover operating loss and hiring/onboarding costs.</p>
            <div className="mt-4">
              <KeyPersonCoverageEstimator />
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Group benefits budget</h2>
            <p className="mt-2 text-black/70">Adjust headcount and employer share to see an estimated monthly budget.</p>
            <div className="mt-4">
              <GroupBenefitsCostEstimator />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}


