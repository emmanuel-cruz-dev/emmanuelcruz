import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useThemeProvider";
import Gallery from "../../components/ui/Gallery";
import { useGallery } from "../../hooks/useGallery";
import { certificates } from "../../data/certificatesLarge";
import { FC } from "react";
import { EducationCardsProps } from "../../types/types";
import { formatTextWithLabels } from "../../helpers/formatText";

const EducationCards: FC<EducationCardsProps> = ({
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
  const { isGalleryOpen, initialIndex, openGallery, closeGallery } =
    useGallery();

  return (
    <article className="certificates__card flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-600 pb-5 px-3">
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
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xl">{title}</h3>
          <p
            className={`md:text-sm w-full lg:w-fit lg:max-w-10/12 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <strong
              className={`${
                theme === "dark" ? "text-neutral-300" : "text-accent"
              }`}
            >
              {span}
            </strong>
            <br />
            {formatTextWithLabels(description)}
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
    </article>
  );
};

export default EducationCards;
