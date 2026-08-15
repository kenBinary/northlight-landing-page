import { useState, useEffect, useRef } from "react";
import { MobileDrawer } from "./MobileDrawer";
import styles from "./Header.module.css";
import { Logo } from "../../components/Logo/Logo";
import { MenuIcon } from "../../components/Icons/Menu";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <>
      <header
        className={`${styles["header"]} ${isScrolled ? styles["scrolled"] : ""}`}
        role="banner"
      >
        <div className={`container ${styles["inner"]}`}>
          <div className={`${styles["headerLogo"]}`}>
            <a href="/" aria-label="Northlight home">
              <Logo />
            </a>
            <h3>Northlight</h3>
          </div>

          <nav className={styles["desktopNav"]} aria-label="Main navigation">
            <ul className={styles["navList"]}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles["navLink"]}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles["desktopActions"]}>
            <a href="#sign-in" className={styles["signInLink"]}>
              Sign in
            </a>
            <a href="#start-free-trial" className={styles["ctaBtn"]}>
              Start free trial
            </a>
          </div>

          <button
            ref={hamburgerRef}
            className={styles["hamburger"]}
            aria-label="Open navigation menu"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-nav"
            onClick={openDrawer}
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
