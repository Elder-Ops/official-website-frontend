import type { FC, SVGProps } from "react";

const ArrowRight: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M14 16L18 12M18 12L14 8M18 12H6"
        stroke="currentColor"
        strokeWidth={props.strokeWidth || "1.5"}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
