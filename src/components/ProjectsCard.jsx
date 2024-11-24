import { useTheme } from "./ThemeContext";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";
import ResponsiveLogo from "../assets/icons/responsiveweb-card-logo.png";
import DarkMode from "../assets/icons/darkmode-logo.png";
import idiomasLogo from "../assets/icons/idiomas-logo.png";

const ProjectsCard = ({
  title,
  description,
  img1,
  img2,
  img3,
  flyer,
  technologies,
  link,
  github,
}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const icons = {
    responsive: (
      <div className="projects__item__card absolute flex flex-col items-center -top-3 -right-[3.6rem] bg-accent z-10 rotate-45 pb-1 pt-5 px-7">
        <img
          src={ResponsiveLogo}
          alt="Logo de responsive"
          className="w-9"
          loading="lazy"
        />
        <span className="uppercase font-bold text-[0.75rem] text-white">
          100% responsive
        </span>
      </div>
    ),
    dark: (
      <div className="projects__item__card absolute flex flex-col items-center -top-3 -right-[3.6rem] bg-black z-10 rotate-45 pb-1 pt-5 px-7">
        <img
          src={DarkMode}
          alt="Logo de darkmode"
          className="w-9"
          loading="lazy"
        />
        <span className="uppercase font-bold text-[0.75rem] text-white">
          modo dark/light
        </span>
      </div>
    ),
    language: (
      <div className="projects__item__card absolute flex flex-col items-center -top-3 -right-[3.6rem] bg-accent z-10 rotate-45 pb-1 pt-5 px-7">
        <img
          src={idiomasLogo}
          alt="Logo de idiomas"
          className="w-9"
          loading="lazy"
        />
        <span className="uppercase font-bold text-[0.75rem] text-white">
          multilenguage
        </span>
      </div>
    ),
  };

  return (
    <article
      className={`${
        theme === "dark" ? "shadow__dark" : "shadow__light"
      } projects__item flex w-full md:w-6/12 flex-col xl:flex-row xl:w-10/12 mx-auto overflow-hidden`}
    >
      <div className="projects__item__card__container relative xl:w-[28rem]">
        {flyer && icons[flyer]}
        <Carousel img1={img1} img2={img2} img3={img3} />
      </div>
      <div
        className={`flex flex-col lg:justify-around gap-6 p-4 lg:pl-8 lg:gap-4 ${
          theme === "dark" ? "bg-slate-700" : "bg-slate-300"
        } z-20`}
      >
        <div className="flex flex-col gap-4 lg:gap-2">
          <h2 className="font-bold text-lg lg:text-2xl">{title}</h2>
          <p className="text-sm xl:w-11/12">{description}</p>
        </div>

        <div className="technologies flex gap-1">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-item">
              <img
                src={tech.img}
                alt={`${tech.name} logo`}
                className="technology-logo w-10"
                title={tech.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="buttons flex gap-4">
          <a
            className="card__btn cuatro"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icono">
              <span className="text-[1.25rem]">
                <FaGlobe />
              </span>
            </div>
            <span className="texto">{t("sections.projects.button")}</span>
          </a>
          <a
            className="card__btn cuatro"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icono">
              <span className="text-[1.35rem]">
                <FaGithub />
              </span>
            </div>
            <span className="texto">Github</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
