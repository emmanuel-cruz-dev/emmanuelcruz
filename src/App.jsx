import "./styles/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTopButton";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollToTopButton />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
