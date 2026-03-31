import styles from "./Experience.module.css";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <article id="experience" className="reveal-animation">
      <h2 className={styles["subtitle"]}>
        <span style={{ color: "grey" }}>&lt;</span>
        <span>/ </span>
        Experiencia
        <span style={{ color: "grey" }}> &gt;</span>{" "}
      </h2>
      <section className={styles["experiences-container"]}>
        {experiences.map((work) => (
          <div className={styles["experience"]}>
            <div
              className={styles["work"]}
              key={work.companyName}
              title={work.companyName}
            >
              <p className={styles["work__date"]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar text-emerald-400"
                  aria-hidden="true"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
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
            <ul className={styles["dates"]}>
              <li key={work.date}>{work.date}</li>
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
};

export { Experience };
