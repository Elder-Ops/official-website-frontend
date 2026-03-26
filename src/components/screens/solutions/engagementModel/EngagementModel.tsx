import SectionTitle from "@/components/ui/section-title";
import { Animated, Stagger, StaggerItem } from "@/components/ui/animated";
import dotParticle from "@/assets/svg/engagement-model-dots.svg";
import {
  engagementModelsData,
  engagementModelsText,
} from "@/contents/screens/solutions";
import EngagementModelCard from "./EngagementModelCard";

const EngagementModel = () => {
  return (
    <section className="relative container section-space-top">
      <img
        src={dotParticle}
        alt="Decorative pattern"
        className="absolute right-16 top-0 hidden lg:block"
        aria-hidden="true"
      />

      <div className="z-10">
        <Animated
          variant="slideUp"
          className="text-center mb-10 sm:mb-25 max-w-183.5 mx-auto"
        >
          <SectionTitle className="mb-2.5">
            {engagementModelsText.title}
          </SectionTitle>
          <p className="text-accent-one">{engagementModelsText.description}</p>
        </Animated>

        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-16 ">
          {engagementModelsData.map((model) => (
            <StaggerItem key={model.id} variant="slideUp">
              <EngagementModelCard
                title={model.title}
                description={model.description}
                bestFor={model.bestFor}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <Animated
          variant="fadeIn"
          delay={0.6}
          className="text-xs text-[#557866] mt-10 text-center uppercase"
        >
          {engagementModelsText.footerText}
        </Animated>
      </div>
    </section>
  );
};

export default EngagementModel;
