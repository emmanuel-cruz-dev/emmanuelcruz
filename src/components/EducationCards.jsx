import PlatziTituloGrande from "../assets/images/platzi.jpg";
import JavascriptGrande from "../assets/images/freecodecamp-javascript.jpg";
import ResponsiveGrande from "../assets/images/freecodecamp-responsive.jpg";
import HTMLCSSTituloGrande from "../assets/images/html-css.jpg";
import UXResearchTituloGrande from "../assets/images/ux-research.jpg";
import NucbaTituloGrande from "../assets/images/nucba.jpg";

import Gallery from "./Gallery";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

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
            alt=""
          />
        </a>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">{title}</h3>
          <p
            className={`md:text-sm w-11/12 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span className="font-bold text-colorTertiary">{span}</span> -{" "}
            {description}.
          </p>
        </div>
      </div>

      <figure
        className="cursor-pointer -order-1 md:order-none md:max-w-24 lg:max-w-32"
        onClick={() => openGallery(num)}
      >
        <img src={img} className="lg:w-32" />
      </figure>

      <Gallery
        images={certificates}
        initialIndex={initialIndex}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
      />
    </div>
  );
};

export default EducationCards;
