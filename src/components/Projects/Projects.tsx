import styles from "./Projects.module.css";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <article id="projects" className="reveal-animation">
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
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github sm:group-hover:rotate-12 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Ver Repo
                </a>

                <a
                  className={styles["link"]}
                  href={project.liveView}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm87.62,96H175.79C174,83.49,159.94,57.67,148.41,42.4A88.19,88.19,0,0,1,215.63,120ZM96.23,136h63.54c-2.31,41.61-22.23,67.11-31.77,77C118.45,203.1,98.54,177.6,96.23,136Zm0-16C98.54,78.39,118.46,52.89,128,43c9.55,9.93,29.46,35.43,31.77,77Zm11.36-77.6C96.06,57.67,82,83.49,80.21,120H40.37A88.19,88.19,0,0,1,107.59,42.4ZM40.37,136H80.21c1.82,36.51,15.85,62.33,27.38,77.6A88.19,88.19,0,0,1,40.37,136Zm108,77.6c11.53-15.27,25.56-41.09,27.38-77.6h39.84A88.19,88.19,0,0,1,148.41,213.6Z"></path>
                  </svg>
                  Ver en vivo
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
