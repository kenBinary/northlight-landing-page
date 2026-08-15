import { ChevronDownIcon } from "../../components/Icons";
import type { FaqItem } from "./faq.data";
import styles from "./FaqItem.module.css";

interface FaqItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItemComponent({ item, isOpen, onToggle }: FaqItemProps) {
  return (
    <li className={styles["item"]}>
      <button
        className={styles["trigger"]}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-trigger-${item.id}`}
        onClick={onToggle}
      >
        <span className={styles["question"]}>{item.question}</span>
        <span
          className={`${styles["chevron"]} ${isOpen ? styles["chevronOpen"] : ""}`}
          aria-hidden="true"
        >
          <ChevronDownIcon size={20} />
        </span>
      </button>

      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
        className={`${styles["answerWrapper"]} ${isOpen ? styles["answerOpen"] : ""}`}
      >
        <div className={styles["answer"]}>
          <p>{item.answer}</p>
        </div>
      </div>
    </li>
  );
}
