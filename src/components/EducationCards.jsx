import AnimatedComponent from "./AnimatedComponent";
import { useTheme } from "./ThemeContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import PlatziTituloGrande from "../assets/images/platzi.webp";
import JavascriptGrande from "../assets/images/freecodecamp-javascript.webp";
import ResponsiveGrande from "../assets/images/freecodecamp-responsive.webp";
import HTMLCSSTituloGrande from "../assets/images/html-css.webp";
import UXResearchTituloGrande from "../assets/images/ux-research.webp";
import NucbaTituloGrande from "../assets/images/nucba.webp";

import Gallery from "./Gallery";

const EducationCards = ({
  img,
  href,
  logo,
  blackLogo,
  title,
  span,
  description,
  num,
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const certificates = [
    PlatziTituloGrande,
    JavascriptGrande,
    ResponsiveGrande,
    HTMLCSSTituloGrande,
    UXResearchTituloGrande,
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
    <AnimatedComponent animation="slide" direction="up" delay={1}>
      <div className="certificates__card flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-600 pb-5 px-3">
        <div className="flex flex-col md:flex-row items-center gap-6 md:w-10/12">
          <a
            className="w-20 min-w-20 hidden md:block"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full cover"
              src={blackLogo && theme !== "dark" ? blackLogo : logo}
              title={t("sections.certifications.url")}
              alt={`Logo de ${span}`}
              loading="lazy"
              width="100"
              height="100"
            />
          </a>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">{title}</h3>
            <p
              className={`md:text-sm w-11/12 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span className="font-bold text-accent">{span}</span> -{" "}
              {description}.
            </p>
          </div>
        </div>

        <figure
          className="cursor-pointer -order-1 w-full md:order-none md:max-w-24 lg:max-w-32"
          onClick={() => openGallery(num)}
        >
          <img
            src={img}
            className="w-full lg:w-32"
            title={t("sections.certifications.img")}
            alt={`Certificado de ${title}`}
            loading="lazy"
            width="160"
            height="110"
          />
        </figure>

        <Gallery
          images={certificates}
          initialIndex={initialIndex}
          isOpen={isGalleryOpen}
          onClose={closeGallery}
        />
      </div>
    </AnimatedComponent>
  );
};

export default EducationCards;
