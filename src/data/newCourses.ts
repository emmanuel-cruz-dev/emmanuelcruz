import { TFunction } from "i18next";
import TalentoTechLogo from "../assets/icons/talento-tech-logo.webp";
import AluraLatamLogo from "../assets/icons/alura-latam-logo.webp";
import TechAdvancedLogo from "../assets/icons/tech-advanced-logo.webp";
import { NewCoursesCardProps } from "../types/types";

const getNewCourses = (t: TFunction): NewCoursesCardProps[] => [
  {
    img: AluraLatamLogo,
    alt: "Icono Alura Latam",
    title: "Alura Latam",
    description: t("sections.newCourses.aluraLatam"),
  },
  {
    img: TalentoTechLogo,
    alt: "Icono Talento Tech",
    title: "Talento Tech",
    description: t("sections.newCourses.talentoTech"),
  },
  {
    img: TechAdvancedLogo,
    alt: "Icono Tech Advanced",
    title: "Tech Advanced",
    description: t("sections.newCourses.techAdvanced"),
  },
];

export default getNewCourses;
