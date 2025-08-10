import Hero from "@/components/sections/Hero";
// import Estimator from "@/components/sections/Estimator";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";
import ValueProps from "@/components/sections/ValueProps";

export default function Page() {
  return (
    <>
      <Hero />
      <Products />
      <ValueProps />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
