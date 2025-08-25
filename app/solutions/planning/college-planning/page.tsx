import CollegeSavingsEstimator from "@/components/sections/CollegeSavingsEstimator";
import SolutionHero from "@/components/sections/SolutionHero";

export default function Page() {
  return (
    <>
      <SolutionHero
        title="College planning"
        subtitle="Coordinate savings timelines and strategies within a full financial plan."
        image={{ src: "/solutions/planning/college.jpeg", alt: "College planning" }}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">College planning</h1>
        <p className="mt-3 text-black/70">This page is being built. In the meantime, we coordinate college funding timelines and strategies within retirement planning.</p>
        <div className="mt-8">
          <CollegeSavingsEstimator />
        </div>
      </div>
    </>
  );
}


