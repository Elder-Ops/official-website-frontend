import heroImg from "@/assets/svg/globe-sketch.svg";
import HeroTitle from "@/components/ui/hero-title";
import { Animated } from "@/components/ui/animated";
import Highlight from "@/components/ui/highlight";

const Hero = () => {
  return (
    <section
      className="relative h-dvh bg-cover bg-center bg-no-repeat pt-22.5"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="container">
        <Animated
          variant="slideUp"
          type="animate"
          className="section-space-top lg:max-w-167 mx-auto text-center"
        >
          <HeroTitle>
            Built for Enterprise Engineering
            <Highlight> Accountability</Highlight>
          </HeroTitle>

          <p className="text-[#7C7C7C] text-sm mt-2 sm:mt-4 mx-auto lg:max-w-118 max-sm:leading-5.5 sm:text-base">
            Bridging the gap between rigid consulting and unmanaged staffing
            with a structured approach to high-performance engineering.
          </p>
        </Animated>
      </div>
    </section>
  );
};

export default Hero;
