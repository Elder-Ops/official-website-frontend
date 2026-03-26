import { cn } from "@/lib/util";

interface HeroTitleProps {
  children: React.ReactNode;
  className?: string;
}

const HeroTitle = ({ children, className }: HeroTitleProps) => {
  return (
    <h1
      className={cn(
        "text-primary text-[38px] leading-11.5 font-urbanist font-medium text-center md:text-[56px] md:leading-16",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default HeroTitle;
