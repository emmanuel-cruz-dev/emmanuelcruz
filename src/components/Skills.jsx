import { useTranslation } from "react-i18next";

import HTMLLogo from "../assets/icons/html-logo.png";
import CssLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import ReactLogo from "../assets/icons/react-logo.png";
import NodeLogo from "../assets/icons/nodejs-logo.png";
import SassLogo from "../assets/icons/sass-logo.png";
import GitLogo from "../assets/icons/git-logo.png";

import FigmaLogo from "../assets/icons/figma-logo.png";
import PhotoshopLogo from "../assets/icons/photoshop-logo.png";
import WebflowLogo from "../assets/icons/webflow-logo.png";

import TailwindLogo from "../assets/icons/tailwindcss-logo.png";
import BootstrapLogo from "../assets/icons/bootstrap-logo.png";

import VsCodeLogo from "../assets/icons/vscode-logo.png";
import GithubLogo from "../assets/icons/github-logo.png";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <main className="scroll-top py-10 w-11/12 mx-auto" id="skills">
      <section className="flex flex-col gap-8">
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.skills.title")}
          </h2>
          <h3 className="text-lg">{t("sections.skills.description")}</h3>
        </div>
        <article className="flex flex-col gap-16">
          {/* Desarrollo Web */}
          <article className="flex flex-col gap-8 items-center text-center bg-slate-400/10 rounded-md p-8">
            <h4>{t("sections.skills.subtitle1")}</h4>
            <article className="flex gap-8 flex-wrap justify-center items-center">
              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <img
                  src={HTMLLogo}
                  alt="HTML Logo"
                  title={t("sections.skills.html")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-bold">HTML</p>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <img
                  src={CssLogo}
                  alt="CSS Logo"
                  title={t("sections.skills.css")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-bold">CSS</p>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <img
                  src={JavascriptLogo}
                  alt="Javascript Logo"
                  title={t("sections.skills.javascript")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-bold">JavaScript</p>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <img
                  src={ReactLogo}
                  alt="React Logo"
                  title={t("sections.skills.react")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-bold">React</p>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <img
                  src={NodeLogo}
                  alt="Node Logo"
                  title={t("sections.skills.nodejs")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-bold">Node.js</p>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <img
                  src={SassLogo}
                  alt="Sass Logo"
                  title={t("sections.skills.sass")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-bold">Sass</p>
              </div>

              <div className="flex flex-col gap-3 justify-center items-center text-center">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  title={t("sections.skills.git")}
                  className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="font-bold">Git</p>
              </div>
            </article>
          </article>

          <div className="flex flex-wrap gap-16 justify-center">
            {/* Diseño y Prototipado */}
            <article className="flex flex-col gap-8 items-center text-center bg-slate-400/10 rounded-md p-8">
              <h4>{t("sections.skills.subtitle2")}</h4>
              <article className="flex gap-8">
                <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <img
                    src={FigmaLogo}
                    alt="Figma Logo"
                    title={t("sections.skills.figma")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-bold">Figma</p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <img
                    src={PhotoshopLogo}
                    alt="Photoshop Logo"
                    title={t("sections.skills.photoshop")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-bold">Photoshop</p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <img
                    src={WebflowLogo}
                    alt="Webflow Logo"
                    title={t("sections.skills.webflow")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-bold">Webflow</p>
                </div>
              </article>
            </article>

            {/* Frameworks y Bibliotecas */}
            <article className="flex flex-col gap-8 items-center text-center bg-slate-400/10 rounded-md p-8">
              <h4>{t("sections.skills.subtitle3")}</h4>
              <article className="flex gap-8">
                <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <img
                    src={TailwindLogo}
                    alt="Tailwind Logo"
                    title={t("sections.skills.tailwind")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-bold">Tailwind CSS</p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <img
                    src={BootstrapLogo}
                    alt="Bootstrap Logo"
                    title={t("sections.skills.bootstrap")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-bold">Bootstrap</p>
                </div>
              </article>
            </article>

            {/* Herramientas de Desarrollo */}
            <article className="flex flex-col gap-8 items-center text-center bg-slate-400/10 rounded-md p-8">
              <h4>{t("sections.skills.subtitle4")}</h4>
              <article className="flex gap-8">
                <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <img
                    src={VsCodeLogo}
                    alt="Visual Studio Code Logo"
                    title={t("sections.skills.vscode")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-bold">Visual Studio Code</p>
                </div>

                <div className="flex flex-col gap-3 justify-center items-center text-center">
                  <img
                    src={GithubLogo}
                    alt="Github Logo"
                    title={t("sections.skills.github")}
                    className="w-16 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="font-bold">GitHub</p>
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
