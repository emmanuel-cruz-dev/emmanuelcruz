import AnimatedComponent from "../../components/ui/AnimatedComponent";
import NewCoursesCard from "./NewCoursesCard";
import ForITLogo from "../../assets/icons/fotIT-logo.webp";
import TalentoTechLogo from "../../assets/icons/talento-tech-logo.webp";
import AluraLatamLogo from "../../assets/icons/alura-latam-logo.webp";

const newCourses = [
  {
    id: 1,
    img: AluraLatamLogo,
    alt: "Icono Alura Latam",
    title: "Alura Latam",
    description:
      " Tecnologías y herramientas: Java, Spring Boot, MySQL, Oracle Cloud, IA aplicada",
  },
  {
    id: 2,
    img: ForITLogo,
    alt: "Icono Academia ForIT",
    title: "Academia ForIT",
    description:
      "Herramientas y metodologías: TypeScript, Docker, Git avanzado, TDD, Clean Code, Arquitectura limpia",
  },
  {
    id: 3,
    img: TalentoTechLogo,
    alt: "Icono Talento Tech",
    title: "Talento Tech",
    description:
      "Tecnologías y herramientas: Node.js, Express, Firestore, ecosistema JavaScript para backend",
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
