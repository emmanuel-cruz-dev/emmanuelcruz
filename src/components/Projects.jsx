import { useTranslation } from "react-i18next";
import Back1 from "../assets/images/back1.jpg";
import Back2 from "../assets/images/back2.jpg";
import Back3 from "../assets/images/back3.jpg";

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
    img1: Back1,
    img2: Back2,
    img3: Back3,
    flyer: "language",
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
      className="py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="projects"
    >
      <div className="text-center mb-5">
        <h2 className="font-bold text-3xl mb-4">
          {t("sections.projects.title")}
        </h2>
        <h3 className="text-lg">{t("sections.projects.description")}</h3>
      </div>
      <article>
        <div className="card-container flex flex-col gap-8 mx-auto">
          {/* Proyecto 1 */}
          <ProjectsCard {...project1} />

          {/* Proyecto 2 */}
          <ProjectsCard {...project2} />

          {/* Proyecto 3 */}
          {/* <article className="projects__item flex w-full flex-col lg:flex-row lg:w-10/12 overflow-hidden mx-auto">
            <div className="projects__item__card__container lg:w-[28rem] relative">
              <div className="projects__item__card absolute flex flex-col items-center -top-3 -right-[3.3rem] bg-colorTertiary z-10 rotate-45 pb-1 pt-5 px-6">
                <img
                  src={ResponsiveLogo}
                  alt="Responsive Logo"
                  className="w-9"
                />
                <span className="uppercase font-bold text-[0.75rem] text-white">
                  100% responsive
                </span>
              </div>
              <Carousel img1={Back1} img2={Back2} img3={Back3} />
              <div className="absolute bottom-3 left-3 overflow-hidden rounded-full">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t("sections.projects.link")}
                  className="projects__item__btn w-11 h-11 bg-black/70 text-white text-2xl z-10 rounded-full cursor-pointer flex justify-center items-center hover:bg-black transition-colors duration-300"
                >
                  <FaEye />
                </a>
              </div>
            </div>
            <div className="flex flex-col lg:justify-around gap-6 p-4 lg:pl-8 lg:gap-4 bg-slate-600 z-20">
              <div className="flex flex-col gap-4 lg:gap-2">
                <h2 className="font-bold text-lg lg:text-2xl">
                  Los Pollos Hermanos
                </h2>
                <p className="text-sm xl:w-11/12">
                  {t("sections.projects.pollos")}
                </p>
              </div>
              <div className="flex gap-1">
                <img
                  src={HTMLLogo}
                  alt="HTML Logo"
                  title={t("sections.skills.html")}
                  className="w-10"
                />
                <img
                  src={CssLogo}
                  alt="CSS Logo"
                  title={t("sections.skills.css")}
                  className="w-10"
                />
                <img
                  src={JavascriptLogo}
                  alt="Javascript Logo"
                  title={t("sections.skills.javascript")}
                  className="w-10"
                />
                <img
                  src={JqueryLogo}
                  alt="Jquery Logo"
                  title={t("sections.skills.javascript")}
                  className="w-10"
                />
              </div>
              <div className="buttons flex gap-4">
                <a
                  className="card__btn"
                  href="https://emmalcruz.github.io/los-pollos-hermanos-website/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("sections.projects.button")}
                  <span className="text-[1.25rem]">
                    <FaGlobe />
                  </span>
                </a>
                <a
                  className="card__btn"
                  href="https://github.com/EmmaLCruz/los-pollos-hermanos-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span>
                    <FaGithub />
                  </span>
                </a>
              </div>
            </div>
          </article> */}

          {/* Proyecto 4 */}
          {/* <article className="projects__item flex w-full flex-col lg:flex-row lg:w-10/12 overflow-hidden mx-auto">
            <div className="lg:w-[28rem] relative">
              <div className="projects__item__card absolute flex flex-col items-center -top-3 -right-[3.3rem] bg-colorTertiary z-10 rotate-45 pb-1 pt-5 px-6">
                <img src={DarkMode} alt="DarkMode Logo" className="w-9" />
                <span className="uppercase font-bold text-[0.75rem] text-white">
                  dark/light mode
                </span>
              </div>
              <Carousel img1={Back1} img2={Back2} img3={Back3} />
            </div>

            <div className="flex flex-col lg:justify-around gap-6 p-4 lg:pl-8 lg:gap-4 bg-slate-600 z-20">
              <div className="flex flex-col gap-4 lg:gap-2">
                <h2 className="font-bold text-lg lg:text-2xl">
                  Emmanuel Cruz | Portfolio
                </h2>
                <p className="text-sm xl:w-11/12">
                  {t("sections.projects.portfolio")}.
                </p>
              </div>
              <div className="flex gap-1">
                <img
                  src={ReactLogo}
                  alt="React Logo"
                  title={t("sections.skills.react")}
                  className="w-10"
                />
                <img
                  src={TailwindLogo}
                  alt="Tailwind CSS Logo"
                  title={t("sections.skills.tailwind")}
                  className="w-10"
                />
                <img
                  src={SassLogo}
                  alt="Sass Logo"
                  title={t("sections.skills.sass")}
                  className="w-10"
                />
              </div>
              <div className="buttons flex gap-4">
                <a className="card__btn" href="#">
                  {t("sections.projects.button")}
                  <span>
                    <FaGlobe />
                  </span>
                </a>
                <a
                  className="card__btn"
                  href="https://github.com/EmmaLCruz/emmanuelcruz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span>
                    <FaGithub />
                  </span>
                </a>
              </div>
            </div>
          </article> */}
        </div>
      </article>
    </section>
  );
};

export default Projects;
