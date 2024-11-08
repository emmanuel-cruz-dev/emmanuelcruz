import { useTranslation } from "react-i18next";
import Back1 from "../assets/images/back1.jpg";
import Back2 from "../assets/images/back2.jpg";
import Back3 from "../assets/images/back3.jpg";

import HTMLLogo from "../assets/icons/html-logo.png";
import CssLogo from "../assets/icons/css-logo.png";
import JavascriptLogo from "../assets/icons/javascript-logo.png";
import JqueryLogo from "../assets/icons/jquery-logo.png";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Carousel from "./Carousel";

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
      <article>
        <div className="card-container flex flex-col gap-8 mx-auto">
          {/* Proyecto 1 */}
          <article className="flex w-full flex-col lg:flex-row lg:w-10/12 gap-4 bg-slate-50/10 rounded-xl overflow-hidden mx-auto">
            <div className="lg:w-[28rem]">
              <Carousel img1={Back1} img2={Back2} img3={Back3} />
            </div>
            <div className="flex flex-col lg:justify-around gap-4 p-4">
              <div className="flex flex-col gap-2">
                <h2>Los Pollos Hermanos</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  alias sint pariatur laborum expedita cum repellendus? Nobis
                  maiores impedit saepe assumenda qui animi perspiciatis
                </p>
              </div>
              <div className="flex">
                <img
                  src={HTMLLogo}
                  alt="HTML Logo"
                  title={t("sections.skills.html")}
                  className="w-10"
                />
                <img
                  src={CssLogo}
                  alt="CSS Logo"
                  title={t("sections.skills.css")}
                  className="w-10"
                />
                <img
                  src={JavascriptLogo}
                  alt="Javascript Logo"
                  title={t("sections.skills.javascript")}
                  className="w-10"
                />
                <img
                  src={JqueryLogo}
                  alt="Jquery Logo"
                  title={t("sections.skills.javascript")}
                  className="w-10"
                />
              </div>
              <div className="buttons flex gap-4">
                <a
                  className="btn"
                  href="https://emmalcruz.github.io/los-pollos-hermanos-website/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                  <FaGlobe />
                </a>
                <a
                  className="btn"
                  href="https://github.com/EmmaLCruz/los-pollos-hermanos-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <FaGithub />
                </a>
              </div>
            </div>
          </article>

          {/* Proyecto 2 */}
          <article className="flex w-full flex-col lg:flex-row lg:w-10/12 gap-4 bg-slate-50/10 rounded-xl overflow-hidden mx-auto">
            <div className="lg:w-[28rem]">
              <Carousel img1={Back1} img2={Back2} img3={Back3} />
            </div>
            <div className="flex flex-col lg:justify-around gap-4 p-4">
              <div className="flex flex-col gap-2">
                <h2>Mi Portfolio personal</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  alias sint pariatur laborum expedita cum repellendus? Nobis
                  maiores impedit saepe assumenda qui animi perspiciatis
                </p>
              </div>
              <div className="flex">
                <img
                  src={HTMLLogo}
                  alt="HTML Logo"
                  title={t("sections.skills.html")}
                  className="w-10"
                />
                <img
                  src={CssLogo}
                  alt="CSS Logo"
                  title={t("sections.skills.css")}
                  className="w-10"
                />
                <img
                  src={JavascriptLogo}
                  alt="Javascript Logo"
                  title={t("sections.skills.javascript")}
                  className="w-10"
                />
              </div>
              <div className="buttons flex gap-4">
                <a className="btn" href="#">
                  Live Preview
                  <FaGlobe />
                </a>
                <a
                  className="btn"
                  href="https://github.com/EmmaLCruz/emmanuelcruz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <FaGithub />
                </a>
              </div>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};

export default Projects;
