import { useState, useEffect } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "./Header.module.css";
import me from "../../assets/img/me.png";
import cvIcon from "../../assets/icon/cv-green-color.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Definimos las secciones que queremos observar
  const sections = [
    "hero",
    "aboutme",
    "experience",
    "skills",
    "projects",
    "contact",
  ];

  // Usamos el hook para obtener la sección activa
  const activeSection = useActiveSection({
    sectionIds: sections,
    threshold: 0.5,
    rootMargin: "-80px 0px -80px 0px",
  });

  // Función para scroll suave
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false); // Cerrar menú al hacer clic en un enlace
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para determinar si un enlace está activo
  const isActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  // Cerrar menú cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles["navbar"]}`) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles["header"]}>
      {/* Botón hamburguesa */}
      <nav className={styles["navbar"]}>
        <button
          className={styles["navbar__hamburger"]}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
        >
          {isMenuOpen ? (
            <svg
              className={styles["close-icon"]}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className={styles["hamburger-icon"]}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <a
          className={styles["navbar__dev-icon"]}
          href="#hero"
          onClick={(e) => scrollToSection(e, "hero")}
        >
          <img
            src={me}
            alt="Logo del desarrollador"
            className={styles["logo"]}
          />
        </a>

        {/* Menú de navegación */}
        <ul
          className={`${styles["nav__ul"]} ${isMenuOpen ? styles["nav__ul--open"] : ""}`}
        >
          <li className={styles["ul__li"]}>
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              className={isActive("hero") ? styles["active"] : ""}
            >
              Inicio
            </a>
          </li>
          <li className={styles["ul__li"]}>
            <a
              href="#aboutme"
              onClick={(e) => scrollToSection(e, "aboutme")}
              className={isActive("aboutme") ? styles["active"] : ""}
            >
              Sobre mi
            </a>
          </li>
          <li className={styles["ul__li"]}>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "experience")}
              className={isActive("experience") ? styles["active"] : ""}
            >
              Experiencia
            </a>
          </li>
          <li className={styles["ul__li"]}>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className={isActive("skills") ? styles["active"] : ""}
            >
              Habilidades
            </a>
          </li>
          <li className={styles["ul__li"]}>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className={isActive("projects") ? styles["active"] : ""}
            >
              Proyectos
            </a>
          </li>
          <li className={styles["ul__li"]}>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={isActive("contact") ? styles["active"] : ""}
            >
              Contacto
            </a>
          </li>
          <li className={styles["ul__li"]}>
            <a id={styles["cv"]} href="/src/assets/doc/miguel-bethancourt.pdf">
              <img id={styles["cvIcon"]} src={cvIcon} alt="CV Icon" />
              Curriculum
            </a>
          </li>
        </ul>
      </nav>

      {/* Overlay oscuro cuando el menú está abierto */}
      {isMenuOpen && (
        <div
          className={styles["overlay"]}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export { Header };
