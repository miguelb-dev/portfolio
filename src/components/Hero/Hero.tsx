import me from "../../assets/img/me.png";
import styles from "./Hero.module.css";
import { Links } from "../Links/Links";

const Hero = () => {
  // Función para scroll suave
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <article id="hero" className={`${styles["hero"]} otra-clase-global`}>
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
          Apasionado desarrollador de aplicaciones web robustas, escalables y
          con un fuerte enfoque en la experiencia del usuario.
        </p>
        <div className={styles["buttons-wrapper"]}>
          <a
            id={styles["contactButton"]}
            href="#contact"
            rel="noopener noreferrer"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contactame
          </a>
          <a
            id={styles["projectsButton"]}
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
          >
            Ver Proyectos
          </a>
        </div>
        <Links />
      </section>
      <div className={styles["hero__photo-wrapper"]}>
        <img className={styles["hero__photo"]} src={me} alt="Foto de perfil" />
      </div>
    </article>
  );
};

export { Hero };
