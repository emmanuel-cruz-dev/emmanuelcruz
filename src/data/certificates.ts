import Platzi from "../assets/icons/platzi.png";
import freeCodeCamp from "../assets/icons/freecodecamp.png";
import freeCodeCampNegro from "../assets/icons/freecodecamp-negro.png";
import AcademiaBANegro from "../assets/icons/academiaba-negro.png";
import AcademiaBA from "../assets/icons/academiaba.png";
import Nucba from "../assets/icons/nucba.png";
import NucbaNegro from "../assets/icons/nucba-negro.png";
import TalentoTech from "../assets/icons/talento-tech.png";
import TalentoTechNegro from "../assets/icons/talento-tech-negro.png";
import ForIT from "../assets/icons/fotIT.png";
import ForITNegro from "../assets/icons/fotIT-negro.png";
import FooTalentGroup from "../assets/icons/foo-talent-group.png";

import PlatziTitulo from "../assets/images/platzi-mini.webp";
import freeCodeCampJavascript from "../assets/images/freecodecamp-javascript-mini.webp";
import freeCodeCampResponsive from "../assets/images/freecodecamp-responsive-mini.webp";
import HTMLCSSTitulo from "../assets/images/html-css-mini.webp";
import UXResearchTitulo from "../assets/images/ux-research-mini.webp";
import NucbaTitulo from "../assets/images/nucba-mini.webp";
import TalentoTechTitulo from "../assets/images/node-js-mini.webp";
import ForITTitulo from "../assets/images/full-stack-mini.webp";
import FooTalentGroupTitulo from "../assets/images/foo-talent-group-mini.webp";
import { TFunction } from "i18next";

const getCertificates = (t: TFunction) => [
  {
    id: 1,
    img: PlatziTitulo,
    href: "https://platzi.com",
    logo: Platzi,
    title: "Programación Básica",
    span: t("sections.certifications.platziSpan"),
    description: t("sections.certifications.platzi"),
    num: 0,
  },
  {
    id: 2,
    img: freeCodeCampJavascript,
    href: "https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures-v8/",
    logo: freeCodeCamp,
    blackLogo: freeCodeCampNegro,
    title: "JavaScript Algorithms and Data Structures",
    span: t("sections.certifications.javascriptSpan"),
    description: t("sections.certifications.javascript"),
    num: 1,
  },
  {
    id: 3,
    img: freeCodeCampResponsive,
    href: "https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/",
    logo: freeCodeCamp,
    blackLogo: freeCodeCampNegro,
    title: "Responsive Web Design",
    span: t("sections.certifications.responsiveSpan"),
    description: t("sections.certifications.responsive"),
    num: 2,
  },
  {
    id: 4,
    img: HTMLCSSTitulo,
    href: "https://buenosaires.gob.ar/academia-ba-emprende-0",
    logo: AcademiaBA,
    blackLogo: AcademiaBANegro,
    title: "HTML Y CSS AVANZADO",
    span: t("sections.certifications.htmlcssSpan"),
    description: t("sections.certifications.htmlcss"),
    num: 3,
  },
  {
    id: 5,
    img: UXResearchTitulo,
    href: "https://buenosaires.gob.ar/academia-ba-emprende-0",
    logo: AcademiaBA,
    blackLogo: AcademiaBANegro,
    title: "UX Research",
    span: t("sections.certifications.uxresearchSpan"),
    description: t("sections.certifications.uxresearch"),
    num: 4,
  },
  {
    id: 6,
    img: NucbaTitulo,
    href: "https://www.nucba.com.ar/",
    logo: Nucba,
    blackLogo: NucbaNegro,
    title: "HERRAMIENTAS IA Y NO-CODE",
    span: t("sections.certifications.nucbaSpan"),
    description: t("sections.certifications.nucba"),
    num: 5,
  },
  {
    id: 7,
    img: TalentoTechTitulo,
    href: "https://talentotech.bue.edu.ar/#/",
    logo: TalentoTech,
    blackLogo: TalentoTechNegro,
    title: "Back-End/NodeJS",
    span: t("sections.certifications.nodeJsSpan"),
    description: t("sections.certifications.nodeJs"),
    num: 6,
  },
  {
    id: 8,
    img: ForITTitulo,
    href: "https://forit.ar/",
    logo: ForIT,
    blackLogo: ForITNegro,
    title: "Programador Web Full Stack",
    span: t("sections.certifications.fullStackSpan"),
    description: t("sections.certifications.fullStack"),
    num: 7,
  },
  {
    id: 9,
    img: FooTalentGroupTitulo,
    href: "https://www.linkedin.com/company/footalentgroup/posts/?feedView=all",
    logo: FooTalentGroup,
    blackLogo: FooTalentGroup,
    title: "Foo Talent Group - Smart Projects",
    span: t("sections.certifications.fooTalentGroupSpan"),
    description: t("sections.certifications.fooTalentGroup"),
    num: 8,
  },
];

export default getCertificates;
