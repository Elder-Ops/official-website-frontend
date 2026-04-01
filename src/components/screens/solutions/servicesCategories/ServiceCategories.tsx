import { useMotionValueEvent, useScroll } from "framer-motion";
import { Animated, Stagger, StaggerItem } from "@/components/ui/animated";
import maskedDots from "@/assets/svg/service-category-bg.svg";
import {
  serviceCategoriesData,
  serviceCategoriesText,
} from "@/contents/screens/solutions";
import SectionTitle from "@/components/ui/section-title";
import ScrollCard from "./ScrollCard";
import SimpleServiceCard from "./SimpleServiceCard";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useGlobalStore } from "@/store/useGlobalStore";

const ServiceCategories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionContainerRef = useRef<HTMLElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const isInView = useInView(sectionContainerRef, {
    margin: "-20% 0px -20% 0px",
  });
  const setNavbarRevealBlocked = useGlobalStore(
    (state) => state.setNavbarRevealBlocked,
  );

  useEffect(() => {
    setNavbarRevealBlocked(isInView);

    return () => {
      setNavbarRevealBlocked(false);
    };
  }, [isInView, setNavbarRevealBlocked]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const segmentSize = 1 / serviceCategoriesData.length;
    // Reveal the incoming card earlier so its rise from the bottom is visible.
    const overlapLead = segmentSize * 0.25;
    const nextIndex = Math.floor((latest + overlapLead) / segmentSize);

    setActiveCardIndex(
      Math.min(serviceCategoriesData.length - 1, Math.max(0, nextIndex)),
    );
  });

  return (
    <section
      ref={sectionContainerRef}
      className="relative w-full h-auto bg-cover md:bg-fixed"
      style={{ backgroundImage: `url(${maskedDots})` }}
    >
      {/* Desktop: Scroll-driven card area*/}
      <div
        ref={sectionRef}
        className="relative hidden container py-22 md:pt-25 md:pb-16 md:block"
        style={{ height: `${serviceCategoriesData.length * 115}vh` }}
      >
        <div className="sticky top-18 2xl:top-60 h-dvh flex flex-col justify-center items-center">
          <Animated variant="slideUp" className="md:mb-16 mx-auto">
            <SectionTitle className="text-white text-center">
              {serviceCategoriesText.title}
            </SectionTitle>
          </Animated>

          <div className="relative w-full max-w-280 h-full mx-auto overflow-hidden">
            {serviceCategoriesData.map((card, i) => (
              <ScrollCard
                key={i}
                card={card}
                index={i}
                total={serviceCategoriesData.length}
                activeCardIndex={activeCardIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: simple stacked cards */}
      <div className="container section-space-block md:hidden">
        <Animated variant="slideUp" className="mb-10">
          <div className="max-w-5xl mx-auto text-center">
            <SectionTitle className="text-white">
              {serviceCategoriesText.title}
            </SectionTitle>
          </div>
        </Animated>

        <Stagger className="space-y-8">
          {serviceCategoriesData.map((service) => (
            <StaggerItem key={service.id} variant="slideUp">
              <SimpleServiceCard {...service} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default ServiceCategories;
