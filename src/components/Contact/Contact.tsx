import styles from "./Contact.module.css";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            width="20"
            height="20"
          >
            <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
          </svg>
          ENVIAR MENSAJE
        </button>
      </form>
    </article>
  );
};

export { Contact };
