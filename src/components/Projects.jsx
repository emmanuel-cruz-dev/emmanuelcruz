import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto"
      id="projects"
    >
      <div className="text-center mb-5">
        <h2 className="font-bold text-3xl mb-4">
          {t("sections.projects.title")}
        </h2>
        <h3 className="text-lg">{t("sections.projects.description")}</h3>
      </div>
    </section>
  );
};

export default Projects;
