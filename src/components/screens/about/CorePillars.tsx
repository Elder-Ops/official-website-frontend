import SectionTitle from "@/components/ui/section-title";
import FeatureListItem from "@/components/ui/feature-list-item";
import { Animated } from "@/components/ui/animated";
import corePillarImg from "@/assets/svg/core-pillars-feature-img.svg";
import check from "@/assets/svg/check.svg";
import { corePillarsText, corePillarsData } from "@/contents/screens/about";

const CorePillars = () => {
  return (
    <section className="container section-space-top overflow-x-hidden">
      <Animated
        variant="slideUp"
        className="max-w-161 mb-16 mx-auto text-center md:mx-0 md:text-start"
      >
        <SectionTitle className="mb-2.5">{corePillarsText.title}</SectionTitle>
        <p className="text-accent-one">{corePillarsText.description}</p>
      </Animated>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
        <ul className="space-y-10 list-none lg:max-w-127.5">
          {corePillarsData.map((pillar, index) => (
            <FeatureListItem
              key={pillar.id}
              icon={check}
              title={pillar.title}
              description={pillar.description}
              delay={index * 0.1}
            />
          ))}
        </ul>

        <Animated
          variant="slideLeft"
          delay={0.3}
          className="md:h-98 rounded-2xl overflow-hidden"
        >
          <img src={corePillarImg} alt="" className="size-full object-cover" />
        </Animated>
      </div>
    </section>
  );
};

export default CorePillars;
