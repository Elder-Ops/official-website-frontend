import type { serviceCategoriesData } from "@/contents/screens/solutions";
import { motion, useTransform, type MotionValue } from "framer-motion";
import ServiceCard from "./ServiceCard";

const CARD_ENTRY_OFFSET = 172;
const CARD_EXIT_SCALE = 0.965;
const CARD_EXIT_MID_SCALE = 0.982;
const CARD_EXIT_OPACITY = 0.91;

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

  const cardOpacity = useTransform(
    scrollYProgress,
    index < total - 1
      ? [0, enterStart, enterMid, enterEnd, exitStart, exitEnd, 1]
      : [0, enterStart, enterMid, enterEnd, 1],
    index < total - 1
      ? [
          index === 0 ? 1 : 0,
          index === 0 ? 1 : 0,
          index === 0 ? 1 : 0.42,
          1,
          1,
          CARD_EXIT_OPACITY,
          CARD_EXIT_OPACITY,
        ]
      : [index === 0 ? 1 : 0, index === 0 ? 1 : 0, index === 0 ? 1 : 0.42, 1, 1],
  );

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden flex flex-col lg:flex-row origin-top will-change-transform"
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
