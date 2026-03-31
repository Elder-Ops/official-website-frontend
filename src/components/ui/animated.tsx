/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type AnimationVariant =
  | "fadeIn"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scale";
type AnimationType = "animate" | "whileInView";

interface AnimatedProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "transition"
> {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  type?: AnimationType;
  as?: "div" | "li" | "article";
}

const variants = {
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  slideUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  slideDown: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  slideLeft: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
};

export const Animated = ({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.8,
  type = "whileInView",
  as = "div",
  ...props
}: AnimatedProps) => {
  const { initial, animate } = variants[variant];
  const animationProps =
    type === "animate"
      ? { animate }
      : { whileInView: animate, viewport: { once: true, margin: "-100px" } };

  const Component = motion[as] as any;

  return (
    <Component
      initial={initial}
      {...animationProps}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </Component>
  );
};

// Stagger container for animating lists
interface StaggerProps extends Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "transition"
> {
  children: ReactNode;
  staggerDelay?: number;
  as?: "div" | "ul" | "ol";
}

export const Stagger = ({
  children,
  staggerDelay = 0.1,
  as = "div",
  ...props
}: StaggerProps) => {
  const Component = motion[as] as any;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

interface StaggerItemProps extends Omit<AnimatedProps, "delay" | "type"> {
  as?: "div" | "li" | "article";
}

export const StaggerItem = ({
  children,
  variant = "slideUp",
  duration = 0.8,
  as = "div",
  ...props
}: StaggerItemProps) => {
  const { initial, animate } = variants[variant];
  const Component = motion[as] as any;

  return (
    <Component
      variants={{
        hidden: initial,
        visible: { ...animate, transition: { duration } },
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
