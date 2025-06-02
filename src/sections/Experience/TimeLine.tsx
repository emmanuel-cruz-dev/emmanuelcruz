import { FC } from "react";

// Definimos los tipos TypeScript
interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  side: "left" | "right";
}

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

interface TimelineProps {
  experiences?: Experience[];
}

// Datos de ejemplo
const defaultExperiences: Experience[] = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Foo Talent Group",
    period: "Abril 2025 | Presente",
    description:
      "Desarrollo de aplicaciones web modernas utilizando React, TypeScript y Tailwind CSS. Implementación de interfaces responsivas y optimización de rendimiento. Colaboración en equipos ágiles y mantenimiento de sistemas legacy.",
    technologies: ["React", "TypeScript", "Tailwind", "Next.js"],
    side: "left",
  },
  {
    id: 2,
    position: "Desarrollador Frontend",
    company: "No Country",
    period: "Marzo - Abril | 2025",
    description:
      "Desarrollo de sitios web corporativos y e-commerce. Maquetación de diseños usando HTML5, CSS3 y JavaScript vanilla. Integración con CMS como WordPress y optimización SEO básica.",
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    side: "right",
  },
  {
    id: 3,
    position: "Desarrollador Frontend",
    company: "No Country",
    period: "Febrero - Marzo | 2025",
    description:
      "Desarrollo de páginas web para pequeñas empresas y emprendedores. Creación de landing pages efectivas y sitios web responsive. Manejo directo con clientes y gestión de proyectos completos.",
    technologies: ["HTML", "CSS", "React", "TypeScript"],
    side: "left",
  },
  // {
  //   id: 4,
  //   position: "Estudiante de Informática",
  //   company: "Universidad Nacional",
  //   period: "2017 - 2019",
  //   description:
  //     "Formación académica en programación y desarrollo de software. Proyectos universitarios en Java, Python y bases de datos. Participación en hackathons y grupos de estudio de tecnología.",
  //   technologies: ["Java", "Python", "SQL", "Git"],
  //   side: "right",
  // },
];

// Componente para cada item del timeline
const TimelineItem: FC<TimelineItemProps> = ({ experience, isLast }) => {
  const { position, company, period, description, technologies, side } =
    experience;

  return (
    <div className={`relative ${!isLast ? "pb-8 md:mb-0" : ""}`}>
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
                <h3 className="text-2xl font-bold text-white mb-2">
                  {position}
                </h3>
                <h4 className="text-xl text-emerald-400 mb-3">{company}</h4>
                <p className="text-emerald-300 text-sm mb-4 font-medium">
                  {period}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {description}
                </p>
                <div
                  className={`flex flex-wrap gap-2 ${
                    side === "left" ? "md:justify-end" : ""
                  }`}
                >
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-xs rounded-full transition-colors duration-200 cursor-default"
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
                <h3 className="text-2xl font-bold text-white mb-2">
                  {position}
                </h3>
                <h4 className="text-xl text-emerald-400 mb-3">{company}</h4>
                <p className="text-emerald-300 text-sm mb-4 font-medium">
                  {period}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-xs rounded-full transition-colors duration-200 cursor-default"
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
    </div>
  );
};

// Componente principal del timeline
const Timeline: FC<TimelineProps> = ({ experiences = defaultExperiences }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="mx-auto px-4">
        {/* Título de la sección */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Experiencia Laboral
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full"></div>
        </div> */}

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Call to action opcional */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">¿Interesado en trabajar juntos?</p>
          <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105">
            Contáctame
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
