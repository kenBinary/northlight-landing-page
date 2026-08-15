import styles from "./Testimonial.module.css";
import mayaEllisonAvatar from "../../assets/images/maya-ellison.svg";

export function TestimonialSection() {
  return (
    <section className={styles["section"]} aria-label="Customer testimonial">
      <div className={`container ${styles["inner"]}`}>
        <div className={styles["card"]}>
          <blockquote>
            “We replaced three tools and a standing weekly SQL request with one
            Northlight board. The week we rolled it out, two PMs found a
            checkout bug that had been quietly costing us six figures a year.”
          </blockquote>

          <footer className={styles["attribution"]}>
            <img
              src={mayaEllisonAvatar}
              alt="Maya Ellison"
              className={styles["avatar"]}
              loading="lazy"
            />
            <div className={styles["attributionText"]}>
              <cite className={styles["authorName"]}>Maya Ellison</cite>
              <span className={styles["authorRole"]}>
                Head of Product, Vertex Labs
              </span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
