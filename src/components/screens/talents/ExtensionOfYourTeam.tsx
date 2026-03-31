import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import talentImg from "@/assets/svg/talent-image.svg";
import { extensionOfYourTeamText } from "@/contents/screens/talents";

const ExtensionOfYourTeam = () => {
  return (
    <section className="container section-space-top md:pb-14">
      <Animated variant="slideUp" className="max-w-183.5 mx-auto text-center">
        <SectionTitle>{extensionOfYourTeamText.title}</SectionTitle>
      </Animated>

      <Animated
        variant="scale"
        delay={0.2}
        className="h-70 rounded-2xl sm:min-h-180.5 sm:max-h-180.5 sm:max-w-320.75 mx-auto  mt-12 md:mt-16 overflow-hidden"
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
