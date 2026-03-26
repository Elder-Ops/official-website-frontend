import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Animated, Stagger, StaggerItem } from "@/components/ui/animated";
import maskedDots from "@/assets/svg/service-category-bg.svg";
import {
  serviceCategoriesData,
  serviceCategoriesText,
} from "@/contents/screens/solutions";
import SectionTitle from "@/components/ui/section-title";
import ScrollCard from "./ScrollCard";
import SimpleServiceCard from "./SimpleServiceCard";

const ServiceCategories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="relative w-full bg-linear-b from-[#012714] to-[#01140A] bg-cover"
      style={{ backgroundImage: `url(${maskedDots})` }}
    >
      {/* Desktop: Scroll-driven card area*/}
      <div
        ref={sectionRef}
        className="relative hidden container section-space-block md:block"
        style={{ height: `${serviceCategoriesData.length * 100}vh` }}
      >
        <div className="sticky top-0 h-dvh flex flex-col justify-center">
          <Animated variant="slideUp" className="mb-20 mx-auto">
            <SectionTitle className="text-white text-center">
              {serviceCategoriesText.title}
            </SectionTitle>
          </Animated>

          <div className="relative w-full max-w-280 h-110 mx-auto">
            {serviceCategoriesData.map((card, i) => (
              <ScrollCard
                key={i}
                card={card}
                index={i}
                total={serviceCategoriesData.length}
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
