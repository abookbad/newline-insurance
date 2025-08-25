import KeyPersonCoverageEstimator from "@/components/sections/KeyPersonCoverageEstimator";
import GroupBenefitsCostEstimator from "@/components/sections/GroupBenefitsCostEstimator";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="Business planning"
        subtitle="Outline continuity, benefits, and tax-aware structures for small businesses."
        image={{ src: "/solutions/planning/business.jpeg", alt: "Business planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Business planning</h1>
        <p className="mt-3 text-black/70">Outline continuity, benefits, and tax-aware structures for small businesses.</p>

        <div className="mt-8 grid gap-8">
          <section>
            <h2 className="text-xl font-semibold">Key person coverage</h2>
            <div className="mt-3">
              <KeyPersonCoverageEstimator />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Group benefits budget</h2>
            <div className="mt-3">
              <GroupBenefitsCostEstimator />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}


