import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import { howItWorksText } from "@/contents/screens/home";
import maskedDots from "@/assets/svg/masked-dots.svg";
import HowItWorksMobile from "./HowItWorksMobile";
import HowItWorksDesktop from "./HowItWorksDesktop";

const HowItWorks = () => {
  return (
    <section className="relative bg-linear-to-br from-[#012714] to-[#01140A]">
      <img
        src={maskedDots}
        alt="Decorative background pattern"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      <div className="container section-space-block text-white overflow-hidden">
        <div className="relative z-10">
          <Animated
            variant="slideUp"
            className="max-w-135.5 mx-auto text-center mb-8"
          >
            <SectionTitle className="text-white mb-1">
              {howItWorksText.title}
            </SectionTitle>
            <p>{howItWorksText.subtext}</p>
          </Animated>

          <HowItWorksMobile />
          <HowItWorksDesktop />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
