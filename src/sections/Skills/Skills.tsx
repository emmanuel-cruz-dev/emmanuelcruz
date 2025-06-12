import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { useTranslation } from "react-i18next";

import ReactLogo from "../../assets/icons/react-logo.png";
import ReactNativeLogo from "../../assets/icons/react-native-logo.png";
import AngularLogo from "../../assets/icons/angular-logo.png";
import NodeLogo from "../../assets/icons/nodejs-logo.png";
import SassLogo from "../../assets/icons/sass-logo.png";
import GitLogo from "../../assets/icons/git-logo.png";
import ExpressLogo from "../../assets/icons/express-logo.png";
import ExpressLogoNegro from "../../assets/icons/express-negro-logo.png";

import TailwindLogo from "../../assets/icons/tailwindcss-logo.png";
import BootstrapLogo from "../../assets/icons/bootstrap-logo.png";

import VsCodeLogo from "../../assets/icons/vscode-logo.png";
import GithubLogo from "../../assets/icons/github-logo.png";

import FigmaLogo from "../../assets/icons/figma-logo.png";
import PhotoshopLogo from "../../assets/icons/photoshop-logo.png";
import WebflowLogo from "../../assets/icons/webflow-logo.png";

import MobileFirstLogo from "../../assets/icons/mobilefirst-logo.png";
import ResponsiveLogo from "../../assets/icons/responsive-logo.png";
import BemLogo from "../../assets/icons/bem-logo.png";
import SkillsCard from "./SkillsCard";
import SkillsContainer from "./SkillsContainer";
import { useTheme } from "../../hooks/useThemeProvider";
import { getWebSkills } from "../../data/skills";

function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const webSkills = getWebSkills(t);

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
            <SkillsCard
              title={t("sections.skills.react")}
              src={ReactLogo}
              alt="React"
            />

            <SkillsCard
              title={t("sections.skills.reactNative")}
              src={ReactNativeLogo}
              alt="React Native"
            />

            <SkillsCard
              title={t("sections.skills.angular")}
              src={AngularLogo}
              alt="Angular"
            />

            <SkillsCard
              title={t("sections.skills.nodejs")}
              src={NodeLogo}
              alt="Node.js"
            />

            <SkillsCard
              title={t("sections.skills.express")}
              src={theme == "dark" ? ExpressLogo : ExpressLogoNegro}
              alt="Express"
            />

            <SkillsCard
              title={t("sections.skills.tailwind")}
              src={TailwindLogo}
              alt="Tailwind CSS"
            />

            <SkillsCard
              title={t("sections.skills.sass")}
              src={SassLogo}
              alt="Sass"
            />

            <SkillsCard
              title={t("sections.skills.bootstrap")}
              src={BootstrapLogo}
              alt="Bootstrap"
            />
          </SkillsContainer>

          {/* Herramientas de Desarrollo */}
          <SkillsContainer title={t("sections.skills.subtitle3")}>
            <SkillsCard
              title={t("sections.skills.git")}
              src={GitLogo}
              alt="Git"
            />

            <SkillsCard
              title={t("sections.skills.github")}
              src={GithubLogo}
              alt="GitHub"
            />
            <SkillsCard
              title={t("sections.skills.vscode")}
              src={VsCodeLogo}
              alt="VS Code"
            />
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
