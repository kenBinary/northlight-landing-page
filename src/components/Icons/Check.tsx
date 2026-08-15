import type { SVGProps } from "react";

interface CheckIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function CheckIcon({ size = 24, ...props }: CheckIconProps) {
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
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}
