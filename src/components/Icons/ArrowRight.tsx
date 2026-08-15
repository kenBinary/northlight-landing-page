import type { SVGProps } from "react";

interface ArrowRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function ArrowRightIcon({ size = 24, ...props }: ArrowRightIconProps) {
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
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
