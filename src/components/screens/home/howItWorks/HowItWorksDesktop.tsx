import { Stagger, StaggerItem } from "@/components/ui/animated";
import { howItWorksStepsData } from "@/contents/screens/home";

const paddingValues = [3.5, 9.5, 6.5, 12.5];

const HowItWorksDesktop = () => {
  return (
    <Stagger
      as="ol"
      className="hidden lg:grid lg:grid-cols-4 lg:items-center lg:list-none"
    >
      {howItWorksStepsData.map((step, index) => (
        <StaggerItem
          key={step.number}
          as="li"
          variant="slideUp"
          className="py-16 px-10 group relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-[#8FCAAC]/0 via-[#86BDA0]/30 via-80% to-[#9DDEBD]/0" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-[#8FCAAC]/0 via-20% via-[#86BDA0]/30 to-[#9DDEBD]/0" />
          <div className="absolute inset-0 bg-linear-to-b from-[#DDE392]/0 from-5% via-[#DDE392]/20 via-50% to-[#DDE392]/0 to-95% opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div
            className="border-t-4 border-b-4 border-t-primary border-b-primary group-hover:border-t-[#DDE392] group-hover:border-b-[#DDE392] max-w-62 mx-auto text-center transition-colors duration-500 relative z-10"
            style={{
              paddingTop: `${paddingValues[index]}rem`,
              paddingBottom: `${paddingValues[index]}rem`,
            }}
          >
            <h2 className="border border-primary group-hover:border-[#DDE392] rounded-full p-4 size-14 mb-8 transition-colors duration-500 mx-auto">
              {step.number}
            </h2>
            <h3 className="font-urbanist font-medium text-2xl mb-2">
              {step.title}
            </h3>
            <p>{step.description}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
};

export default HowItWorksDesktop;