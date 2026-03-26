import EngagementModel from "@/components/screens/solutions/engagementModel/EngagementModel";
import Hero from "@/components/screens/solutions/Hero";
import HowItWorks from "@/components/screens/solutions/howItWorks/HowItWorks";
import HowWeDeliver from "@/components/screens/solutions/howWeDeliver/HowWeDeliver";
import IndustriesWeSupport from "@/components/screens/solutions/industriesWeSupport/IndustriesWeSupport";
import ServiceCategories from "@/components/screens/solutions/servicesCategories/ServiceCategories";

const Solutions = () => {
  return (
    <>
      <Hero />
      <IndustriesWeSupport />
      <ServiceCategories />
      <HowWeDeliver />
      <EngagementModel />
      <HowItWorks />
    </>
  );
};

export default Solutions;
