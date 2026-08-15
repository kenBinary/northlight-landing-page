import { useEffect, useRef } from "react";
import styles from "./MobileDrawer.module.css";
import { CloseIcon } from "../../components/Icons/Close";
import { Logo } from "../../components/Logo/Logo";

interface NavLink {
  label: string;
  href: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export function MobileDrawer({ isOpen, onClose, navLinks }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div>
      <div
        className={`${styles["backdrop"]} ${isOpen ? styles["backdropVisible"] : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`${styles["drawer"]} ${isOpen ? styles["drawerOpen"] : ""}`}
      >
        <div>
          <div className={styles["drawerHeader"]}>
            <div className={styles["drawerLogo"]}>
              <Logo />
              <h3>Northflight</h3>
            </div>

            <button
              ref={closeBtnRef}
              className={styles["closeBtn"]}
              aria-label="Close navigation menu"
              onClick={onClose}
            >
              <CloseIcon size={22} />
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className={styles["drawerNavList"]}>
              {navLinks.map((link) => (
                <li key={link.href} className={styles["drawerNavItem"]}>
                  <a
                    href={link.href}
                    className={styles["drawerNavLink"]}
                    onClick={onClose}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles["drawerActions"]}>
          <a
            href="#sign-in"
            className={styles["drawerSignIn"]}
            onClick={onClose}
          >
            Sign in
          </a>
          <a
            href="#start-free-trial"
            className={styles["drawerGetStarted"]}
            onClick={onClose}
          >
            Start free trial
          </a>
        </div>
      </div>
    </div>
  );
}
