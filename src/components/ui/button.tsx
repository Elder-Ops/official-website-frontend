import { Link } from "react-router";
import { cn } from "@/lib/util";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = (
  | { variant: "link"; to: string; onClick?: () => void }
  | { variant: "button"; type?: "button" | "submit" | "reset" }
  | { variant: "glass-link"; to: string; onClick?: () => void }
  | { variant: "glass-button"; type?: "button" | "submit" | "reset" }
) & {
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  const isGlass = props.variant.startsWith("glass");
  const baseClasses = cn(
    "px-6 py-3 rounded-[300px] font-medium text-white inline-block cursor-pointer touch-manipulation",
    isGlass && "btn-glass-effect",
    className,
  );

  if (props.variant === "link" || props.variant === "glass-link") {
    return (
      <Link 
        to={props.to} 
        className={baseClasses} 
        onClick={(e) => {
          e.currentTarget.blur();
          props.onClick?.();
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type || "button"} className={baseClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
