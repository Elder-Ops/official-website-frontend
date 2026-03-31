// import globeDotWithSketchBg from "@/assets/svg/globe-sketch-with-dots.svg";
// import dotsBg from "@/assets/svg/talent-hero-bg.svg";
import HeroTitle from "@/components/ui/hero-title";
import { Animated } from "@/components/ui/animated";
import Highlight from "@/components/ui/highlight";
import globeSketch from "@/assets/svg/globe-sketch-two.svg";

const Hero = () => {
  return (
    <section
      className={`relative h-dvh bg-[url('/src/assets/svg/globe-sketch-with-dots.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('/src/assets/svg/talent-hero-bg.svg')] pt-22.5 overflow-hidden`}
    >
      <div
        style={{ backgroundImage: `url(${globeSketch})` }}
        className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[calc(100dvh-350px)] object-contain bg-no-repeat bg-cover"
      ></div>
      {/* <img
        src={globeSketch}
        alt=""
        aria-hidden
        
      /> */}

      <div className="container">
        <Animated
          variant="slideUp"
          type="animate"
          className="pt-10 md:pt-18 lg:max-w-167 mx-auto text-center"
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
