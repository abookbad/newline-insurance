import SolutionHero from "@/components/sections/SolutionHero";
import GroupBenefitsCostEstimator from "@/components/sections/GroupBenefitsCostEstimator";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Group Benefits"
        subtitle="Benefits packages tailored to budget and retention needs."
        image={{ src: "/solutions/business/group-benefits.jpeg", alt: "Group benefits" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Group Benefits</h1>
        <p className="mt-3 text-black/70">Benefits packages tailored to budget and retention needs.</p>
        <div className="mt-8 grid gap-8 text-black/80">
          <section>
            <h2 className="text-xl font-semibold">Plan types</h2>
            <ul className="mt-3 list-disc pl-5">
              <li>Medical (PPO/HMO), HSA/HRA, and integrated ICHRA options.</li>
              <li>Dental and vision coverage with multiple network choices.</li>
              <li>Group life, STD/LTD disability, accident and critical illness.</li>
              <li>401(k) and SIMPLE IRA setup and transition coordination.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">How we help</h2>
            <ol className="mt-3 list-decimal pl-5">
              <li>Benchmark costs and designs for your industry and headcount.</li>
              <li>Compare carriers, networks, and funding methods in plain English.</li>
              <li>Onboarding assistance and annual open enrollment support.</li>
            </ol>
          </section>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Preview monthly budget</h2>
          <p className="mt-2 text-black/70">Set headcount and employer share to estimate costs.</p>
          <div className="mt-4">
            <GroupBenefitsCostEstimator />
          </div>
        </div>
      </div>
    </>
  );
}


