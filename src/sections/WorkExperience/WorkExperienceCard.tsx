import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../../hooks/useThemeProvider";
import { WorkExperience } from "../../types/types";

const WorkExperienceCard: FC<WorkExperience> = ({
  company,
  projectName,
  period,
  description,
  github,
  technologies,
  tools,
}) => {
  const { theme } = useTheme();

  return (
    <article
      className={`work-experience__card flex flex-col justify-between gap-4 p-5 border transition-shadow duration-300 ${
        theme === "dark"
          ? "border-gray-700 bg-slate-800/50 hover:shadow-lg hover:shadow-slate-700/50"
          : "border-gray-300 bg-white hover:shadow-lg"
      }`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg line-clamp-2">{projectName}</h3>
          <div
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <strong className="text-accent">{company}</strong>
            <br />
            <span className="text-xs">{period}</span>
          </div>
        </div>
        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {description}
        </p>

        <div className="technologies flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full ${
                theme === "dark"
                  ? "bg-slate-700 text-gray-300"
                  : "bg-slate-200 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
          {tools &&
            tools.map((tool, index) => (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded-full ${
                  theme === "dark"
                    ? "bg-slate-700 text-gray-300"
                    : "bg-slate-200 text-gray-700"
                }`}
              >
                {tool}
              </span>
            ))}
        </div>
      </div>
      <div className="flex justify-end">
        <a
          className={`card__btn cuatro flex items-center justify-center gap-2 w-full ${
            theme === "dark" ? "hover:bg-slate-600" : "hover:bg-slate-400"
          }`}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icono">
            <span className="text-[1.2rem]">
              <FaGithub />
            </span>
          </div>
          <span className="texto">Github</span>
        </a>
      </div>
    </article>
  );
};

export default WorkExperienceCard;
