import { useState } from "react";
import { FaqItemComponent } from "./FaqItem";
import { FAQ_ITEMS } from "./faq.data";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      id="faq"
      className={styles["section"]}
      aria-labelledby="faq-heading"
    >
      <div className={`container--narrow ${styles["inner"]}`}>
        <div className={styles["sectionHeader"]}>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading" className={styles["heading"]}>
            Questions we get asked
          </h2>
        </div>

        <ul className={styles["accordionList"]} role="list">
          {FAQ_ITEMS.map((item) => (
            <FaqItemComponent
              key={item.id}
              item={item}
              isOpen={openIds.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
