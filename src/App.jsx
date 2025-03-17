import { lazy, Suspense } from "react";
import "./styles/main.scss";
import Loader from "./components/Loader";
import Hero from "./components/Hero";

const Header = lazy(() => import("./components/Header"));
const ScrollToTopButton = lazy(() =>
  import("./components/common/ScrollButton/ScrollToTopButton")
);
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const FlipCards = lazy(() => import("./components/FlipCards"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/common/Footer/Footer"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <ScrollToTopButton />
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
        <FlipCards />
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
