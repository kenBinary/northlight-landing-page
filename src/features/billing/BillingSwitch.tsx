import styles from "./BillingSwitch.module.css";

interface BillingSwitchProps {
  isAnnual: boolean;
  onToggle: () => void;
}

export function BillingSwitch({ isAnnual, onToggle }: BillingSwitchProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      className={styles["switchWrapper"]}
      role="group"
      aria-label="Billing period selection"
    >
      <span
        className={`${styles["switchLabel"]} ${!isAnnual ? styles["switchLabelActive"] : ""}`}
        id="billing-monthly"
      >
        Monthly
      </span>

      <button
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle billing period"
        className={styles["switchTrack"]}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        id="billing-toggle"
      >
        <span className="sr-only">
          {isAnnual ? "Switch to monthly billing" : "Switch to yearly billing"}
        </span>
        <span
          className={`${styles["switchThumb"]} ${isAnnual ? styles["switchThumbOn"] : ""}`}
          aria-hidden="true"
        />
      </button>

      <span
        className={`${styles["switchLabel"]} ${isAnnual ? styles["switchLabelActive"] : ""}`}
        id="billing-yearly"
      >
        Yearly
        <span className={styles["saveBadge"]}>Save 20%</span>
      </span>
    </div>
  );
}
