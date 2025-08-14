import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";
import ValueProps from "@/components/sections/ValueProps";
import Benefits from "@/components/sections/Benefits";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Compliance from "@/components/sections/Compliance";
import ServicesTabs from "@/components/sections/ServicesTabs";

export default function Page() {
  return (
    <>
      <Hero />
      <ServicesTabs clientOnly />
      <ValueProps />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Compliance />
      <FinalCTA />
    </>
  );
}
