import { useState } from "react";
import { BillingSwitch } from "./BillingSwitch";
import { PricingCard } from "./PricingCard";
import { PRICING_PLANS } from "./pricing.data";
import styles from "./Pricing.module.css";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className={styles["section"]}
      aria-labelledby="pricing-heading"
    >
      <div className={`container ${styles["inner"]}`}>
        <div className={styles["sectionHeader"]}>
          <p className="eyebrow">Pricing</p>
          <h2 id="pricing-heading" className={styles["heading"]}>
            Simple pricing that scales with you
          </h2>
          <p className={styles["subhead"]}>
            Every plan includes unlimited dashboards, unlimited seats and 12
            months of data history.
          </p>
          <BillingSwitch
            isAnnual={isAnnual}
            onToggle={() => setIsAnnual((prev) => !prev)}
          />
        </div>

        <ul className={styles["plansGrid"]} role="list">
          {PRICING_PLANS.map((plan) => (
            <li key={plan.id}>
              <PricingCard plan={plan} isAnnual={isAnnual} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
