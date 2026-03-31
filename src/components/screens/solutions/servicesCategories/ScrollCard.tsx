import type { serviceCategoriesData } from "@/contents/screens/solutions";
import { motion, useTransform, type MotionValue } from "framer-motion";
import ServiceCard from "./ServiceCard";

// Use window.innerHeight for entry offset so card comes from below the viewport
const CARD_ENTRY_OFFSET =
  typeof window !== "undefined" ? window.innerHeight : 800;
const CARD_EXIT_SCALE = 0.9;
const CARD_EXIT_MID_SCALE = 0.982;

const ScrollCard = ({
  card,
  index,
  total,
  activeCardIndex,
  scrollYProgress,
}: {
  card: (typeof serviceCategoriesData)[0];
  index: number;
  total: number;
  activeCardIndex: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const segmentSize = 1 / total;
  const overlapSize = segmentSize * 0.46;
  const cardStart = index * segmentSize;
  const enterStart = Math.max(0, cardStart - overlapSize);
  const enterMid = Math.min(1, cardStart + segmentSize * 0.08);
  const enterEnd = Math.min(1, cardStart + segmentSize * 0.3);
  const nextCardStart = (index + 1) * segmentSize;
  const exitStart = Math.max(0, nextCardStart - overlapSize);
  const exitEnd = Math.min(1, nextCardStart + segmentSize * 0.18);
  const exitMid = exitStart + (exitEnd - exitStart) * 0.55;

  const y = useTransform(
    scrollYProgress,
    index === 0
      ? [0, exitStart, exitEnd, 1]
      : [0, enterStart, enterMid, enterEnd, 1],
    index === 0
      ? [0, 0, 0, 0]
      : [CARD_ENTRY_OFFSET, CARD_ENTRY_OFFSET, 76, 0, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    index < total - 1
      ? [0, enterEnd, exitStart, exitMid, exitEnd, 1]
      : [0, enterEnd, 1],
    index < total - 1
      ? [1, 1, 1, CARD_EXIT_MID_SCALE, CARD_EXIT_SCALE, CARD_EXIT_SCALE]
      : [1, 1, 1],
  );

  const isVisiblePair =
    index === activeCardIndex || index === activeCardIndex - 1;

  return (
    <motion.div
      className="absolute h-[80%] 2xl:h-[60%] inset-0 overflow-hidden flex flex-col lg:flex-row origin-top will-change-transform"
      style={{
        zIndex: index + 1,
        y,
        scale,
        opacity: isVisiblePair ? 1 : 0,
        visibility: isVisiblePair ? "visible" : "hidden",
      }}
    >
      <ServiceCard title={card.title} list={card.list} image={card.image} />
    </motion.div>
  );
};

export default ScrollCard;
