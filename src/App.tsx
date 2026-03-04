import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles["container"]}>
      <Header></Header>
      <main className={styles["main"]}>
        <Hero></Hero>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
