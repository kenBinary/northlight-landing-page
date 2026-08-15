import { StepCard } from "./StepCard";
import { STEPS } from "./steps.data";
import styles from "./HowItWorksSection.module.css";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className={styles["section"]}
      aria-labelledby="steps-heading"
    >
      <div className={`container ${styles["inner"]}`}>
        <div className={styles["sectionHeader"]}>
          <p className="eyebrow">How it works</p>
          <h2 id="steps-heading" className={styles["heading"]}>
            Live in an afternoon, not a quarter
          </h2>
          <p className={styles["subhead"]}>
            Three steps, and none of them involve a migration plan.
          </p>
        </div>

        <ol className={styles["stepsList"]}>
          {STEPS.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
