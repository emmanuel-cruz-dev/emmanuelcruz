import AnimatedComponent from "./AnimatedComponent";
import { useTranslation } from "react-i18next";

import Back1 from "../assets/images/back1.jpg";
import Back2 from "../assets/images/back2.jpg";
import Back3 from "../assets/images/back3.jpg";

import CardPortfolio1 from "../assets/images/card-portfolio1.jpg";
import CardPortfolio2 from "../assets/images/card-portfolio2.jpg";
import CardPortfolio3 from "../assets/images/card-portfolio3.jpg";

import HTMLLogo from "../assets/icons/html-logo.png";
import CssLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import JqueryLogo from "../assets/icons/jquery-logo.png";
import ReactLogo from "../assets/icons/react-logo.png";
import TailwindLogo from "../assets/icons/tailwindcss-logo.png";
import SassLogo from "../assets/icons/sass-logo.png";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const { t } = useTranslation();

  const project1 = {
    title: "Los Pollos Hermanos",
    description: t("sections.projects.pollos"),
    img1: Back1,
    img2: Back2,
    img3: Back3,
    flyer: "responsive",
    technologies: [
      { name: "HTML", img: HTMLLogo },
      { name: "CSS", img: CssLogo },
      { name: "Javascript", img: JavascriptLogo },
      { name: "Jquery", img: JqueryLogo },
    ],
    link: "https://emmalcruz.github.io/los-pollos-hermanos-website/",
    github: "https://github.com/EmmaLCruz/los-pollos-hermanos-website",
  };

  const project2 = {
    title: "Emmanuel Cruz | Portfolio",
    description: t("sections.projects.portfolio"),
    img1: CardPortfolio1,
    img2: CardPortfolio2,
    img3: CardPortfolio3,
    flyer: "dark",
    technologies: [
      { name: "React", img: ReactLogo },
      { name: "Tailwind CSS", img: TailwindLogo },
      { name: "Sass", img: SassLogo },
    ],
    link: "https://emmanuel-cruz.netlify.app/",
    github: "https://github.com/EmmaLCruz/emmanuelcruz",
  };

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="projects"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.projects.title")}
          </h2>
          <h3 className="text-lg">{t("sections.projects.description")}</h3>
        </div>
      </AnimatedComponent>
      <article>
        <div className="card-container flex flex-wrap gap-12 mx-auto">
          {/* Proyecto 1 */}
          <ProjectsCard {...project1} />

          {/* Proyecto 2 */}
          <ProjectsCard {...project2} />
        </div>
      </article>
    </section>
  );
};

export default Projects;
