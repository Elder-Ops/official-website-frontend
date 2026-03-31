import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

export const useCountAnimation = (value: string, delay: number = 0) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const decimalPlaces = value.split(".")[1]?.match(/\d+/)?.[0].length || 0;

  const rounded = useTransform(count, (latest) => {
    const suffix = value.replace(/[0-9.]/g, "");
    return latest.toFixed(decimalPlaces) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        delay,
      });
      return controls.stop;
    }
  }, [isInView, count, numericValue, delay]);

  return { ref, rounded };
};
