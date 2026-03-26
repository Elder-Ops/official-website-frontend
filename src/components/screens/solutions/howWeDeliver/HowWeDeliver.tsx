import dotParticle from "@/assets/svg/how-we-deliver-dots.svg";
import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import {
  howWeDeliverData,
  howWeDeliverText,
} from "@/contents/screens/solutions";
import HowWeDeliverCard from "./HowWeDeliverCard";

const HowWeDeliver = () => {
  return (
    <section className="relative container section-space-top">
      <Animated variant="slideUp" className="flex items-center justify-between">
        <div className="max-w-105 mx-auto mb-2.5 text-center lg:text-start lg:mx-0">
          <SectionTitle>{howWeDeliverText.title}</SectionTitle>
          <p className="text-accent-one">{howWeDeliverText.description}</p>
        </div>
        <img
          src={dotParticle}
          alt="Decorative pattern"
          aria-hidden="true"
          className="hidden lg:block"
        />
      </Animated>

      {/* Mobile: Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 md:hidden">
        {howWeDeliverData.map((item) => (
          <HowWeDeliverCard key={item.id} {...item} />
        ))}
      </div>

      {/* Desktop: Marquee */}
      <div
        className="relative overflow-hidden mt-16 hidden md:block"
        role="region"
        aria-label="Value drivers"
      >
        <div className="flex animate-marquee">
          <div className="flex gap-6 shrink-0">
            {howWeDeliverData.map((item) => (
              <HowWeDeliverCard key={item.id} {...item} />
            ))}
          </div>
          <div className="ml-6 flex gap-6 shrink-0">
            {howWeDeliverData.map((item) => (
              <HowWeDeliverCard key={item.id + "dup"} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;
