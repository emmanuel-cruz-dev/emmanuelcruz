import { workExperiences } from "../../data/workExperiences";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import Timeline from "./TimeLine";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="experience"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <header className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.experience.title")}
          </h2>
          <h3 className="text-lg">{t("sections.experience.description")}</h3>
        </header>
      </AnimatedComponent>
      <Timeline experiences={workExperiences} />
    </section>
  );
}

export default Experience;
