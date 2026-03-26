import type { IndustriesCardProps } from "@/types";
import openIcon from "@/assets/svg/open-icon.svg";
import openIconMobile from "@/assets/svg/open-icon-mobile.svg";

const IndustriesCard = ({ number, title, onToggle }: IndustriesCardProps) => {
  return (
    <div
      onClick={onToggle}
      className="border border-[#E3E3E3] rounded-2xl px-6 pt-6 pb-10 h-full cursor-pointer"
    >
      <div className="flex items-center justify-between lg:justify-end">
        <p className="font-medium text-[#C9CF85] lg:hidden">{number}</p>
        <button
          type="button"
          aria-label="Open industry details"
          onClick={onToggle}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          <img
            src={openIcon}
            alt=""
            aria-hidden="true"
            className="hidden md:block"
          />
          <img
            src={openIconMobile}
            alt=""
            aria-hidden="true"
            className="md:hidden"
          />
        </button>
      </div>

      <div className="mt-6 lg:mt-7 lg:flex lg:gap-2.5">
        <p className="font-medium text-[#C9CF85] hidden lg:inline">{number}</p>
        <h3 className="font-urbanist text-[30px] text-accent-one leading-13.5 xl:text-[38px]">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default IndustriesCard;
