import HeroTitle from "@/components/ui/hero-title";
import { Animated } from "@/components/ui/animated";
import Form from "@/components/contactUs/Form";
import contactUsImg from "@/assets/svg/contact-us-image.svg";
import Highlight from "@/components/ui/highlight";

const Hero = () => {
  return (
    <section className="pt-22.5">
      <div className="container hero-space-block grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-0 xl:px-25.75!">
        <Animated variant="slideUp" type="animate">
          <div className="text-center lg:text-start mb-8">
            <HeroTitle className="lg:text-start font-semibold">
              Get in <Highlight>touch</Highlight> with us
            </HeroTitle>

            <p className="text-[#7C7C7C] text-sm max-sm:leading-5.5 md:text-base mt-2.5 max-w-121.25 mx-auto lg:mx-0">
              Need vetted engineering talent for DevOps, data, AI, or software
              development?
              <span className="block mt-2">
                Reach out to ElderOps. We connect U.S. companies with rigorously
                screened global engineers matched to their exact needs.
              </span>
            </p>
          </div>

          <img
            src={contactUsImg}
            alt="a corporate lady sitting in the workspace"
            className="w-full sm:max-w-118.5 mx-auto object-cover mt-8 lg:mx-0"
          />
        </Animated>

        <Animated variant="slideUp" type="animate" delay={0.2}>
          <Form variant="page" />
        </Animated>
      </div>
    </section>
  );
};

export default Hero;
