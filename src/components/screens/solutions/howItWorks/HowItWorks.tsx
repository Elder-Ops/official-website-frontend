import dotParticle from "@/assets/svg/matching-approach-dot.svg";
import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import connectingLineTop from "@/assets/svg/connecting-line-top.svg";
import connectingLineBottom from "@/assets/svg/connecting-line-bottom.svg";
import { howItWorksData, howItWorksText } from "@/contents/screens/solutions";
import MatchingApproachCard from "./MatchingApproachCard";

const HowItWorks = () => {
  return (
    <section className="relative container section-space-top">
      <img
        src={dotParticle}
        alt="Decorative pattern"
        aria-hidden="true"
        className="absolute right-0 top-0"
      />

      <div className="z-10 pb-0 lg:pb-20">
        <Animated variant="slideUp" className="mb-8">
          <SectionTitle>{howItWorksText.title}</SectionTitle>
        </Animated>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Line connecting card 2 to card 3 (top) */}
          <img
            src={connectingLineTop}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: "calc(25% + (25% - 166.5px))",
              width: "333px",
              maxWidth: "calc(50% - 6rem)",
              top: "-10%",
            }}
          />

          {/* Line connecting card 1 to card 2 (bottom) */}
          <img
            src={connectingLineBottom}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: "calc(0% + (25% - 166.5px))",
              width: "333px",
              maxWidth: "calc(50% - 6rem)",
              bottom: "-13%",
            }}
          />

          {/* Line connecting card 3 to card 4 (bottom) */}
          <img
            src={connectingLineBottom}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none hidden lg:block"
            style={{
              left: "calc(50% + (25% - 166.5px))",
              width: "333px",
              maxWidth: "calc(50% - 6rem)",
              bottom: "-13%",
            }}
          />

          {howItWorksData.map((step, index) => (
            <Animated key={step.id} variant="slideUp" delay={index * 0.1}>
              <MatchingApproachCard
                step={step.step}
                title={step.title}
                description={step.description}
              />
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
