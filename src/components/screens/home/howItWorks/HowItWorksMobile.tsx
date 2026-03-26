import { Stagger, StaggerItem } from "@/components/ui/animated";
import { howItWorksStepsData } from "@/contents/screens/home";

const HowItWorksMobile = () => {
  return (
    <Stagger
      staggerDelay={0.15}
      className="grid grid-cols-1  items-stretch list-none sm:grid-cols-2 lg:hidden"
      as="ol"
    >
      {howItWorksStepsData.map((step) => (
        <StaggerItem
          key={step.number}
          variant="slideUp"
          className="py-10 px-10 group relative overflow-hidden flex"
          as="li"
        >
          <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-[#8FCAAC]/0 via-[#86BDA0]/30 via-80% to-[#9DDEBD]/0" />

          <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-[#8FCAAC]/0 via-20% via-[#86BDA0]/30 to-[#9DDEBD]/0" />

          <div className="absolute inset-0 bg-linear-to-b from-[#DDE392]/0 from-5% via-[#DDE392]/20 via-50% to-[#DDE392]/0 to-95% opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="border-t-0 border-b-0 border-t-primary border-b-primary group-hover:border-t-[#DDE392] group-hover:border-b-[#DDE392] sm:max-w-62 mx-auto text-center transition-colors duration-500 relative z-10 py-0 flex-1 flex flex-col justify-center sm:border-t-4 sm:border-b-4 sm:py-9.5">
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

export default HowItWorksMobile;
