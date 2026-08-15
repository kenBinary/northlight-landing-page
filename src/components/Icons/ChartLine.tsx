import type { SVGProps } from "react";

interface ChartLineIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function ChartLineIcon({ size = 24, ...props }: ChartLineIconProps) {
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
      <path d="M3 3v18h18" />
      <path d="M7 14l3-4 3 2.5 4.5-6" />
    </svg>
  );
}
