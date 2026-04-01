import Button from "@/components/ui/button";
import HeroTitle from "@/components/ui/hero-title";
import LogoMarquee from "@/components/ui/logo-marquee";
import { Animated } from "@/components/ui/animated";
import heroImg from "@/assets/svg/talent-hero-bg.svg";
import featureVideo from "@/assets/video/globe-video.mp4";
import Highlight from "@/components/ui/highlight";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-22.5"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="container hero-space-block">
        <div className="grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2 xl:gap-27 xl:px-16">
          <Animated
            variant="slideUp"
            type="animate"
            className="text-center lg:max-w-138 lg:py-6"
          >
            <HeroTitle className="lg:text-start">
              Engineering and data solutions from{" "}
              <Highlight className="lg:block">Global Talent</Highlight>
            </HeroTitle>
            <p className="text-[#7C7C7C] mt-3 sm:mt-4 lg:text-start">
              ElderOps helps Global teams move faster across DevOps, data,
              analytics, and software engineering without sacrificing quality.
              We build the team, your client interviews confirm the fit, and we
              help you deliver measurable outcomes.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                variant="glass-link"
                to="/contact-us"
                className="w-69.5 sm:w-fit"
              >
                Get in Touch
              </Button>

              <Button
                variant="link"
                to="/talent"
                className="border-2 border-primary text-primary font-bold transition-transform duration-200 hover:-translate-y-1  w-69.5 sm:w-fit"
              >
                Explore Talent
              </Button>
            </div>
          </Animated>

          <Animated
            variant="scale"
            className="rounded-[14px] h-70 overflow-hidden lg:max-w-130.75 lg:h-103.5 lg:max-h-103.5"
          >
            <video
              src={featureVideo}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="size-full object-cover"
            />
          </Animated>
        </div>

        <div className="mt-8 xl:px-16">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
};

export default Hero;
