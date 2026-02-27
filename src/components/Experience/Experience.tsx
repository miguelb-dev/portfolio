import styles from "./Experience.module.css";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <article id="experience">
      <h2 className={styles["subtitle"]}>
        <span style={{ color: "grey" }}>&lt;</span>
        <span>/ </span>
        Experiencia
        <span style={{ color: "grey" }}> &gt;</span>{" "}
      </h2>
      <section className={styles["experiences-container"]}>
        {experiences.map((work) => (
          <div
            className={styles["work"]}
            key={work.companyName}
            title={work.companyName}
          >
            <p className={styles["work__date"]}>
              <i
                className={`fa-regular fa-calendar ${styles["calendar-icon"]}`}
              ></i>
              {work.date}
            </p>

            <div className={styles["work-wrapper"]}>
              <img
                className={styles["work__icon"]}
                src={work.icon}
                alt={work.companyName}
              />

              <div className={styles["role-wrapper"]}>
                <h3 className={styles["work__role"]}>{work.role}</h3>
                <p className={styles["work__company-name"]}>
                  {work.companyName}
                </p>
              </div>
            </div>

            <ul className={styles["work__points"]}>
              {work.points.map((point, index) => {
                return <li key={index}>{point}</li>;
              })}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
};

export { Experience };
