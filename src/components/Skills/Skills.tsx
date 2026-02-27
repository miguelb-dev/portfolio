import { technologies } from "../../constants";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <article id="skills">
      <h2 className={styles["subtitle"]}>
        <span style={{ color: "grey" }}>&lt;</span>
        <span>/ </span>
        Habilidades
        <span style={{ color: "grey" }}> &gt;</span>{" "}
      </h2>
      <section className={styles["skills-container"]}>
        {technologies.map((technology) => (
          <div
            className={styles["skill"]}
            key={technology.name}
            title={technology.name}
          >
            <img
              className={styles["icon"]}
              src={technology.icon}
              alt={technology.name}
              style={
                { "--hover-color": technology.color } as React.CSSProperties
              }
            />

            <p>{technology.name}</p>
          </div>
        ))}
      </section>
    </article>
  );
};

export { Skills };
