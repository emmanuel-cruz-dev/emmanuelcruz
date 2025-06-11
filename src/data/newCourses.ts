import ForITLogo from "../assets/icons/fotIT-logo.webp";
import TalentoTechLogo from "../assets/icons/talento-tech-logo.webp";
import AluraLatamLogo from "../assets/icons/alura-latam-logo.webp";
import { TFunction } from "i18next";
import { NewCoursesCardProps } from "../types/types";

const getNewCourses = (t: TFunction): NewCoursesCardProps[] => [
  {
    img: AluraLatamLogo,
    alt: "Icono Alura Latam",
    title: "Alura Latam",
    description: t("sections.newCourses.aluraLatam"),
  },
  {
    img: ForITLogo,
    alt: "Icono Academia ForIT",
    title: "Academia ForIT",
    description: t("sections.newCourses.academiaForIt"),
  },
  {
    img: TalentoTechLogo,
    alt: "Icono Talento Tech",
    title: "Talento Tech",
    description: t("sections.newCourses.talentoTech"),
  },
];

export default getNewCourses;
