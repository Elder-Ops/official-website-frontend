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
    <section className="relative container pt-22 pb-0 sm:pt-25 sm:pb-16">
      <Animated variant="slideUp" className="flex items-center justify-between">
        <div className="max-w-105 mx-auto text-center">
          <SectionTitle className="mb-2">{howWeDeliverText.title}</SectionTitle>
          <p className="text-accent-one">{howWeDeliverText.description}</p>
        </div>
        <img
          src={dotParticle}
          alt="Decorative pattern"
          aria-hidden="true"
          className="absolute right-0 hidden lg:block max-h-44.75"
        />
      </Animated>

      {/* Mobile: Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 md:hidden">
        {howWeDeliverData.map((item) => (
          <HowWeDeliverCard key={item.id} {...item} />
        ))}
      </div>

      {/* Desktop: Marquee */}
      <div
        className="relative overflow-hidden hidden md:block md:mt-16"
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
