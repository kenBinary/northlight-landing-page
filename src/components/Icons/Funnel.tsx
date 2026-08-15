import type { SVGProps } from "react";

interface FunnelIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function FunnelIcon({ size = 24, ...props }: FunnelIconProps) {
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
      <path d="M3 4h18l-7 8v7l-4 2v-9L3 4z" />
    </svg>
  );
}
