import { Suspense, lazy } from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loader from "./components/Loader";

const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollToTopButton />
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Education />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
