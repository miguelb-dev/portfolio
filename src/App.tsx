import "./App.css";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
      </main>
    </>
  );
}

export default App;
