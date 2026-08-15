import { NewsletterForm } from "./NewsletterForm";
import { FOOTER_COLUMNS } from "./footer.data";
import styles from "./Footer.module.css";
import { Logo } from "../../components/Logo/Logo";

export function FooterSection() {
  return (
    <footer className={styles["footer"]} role="contentinfo">
      <div className={`container ${styles["inner"]}`}>
        <div className={styles["brandCol"]}>
          <div className={styles["logoBlock"]}>
            <Logo />
            <h3>Northlight</h3>
          </div>
          <p className={styles["tagline"]}>
            Product analytics for teams who ship.
          </p>
          <div className={styles["newsletterBlock"]}>
            <p className={styles["newsletterLabel"]}>
              Product updates, once a month.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className={styles["linksGrid"]}>
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.id} className={styles["linkColumn"]}>
              <h3 className={styles["columnHeading"]}>{column.heading}</h3>
              <ul role="list">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={styles["columnLink"]}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`container ${styles["bottomInner"]}`}>
        <p className={styles["copyright"]}>© 2026 Northlight Labs, Inc.</p>
        <div
          className={styles["statusIndicator"]}
          aria-label="System status: operational"
        >
          <span className={styles["statusDot"]} aria-hidden="true" />
          <span className={styles["statusText"]}>All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
