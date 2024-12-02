import { lazy, Suspense } from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";

const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const FlipCards = lazy(() => import("./components/FlipCards"));
const Contact = lazy(() => import("./components/Contact"));

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTopButton />
        <About />
        <Education />
        <Projects />
        <Skills />
        <FlipCards />
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
