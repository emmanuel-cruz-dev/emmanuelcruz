import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTopButton";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./styles/main.scss";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import Commitment from "./components/Commitment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import HashScroll from "./components/HashScroll";
import ScrollToTop from "./components/SrollToTop";

function App() {
  const Home = () => {
    return (
      <div>
        <section className="scroll-top" id="hero">
          <Hero />
        </section>
        <section className="scroll-top" id="about">
          <About />
        </section>
        <section className="scroll-top" id="projects">
          <Projects />
        </section>
        <section className="scroll-top" id="skills">
          <Skills />
        </section>
        <section className="scroll-top" id="contact">
          <Contact />
        </section>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <HashScroll />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
