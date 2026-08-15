import { Button } from "../../components/Button/Button";
import { ArrowRightIcon } from "../../components/Icons/ArrowRight";
import heroDashboard from "../../assets/images/hero-dashboard.svg";
import styles from "./Hero.module.css";

export function HeroSection() {
  return (
    <section className={styles["hero"]} aria-labelledby="hero-heading">
      <div className={`container ${styles["inner"]}`}>
        <div className={styles["pill"]}>
          <span className={styles["pillBadge"]}></span>
          <span className={styles["pillText"]}>New — Funnel insights v2</span>
        </div>

        <h1 className={styles["headline"]}>
          <span>See what your</span>
          <span>product is really doing.</span>
        </h1>

        <p className={styles["subhead"]}>
          Northlight turns raw product events into answers your whole team can
          act on — no SQL, no data team ticket queue, no waiting until Thursday.
        </p>

        <div className={styles["ctaGroup"]}>
          <Button variant="primary" size="lg">
            Start Free Trial
          </Button>
          <Button variant="secondary" size="lg" rightIcon={ArrowRightIcon}>
            Book a demo
          </Button>
        </div>

        <p className={styles["metaLine"]}>
          Free 14-day trial · No credit card required
        </p>

        <div className={styles["imageWrapper"]} aria-hidden="true">
          <img
            src={heroDashboard}
            alt="Northlight dashboard showing active users, conversion rate and weekly session trends"
            className={styles["dashboardImage"]}
            width="560"
            height="390"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
