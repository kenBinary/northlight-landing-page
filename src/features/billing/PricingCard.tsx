import { Button } from "../../components/Button/Button";
import { CheckIcon } from "../../components/Icons";
import type { PricingPlan } from "./pricing.data";
import styles from "./PricingCard.module.css";

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
}

export function PricingCard({ plan, isAnnual }: PricingCardProps) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <article
      className={`${styles["card"]} ${plan.isFeatured ? styles["cardFeatured"] : ""}`}
      aria-label={`${plan.name} plan`}
    >
      {plan.isFeatured && (
        <div className={styles["popularBadge"]} aria-label="Most popular plan">
          Most Popular
        </div>
      )}

      <div className={styles["cardHeader"]}>
        <h3 className={styles["planName"]}>{plan.name}</h3>
        <p className={styles["planDescription"]}>{plan.description}</p>
      </div>

      <div className={styles["priceRow"]}>
        <span className={styles["priceAmount"]}>${price}</span>
        <span className={styles["pricePer"]}>{plan.perLabel}</span>
      </div>

      <p className={styles["billedAnnually"]}>
        {isAnnual ? "Billed yearly, per month" : "Billed monthly"}
      </p>

      <Button variant={plan.ctaVariant}>{plan.cta}</Button>

      <ul className={styles["featureList"]} role="list">
        {plan.features.map((feature) => (
          <li key={feature} className={styles["featureItem"]}>
            <CheckIcon size={16} color="var(--c-accent)" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
