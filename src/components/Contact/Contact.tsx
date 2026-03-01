import styles from "./Contact.module.css";
import sendIcon from "../../assets/icon/send.svg";

const Contact = () => {
  return (
    <article id="contact" className={styles["contact"]}>
      <h2 className={styles["subtitle"]}>
        <span style={{ color: "grey" }}>&lt;</span>
        <span>/ </span>
        Contacto
        <span style={{ color: "grey" }}> &gt;</span>{" "}
      </h2>
      <form className={styles["contact-form"]} action="#">
        <h3 className={styles["contact-form__title"]}>
          ¡Construyamos{" "}
          <span className={styles["contact-form__title--efect"]}>
            Algo Genial
          </span>
          !
        </h3>

        <label className={styles["contact-form__label"]} htmlFor="name">
          Nombre <span>*</span>
        </label>
        <input
          className={styles["contact-form__input"]}
          id="name"
          type="text"
          placeholder="Jhon Smith"
          required
        />

        <label className={styles["contact-form__label"]} htmlFor="email">
          Correo <span>*</span>
        </label>
        <input
          className={styles["contact-form__input"]}
          id="email"
          type="email"
          inputMode="email"
          placeholder="jhon@example.com"
          required
        />

        <label className={styles["contact-form__label"]} htmlFor="message">
          Tu Mensaje <span>*</span>
        </label>
        <textarea
          className={styles["contact-form__input"]}
          id="message"
          rows={10}
          placeholder="Cuéntame sobre tu proyecto"
          required
        ></textarea>

        <button className={styles["contact-form__button"]}>
          <img
            className={styles["button__icon"]}
            src={sendIcon}
            alt="send icon"
          />
          ENVIAR MENSAJE
        </button>
      </form>
    </article>
  );
};

export { Contact };
