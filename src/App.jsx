import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTopButton";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollToTopButton />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
