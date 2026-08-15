import { FeatureCard } from "./FeatureCard";
import { FEATURES } from "./features.data";
import styles from "./Features.module.css";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className={styles["section"]}
      aria-labelledby="features-heading"
    >
      <div className={`container ${styles["inner"]}`}>
        <div className={styles["sectionHeader"]}>
          <p className="eyebrow">Features</p>
          <h2 id="features-heading" className={styles["heading"]}>
            Everything you need to understand your users
          </h2>
          <p className={styles["subhead"]}>
            One place for the questions product teams ask every week — and the
            ones they only think to ask once something breaks.
          </p>
        </div>

        <ul className={styles["grid"]} role="list">
          {FEATURES.map((feature) => (
            <li key={feature.id}>
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
