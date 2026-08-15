import { TRUST_LOGOS } from "./trust.data";
import styles from "./Trust.module.css";

export function TrustSection() {
  return (
    <section
      className={styles["trust"]}
      aria-label="Trusted by product teams at"
    >
      <div className={`container ${styles["inner"]}`}>
        <p className={styles["label"]}>Trusted by product teams at</p>

        <ul className={styles["logoList"]} role="list">
          {TRUST_LOGOS.map((logo) => (
            <li key={logo.id} className={styles["logoItem"]}>
              <img
                src={logo.src}
                alt={logo.name}
                className={styles["logoImg"]}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
