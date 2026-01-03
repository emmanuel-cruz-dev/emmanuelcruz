import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { useTranslation } from "react-i18next";
import { useItemPagination } from "../../hooks/useItemPagination";
import ProjectsCard from "./ProjectsCard";
import getPProjects from "../../data/projects";

function Projects() {
  const { t } = useTranslation();
  const projects = getPProjects(t);
  const { sectionRef, visibleItems, isShowingAll, toggleItems, hasMore } =
    useItemPagination({
      items: projects,
      initialLimit: 3,
      reverse: true,
    });

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="projects"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <header ref={sectionRef} className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.projects.title")}
          </h2>
          <h3 className="text-lg">{t("sections.projects.description")}</h3>
        </header>
      </AnimatedComponent>

      <article>
        <main className="card-container flex flex-wrap gap-12 mx-auto">
          {visibleItems.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </main>
      </article>

      {hasMore && (
        <div className="flex justify-center mt-4">
          <button onClick={toggleItems} className="btn dos shadow-xl">
            <span className="flex items-center gap-2 normal-case">
              {isShowingAll ? t("viewLess") : t("viewMore")}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
