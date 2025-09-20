import { TimelineItemProps } from "@/types/types";
import { FC } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const TimelineItem: FC<TimelineItemProps> = ({ experience, isLast }) => {
  const { company, period, description, github, technologies, side } =
    experience;

  return (
    <article className={`relative ${!isLast ? "pb-8 md:mb-0" : ""}`}>
      {/* Línea vertical (solo si no es el último elemento) */}
      {!isLast && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-600 z-0 hidden md:block" />
      )}

      {/* Línea vertical para móvil */}
      {!isLast && (
        <div className="absolute left-6 top-1/2 w-0.5 h-full bg-gray-600 z-0 md:hidden" />
      )}

      {/* Punto de conexión */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full z-10 hidden md:block" />
      <div className="absolute left-6 top-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full z-10 md:hidden" />

      {/* Contenido */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {side === "left" ? (
          <>
            {/* Contenido a la izquierda */}
            <div className="md:text-right ml-12 md:ml-0 z-10">
              <div
                className={`
                bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300
                ${
                  side === "left"
                    ? "border-r-4 border-emerald-500 md:border-l-0 border-l-4 md:border-r-4 after:z-[-1] after:content-[''] after:absolute after:right-1/2 after:top-1/2 after:translate-y-[7px] after:w-12 after:h-0.5 after:bg-emerald-500"
                    : "border-l-4 border-emerald-500 rounded-l-xl"
                }
              `}
              >
                <h3 className="text-2xl font-medium text-emerald-400 mb-1">
                  {company}
                </h3>
                <p className="text-emerald-300 mb-3 font-medium">{period}</p>
                <p className="text-gray-300 leading-relaxed mb-3">
                  {description}
                </p>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 transition-colors duration-200 mb-4"
                >
                  Ver repositorio
                  <FaExternalLinkAlt size={16} />
                </a>
                <div
                  className={`flex flex-wrap gap-2 ${
                    side === "left" ? "md:justify-end" : ""
                  }`}
                >
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Espacio vacío a la derecha */}
            <div className="hidden md:block" />
          </>
        ) : (
          <>
            {/* Espacio vacío a la izquierda */}
            <div className="hidden md:block" />
            {/* Contenido a la derecha */}
            <div className="ml-12 md:ml-0 z-10">
              <div
                className={`
                bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500  after:z-[-1] after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:translate-y-[7px] after:w-12 after:h-0.5 after:bg-emerald-500`}
              >
                <h3 className="text-2xl font-medium text-emerald-400 mb-3">
                  {company}
                </h3>
                <p className="text-emerald-300 mb-4 font-medium">{period}</p>
                <p className="text-gray-300 leading-relaxed mb-2">
                  {description}
                </p>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 transition-colors duration-200 mb-3"
                >
                  Ver repositorio
                  <FaExternalLinkAlt size={16} />
                </a>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default TimelineItem;
