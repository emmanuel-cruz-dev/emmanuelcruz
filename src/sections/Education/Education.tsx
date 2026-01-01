import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import EducationCards from "./EducationCards";
import getCertificates from "../../data/certificates";
import { useCertificates } from "../../hooks/useCertificates";

function Education() {
  const { t } = useTranslation();
  const certificates = getCertificates(t);
  const { sectionRef, visibleCertificates, isShowingAll, toggleCertificates } =
    useCertificates({
      certificates,
      initialLimit: 3,
    });

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="certifications"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <header ref={sectionRef} className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.certifications.title")}
          </h2>
          <h3 className="text-lg">
            {t("sections.certifications.description")}.
          </h3>
        </header>
      </AnimatedComponent>

      <article className="flex flex-col gap-6 xl:w-10/12 mx-auto">
        {visibleCertificates.map((certificate) => (
          <EducationCards key={certificate.id} {...certificate} />
        ))}
      </article>

      <div className="flex justify-center mt-4">
        <button onClick={toggleCertificates} className="btn dos shadow-xl">
          <span className="flex items-center gap-2">
            {isShowingAll
              ? t("sections.certifications.viewMore")
              : t("sections.certifications.viewLess")}
          </span>
        </button>
      </div>
    </section>
  );
}

export default Education;
// import { useState, useRef, useEffect, useMemo } from "react";
// import { useTranslation } from "react-i18next";
// import AnimatedComponent from "../../components/ui/AnimatedComponent";
// import EducationCards from "./EducationCards";
// import getCertificates from "../../data/certificates";

// function Education() {
//   const { t } = useTranslation();
//   const certificates = getCertificates(t);

//   const sectionRef = useRef<HTMLElement>(null);

//   const INITIAL_LIMIT = 3;

//   // Memoiza el array invertido para evitar recalcular en cada render
//   const reversedCertificates = useMemo(
//     () => [...certificates].reverse(),
//     [certificates]
//   );

//   const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);
//   const [shouldScroll, setShouldScroll] = useState(false);

//   const visibleCertificates = useMemo(
//     () => reversedCertificates.slice(0, visibleCount),
//     [reversedCertificates, visibleCount]
//   );

//   useEffect(() => {
//     if (shouldScroll) {
//       // Pequeño delay para asegurar que el DOM se actualizó
//       setTimeout(() => {
//         sectionRef.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 100);
//       setShouldScroll(false);
//     }
//   }, [shouldScroll]);

//   const toggleCertificates = () => {
//     if (visibleCount >= reversedCertificates.length) {
//       setVisibleCount(INITIAL_LIMIT);
//       setShouldScroll(true);
//     } else {
//       setVisibleCount(reversedCertificates.length);
//     }
//   };

//   return (
//     <section
//       className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
//       id="certifications"
//     >
//       <AnimatedComponent animation="fade" delay={1}>
//         <header ref={sectionRef} className="text-center mb-5">
//           <h2 className="font-bold text-3xl mb-4">
//             {t("sections.certifications.title")}
//           </h2>
//           <h3 className="text-lg">
//             {t("sections.certifications.description")}.
//           </h3>
//         </header>
//       </AnimatedComponent>

//       <article className="flex flex-col gap-6 xl:w-10/12 mx-auto">
//         {visibleCertificates.map((certificate) => (
//           <EducationCards key={certificate.id} {...certificate} />
//         ))}
//       </article>

//       <div className="flex justify-center mt-4">
//         <button
//           onClick={toggleCertificates}
//           className="btn dos text-sm py-4 px-8 shadow__dark"
//         >
//           <span className="flex items-center gap-2">
//             {visibleCount === INITIAL_LIMIT ? "Ver más" : "Ver menos"}
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Education;
