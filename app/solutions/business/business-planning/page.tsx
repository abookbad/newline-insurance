import SolutionHero from "@/components/sections/SolutionHero";

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
      </div>
    </>
  );
}


