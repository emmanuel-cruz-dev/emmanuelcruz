import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <footer className="footer bg-primary">
      <article className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-center px-20 py-16 border-b border-gray-600">
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-3 w-44">
            <img
              className="w-36"
              src="./src/assets/images/ola-gesell.png"
              alt=""
            />
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-bold">Emmanuel Cruz</h3>
              <h4 className="text-sm">Desarrollador Frontend</h4>
              <p className="text-xs">"No hay plan B para el éxito."</p>
            </div>
          </div>

          <div className="footer__social mx-auto">
            <div className="flex gap-4 justify-center">
              <a
                title="Linkedin"
                className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
                href="https://www.linkedin.com/in/emmanuel-cruz-6a242430b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-full h-full" />
              </a>
              <a
                title="Github"
                className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
                href="https://github.com/EmmaLCruz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-full h-full" />
              </a>
              <a
                title="Curriculum Vitae"
                className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
                href="/Emmanuel-Cruz-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileAlt className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-16">
          <div className="recommendations footer__item flex flex-col gap-4">
            <h3 className="footer__title">Recomendaciones</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@freecodecampes"
              className="flex gap-4 items-center border-b border-gray-600 pb-4"
            >
              <figure className="w-16">
                <img src="./src/assets/images/freecodecamp-logo.jpg" alt="" />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>freeCodeCamp Español</h4>
                <p className="footer__paragraph">Cursos Técnicos en Español</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@AlexCGDesign"
              className="flex gap-4 items-center"
            >
              <figure className="w-16">
                <img src="./src/assets/images/alexcg-logo.jpg" alt="" />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>AlexCG Design</h4>
                <p className="footer__paragraph">Desarrollo Web Moderno</p>
              </div>
            </a>
          </div>

          <div className="latest-projects footer__item flex flex-col gap-4">
            <h3 className="footer__title">Proyectos Recientes</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://eros-libreria.vercel.app/"
              className="flex gap-4 items-center border-b border-gray-600 pb-4"
            >
              <figure className="w-16">
                <img src="./src/assets/images/eros-logo.jpg" alt="" />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>Eros Librería</h4>
                <p className="footer__paragraph">Sitio Web de una Librería</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://n3phews.vercel.app/"
              className="flex gap-4 items-center"
            >
              <figure className="w-16">
                <img src="./src/assets/images/nephews-logo.jpg" alt="" />
              </figure>
              <div className="flex flex-col justify-evenly h-full">
                <h4>N3phews Website</h4>
                <p className="footer__paragraph">Portal de artista</p>
              </div>
            </a>
          </div>

          <div className="general flex flex-col gap-4">
            <h3 className="footer__title">General</h3>
            <ul className="text-sm leading-7">
              <li>Buenos Aires, Argentina</li>
              <li>Derechos de autor</li>
              <li>Política de privacidad</li>
              <li>Términos y condiciones</li>
              <li>
                Última actualización:
                <br />
                11 de Noviembre 2024
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article className="flex flex-col gap-6 items-center p-8 uppercase text-xs">
        <ul className="footer__list flex flex-col md:flex-row gap-6 text-center">
          <li>
            <a href="#">{t("navbar.home")}</a>
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
            <a href="#">{t("navbar.contact")}</a>
          </li>
        </ul>
        <p className="footer__link">
          © 2024 - Powered by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://emmanuel-cruz.netlify.app/"
          >
            Emmanuel
          </a>
        </p>
      </article>
    </footer>
  );
};

export default Footer;
