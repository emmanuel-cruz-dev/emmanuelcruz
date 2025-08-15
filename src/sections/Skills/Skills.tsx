import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import SkillsCard from "./SkillsCard";
import SkillsContainer from "./SkillsContainer";
import { useTheme } from "../../hooks/useThemeProvider";
import {
  getDesignPrototyping,
  getDevelopmentTools,
  getFrameworks,
  getManageTools,
  getWebSkills,
} from "../../data/skills";

function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const webSkills = getWebSkills(t);
  const frameworks = getFrameworks(t, theme);
  const developmentTools = getDevelopmentTools(t);
  const designTools = getDesignPrototyping(t);
  const manageTools = getManageTools(t);

  return (
    <main className="scroll-top py-10 w-11/12 mx-auto select-none" id="skills">
      <section className="flex flex-col gap-8">
        <AnimatedComponent animation="fade" delay={1}>
          <header className="text-center mb-5">
            <h2 className="font-bold text-3xl mb-4">
              {t("sections.skills.title")}
            </h2>
            <h3 className="text-lg">{t("sections.skills.description")}.</h3>
          </header>
        </AnimatedComponent>
        <article className="flex flex-col gap-8 justify-center items-center w-full lg:flex-row lg:flex-wrap">
          <SkillsContainer title={t("sections.skills.subtitle1")}>
            {webSkills.map((skill, index) => (
              <SkillsCard key={index} {...skill} />
            ))}
          </SkillsContainer>

          <SkillsContainer title={t("sections.skills.subtitle2")}>
            {frameworks.map((framework, index) => (
              <SkillsCard key={index} {...framework} />
            ))}
          </SkillsContainer>

          <SkillsContainer title={t("sections.skills.subtitle3")}>
            {developmentTools.map((tools, index) => (
              <SkillsCard key={index} {...tools} />
            ))}
          </SkillsContainer>

          <SkillsContainer title={t("sections.skills.subtitle4")}>
            {designTools.map((tools, index) => (
              <SkillsCard key={index} {...tools} />
            ))}
          </SkillsContainer>

          <SkillsContainer title={t("sections.skills.subtitle5")}>
            {manageTools.map((methodology, index) => (
              <SkillsCard key={index} {...methodology} />
            ))}
          </SkillsContainer>
        </article>
      </section>
    </main>
  );
}

export default Skills;
