import SectionTitle from "@/components/ui/section-title";
import { Animated } from "@/components/ui/animated";
import dotParticle from "@/assets/svg/dots.svg";
import dotParticleTwo from "@/assets/svg/what-we-do-dots.svg";
import line from "@/assets/svg/line.svg";
import { servicesData, servicesText } from "@/contents/screens/home";
import corporateMan from "@/assets/jpg/featured-one.jpg";
import featureImage from "@/assets/svg/feature-image.svg";

const Services = () => {
  return (
    <section className="container section-space-top relative">
      <img
        src={dotParticle}
        alt="Decorative dots pattern"
        className="hidden sm:block sm:absolute top-0 sm:right-8 md:right-16"
        aria-hidden="true"
      />

      <img
        src={dotParticleTwo}
        alt="Decorative dots pattern"
        className="hidden sm:top-9.25 sm:block sm:absolute sm:left-8 md:left-16"
        aria-hidden="true"
      />

      <Animated
        variant="slideUp"
        className="max-w-160.5 mx-auto text-center mb-25"
      >
        <SectionTitle className="mb-2">{servicesText.title}</SectionTitle>
        <p className="text-accent-one leading-5.5 text-sm md:text-base md:leading-6">
          {servicesText.subtext}
        </p>
      </Animated>

      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        <Animated
          variant="slideRight"
          delay={0.1}
          className="relative flex flex-col items-center text-center sm:items-start sm:text-left lg:self-auto"
        >
          <img
            src={dotParticle}
            alt="Decorative dots pattern"
            className="absolute top-0 right-4 sm:hidden"
            aria-hidden="true"
          />

          <img
            src={dotParticle}
            alt="Decorative dots pattern"
            className="hidden sm:block sm:absolute sm:-bottom-20.75 sm:left-32.5"
            aria-hidden="true"
          />

          <h2 className="border-2 border-[#8BA396] size-14 rounded-full font-medium text-2xl text-primary flex items-center justify-center">
            {servicesData[0].number}
          </h2>

          <img
            src={line}
            alt=""
            className="my-8 w-full sm:w-auto"
            role="presentation"
          />

          <SectionTitle className="mb-2 md:text-2xl! md:leading-8! lg:max-w-68 lg:text-3xl! lg:leading-9.5!">
            {servicesData[0].title}
          </SectionTitle>
          <p className="text-accent-two">{servicesData[0].description}</p>
        </Animated>

        <div className="hidden max-h-89 rounded-[14px] overflow-hidden sm:block md:max-w-81.25 ">
          <img
            src={corporateMan}
            alt="Professional business person in office environment"
            className="size-full object-cover"
          />
        </div>

        <Animated
          variant="slideLeft"
          delay={0.3}
          className="flex flex-col items-center text-center sm:items-start sm:text-left lg:self-end"
        >
          <h2 className="border-2 border-[#8BA396] size-14 rounded-full font-medium text-2xl text-primary flex items-center justify-center">
            {servicesData[1].number}
          </h2>

          <img
            src={line}
            alt=""
            className="my-8 w-full sm:w-auto"
            role="presentation"
          />

          <SectionTitle className="mb-2 md:text-2xl! md:leading-8! lg:max-w-68 lg:text-3xl! lg:leading-9.5!">
            {servicesData[1].title}
          </SectionTitle>
          <p className="text-accent-two">{servicesData[1].description}</p>
        </Animated>

        <Animated
          variant="slideUp"
          className="flex flex-col items-center text-center sm:items-start sm:text-left"
        >
          <h2 className="border-2 border-[#8BA396] size-14 rounded-full font-medium text-2xl text-primary flex items-center justify-center">
            {servicesData[2].number}
          </h2>
          <img
            src={line}
            alt=""
            className="my-8 w-full sm:w-auto"
            role="presentation"
          />

          <SectionTitle className="mb-2 md:text-2xl! md:leading-8! lg:max-w-97.5 lg:text-3xl! lg:leading-9.5!">
            {servicesData[2].title}
          </SectionTitle>
          <p className="text-accent-two">{servicesData[2].description}</p>
        </Animated>

        <Animated
          variant="scale"
          delay={0.1}
          className="sm:col-span-2 lg:col-span-2 max-lg:hidden"
        >
          <img
            src={featureImage}
            alt="tech experts sitting in the office"
            className="size-full object-cover rounded-2xl"
          />
        </Animated>
      </div>
    </section>
  );
};

export default Services;
