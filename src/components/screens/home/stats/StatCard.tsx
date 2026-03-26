import { motion } from "framer-motion";
import { Animated } from "@/components/ui/animated";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import type { StatCardProps } from "@/types";

const StatCard = ({ stat, index, isLast }: StatCardProps) => {
  const { ref, rounded } = useCountAnimation(stat.value, index * 0.1);

  return (
    <Animated
      as="article"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      variant="slideUp"
      delay={index * 0.1}
      className={`px-6 py-3.75 text-center border-[#EDEEDA] lg:border-r ${isLast && "lg:border-r-0"} ${index % 2 === 0 ? "max-lg:border-r" : ""} ${index < 2 ? "max-lg:border-b" : ""}`}
    >
      <h3 className="text-[38px] font-medium font-urbanist leading-13.5 mb-2 md:text-[46px]">
        <motion.span>{rounded}</motion.span>
      </h3>
      <p className="text-[#7A7A7A] font-medium text-sm md:text-base">
        {stat.label}
      </p>
    </Animated>
  );
};

export default StatCard;
