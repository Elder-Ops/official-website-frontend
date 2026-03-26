import Button from "../ui/button";
import ArrowRight from "@/assets/tsxSvg/arrow-right";
import SectionTitle from "../ui/section-title";
import type { CTACardProps } from "@/types";
import ctaBg from "@/assets/svg/card-bg.svg";
import { Animated } from "../ui/animated";

const CTACard = ({
  title,
  description,
  buttonText,
  buttonLink = "/",
  buttonVariant = "link",
  maxWidth = "max-w-[528px]",
}: CTACardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${ctaBg})` }}
      className="bg-cover bg-no-repeat rounded-[20px] overflow-hidden text-white px-4 py-20 sm:px-0"
    >
      <Animated
        variant="slideUp"
        className={`flex flex-col items-center justify-center ${maxWidth} mx-auto text-center`}
      >
        <SectionTitle className="text-white mb-2 text-2xl md:text-[46px]">
          {title}
        </SectionTitle>
        <p className="text-sm mb-7 sm:mb-10 md:text-base">{description}</p>
        <Button
          variant={buttonVariant}
          to={buttonLink}
          className="flex items-center gap-2"
        >
          {buttonText} <ArrowRight />
        </Button>
      </Animated>
    </div>
  );
};

export default CTACard;
