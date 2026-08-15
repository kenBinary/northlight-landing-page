import { Button } from "../../components/Button/Button";
import styles from "./Cta.module.css";

export function CtaSection() {
  return (
    <section className={styles["section"]} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles["band"]}>
          <div className={styles["glow"]} aria-hidden="true" />

          <div className={styles["content"]}>
            <h2 id="cta-heading" className={styles["heading"]}>
              Start seeing clearly
            </h2>
            <p className={styles["subhead"]}>
              Fourteen days, every feature, no credit card. Bring your events
              and we'll bring the answers.
            </p>
            <div className={styles["ctaGroup"]}>
              <Button variant="secondary" size="base">
                Start Free Trial
              </Button>
              <Button variant="cta-outline" size="base">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
