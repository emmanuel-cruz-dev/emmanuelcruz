import Platzi from "../assets/icons/platzi.png";
import freeCodeCamp from "../assets/icons/freecodecamp.png";
import freeCodeCampNegro from "../assets/icons/freecodecamp-negro.png";
import AcademiaBA from "../assets/icons/academiaba.png";
import AcademiaBABlanco from "../assets/icons/academiaba-blanco.png";
import Nucba from "../assets/icons/nucba.png";
import NucbaNegro from "../assets/icons/nucba-negro.png";

import PlatziTitulo from "../assets/images/platzi-mini.jpg";
import freeCodeCampJavascript from "../assets/images/freecodecamp-javascript-mini.jpg";
import freeCodeCampResponsive from "../assets/images/freecodecamp-responsive-mini.jpg";
import AcademiaBATitulo from "../assets/images/academia-ba-mini.jpg";
import NucbaTitulo from "../assets/images/nucba-mini.jpg";

import PlatziTituloGrande from "../assets/images/platzi.jpg";
import freeCodeCampJavascriptGrande from "../assets/images/freecodecamp-javascript.jpg";
import freeCodeCampResponsiveGrande from "../assets/images/freecodecamp-responsive.jpg";
import AcademiaBATituloGrande from "../assets/images/academia-ba.jpg";
import NucbaTituloGrande from "../assets/images/nucba.jpg";

import { useTheme } from "./ThemeContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Gallery from "./Gallery";

const Education = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const certificates = [
    PlatziTituloGrande,
    freeCodeCampJavascriptGrande,
    freeCodeCampResponsiveGrande,
    AcademiaBATituloGrande,
    NucbaTituloGrande,
  ];

  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const openGallery = (index) => {
    console.log(index);

    setInitialIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  return (
    <section className="py-10 flex flex-col gap-8 w-11/12 mx-auto" id="details">
      <div className="text-center mb-5">
        <h2 className="font-bold text-3xl mb-4">
          {t("sections.certifications.title")}
        </h2>
        <h3 className="text-lg">{t("sections.certifications.description")}.</h3>
      </div>
      <article className="flex flex-col gap-6 xl:w-10/12 mx-auto">
        {/* Certificado 1 */}
        <div className="certificates__card flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-5 px-3">
          <div className="flex flex-col md:flex-row items-center gap-6 xl:w-10/12">
            <a
              href="https://platzi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-20 cover" src={Platzi} alt="" />
            </a>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">Programación Básica</h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="font-bold text-colorTertiary">Platzi</span> -{" "}
                {t("sections.certifications.platzi")}.
              </p>
            </div>
          </div>

          <figure
            className="cursor-pointer -order-1 md:order-none"
            onClick={() => openGallery(0)}
          >
            <img src={PlatziTitulo} className="lg:w-32" />
          </figure>
        </div>

        {/* Certificado 2 */}
        <div className="certificates__card flex justify-between items-center border-b border-gray-600 pb-5 px-3">
          <div className="flex items-center gap-6 w-10/12">
            <a
              href="https://www.freecodecamp.org/espanol/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme === "dark" ? (
                <img className="w-20 cover" src={freeCodeCamp} alt="" />
              ) : (
                <img className="w-20 cover" src={freeCodeCampNegro} alt="" />
              )}
            </a>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">
                JavaScript Algorithms and Data Structures
              </h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="font-bold text-colorTertiary">
                  freeCodeCamp
                </span>{" "}
                - {t("sections.certifications.javascript")}.
              </p>
            </div>
          </div>

          <figure className="cursor-pointer" onClick={() => openGallery(1)}>
            <img src={freeCodeCampJavascript} className="w-32" />
          </figure>
        </div>

        {/* Certificado 3 */}
        <div className="certificates__card flex justify-between items-center border-b border-gray-600 pb-5 px-3">
          <div className="flex items-center gap-6 w-10/12">
            <a
              href="https://www.freecodecamp.org/espanol/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme === "dark" ? (
                <img className="w-20 cover" src={freeCodeCamp} alt="" />
              ) : (
                <img className="w-20 cover" src={freeCodeCampNegro} alt="" />
              )}
            </a>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">Responsive Web Design</h3>
              <div className="flex gap-2">
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span className="font-bold text-colorTertiary">
                    freeCodeCamp
                  </span>{" "}
                  - Certificación con enfoque en HTML, CSS, diseño adaptable y
                  accesibilidad web.
                </p>
              </div>
            </div>
          </div>

          <figure className="cursor-pointer" onClick={() => openGallery(2)}>
            <img src={freeCodeCampResponsive} className="w-32" />
          </figure>
        </div>

        {/* Certificado 4 */}
        <div className="certificates__card flex justify-between items-center border-b border-gray-600 pb-5 px-3">
          <div className="flex items-center gap-6 w-10/12">
            <a
              href="https://academiaba.buenosaires.gob.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme === "dark" ? (
                <img className="w-20 cover" src={AcademiaBABlanco} alt="" />
              ) : (
                <img className="w-20 cover" src={AcademiaBA} alt="" />
              )}
            </a>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">HTML Y CSS AVANZADO</h3>
              <div className="flex gap-2">
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span className="font-bold text-colorTertiary">
                    Academia BA Emprende
                  </span>{" "}
                  - Curso teórico práctico para perfeccionar habilidades en
                  diseño web avanzado.
                </p>
              </div>
            </div>
          </div>

          <figure className="cursor-pointer" onClick={() => openGallery(3)}>
            <img src={AcademiaBATitulo} className="w-32" />
          </figure>
        </div>

        {/* Certificado 5 */}
        <div className="certificates__card flex justify-between items-center border-b border-gray-600 pb-5 px-3">
          <div className="flex items-center gap-6 w-10/12">
            <a
              href="https://www.nucba.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {theme === "dark" ? (
                <img className="w-20 cover" src={Nucba} alt="" />
              ) : (
                <img className="w-20 cover" src={NucbaNegro} alt="" />
              )}
            </a>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-xl">HERRAMIENTAS IA Y NO-CODE</h3>
              <div className="flex gap-2">
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span className="font-bold text-colorTertiary">Nucba</span> -
                  Taller práctico de aprendizaje para el uso de herramientas
                  no-code y aplicaciones basadas en inteligencia artificial.
                </p>
              </div>
            </div>
          </div>

          <figure className="cursor-pointer" onClick={() => openGallery(4)}>
            <img src={NucbaTitulo} className="w-32 cover" />
          </figure>
        </div>
      </article>

      <Gallery
        images={certificates}
        initialIndex={initialIndex}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
      />
    </section>
  );
};

export default Education;
