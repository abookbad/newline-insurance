import SolutionHero from "@/components/sections/SolutionHero";

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
      </div>
    </>
  );
}


