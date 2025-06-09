import { NewCoursesCardProps } from "../types/types";
import ForITLogo from "../assets/icons/fotIT-logo.webp";
import TalentoTechLogo from "../assets/icons/talento-tech-logo.webp";
import AluraLatamLogo from "../assets/icons/alura-latam-logo.webp";

export const newCourses: NewCoursesCardProps[] = [
  {
    img: AluraLatamLogo,
    alt: "Icono Alura Latam",
    title: "Alura Latam",
    description:
      "Formación en desarrollo backend con Java y Spring Boot, incluyendo bases de datos relacionales con MySQL y despliegue en Oracle Cloud",
  },
  {
    img: ForITLogo,
    alt: "Icono Academia ForIT",
    title: "Academia ForIT",
    description:
      "Enfoque en buenas prácticas de desarrollo con TypeScript, uso avanzado de Git, Docker, metodologías TDD, Clean Code y arquitectura limpia",
  },
  {
    img: TalentoTechLogo,
    alt: "Icono Talento Tech",
    title: "Talento Tech",
    description:
      "Especialización en desarrollo backend con Node.js, Express y Firestore, trabajando con el ecosistema moderno de JavaScript y Firebase",
  },
];
