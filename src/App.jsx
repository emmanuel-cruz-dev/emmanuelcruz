import { lazy, Suspense } from "react";
import "./styles/main.scss";
import Loader from "./components/ui/Loader";
import Hero from "./sections/Hero/Hero";

const Header = lazy(() => import("./components/common/Header/Header"));
const ScrollToTopButton = lazy(() =>
  import("./components/common/ScrollButton/ScrollToTopButton")
);
const About = lazy(() => import("./sections/About/About"));
const Education = lazy(() => import("./sections/Education/Education"));
const Projects = lazy(() => import("./sections/Projects/Projects"));
const Skills = lazy(() => import("./sections/Skills/Skills"));
const FlipCards = lazy(() => import("./sections/FlipCards/FlipCards"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
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
