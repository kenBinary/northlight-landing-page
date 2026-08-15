import type { Step } from "./steps.data";
import styles from "./StepCard.module.css";

interface StepCardProps {
  step: Step;
}

export function StepCard({ step }: StepCardProps) {
  return (
    <li className={styles["step"]}>
      <div className={styles["stepLeft"]}>
        <div className={styles["stepNumber"]} aria-hidden="true">
          {step.number}
        </div>
      </div>
      <div className={styles["stepContent"]}>
        <h3 className={styles["stepTitle"]}>{step.title}</h3>
        <p className={styles["stepDescription"]}>{step.description}</p>
      </div>
    </li>
  );
}
