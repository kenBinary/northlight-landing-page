import { useState } from "react";
import styles from "./NewsletterForm.module.css";
import { CheckIcon } from "../../components/Icons";
import { Button } from "../../components/Button/Button";

type FormState = "idle" | "loading" | "success";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setState("loading");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setState("success");
    setEmail("");
  };

  if (state === "success") {
    return (
      <div className={styles["successMsg"]} role="status" aria-live="polite">
        <CheckIcon size={18} />
        <span>Thanks — check your inbox to confirm.</span>
      </div>
    );
  }

  return (
    <form
      className={styles["form"]}
      onSubmit={handleSubmit}
      aria-label="Subscribe to newsletter"
    >
      <div className={styles["inputRow"]}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={styles["input"]}
          disabled={state === "loading"}
          autoComplete="email"
          required
        />
        <Button
          type="submit"
          disabled={state === "loading"}
          variant="primary"
          aria-label="Subscribe"
        >
          {state === "loading" ? (
            <span className={styles["spinner"]} aria-hidden="true" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
    </form>
  );
}
