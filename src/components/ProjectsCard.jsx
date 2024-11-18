import { FaGithub, FaGlobe, FaEye } from "react-icons/fa";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";

const ProjectsCard = ({
  title,
  description,
  img1,
  img2,
  img3,
  href,
  link,
  github,
}) => {
  const { t } = useTranslation();
  return (
    <article className="projects__item flex w-full flex-col lg:flex-row lg:w-10/12 overflow-hidden mx-auto">
      <div className="projects__item__card__container lg:w-[28rem] relative">
        <div className="projects__item__card absolute flex flex-col items-center -top-3 -right-[3.3rem] bg-colorTertiary z-10 rotate-45 pb-1 pt-5 px-6">
          {/* <img src={flyerLogo} alt={`${flyerLogo}`} className="w-9" /> */}
          <span className="uppercase font-bold text-[0.75rem] text-white">
            100% responsive
          </span>
        </div>
        <Carousel img1={img1} img2={img2} img3={img3} />
        <div className="absolute bottom-3 left-3 overflow-hidden rounded-full">
          <a
            href={href}
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
          <h2 className="font-bold text-lg lg:text-2xl">{title}</h2>
          <p className="text-sm xl:w-11/12">{description}</p>
        </div>
        {/* <div className="flex gap-1">
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
        </div> */}
        <div className="buttons flex gap-4">
          <a
            className="card__btn"
            href={link}
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
            href={github}
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
    </article>
  );
};

export default ProjectsCard;
