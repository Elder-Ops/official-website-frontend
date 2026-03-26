import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import talentImg from "@/assets/svg/talent-image.svg";
import { extensionOfYourTeamText } from "@/contents/screens/talents";

const ExtensionOfYourTeam = () => {
  return (
    <section className="container section-space-top">
      <Animated variant="slideUp" className="max-w-183.5 mx-auto text-center">
        <SectionTitle>{extensionOfYourTeamText.title}</SectionTitle>
      </Animated>

      <Animated
        variant="scale"
        delay={0.2}
        className="max-h-180.5 max-w-320.75 mx-auto rounded-2xl mt-6 md:mt-20"
      >
        <img
          src={talentImg}
          alt="Team collaboration illustration"
          className="size-full object-cover"
        />
      </Animated>
    </section>
  );
};

export default ExtensionOfYourTeam;
