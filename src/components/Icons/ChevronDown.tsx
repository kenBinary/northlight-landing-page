import type { SVGProps } from "react";

interface ChevronDownIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function ChevronDownIcon({ size = 24, ...props }: ChevronDownIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 8.5l7 7 7-7" />
    </svg>
  );
}
