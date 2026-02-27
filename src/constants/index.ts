// Iconos Tech
import html from "../assets/img/tech/html.png";
import css from "../assets/img/tech/css.png";
import javascript from "../assets/img/tech/javascript.png";
import typescript from "../assets/img/tech/typescript.png";
import reactjs from "../assets/img/tech/reactjs.png";
import vite from "../assets/img/tech/vite.png";
import figma from "../assets/img/tech/figma.png";
import python from "../assets/img/tech/python.png";
import mysql from "../assets/img/tech/mysql.png";
import git from "../assets/img/tech/git.png";
import github from "../assets/img/tech/github.png";
import markdown from "../assets/img/tech/markdown.png";

// Logos de empresas
import rafaelrangel from "../assets/img/work-icon/rafael-rangel.png";

// Capturas de los proyectos
import rafaelrangelapp from "../assets/img/captures/rafael-rangel-app.png";

const technologies = [
  {
    name: "HTML",
    icon: html,
    color: "#ff5900",
  },
  {
    name: "CSS",
    icon: css,
    color: "#468eaf",
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: "#f1e05a",
  },
  {
    name: "TypeScript",
    icon: typescript,
    color: "#3178c6",
  },
  {
    name: "React JS",
    icon: reactjs,
    color: "#4c9bc0",
  },
  {
    name: "Vite",
    icon: vite,
    color: "#9d52ff",
  },
  {
    name: "figma",
    icon: figma,
    color: "#d30058",
  },
  {
    name: "Python",
    icon: python,
    color: "#7eac02",
  },
  {
    name: "MySQL",
    icon: mysql,
    color: "#a3dddf",
  },
  {
    name: "git",
    icon: git,
    color: "#ff0000",
  },
  {
    name: "GitHub",
    icon: github,
    color: "#4b48ff",
  },
  {
    name: "Markdown",
    icon: markdown,
    color: "#616161",
  },
];

const experiences = [
  {
    date: "Diciembre 2025 - Enero 2026",
    companyName: "Complejo Educativo Rafael Rangel",
    icon: rafaelrangel,
    role: "Desarrollador Front-End",
    points: [
      "Desarrollé interfaces de usuario (UI) utilizando HTML5, CSS3 y JavaScript, asegurando la usabilidad y accesibilidad.",
      "Diseñé y administré la base de datos MySQL, creando además las querys necesarias para la aplicación.",
      "Trabajé de forma colaborativa con el equipo de Back-end bajo la metodología Scrum.",
    ],
  },
];

const projects = [
  {
    name: "Rafael Rangel App",
    capture: rafaelrangelapp,
    description:
      "Una plataforma educativa que gestiona las calificaciones de los estudiantes, listado de sus materias y docentes, calendario escolar, y más.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveView: "https://complejo-educativo-rafael-rangel.rf.gd/index.php",
    repo: "https://github.com/miguelb-dev/rafael-rangel-app",
  },
];

export { technologies, experiences, projects };
