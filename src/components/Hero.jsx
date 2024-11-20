import { useTranslation } from "react-i18next";
import picture from "../assets/images/img-profile.png";
import Links from "./Links";

const Hero = () => {
  const { t } = useTranslation(); // Accede a la función de traducción

  return (
    <section className="py-4 md:py-10 mx-auto w-11/12">
      <article className="flex flex-col justify-evenly gap-4 sm:flex-row w-full">
        <div className="flex flex-col gap-2 my-auto md:gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl lg:text-4xl">
              {t("sections.welcome")}.
            </h1>
            <h2 className="font-bold text-2xl lg:text-3xl capitalize">
              {t("sections.hero.title")}.
            </h2>
          </div>
          <div className="hidden sm:flex">
            <Links />
          </div>
        </div>

        <img
          className="hero__img w-64 h-64 md:w-[22rem] md:h-[22rem] object-cover my-auto grayscale-[30%] hover:grayscale-0"
          src={picture}
          alt="Imagen de perfil"
        />

        <div className="sm:hidden">
          <Links />
        </div>
      </article>
    </section>
  );
};

export default Hero;
