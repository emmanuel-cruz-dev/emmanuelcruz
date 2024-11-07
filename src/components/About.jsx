import { useTranslation } from "react-i18next";
import Logo from "../assets/icons/logo-negro.svg";
import Screens from "../assets/images/responsive-screens.png";
import Background from "../assets/images/front_end-background.webp";
import { useTheme } from "./ThemeContext";
import Commitment from "./Commitment";

const About = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto"
      id="about"
    >
      <div className="text-center mb-5">
        <h2 className="font-bold text-3xl mb-4">{t("sections.about.title")}</h2>
        <h3 className="text-lg">{t("sections.about.description")}</h3>
      </div>
      <article className="grid md:grid-cols-3 gap-4 md:mx-auto lg:w-11/12">
        <div className="bg-gradient-to-br from-gray-200/50 to-gray-700/50 md:col-span-2 rounded-xl flex flex-col gap-8 justify-between p-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <h4 className="font-bold text-2xl">
              <span className="font-medium">{t("sections.about.hi")}</span>{" "}
              Emmanuel Cruz,
              <br />
              {t("sections.hero.title")}.
            </h4>
            <p className="text-sm lg:text-right lg:w-3/5">
              {t("sections.about.paragraph")}
            </p>
          </div>
          <button className="flex items-center gap-2 text-white bg-black rounded-full px-6 py-3 w-fit transition-colors duration-300 hover:bg-colorTertiary">
            <a className="font-semibold" href="#">
              {t("sections.about.contactMe")}
            </a>
            <span className="text-[28px] material-icons-outlined">
              keyboard_double_arrow_right
            </span>
          </button>
        </div>
        <div className="bg-gradient-to-br from-[#F5F5F5]/80 to-[#E0E0E0]/80 rounded-xl p-4 overflow-hidden">
          <figure className="flex justify-self-end bg-gradient-to-bl from-gray-300 to-white rounded-full p-2 aspect-square w-12">
            <img
              className="h-full"
              src={Logo}
              alt="Una letra e, entre corchetes"
            />
          </figure>
          <figure className="w-fit h-fit">
            <img
              className="-ml-4 -mb-2 min-w-80 lg:min-w-[21rem]"
              src={Screens}
              alt="Un celular y una notebook"
            />
          </figure>
        </div>
        <figure className="hidden lg:block rounded-xl overflow-hidden max-w-fit">
          <img
            className="object-cover w-full lg:w-full lg:h-full"
            src={Background}
            alt=""
          />
        </figure>
        <div className="flex flex-col md:flex-row gap-4 md:col-span-3 lg:col-span-2">
          <div className="h-full flex md:flex-col gap-4 md:w-3/6">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full rounded-xl py-4">
              <p className="text-center text-lg leading-8">
                <span className="text-3xl font-extrabold">
                  <span className="text-colorTertiary">+</span>10
                  <br />
                </span>
                {t("sections.about.courses")}
              </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full rounded-xl py-4">
              <p className="text-center text-lg leading-8">
                <span className="text-3xl font-extrabold">
                  <span className="text-colorTertiary">+</span>500
                  <br />
                </span>
                {t("sections.about.practice")}
              </p>
            </div>
          </div>
          <div
            className={`bg-gradient-to-br ${
              theme === "dark"
                ? "from-red-500/40 to-colorTertiary/60"
                : " from-colorTertiary/70 to-red-800"
            } rounded-xl w-full p-6 flex flex-col gap-8 justify-between`}
          >
            <div className="flex flex-col gap-8 md:flex-row">
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
            <button className="flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 w-fit transition-colors duration-300 hover:bg-colorTertiary">
              <a className="font-semibold" href="#">
                {t("sections.about.button")}
              </a>
              <span className="text-[28px] material-icons-outlined">
                search
              </span>
            </button>
          </div>
        </div>
        {/* <Commitment /> */}
      </article>
    </section>
  );
};

export default About;
