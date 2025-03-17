import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../components/AnimatedComponent";
import { useTheme } from "../../context/ThemeContext";
import { CounterDivs } from "./CounterDivs";

import Logo from "../../assets/icons/logo-negro.png";
import Screens from "../../assets/images/responsive-screens.avif";
import Background from "../../assets/images/front_end-background.webp";

const About = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="about"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.about.title")}
          </h2>
          <h3 className="text-lg">{t("sections.about.description")}</h3>
        </div>
      </AnimatedComponent>
      <article className="grid md:grid-cols-3 gap-4 md:mx-auto lg:w-11/12">
        <div
          className={`${
            theme === "dark" ? "shadow__dark" : "shadow__light"
          } bg-gradient-to-br from-gray-200/50 to-gray-700/50 md:col-span-2 rounded-xl flex flex-col gap-8 justify-between p-6`}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
            <h4 className="font-bold text-2xl lg:w-3/5">
              <span className="font-medium">{t("sections.about.hi")}</span>{" "}
              Emmanuel Cruz,
              <br />
              {t("sections.hero.title")}.
            </h4>
            <p className="text-sm lg:text-right lg:w-3/5">
              {t("sections.about.paragraph")}
            </p>
          </div>
          <div className="flex justify-end">
            <a
              href="#contact"
              className={`${
                theme === "dark" ? "btn__shadow__dark" : "btn__shadow__light"
              } btn__rounded tres`}
            >
              <span className="flex items-center gap-2">
                {t("sections.about.contactMe")}
                <span className="text-[28px] material-icons-outlined">
                  keyboard_double_arrow_right
                </span>
              </span>
            </a>
          </div>
        </div>
        <div
          className={`${
            theme === "dark" ? "shadow__dark" : "shadow__light"
          } bg-gradient-to-br from-[#F5F5F5]/80 to-[#E0E0E0]/80 rounded-xl p-4 overflow-hidden`}
        >
          <figure className="flex justify-self-end items-center bg-gradient-to-bl from-gray-300 to-white rounded-full w-14 h-14">
            <img
              className="w-9 mx-auto"
              src={Logo}
              alt="Una letra e, entre corchetes"
              loading="lazy"
              width="100"
              height="100"
            />
          </figure>
          <figure className="w-fit h-fit">
            <img
              className="-ml-4 -mb-2 min-w-80 lg:min-w-[21rem]"
              src={Screens}
              alt="Un celular y una notebook"
              loading="lazy"
              width="700"
              height="411"
            />
          </figure>
        </div>
        <figure
          className={`${
            theme === "dark" ? "shadow__dark" : "shadow__light"
          } hidden lg:block rounded-xl overflow-hidden max-w-fit`}
        >
          <img
            className="object-cover w-full lg:w-full lg:h-full"
            src={Background}
            alt="Computadora de escritorio con fondo azul"
            loading="lazy"
            width="600"
            height="347"
          />
        </figure>
        <div className="flex flex-col md:flex-row gap-4 md:col-span-3 lg:col-span-2">
          <div className="h-full flex md:flex-col gap-4 md:w-3/6">
            <CounterDivs num={10} title={t("sections.about.courses")} />
            <CounterDivs num={500} title={t("sections.about.practice")} />
          </div>
          <div
            className={`bg-gradient-to-br ${
              theme === "dark"
                ? "from-red-500/40 to-accent/60 shadow__dark"
                : " from-accent/70 to-red-800 shadow__light"
            } rounded-xl w-full p-6 flex flex-col gap-8 justify-between`}
          >
            <div className="flex flex-col gap-6 md:flex-row">
              <h3 className="text-2xl font-medium">
                {t("sections.about.subtitle")}{" "}
                <span className="font-bold lowercase">
                  {t("sections.about.button")}
                </span>
                <span className="font-bold">?</span>
              </h3>
              <p className="md:text-right lg:w-11/12">
                {t("sections.about.copy")}
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="#projects"
                className={`${
                  theme === "dark"
                    ? "btn__shadow__dark--red"
                    : "btn__shadow__light--red"
                } btn__rounded tres`}
              >
                <span className="flex items-center gap-2">
                  {t("sections.about.button")}
                  <span className="text-[28px] material-icons-outlined">
                    search
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
