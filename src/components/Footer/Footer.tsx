import styles from "./Footer.module.css";
import { Links } from "../Links/Links";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Links></Links>
      <p className={styles["footer__creator"]}>
        Diseñado y desarrollado por{" "}
        <strong className={styles["creator__name"]}>Miguel Bethancourt</strong>
      </p>
      <p className={styles["footer__copyright"]}>
        © 2026. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export { Footer };
