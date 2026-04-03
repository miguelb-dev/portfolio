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
        {experiences.map((job) => (
          <section
            className={styles["experience"]}
            key={job.companyName}
            title={job.companyName}
          >
            <p className={styles["experience__date"]}>
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
              {job.date}
            </p>

            <div className={styles["experience-wrapper"]}>
              <header className={styles["experience__header"]}>
                <img
                  className={styles["experience__icon"]}
                  src={job.icon}
                  alt={job.companyName}
                />

                <div className={styles["experience__role-wrapper"]}>
                  <h3 className={styles["experience__role"]}>{job.role}</h3>
                  <p className={styles["experience__company-name"]}>
                    {job.companyName}
                  </p>
                </div>
              </header>

              <p className={styles["experience__description"]}>
                {job.description}
              </p>
            </div>
          </section>
        ))}
      </section>
    </article>
  );
};

export { Experience };
