import type { statsData } from "@/contents/screens/home";
import type { MotionValue } from "framer-motion";

export type NavbarProps = {
  isHomePage?: boolean;
  className?: string;
  isFooter?: boolean;
};

export type NavLinks = {
  label: string;
  path: string;
};

export type ExpandableCardProps = {
  image: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
};

export type TeamStrengthCardProps = {
  icon: string;
  title: string;
  description: string;
};

export type CTACardProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  buttonVariant?: "link" | "button" | "glass-link" | "glass-button";
  maxWidth?: string;
};

export type ApproachDetailCardProps = {
  title: string;
  description: string;
  points: string[];
};

export type ServiceCardProps = {
  title: string;
  list: string[];
  image: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  targetScale: number;
};

export type HowWeDeliverCardProps = {
  image: string;
  title: string;
  description: string;
};

export type IndustriesCardProps = {
  number: string;
  title: string;
  onToggle: () => void;
};

export type StatCardProps = {
  stat: (typeof statsData)[0];
  index: number;
  isLast: boolean;
};
