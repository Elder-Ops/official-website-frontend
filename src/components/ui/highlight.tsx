import { cn } from "@/lib/util";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

const Highlight = ({ children, className }: HighlightProps) => {
  return (
    <span className={cn("font-semibold italic text-[#069C4E]", className)}>
      {children}
    </span>
  );
};

export default Highlight;
