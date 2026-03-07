import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <article id="aboutMe">
      <h2 className={styles["subtitle"]}>
        <span style={{ color: "grey" }}>&lt;</span>
        <span>/ </span>
        Sobre Mí
        <span style={{ color: "grey" }}> &gt;</span>{" "}
      </h2>
      <section className={styles["aboutme__description"]}>
        <p className={styles["description__paragraph"]}>
          Soy un desarrollador con más de un año de experiencia en la creación
          de aplicaciones web. Me enfoco en la resolución de problemas reales de
          los usuarios.
        </p>
        <p className={styles["description__paragraph"]}>
          Empecé como desarrollador frontend y administrador de bases de datos
          SQL en el Complejo Educativo Rafael Rangel (Valera, Venezuela). y
          actualmente trabajo en la planta de Venvidrio (Valera, Venezuela)
          desarrollando desde cero un sistema fullstack para el registro y
          control de la producción de envases de vidrio.
        </p>
        <p className={styles["description__paragraph"]}>
          Busco oportunidades para seguir creciendo como desarrollador,
          colaborar en equipos ambiciosos y ayudar a transformar ideas en
          productos sólidos y con impacto en el mercado.
        </p>
      </section>
    </article>
  );
};

export { AboutMe };
