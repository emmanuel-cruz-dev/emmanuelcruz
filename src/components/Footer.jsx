import { useTranslation } from "react-i18next";
import Logro from "../assets/icons/logro.png";
import LogoBlanco from "../assets/icons/logo-blanco.png";
import freeCodeCampLogo from "../assets/images/freecodecamp-logo.jpg";
import PlatziLogo from "../assets/images/platzi-logo.jpg";
import FoodieLogo from "../assets/images/foodie-logo.webp";
import BaristasLogo from "../assets/images/baristas-logo.webp";
import LastModifiedDate from "./LastModifiedDate";
import SocialLinks from "./SocialLinks";
import AnimatedComponent from "./AnimatedComponent";

const Footer = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language === "es" ? "es" : "en";

  return (
    <footer className="footer text-white select-none">
      <article className="flex flex-col lg:flex-row gap-10 justify-between xl:justify-evenly items-center py-20 p-16 border-b border-gray-600">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 w-44">
            <img
              className="w-24"
              src={LogoBlanco}
              alt="Logo de Emmanuel Cruz,el cual es una letra e entre corchetes"
              loading="lazy"
              width="320"
              height="320"
            />
            <p className="text-sm whitespace-nowrap">"{t("footer.phrase")}."</p>
          </div>
          <SocialLinks />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12">
          <div className="recommendations footer__item flex flex-col gap-4">
            <h3 className="footer__title">{t("footer.channels")}</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@Platzi"
              className="flex gap-4 items-center border-b border-gray-600 pb-4"
            >
              <figure className="w-16">
                <img
                  src={PlatziLogo}
                  alt="Logo de Platzi"
                  loading="lazy"
                  width="600"
                  height="600"
                />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>Platzi</h4>
                <p className="footer__paragraph">{t("footer.platzi")}.</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@freecodecampes"
              className="flex gap-4 items-center"
            >
              <figure className="w-16">
                <img
                  src={freeCodeCampLogo}
                  alt="Logo de freeCodeCamp"
                  loading="lazy"
                  width="600"
                  height="600"
                />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>freeCodeCamp Español</h4>
                <p className="footer__paragraph">{t("footer.freecodecamp")}.</p>
              </div>
            </a>
          </div>

          <div className="latest-projects footer__item flex flex-col gap-4">
            <h3 className="footer__title">{t("footer.projects")}</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://emmalcruz.github.io/foodie/"
              className="flex gap-4 items-center border-b border-gray-600 pb-4"
            >
              <figure className="w-16">
                <img
                  src={FoodieLogo}
                  alt="Logo de Foodie"
                  loading="lazy"
                  width="600"
                  height="600"
                />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>Foodie</h4>
                <p className="footer__paragraph">{t("footer.foodie")}.</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://emmalcruz.github.io/baristas/"
              className="flex gap-4 items-center"
            >
              <figure className="w-16">
                <img
                  src={BaristasLogo}
                  alt="Logo de Baristas"
                  loading="lazy"
                  width="600"
                  height="600"
                />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>Baristas</h4>
                <p className="footer__paragraph">{t("footer.baristas")}.</p>
              </div>
            </a>
          </div>

          <AnimatedComponent animation="scale" delay={6}>
            <div className="achievements footer__item flex flex-col gap-4 h-full max-w-56">
              <h3 className="footer__title">{t("footer.award")}</h3>

              <p className="footer__paragraph">
                {t("footer.congratulations")}{" "}
                <span className="font-semibold italic capitalize text-white">
                  {t("footer.rank")}
                </span>{" "}
                {t("footer.thanks")}
              </p>

              <AnimatedComponent animation="slide" direction="up" delay={9}>
                <img
                  className="w-14 mx-auto"
                  src={Logro}
                  alt="Icono de premio, se ve una mano sosteniendo una medalla."
                  loading="lazy"
                  width="512"
                  height="512"
                />
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </div>
      </article>

      <article className="flex flex-col lg:flex-row gap-8 justify-between items-center p-8 uppercase text-xs">
        <div className="order-last lg:order-first">
          <LastModifiedDate currentLanguage={currentLanguage} />
        </div>
        <div className="flex flex-col gap-8 md:gap-4">
          <ul className="footer__list flex flex-col md:flex-row text-center gap-6 font-semibold">
            <li>
              <a href="#hero">{t("navbar.home")}</a>
            </li>
            <li>
              <a href="#about">{t("navbar.about")}</a>
            </li>
            <li>
              <a href="#projects">{t("navbar.projects")}</a>
            </li>
            <li>
              <a href="#skills">{t("navbar.skills")}</a>
            </li>
            <li>
              <a href="#contact">{t("navbar.contact")}</a>
            </li>
          </ul>
          <AnimatedComponent animation="fade">
            <p className="footer__link text-center text-slate-400">
              © 2024 · {t("footer.paragraph")} <a href="#">Emmanuel Cruz</a> ·
              Buenos Aires, Argentina
            </p>
          </AnimatedComponent>
        </div>
        <div className="w-[150px] hidden md:block"></div>
      </article>
    </footer>
  );
};

export default Footer;
