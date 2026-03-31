import SectionTitle from "@/components/ui/section-title";
import { Animated, Stagger, StaggerItem } from "@/components/ui/animated";
import LevelCard from "./LevelCard";
import {
  seniorityLevelsText,
  seniorityLevelsData,
} from "@/contents/screens/talents";

const SeniorityLevels = () => {
  return (
    <section className="container section-space-top md:pb-14">
      <Animated
        variant="slideUp"
        className="flex flex-col items-center justify-center mb-12 lg:mb-16"
      >
        <SectionTitle className="mb-2">
          {seniorityLevelsText.title}
        </SectionTitle>
        <p className="text-accent-one text-sm md:text-base">
          {seniorityLevelsText.description}
        </p>
      </Animated>

      <Stagger
        staggerDelay={0.15}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {seniorityLevelsData.map((level) => (
          <StaggerItem key={level.id} variant="slideUp">
            <LevelCard
              level={level.level}
              title={level.title}
              description={level.description}
              experience={level.experience}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default SeniorityLevels;
