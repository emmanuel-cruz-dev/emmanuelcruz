import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useThemeProvider";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import SkillsCard from "./SkillsCard";
import { getSkillsByCategory } from "../../data/skills";

function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const skillsData = getSkillsByCategory(t);

  return (
    <main className="scroll-top py-10 w-11/12 mx-auto select-none" id="skills">
      <section className="flex flex-col gap-8">
        <AnimatedComponent animation="fade" delay={1}>
          <header className="text-center mb-5">
            <h2 className="font-bold text-3xl mb-4">
              {t("sections.skills.title")}
            </h2>
            <h3 className="text-lg">{t("sections.skills.description")}</h3>
          </header>
        </AnimatedComponent>

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillsData.map((category, index) => (
            <AnimatedComponent
              key={index}
              animation="fade"
              delay={1.2 + index * 0.1}
            >
              <div
                className={`${
                  theme === "dark" ? "shadow__dark" : "shadow__light"
                } h-full bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
              >
                <h4 className="font-semibold text-xl mb-6">{category.title}</h4>

                {category.mainSkills.length > 0 && (
                  <div className="flex flex-wrap gap-6 xl:gap-8 mb-6 justify-center lg:justify-start">
                    {category.mainSkills.map((skill, skillIndex) => (
                      <SkillsCard key={skillIndex} {...skill} />
                    ))}
                  </div>
                )}

                {category.otherSkills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.otherSkills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-sky-500/20 rounded-full text-sm hover:bg-sky-500/30 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedComponent>
          ))}
        </article>
      </section>
    </main>
  );
}

export default Skills;
