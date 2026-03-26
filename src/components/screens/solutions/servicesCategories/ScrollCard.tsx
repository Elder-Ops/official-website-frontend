import type { serviceCategoriesData } from "@/contents/screens/solutions";
import { motion, useTransform } from "framer-motion";
import ServiceCard from "./ServiceCard";

const ScrollCard = ({
  card,
  index,
  total,
  scrollYProgress,
}: {
  card: (typeof serviceCategoriesData)[0];
  index: number;
  total: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollYProgress: any;
}) => {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = start + segmentSize;
  const y = useTransform(
    scrollYProgress,
    [start, end],
    index === 0 ? [0, 0] : [800, 0],
  );
  const nextStart = (index + 1) * segmentSize;
  const nextEnd = nextStart + segmentSize;
  const scale = useTransform(
    scrollYProgress,
    index < total - 1 ? [nextStart, nextEnd] : [0, 1],
    index < total - 1 ? [1, 0.93] : [1, 1],
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    index < total - 1 ? [nextStart, nextEnd] : [0, 1],
    index < total - 1 ? [1, 0.6] : [1, 1],
  );

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden flex flex-col lg:flex-row origin-top"
      style={{
        zIndex: index + 1,
        y,
        scale,
        opacity: cardOpacity,
      }}
    >
      <ServiceCard title={card.title} list={card.list} image={card.image} />
    </motion.div>
  );
};

export default ScrollCard;
