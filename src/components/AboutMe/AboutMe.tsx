import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <article id="aboutMe" className="reveal-animation">
      <h2 className={styles["subtitle"]}>
        <span style={{ color: "grey" }}>&lt;</span>
        <span>/ </span>
        Sobre Mí
        <span style={{ color: "grey" }}> &gt;</span>{" "}
      </h2>
      <section className={styles["aboutme__description"]}>
        <p className={styles["description__paragraph"]}>
          Soy un desarrollador con más de un año de experiencia en la creación
          de aplicaciones web, enfocado en la resolución de problemas reales.
        </p>
        <p className={styles["description__paragraph"]}>
          Empecé como <strong>Desarrollador Front-End</strong> y{" "}
          <strong>Administrador de Base de Datos</strong> en el Complejo
          Educativo Rafael Rangel (Valera, Venezuela). Y actualmente, trabajo en
          Venvidrio (Valera, Venezuela) como desarrollador{" "}
          <strong>Full-Stack</strong> de una aplicación para la gestión del
          proceso productivo de la planta.
        </p>
        <p className={styles["description__paragraph"]}>
          Busco oportunidades para seguir creciendo como desarrollador,
          colaborar en equipos ambiciosos y ayudar a transformar ideas en
          productos sólidos con impacto en el mercado.
        </p>
      </section>
    </article>
  );
};

export { AboutMe };
