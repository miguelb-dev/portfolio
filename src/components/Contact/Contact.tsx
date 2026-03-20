import { useRef, useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [modal, setModal] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    text: string;
  }>({
    isOpen: false,
    type: "success",
    text: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (result.text === "OK") {
        setModal({
          isOpen: true,
          type: "success",
          text: "¡Mensaje enviado exitosamente! Te contactaré pronto.",
        });
        formRef.current?.reset();
      }
    } catch (error) {
      setModal({
        isOpen: true,
        type: "error",
        text: "Parece que hubo un error. Intenta nuevamente.",
      });
      console.error("Error en el formulario de contacto:", error);
    } finally {
      setIsSending(false);
    }
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <article id="contact" className="reveal-animation">
      <h2 className={styles["subtitle"]}>
        <span style={{ color: "grey" }}>&lt;</span>
        <span>/ </span>
        Contacto
        <span style={{ color: "grey" }}> &gt;</span>{" "}
      </h2>

      {/* Mensaje del formulario */}
      {modal.isOpen && (
        <div className={styles["modal-overlay"]} onClick={closeModal}>
          <div
            className={styles["message"]}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`${styles["message__icon"]} ${styles[`${modal.type}--color`]}`}
            >
              {modal.type === "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.1"
                  stroke="currentColor"
                  className="size-6"
                  width="100"
                  height="100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.1"
                  stroke="currentColor"
                  className="size-6"
                  width="110"
                  height="110"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              )}
            </div>

            <p className={styles["message__text"]}>{modal.text}</p>

            <button className={styles["message__button"]} onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Formulario */}
      <form
        ref={formRef}
        className={styles["contact-form"]}
        onSubmit={handleSubmit}
      >
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
          name="name"
          type="text"
          placeholder="Jhon Smith"
          required
        />

        <label className={styles["contact-form__label"]} htmlFor="email">
          Correo <span>*</span>
        </label>
        <input
          className={styles["contact-form__input"]}
          id="email_id"
          name="email_id"
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
          name="message"
          rows={10}
          placeholder="Cuéntame sobre tu proyecto"
          required
        ></textarea>

        <button
          className={styles["contact-form__button"]}
          type="submit"
          disabled={isSending}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
            width="20"
            height="20"
          >
            <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
          </svg>
          {isSending ? "ENVIANDO..." : "ENVIAR MENSAJE"}
        </button>
      </form>
    </article>
  );
};

export { Contact };
