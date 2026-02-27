import me from "../../assets/img/me.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <article id="hero" className={styles["hero"]}>
      <section className={styles["hero__information"]}>
        <h1 className={styles["hero__title"]}>
          Miguel{" "}
          <span className={styles["hero__title--efect"]}>Bethancourt</span>
        </h1>
        <h2 className={styles["hero__sub-title"]}>
          Software{" "}
          <span className={styles["hero__title--efect"]}>Developer</span>
        </h2>
        <p className={styles["hero__description"]}>
          Soy un apasionado desarrollador que construye aplicaciones web
          robustas, escalables y con un fuerte enfoque en la experiencia del
          usuario.
        </p>
        <div className={styles["buttons-wrapper"]}>
          <a
            id={styles["contactButton"]}
            href="#contact"
            rel="noopener noreferrer"
          >
            Contactame
          </a>
          <a
            id={styles["projectsButton"]}
            href="#projects"
            rel="noopener noreferrer"
          >
            Ver Proyectos
          </a>
        </div>
      </section>
      <div className={styles["hero__photo-wrapper"]}>
        <img className={styles["hero__photo"]} src={me} alt="Foto de perfil" />
      </div>
    </article>
  );
};

export { Hero };
