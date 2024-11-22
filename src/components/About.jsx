import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "../assets/icons/logo-negro.png";
import Screens from "../assets/images/responsive-screens.png";
import Background from "../assets/images/front_end-background.webp";
import { useTheme } from "./ThemeContext";

const About = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-5"
      >
        <h2 className="font-bold text-3xl mb-4">{t("sections.about.title")}</h2>
        <h3 className="text-lg">{t("sections.about.description")}</h3>
      </motion.div>
      <article className="grid md:grid-cols-3 gap-4 md:mx-auto lg:w-11/12">
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gradient-to-br from-gray-200/50 to-gray-700/50 md:col-span-2 rounded-xl flex flex-col gap-8 justify-between p-6"
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
              className="flex items-center gap-2 text-white font-semibold bg-black rounded-full px-6 py-3 w-fit transition-colors duration-300 hover:bg-accent"
            >
              {t("sections.about.contactMe")}
              <span className="text-[28px] material-icons-outlined">
                keyboard_double_arrow_right
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gradient-to-br from-[#F5F5F5]/80 to-[#E0E0E0]/80 rounded-xl p-4 overflow-hidden"
        >
          <figure className="flex justify-self-end items-center bg-gradient-to-bl from-gray-300 to-white rounded-full w-14 h-14">
            <img
              className="w-9 mx-auto"
              src={Logo}
              alt="Una letra e, entre corchetes"
            />
          </figure>
          <figure className="w-fit h-fit">
            <img
              className="-ml-4 -mb-2 min-w-80 lg:min-w-[21rem]"
              src={Screens}
              alt="Un celular y una notebook"
              loading="lazy"
            />
          </figure>
        </motion.div>
        <motion.figure
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="hidden lg:block rounded-xl overflow-hidden max-w-fit"
        >
          <img
            className="object-cover w-full lg:w-full lg:h-full"
            src={Background}
            alt="Computadora de escritorio con fondo azul"
            loading="lazy"
          />
        </motion.figure>
        <div className="flex flex-col md:flex-row gap-4 md:col-span-3 lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-full flex md:flex-col gap-4 md:w-3/6"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500/60 w-full h-full rounded-xl py-4">
              <p className="text-center text-lg leading-8">
                <span className="text-3xl font-extrabold">
                  <span className="text-accent">+</span>10
                  <br />
                </span>
                {t("sections.about.courses")}
              </p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500/60 w-full h-full rounded-xl py-4">
              <p className="text-center text-lg leading-8">
                <span className="text-3xl font-extrabold">
                  <span className="text-accent">+</span>500
                  <br />
                </span>
                {t("sections.about.practice")}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={`bg-gradient-to-br ${
              theme === "dark"
                ? "from-red-500/40 to-accent/60"
                : " from-accent/70 to-red-800"
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
                className="flex items-center font-semibold gap-2 bg-black text-white rounded-full px-6 py-3 w-fit transition-colors duration-300 hover:bg-accent"
              >
                {t("sections.about.button")}
                <span className="text-[28px] material-icons-outlined">
                  search
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default About;
