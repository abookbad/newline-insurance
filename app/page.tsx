import Hero from "@/components/sections/Hero";
import ServicesTabs from "@/components/sections/ServicesTabs";
import AgencyPlatformPromo from "@/components/sections/AgencyPlatformPromo";
import AboutUsBrief from "@/components/sections/AboutUsBrief";
import FinalCTA from "@/components/sections/FinalCTA";
import Compliance from "@/components/sections/Compliance";
import BusinessSolutionsShowcase from "@/components/sections/BusinessSolutionsShowcase";
import PlanningServices from "@/components/sections/PlanningServices";

export default function Page() {
  return (
    <>
      <Hero />
      {/* Insurance Solutions, Business Solutions, Planning Services */}
      <ServicesTabs />
      {/* Business Solutions showcase */}
      <BusinessSolutionsShowcase />
      {/* Planning Services grid */}
      <PlanningServices />
      {/* Agency Platform */}
      <AgencyPlatformPromo />
      {/* About Us */}
      <AboutUsBrief />
      {/* Contact/CTA */}
      <FinalCTA />
      {/* Footer compliance */}
      <Compliance />
    </>
  );
}
