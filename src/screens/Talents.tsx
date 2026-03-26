import EnterpriseReady from "@/components/screens/talents/EnterpriseReady";
import ExtensionOfYourTeam from "@/components/screens/talents/ExtensionOfYourTeam";
import Hero from "@/components/screens/talents/Hero";
import SeniorityLevels from "@/components/screens/talents/levels/SeniorityLevels";

const Talents = () => {
  return (
    <>
      <Hero />
      <SeniorityLevels />
      <ExtensionOfYourTeam />
      <EnterpriseReady />
    </>
  );
};

export default Talents;
