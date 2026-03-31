import type { ExpandableCardProps } from "@/types";

const ExpandableCard = ({
  image,
  title,
  description,
  isActive,
  onClick,
}: ExpandableCardProps) => {
  return (
    <div
      className={`relative rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden h-144.5 bg-cover bg-center ${
        isActive ? "w-202" : "w-62.25"
      }`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-linear-to-b from-[#01190C80] to-[#01190CCC]"></div>

      <div
        className={`relative z-10 h-full flex flex-col p-6  ${
          isActive
            ? "justify-end text-white"
            : "justify-center items-center text-[#8BA396]"
        }`}
      >
        <h3
          className="text-[30px] font-medium font-urbanist transition-all duration-300"
          style={{
            writingMode: isActive ? "horizontal-tb" : "vertical-rl",
            transform: isActive ? "rotate(0deg)" : "rotate(180deg)",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm mt-1 transition-all duration-300"
          style={{
            writingMode: isActive ? "horizontal-tb" : "vertical-rl",
            transform: isActive ? "rotate(0deg)" : "rotate(180deg)",
            opacity: isActive ? 1 : 0,
            maxHeight: isActive ? "200px" : "0",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExpandableCard;
