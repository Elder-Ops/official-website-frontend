import { Animated } from "@/components/ui/animated";

interface FeatureListItemProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureListItem = ({
  icon,
  title,
  description,
  delay = 0,
}: FeatureListItemProps) => {
  return (
    <Animated
      variant="slideRight"
      delay={delay}
      as="li"
      className="flex items-center gap-4"
    >
      <div
        className="bg-bg-cream border border-[#EFF2CD] p-2 size-18 rounded-xl flex items-center justify-center shrink-0 lg:p-4.5"
        aria-hidden="true"
      >
        <img src={icon} alt="" />
      </div>

      <div>
        <p className="font-medium font-urbanist text-primary text-base md:text-xl">
          {title}
        </p>
        <p className="text-accent-three text-sm md:text-base">{description}</p>
      </div>
    </Animated>
  );
};

export default FeatureListItem;
