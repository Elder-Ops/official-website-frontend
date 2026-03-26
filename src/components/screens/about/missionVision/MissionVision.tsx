import MissionVisionCard from "./MissionVisionCard";
import { Animated } from "@/components/ui/animated";
import { aboutUsData } from "@/contents/screens/about";

const MissionVision = () => {
  return (
    <section className="container section-space-block grid grid-cols-1 gap-12 overflow-x-hidden lg:gap-20 lg:grid-cols-2">
      <Animated variant="slideRight">
        <MissionVisionCard
          variant={aboutUsData[0].variant}
          badge={aboutUsData[0].badge}
          title={aboutUsData[0].title}
          description={aboutUsData[0].description}
          points={aboutUsData[0].points}
        />
      </Animated>

      <Animated variant="slideLeft" delay={0.2}>
        <MissionVisionCard
          variant={aboutUsData[1].variant}
          badge={aboutUsData[1].badge}
          title={aboutUsData[1].title}
          description={aboutUsData[1].description}
        />
      </Animated>
    </section>
  );
};

export default MissionVision;
