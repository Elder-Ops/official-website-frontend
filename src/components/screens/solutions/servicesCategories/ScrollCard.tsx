import type { serviceCategoriesData } from "@/contents/screens/solutions";
import { motion, useTransform, type MotionValue } from "framer-motion";
import ServiceCard from "./ServiceCard";

// Use window.innerHeight for entry offset so card comes from below the viewport
const CARD_ENTRY_OFFSET =
  typeof window !== "undefined" ? window.innerHeight : 800;
const CARD_EXIT_SCALE = 0.95;

const ScrollCard = ({
  card,
  index,
  total,
  scrollYProgress,
}: {
  card: (typeof serviceCategoriesData)[0];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const segmentSize = 1 / total;
  const cardStart = index * segmentSize;
  const enterStart = Math.max(0, cardStart - segmentSize * 0.4);
  const enterEnd = Math.min(1, cardStart + segmentSize * 0.6);
  const nextCardStart = (index + 1) * segmentSize;
  const exitEnd = Math.min(1, nextCardStart + segmentSize * 0.4);

  const y = useTransform(
    scrollYProgress,
    index === 0
      ? [0, 1]
      : [0, enterStart, enterEnd, 1],
    index === 0
      ? [0, 0]
      : [CARD_ENTRY_OFFSET, CARD_ENTRY_OFFSET, 0, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    index < total - 1
      ? [0, enterEnd, nextCardStart, exitEnd, 1]
      : [0, 1],
    index < total - 1
      ? [1, 1, 1, CARD_EXIT_SCALE, CARD_EXIT_SCALE]
      : [1, 1],
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center origin-center outline-none"
      style={{
        zIndex: index + 1,
        y,
        scale,
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      <ServiceCard title={card.title} list={card.list} image={card.image} />
    </motion.div>
  );
};

export default ScrollCard;
