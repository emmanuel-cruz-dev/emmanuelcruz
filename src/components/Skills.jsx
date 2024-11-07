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

const Skills = () => {
  const { t } = useTranslation();

  return (
    <main className="scroll-top py-10 w-11/12 mx-auto select-none" id="skills">
      <section className="flex flex-col gap-8">
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.skills.title")}
          </h2>
          <h3 className="text-lg">{t("sections.skills.description")}</h3>
        </div>
        <article className="flex flex-col gap-8">
          {/* Desarrollo Web */}
          <article className="flex flex-col gap-8 items-center w-fit mx-auto text-center bg-sky-300/20 rounded-md py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300">
            <h4 className="font-semibold text-xl">
              {t("sections.skills.subtitle1")}
            </h4>
            <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
              <div className="card">
                <img
                  src={HTMLLogo}
                  alt="HTML Logo"
                  title={t("sections.skills.html")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-semibold">HTML</p>
              </div>

              <div className="card">
                <img
                  src={CssLogo}
                  alt="CSS Logo"
                  title={t("sections.skills.css")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-semibold">CSS</p>
              </div>

              <div className="card">
                <img
                  src={JavascriptLogo}
                  alt="Javascript Logo"
                  title={t("sections.skills.javascript")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-semibold">JavaScript</p>
              </div>

              <div className="card">
                <img
                  src={ReactLogo}
                  alt="React Logo"
                  title={t("sections.skills.react")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-semibold">React</p>
              </div>

              <div className="card">
                <img
                  src={NodeLogo}
                  alt="Node Logo"
                  title={t("sections.skills.nodejs")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-semibold">Node.js</p>
              </div>

              <div className="card">
                <img
                  src={SassLogo}
                  alt="Sass Logo"
                  title={t("sections.skills.sass")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-semibold">Sass</p>
              </div>

              <div className="card">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  title={t("sections.skills.git")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-semibold">Git</p>
              </div>
            </article>
          </article>

          <div className="flex flex-wrap gap-8 justify-center">
            {/* Frameworks y Bibliotecas */}
            <article className="flex flex-col gap-8 items-center text-center bg-sky-300/20 rounded-md py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300">
              <h4 className="font-semibold text-xl">
                {t("sections.skills.subtitle2")}
              </h4>
              <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
                <div className="card">
                  <img
                    src={TailwindLogo}
                    alt="Tailwind Logo"
                    title={t("sections.skills.tailwind")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-semibold">Tailwind CSS</p>
                </div>

                <div className="card">
                  <img
                    src={BootstrapLogo}
                    alt="Bootstrap Logo"
                    title={t("sections.skills.bootstrap")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-semibold">Bootstrap</p>
                </div>
              </article>
            </article>

            {/* Herramientas de Desarrollo */}
            <article className="flex flex-col gap-8 items-center text-center bg-sky-300/20 rounded-md py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300">
              <h4 className="font-semibold text-xl">
                {t("sections.skills.subtitle3")}
              </h4>
              <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
                <div className="card">
                  <img
                    src={VsCodeLogo}
                    alt="Visual Studio Code Logo"
                    title={t("sections.skills.vscode")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-semibold">Visual Studio Code</p>
                </div>

                <div className="card">
                  <img
                    src={GithubLogo}
                    alt="Github Logo"
                    title={t("sections.skills.github")}
                    className="w-16 opacity-60 hover:opacity-100 transition-all duration-300"
                  />
                  <p className="font-semibold">GitHub</p>
                </div>
              </article>
            </article>

            {/* Diseño y Prototipado */}
            <article className="flex flex-col gap-8 items-center text-center bg-sky-300/20 rounded-md py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300">
              <h4 className="font-semibold text-xl">
                {t("sections.skills.subtitle4")}
              </h4>
              <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
                <div className="card">
                  <img
                    src={FigmaLogo}
                    alt="Figma Logo"
                    title={t("sections.skills.figma")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-semibold">Figma</p>
                </div>

                <div className="card">
                  <img
                    src={PhotoshopLogo}
                    alt="Photoshop Logo"
                    title={t("sections.skills.photoshop")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-semibold">Photoshop</p>
                </div>

                <div className="card">
                  <img
                    src={WebflowLogo}
                    alt="Webflow Logo"
                    title={t("sections.skills.webflow")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-semibold">Webflow</p>
                </div>
              </article>
            </article>

            {/* Metodologías */}
            <article className="flex flex-col gap-8 items-center text-center bg-sky-300/20 rounded-md py-6 px-10 border-2 border-sky-300/20 hover:bg-transparent transition-colors duration-300">
              <h4 className="font-semibold text-xl">
                {t("sections.skills.subtitle5")}
              </h4>
              <article className="flex flex-wrap gap-6 lg:gap-14 justify-around items-center">
                <div className="card">
                  <img
                    src={MobileFirstLogo}
                    alt="Mobile-first Design Logo"
                    title={t("sections.skills.mobileFirst")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-semibold">Mobile-first</p>
                </div>

                <div className="card">
                  <img
                    src={ResponsiveLogo}
                    alt="Responsive Design Logo"
                    title={t("sections.skills.responsive")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-semibold">Responsive Design</p>
                </div>

                <div className="card">
                  <img
                    src={BemLogo}
                    alt="BEM Logo"
                    title={t("sections.skills.bem")}
                    className="w-16 opacity-60 hover:opacity-100 transition-all duration-300"
                  />
                  <p className="font-semibold">BEM</p>
                </div>
              </article>
            </article>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Skills;
