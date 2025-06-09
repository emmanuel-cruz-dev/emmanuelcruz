import AnimatedComponent from "../../components/ui/AnimatedComponent";
import NewCoursesCard from "./NewCoursesCard";
import ForITLogo from "../../assets/icons/fotIT-logo.webp";
import TalentoTechLogo from "../../assets/icons/talento-tech-logo.webp";
import AluraLatamLogo from "../../assets/icons/alura-latam-logo.webp";
import { NewCoursesCardProps } from "@/types/types";

const newCourses: NewCoursesCardProps[] = [
  {
    img: AluraLatamLogo,
    alt: "Icono Alura Latam",
    title: "Alura Latam",
    description:
      "Formación en desarrollo backend con Java y Spring Boot, incluyendo bases de datos relacionales con MySQL y despliegue en Oracle Cloud",
  },
  {
    img: ForITLogo,
    alt: "Icono Academia ForIT",
    title: "Academia ForIT",
    description:
      "Enfoque en buenas prácticas de desarrollo con TypeScript, uso avanzado de Git, Docker, metodologías TDD, Clean Code y arquitectura limpia",
  },
  {
    img: TalentoTechLogo,
    alt: "Icono Talento Tech",
    title: "Talento Tech",
    description:
      "Especialización en desarrollo backend con Node.js, Express y Firestore, trabajando con el ecosistema moderno de JavaScript y Firebase",
  },
];

function NewCourses() {
  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 xl:w-10/12 mx-auto select-none"
      id="new-courses"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">Actualmente Cursando</h2>
          <h3 className="text-lg">
            Ampliando mis conocimientos de desarrollo Backend y Fullstack a
            través de estos cursos.
          </h3>
        </div>
      </AnimatedComponent>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
        {/* Cards */}
        {newCourses.map((course, index) => (
          <NewCoursesCard key={index} {...course} />
        ))}
      </article>
    </section>
  );
}

export default NewCourses;
