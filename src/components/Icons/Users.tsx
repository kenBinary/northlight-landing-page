import type { SVGProps } from "react";

interface UsersIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function UsersIcon({ size = 24, ...props }: UsersIconProps) {
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
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 5.6" />
      <path d="M17.5 14.2A6.5 6.5 0 0 1 21.5 20" />
    </svg>
  );
}
