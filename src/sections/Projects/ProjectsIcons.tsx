import React, { FC } from "react";
import ResponsiveLogo from "../../assets/icons/responsiveweb-card-logo.png";
import DarkMode from "../../assets/icons/darkmode-logo.png";
import idiomasLogo from "../../assets/icons/idiomas-logo.png";
import { ProjectsIconsProps } from "../../types/types";

const ProjectsIcons: FC<ProjectsIconsProps> = ({ type }) => {
  const icons: Record<string, React.JSX.Element> = {
    responsive: (
      <div className="projects__item__card absolute flex flex-col items-center -top-3 -right-[3.6rem] bg-accent z-10 rotate-45 pb-1 pt-5 px-7">
        <img
          src={ResponsiveLogo}
          alt="Logo de responsive"
          className="w-9"
          loading="lazy"
          width="100"
          height="100"
        />
        <span className="uppercase font-bold text-[0.75rem] text-white">
          100% responsive
        </span>
      </div>
    ),
    darkMode: (
      <div className="projects__item__card absolute flex flex-col items-center -top-3 -right-[3.6rem] bg-black z-10 rotate-45 pb-1 pt-5 px-7">
        <img
          src={DarkMode}
          alt="Logo de darkmode"
          className="w-9"
          loading="lazy"
          width="100"
          height="100"
        />
        <span className="uppercase font-bold text-[0.75rem] text-white">
          modo dark/light
        </span>
      </div>
    ),
    language: (
      <div className="projects__item__card absolute flex flex-col items-center -top-4 -right-[3.3rem] bg-cyan-500 z-10 rotate-45 pb-1 pt-5 px-7">
        <img
          src={idiomasLogo}
          alt="Logo de idiomas"
          className="w-9"
          loading="lazy"
          width="100"
          height="100"
        />
        <span className="uppercase font-bold text-[0.75rem] text-white">
          multilenguage
        </span>
      </div>
    ),
  };

  return icons[type];
};

export default ProjectsIcons;
