import type { SVGProps } from "react";

interface ShieldCheckIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function ShieldCheckIcon({ size = 24, ...props }: ShieldCheckIconProps) {
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
      <path d="M12 2.5l7.5 3v6c0 4.5-3 8.5-7.5 10-4.5-1.5-7.5-5.5-7.5-10v-6l7.5-3z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </svg>
  );
}
