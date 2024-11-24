import { useTranslation } from "react-i18next";
import Logro from "../assets/icons/logro.png";
import LogoBlanco from "../assets/icons/logo-blanco.png";
import freeCodeCampLogo from "../assets/images/freecodecamp-logo.jpg";
import PlatziLogo from "../assets/images/platzi-logo.jpg";
import ErosLogo from "../assets/images/eros-logo.jpg";
import NephewsLogo from "../assets/images/nephews-logo.jpg";
import LastModifiedDate from "./LastModifiedDate";
import SocialLinks from "./SocialLinks";
import AnimatedComponent from "./AnimatedComponent";

const Footer = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language === "es" ? "es" : "en";

  return (
    <footer className="footer bg-black text-white select-none">
      <article className="flex flex-col lg:flex-row gap-10 justify-between xl:justify-evenly items-center py-20 p-16 border-b border-gray-600">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 w-44">
            <img
              className="w-24"
              src={LogoBlanco}
              alt="Logo, una letra e entre corchetes"
              loading="lazy"
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
                <img src={PlatziLogo} alt="Logo de Platzi" loading="lazy" />
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
              href="https://eros-libreria.vercel.app/"
              className="flex gap-4 items-center border-b border-gray-600 pb-4"
            >
              <figure className="w-16">
                <img
                  src={ErosLogo}
                  alt="Logo de Eros Librería"
                  loading="lazy"
                />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>Eros Librería</h4>
                <p className="footer__paragraph">{t("footer.eros")}.</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://n3phews.vercel.app/"
              className="flex gap-4 items-center"
            >
              <figure className="w-16">
                <img src={NephewsLogo} alt="Logo de N3phews" loading="lazy" />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>N3phews</h4>
                <p className="footer__paragraph">{t("footer.nephews")}.</p>
              </div>
            </a>
          </div>

          <AnimatedComponent animation="scale" delay={6}>
            <div className="achievements footer__item flex flex-col gap-4 h-full max-w-56">
              <h3 className="footer__title">{t("footer.award")}</h3>

              <p className="text-sm">
                {t("footer.congratulations")}{" "}
                <span className="font-semibold italic capitalize">
                  {t("footer.rank")}
                </span>{" "}
                {t("footer.thanks")}
              </p>

              <AnimatedComponent animation="slide" direction="up" delay={9}>
                <img
                  className="w-14 mx-auto"
                  src={Logro}
                  alt="Icono de medalla"
                  loading="lazy"
                />
              </AnimatedComponent>
            </div>
          </AnimatedComponent>
        </div>
      </article>

      <article className="flex flex-col lg:flex-row gap-6 justify-between items-center p-8 uppercase text-xs">
        <div className="order-last lg:order-first">
          <LastModifiedDate currentLanguage={currentLanguage} />
        </div>
        <div className="flex flex-col gap-4">
          <ul className="footer__list flex flex-col md:flex-row text-center gap-6 font-semibold">
            <li>
              <a href="#hero">{t("navbar.home")}</a>
            </li>
            <li>
              <a href="#about">{t("navbar.about")}</a>
            </li>
            <li>
              <a href="#certifications">{t("navbar.certifications")}</a>
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
            <p className="footer__link text-center">
              © 2024 · {t("footer.paragraph")} <a href="#">Emmanuel Cruz</a>{" "}
              {t("footer.place")} Buenos Aires, Argentina
            </p>
          </AnimatedComponent>
        </div>
        <div className="w-[150px] hidden md:block"></div>
      </article>
    </footer>
  );
};

export default Footer;
