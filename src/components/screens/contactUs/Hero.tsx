import HeroTitle from "@/components/ui/hero-title";
import { Animated } from "@/components/ui/animated";
import Form from "@/components/contactUs/Form";
import contactUsImg from "@/assets/svg/contact-us-image.svg";

const Hero = () => {
  return (
    <section className="pt-22.5">
      <div className="container hero-space-block grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-0 xl:px-25.75!">
        <Animated variant="slideUp" type="animate">
          <div className="text-center lg:text-start mb-8">
            <HeroTitle className="lg:text-start font-semibold">
              Get in touch with us
            </HeroTitle>

            <p className="text-[#7C7C7C] text-sm max-sm:leading-5.5 md:text-base mt-2.5 max-w-121.25 mx-auto lg:mx-0">
              Looking for niche experts in quantum computing, advanced
              cryptography, or specialized AI models? Reach out - our team can
              connect you with top talent.
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
