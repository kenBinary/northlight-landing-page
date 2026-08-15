import type {
  ButtonHTMLAttributes,
  ReactNode,
  ComponentType,
  SVGProps,
} from "react";
import styles from "./Button.module.css";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "cta-solid"
  | "cta-outline";
type ButtonSize = "base" | "lg";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: IconComponent;
  rightIcon?: IconComponent;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "base",
  fullWidth = false,
  className = "",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    styles["btn"],
    styles[variant],
    styles[size],
    fullWidth ? styles["fullWidth"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {LeftIcon && <LeftIcon className={styles["icon"]} aria-hidden="true" />}
      <span className={styles["label"]}>{children}</span>
      {RightIcon && <RightIcon className={styles["icon"]} aria-hidden="true" />}
    </button>
  );
}
