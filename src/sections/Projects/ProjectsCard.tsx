import { useTheme } from "../../hooks/useThemeProvider";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Carousel from "../../components/ui/Carousel";
import { useTranslation } from "react-i18next";
import ProjectsIcons from "./ProjectsIcons";
import { FC } from "react";
import { ProjectsCardProps } from "../../types/types";

const ProjectsCard: FC<ProjectsCardProps> = ({
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

  return (
    <article
      className={`${
        theme === "dark" ? "shadow__dark" : "shadow__light"
      } projects__item flex w-full md:w-6/12 flex-col xl:flex-row xl:w-10/12 mx-auto overflow-hidden`}
    >
      <div className="projects__item__card__container relative xl:w-[28rem]">
        {flyer && <ProjectsIcons type={flyer} />}
        <Carousel img1={img1} img2={img2} img3={img3} />
      </div>
      <div
        className={`flex flex-col lg:justify-around gap-6 p-4 lg:pl-8 lg:gap-4 ${
          theme === "dark" ? "bg-slate-700" : "bg-slate-300"
        } z-20`}
      >
        <div className="flex flex-col gap-4 lg:gap-2">
          <h2 className="font-bold text-lg lg:text-2xl">{title}</h2>
          <p className="text-sm xl:w-11/12">{description}.</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="buttons flex gap-4">
          <a
            className="card__btn cuatro"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={t("sections.projects.buttonTitle")}
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
            title={t("sections.projects.githubTitle")}
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
