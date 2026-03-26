import heroBg from "@/assets/svg/talent-hero-bg.svg";
import HeroTitle from "@/components/ui/hero-title";
import { Animated } from "@/components/ui/animated";
import Highlight from "@/components/ui/highlight";
import heroImg from "@/assets/svg/talent-hero-image.svg";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-22.5"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container hero-space-block">
        <Animated variant="slideUp" type="animate" className="text-center">
          <HeroTitle className="lg:max-w-167 mx-auto">
            Thoroughly Vetted{" "}
            <span className="lg:block">
              <Highlight>Global Engineering </Highlight>Talent
            </span>
          </HeroTitle>

          <p className="text-[#7C7C7C] text-sm  mt-2 sm:mt-4 lg:max-w-119.5 mx-auto max-sm:leading-5.5 sm:text-base">
            Senior-level expertise in DevOps, Data, and AI. We provide elite
            engineers who integrate seamlessly into enterprise environments.
          </p>
        </Animated>
        <Animated
          variant="scale"
          className="size-full max-h-139 overflow-hidden rounded-2xl mt-10"
        >
          <img
            src={heroImg}
            alt="hiring specialist interviewing a candidate"
            className="size-full object-cover"
          />
        </Animated>
      </div>
    </section>
  );
};

export default Hero;
