import { useTheme } from "./ThemeContext";

import AnimatedComponent from "./AnimatedComponent";
import { useTranslation } from "react-i18next";

import HTMLLogo from "../assets/icons/html-logo.png";
import CssLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import ReactLogo from "../assets/icons/react-logo.png";
import NodeLogo from "../assets/icons/nodejs-logo.png";
import SassLogo from "../assets/icons/sass-logo.png";
import GitLogo from "../assets/icons/git-logo.png";

import TailwindLogo from "../assets/icons/tailwindcss-logo.png";
import BootstrapLogo from "../assets/icons/bootstrap-logo.png";

import VsCodeLogo from "../assets/icons/vscode-logo.png";
import GithubLogo from "../assets/icons/github-logo.png";

import FigmaLogo from "../assets/icons/figma-logo.png";
import PhotoshopLogo from "../assets/icons/photoshop-logo.png";
import WebflowLogo from "../assets/icons/webflow-logo.png";

import MobileFirstLogo from "../assets/icons/mobilefirst-logo.png";
import ResponsiveLogo from "../assets/icons/responsive-logo.png";
import BemLogo from "../assets/icons/bem-logo.png";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <main className="scroll-top py-10 w-11/12 mx-auto select-none" id="skills">
      <section className="flex flex-col gap-8">
        <AnimatedComponent animation="fade" delay={1}>
          <div className="text-center mb-5">
            <h2 className="font-bold text-3xl mb-4">
              {t("sections.skills.title")}
            </h2>
            <h3 className="text-lg">{t("sections.skills.description")}</h3>
          </div>
        </AnimatedComponent>
        <article className="flex flex-col gap-8">
          {/* Desarrollo Web */}
          <article
            className={`${
              theme === "dark" ? "shadow__dark" : "shadow__light"
            } flex flex-col gap-8 items-center w-fit mx-auto text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
          >
            <h4 className="font-semibold text-xl">
              {t("sections.skills.subtitle1")}
            </h4>
            <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
              <SkillsCard
                title={t("sections.skills.html")}
                src={HTMLLogo}
                alt="HTML"
              />

              <SkillsCard
                title={t("sections.skills.css")}
                src={CssLogo}
                alt="CSS"
              />

              <SkillsCard
                title={t("sections.skills.javascript")}
                src={JavascriptLogo}
                alt="Javascript"
              />

              <SkillsCard
                title={t("sections.skills.react")}
                src={ReactLogo}
                alt="React"
              />

              <SkillsCard
                title={t("sections.skills.nodejs")}
                src={NodeLogo}
                alt="Node.js"
              />

              <SkillsCard
                title={t("sections.skills.sass")}
                src={SassLogo}
                alt="Sass"
              />

              <SkillsCard
                title={t("sections.skills.git")}
                src={GitLogo}
                alt="Git"
              />
            </article>
          </article>

          <div className="flex flex-wrap gap-8 justify-center">
            {/* Frameworks y Bibliotecas */}
            <article
              className={`${
                theme === "dark" ? "shadow__dark" : "shadow__light"
              } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
            >
              <h4 className="font-semibold text-xl">
                {t("sections.skills.subtitle2")}
              </h4>
              <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
                <SkillsCard
                  title={t("sections.skills.tailwind")}
                  src={TailwindLogo}
                  alt="Tailwind"
                />

                <SkillsCard
                  title={t("sections.skills.bootstrap")}
                  src={BootstrapLogo}
                  alt="Bootstrap"
                />
              </article>
            </article>

            {/* Herramientas de Desarrollo */}
            <article
              className={` ${
                theme === "dark" ? "shadow__dark" : "shadow__light"
              } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
            >
              <h4 className="font-semibold text-xl">
                {t("sections.skills.subtitle3")}
              </h4>
              <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
                <SkillsCard
                  title={t("sections.skills.vscode")}
                  src={VsCodeLogo}
                  alt="Visual Studio Code"
                />

                <SkillsCard
                  title={t("sections.skills.github")}
                  src={GithubLogo}
                  alt="GitHub"
                />
              </article>
            </article>

            {/* Diseño y Prototipado */}
            <article
              className={`${
                theme === "dark" ? "shadow__dark" : "shadow__light"
              } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
            >
              <h4 className="font-semibold text-xl">
                {t("sections.skills.subtitle4")}
              </h4>
              <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
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
              </article>
            </article>

            {/* Metodologías */}
            <article
              className={`${
                theme === "dark" ? "shadow__dark" : "shadow__light"
              } w-full md:w-fit flex flex-col gap-8 items-center text-center bg-sky-300/20 py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300`}
            >
              <h4 className="font-semibold text-xl">
                {t("sections.skills.subtitle5")}
              </h4>
              <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
                <SkillsCard
                  title={t("sections.skills.mobileFirst")}
                  src={MobileFirstLogo}
                  alt="Mobile-first Design"
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
              </article>
            </article>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Skills;
