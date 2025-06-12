import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { useTranslation } from "react-i18next";

import FigmaLogo from "../../assets/icons/figma-logo.png";
import PhotoshopLogo from "../../assets/icons/photoshop-logo.png";
import WebflowLogo from "../../assets/icons/webflow-logo.png";

import MobileFirstLogo from "../../assets/icons/mobilefirst-logo.png";
import ResponsiveLogo from "../../assets/icons/responsive-logo.png";
import BemLogo from "../../assets/icons/bem-logo.png";

import SkillsCard from "./SkillsCard";
import SkillsContainer from "./SkillsContainer";
import { useTheme } from "../../hooks/useThemeProvider";
import {
  getDevelopmentTools,
  getFrameworks,
  getWebSkills,
} from "../../data/skills";

function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const webSkills = getWebSkills(t);
  const frameworks = getFrameworks(t, theme);
  const developmentTools = getDevelopmentTools(t);

  return (
    <main className="scroll-top py-10 w-11/12 mx-auto select-none" id="skills">
      <section className="flex flex-col gap-8">
        <AnimatedComponent animation="fade" delay={1}>
          <div className="text-center mb-5">
            <h2 className="font-bold text-3xl mb-4">
              {t("sections.skills.title")}
            </h2>
            <h3 className="text-lg">{t("sections.skills.description")}.</h3>
          </div>
        </AnimatedComponent>
        <article className="flex flex-col gap-8 justify-center items-center w-full lg:flex-row lg:flex-wrap">
          {/* Desarrollo Web */}
          <SkillsContainer title={t("sections.skills.subtitle1")}>
            {webSkills.map((skill, index) => (
              <SkillsCard key={index} {...skill} />
            ))}
          </SkillsContainer>

          {/* Frameworks y Bibliotecas */}
          <SkillsContainer title={t("sections.skills.subtitle2")}>
            {frameworks.map((framework, index) => (
              <SkillsCard key={index} {...framework} />
            ))}
          </SkillsContainer>

          {/* Herramientas de Desarrollo */}
          <SkillsContainer title={t("sections.skills.subtitle3")}>
            {developmentTools.map((tools, index) => (
              <SkillsCard key={index} {...tools} />
            ))}
          </SkillsContainer>

          {/* Diseño y Prototipado */}
          <SkillsContainer title={t("sections.skills.subtitle4")}>
            <SkillsCard
              title={t("sections.skills.figma")}
              src={FigmaLogo}
              alt="Figma"
            />

            <SkillsCard
              title={t("sections.skills.photoshop")}
              src={PhotoshopLogo}
              alt="Photoshop"
            />

            <SkillsCard
              title={t("sections.skills.webflow")}
              src={WebflowLogo}
              alt="Webflow"
            />
          </SkillsContainer>

          {/* Metodologías */}
          <SkillsContainer title={t("sections.skills.subtitle5")}>
            <SkillsCard
              title={t("sections.skills.mobileFirst")}
              src={MobileFirstLogo}
              alt="Mobile-first"
            />

            <SkillsCard
              title={t("sections.skills.responsive")}
              src={ResponsiveLogo}
              alt="Responsive Design"
            />

            <SkillsCard
              title={t("sections.skills.bem")}
              src={BemLogo}
              alt="BEM"
            />
          </SkillsContainer>
        </article>
      </section>
    </main>
  );
}

export default Skills;
