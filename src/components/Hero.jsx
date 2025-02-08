import { useTheme } from "./ThemeContext";
import { useTranslation } from "react-i18next";
import picture from "../assets/images/img-profile.webp";
import Links from "./Links";
import AnimatedComponent from "./AnimatedComponent";

const Hero = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className="hero scroll-top py-14 mx-auto w-11/12 select-none"
      id="hero"
    >
      <article className="flex flex-col md:flex-row justify-evenly xl:justify-around xl:items-center gap-6 w-full">
        <div className="flex flex-col gap-2 my-auto md:gap-8">
          <AnimatedComponent delay={1} animation="slide" direction="right">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-3xl lg:text-5xl">
                {t("sections.welcome")}
              </h1>
              <h2 className="font-bold text-2xl lg:text-3xl capitalize">
                {t("sections.hero.title")}
              </h2>
            </div>
          </AnimatedComponent>

          <div className="hidden md:block">
            <Links />
          </div>
        </div>

        <AnimatedComponent animation="scale">
          <figure
            className={`hero__img__container rounded-full overflow-hidden ${
              theme === "dark" ? "shadow__dark" : "shadow__light"
            } flex justify-center items-center w-64 h-64 md:w-[22rem] md:h-[22rem] my-auto mx-auto`}
          >
            <img
              className="w-full cover"
              src={picture}
              alt="Imagen de perfil de Emmanuel Cruz"
              width="500"
              height="500"
            />
          </figure>
        </AnimatedComponent>

        <div className="block md:hidden">
          <Links />
        </div>
      </article>
    </section>
  );
};

export default Hero;
