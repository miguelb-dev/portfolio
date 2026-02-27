import styles from "./Projects.module.css";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <article id="projects">
      <h2 className={styles["subtitle"]}>
        <span style={{ color: "grey" }}>&lt;</span>
        <span>/ </span>
        Projectos
        <span style={{ color: "grey" }}> &gt;</span>{" "}
      </h2>
      <section className={styles["projects-container"]}>
        {projects.map((project) => (
          <div
            className={styles["project"]}
            key={project.name}
            title={project.name}
          >
            <div className={styles["project__capture-wrapper"]}>
              <img
                className={styles["project__capture"]}
                src={project.capture}
                alt={project.name}
              />
            </div>

            <section className={styles["project__info-wrapper"]}>
              <h3 className={styles["project__name"]}>{project.name}</h3>

              <p className={styles["project__description"]}>
                {project.description}
              </p>

              <ul className={styles["project__stack"]}>
                {project.stack.map((tech, index) => {
                  return <li key={index}>{tech}</li>;
                })}
              </ul>

              <div className={styles["links-wrapper"]}>
                <a
                  className={styles["link"]}
                  href={project.repo}
                  target="_blank"
                >
                  <i className={`fa-brands fa-github ${styles["links"]}`}></i>
                  Ver Repo
                </a>

                <a
                  className={styles["link"]}
                  href={project.liveView}
                  target="_blank"
                >
                  <i className={`fa-solid fa-globe ${styles["links"]}`}></i>Ver
                  en vivo
                </a>
              </div>
            </section>
          </div>
        ))}
      </section>
    </article>
  );
};

export { Projects };
