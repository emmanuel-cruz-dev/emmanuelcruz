import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { useTranslation } from "react-i18next";
import ProjectsCard from "./ProjectsCard";
import getPProjects from "../../data/projects";

const Projects = () => {
  const { t } = useTranslation();
  const projects = getPProjects(t);

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="projects"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.projects.title")}
          </h2>
          <h3 className="text-lg">{t("sections.projects.description")}</h3>
        </div>
      </AnimatedComponent>
      <article>
        <div className="card-container flex flex-wrap gap-12 mx-auto">
          {/* Mapeo de proyectos */}
          {projects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Projects;
