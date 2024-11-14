import { useTranslation } from "react-i18next";
import picture from "../assets/images/img-profile.png";
import Links from "./Links";

const Hero = () => {
  const { t } = useTranslation(); // Accede a la función de traducción

  return (
    <section className="py-4 mx-4 md:py-10 md:mx-auto xl:my-1 w-11/12">
      <article className="flex flex-col justify-around flex-wrap gap-4 sm:flex-row md:mx-auto">
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

        <figure className="w-64 h-64 xl:w-[22rem] xl:h-[22rem] mx-auto md:mx-0 md:my-auto">
          <img
            className="w-full h-full object-cover"
            src={picture}
            alt="Imagen de perfil"
          />
        </figure>

        <div className="sm:hidden">
          <Links />
        </div>
      </article>
    </section>
  );
};

export default Hero;
