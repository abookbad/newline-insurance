import Hero from "@/components/sections/Hero";
import AgencyPlatformShowcase from "@/components/sections/AgencyPlatformShowcase";
import AboutUsBrief from "@/components/sections/AboutUsBrief";
import FinalCTA from "@/components/sections/FinalCTA";
import Compliance from "@/components/sections/Compliance";
import BusinessSolutionsShowcase from "@/components/sections/BusinessSolutionsShowcase";
import PlanningServicesShowcase from "@/components/sections/PlanningServicesShowcase";
import InsuranceSolutionsShowcase from "@/components/sections/InsuranceSolutionsShowcase";

export default function Page() {
  return (
    <>
      <Hero />
      {/* Insurance Solutions interactive */}
      <InsuranceSolutionsShowcase />
      {/* Business Solutions showcase */}
      <BusinessSolutionsShowcase />
      {/* Planning Services expanding tiles */}
      <PlanningServicesShowcase />
      {/* Agency Platform */}
      <AgencyPlatformShowcase />
      {/* About Us */}
      <AboutUsBrief />
      {/* Contact/CTA */}
      <FinalCTA />
      {/* Footer compliance */}
      <Compliance />
    </>
  );
}
