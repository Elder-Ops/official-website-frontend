import { cn } from "@/lib/util";
import type { ReactNode } from "react";

type SectionTitleProps = {
  className?: string;
  children: ReactNode;
};

const SectionTitle = ({ className, children }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "text-[30px] font-medium font-urbanist leading-9.5 text-primary md:text-[46px] md:leading-13.5",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
