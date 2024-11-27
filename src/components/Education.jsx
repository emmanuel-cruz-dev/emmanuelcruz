import AnimatedComponent from "./AnimatedComponent";

import Platzi from "../assets/icons/platzi.png";
import freeCodeCamp from "../assets/icons/freecodecamp.png";
import freeCodeCampNegro from "../assets/icons/freecodecamp-negro.png";
import AcademiaBANegro from "../assets/icons/academiaba-negro.png";
import AcademiaBA from "../assets/icons/academiaba.png";
import Nucba from "../assets/icons/nucba.png";
import NucbaNegro from "../assets/icons/nucba-negro.png";

import PlatziTitulo from "../assets/images/platzi-mini.jpg";
import freeCodeCampJavascript from "../assets/images/freecodecamp-javascript-mini.jpg";
import freeCodeCampResponsive from "../assets/images/freecodecamp-responsive-mini.jpg";
import HTMLCSSTitulo from "../assets/images/html-css-mini.jpg";
import UXResearchTitulo from "../assets/images/ux-research-mini.jpg";
import NucbaTitulo from "../assets/images/nucba-mini.jpg";

import { useTranslation } from "react-i18next";
import EducationCards from "./EducationCards";

const Education = () => {
  const { t } = useTranslation();

  // Objetos de certificados
  const certificate1 = {
    img: PlatziTitulo,
    href: "https://platzi.com",
    logo: Platzi,
    title: "Programación Básica",
    span: "Platzi",
    description: t("sections.certifications.platzi"),
    num: "0",
  };

  const certificate2 = {
    img: freeCodeCampJavascript,
    href: "https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures-v8/",
    logo: freeCodeCamp,
    blackLogo: freeCodeCampNegro,
    title: "JavaScript Algorithms and Data Structures",
    span: "freeCodeCamp",
    description: t("sections.certifications.javascript"),
    num: "1",
  };

  const certificate3 = {
    img: freeCodeCampResponsive,
    href: "https://www.freecodecamp.org/espanol/learn/2022/responsive-web-design/",
    logo: freeCodeCamp,
    blackLogo: freeCodeCampNegro,
    title: "Responsive Web Design",
    span: "freeCodeCamp",
    description: t("sections.certifications.responsive"),
    num: "2",
  };

  const certificate4 = {
    img: HTMLCSSTitulo,
    href: "https://academiaba.buenosaires.gob.ar/",
    logo: AcademiaBA,
    blackLogo: AcademiaBANegro,
    title: "HTML Y CSS AVANZADO",
    span: "Academia BA Emprende",
    description: t("sections.certifications.htmlcss"),
    num: "3",
  };

  const certificate5 = {
    img: UXResearchTitulo,
    href: "https://academiaba.buenosaires.gob.ar/",
    logo: AcademiaBA,
    blackLogo: AcademiaBANegro,
    title: "UX Research",
    span: "Academia BA Emprende",
    description: t("sections.certifications.uxresearch"),
    num: "4",
  };

  const certificate6 = {
    img: NucbaTitulo,
    href: "https://www.nucba.com.ar/",
    logo: Nucba,
    blackLogo: NucbaNegro,
    title: "HERRAMIENTAS IA Y NO-CODE",
    span: "Nucba",
    description: t("sections.certifications.nucba"),
    num: "5",
  };

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="certifications"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.certifications.title")}
          </h2>
          <h3 className="text-lg">
            {t("sections.certifications.description")}.
          </h3>
        </div>
      </AnimatedComponent>
      <article className="flex flex-col gap-6 xl:w-10/12 mx-auto">
        {/* Certificado 1 */}
        <EducationCards {...certificate1} />

        {/* Certificado 2 */}
        <EducationCards {...certificate2} />

        {/* Certificado 3 */}
        <EducationCards {...certificate3} />

        {/* Certificado 4 */}
        <EducationCards {...certificate4} />

        {/* Certificado 5 */}
        <EducationCards {...certificate5} />

        {/* Certificado 6 */}
        <EducationCards {...certificate6} />
      </article>
    </section>
  );
};

export default Education;
