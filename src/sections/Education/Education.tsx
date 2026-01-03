import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import EducationCards from "./EducationCards";
import getCertificates from "../../data/certificates";
import { useItemPagination } from "../../hooks/useItemPagination";

function Education() {
  const { t } = useTranslation();
  const certificates = getCertificates(t);
  const { sectionRef, visibleItems, isShowingAll, toggleItems, hasMore } =
    useItemPagination({
      items: certificates,
      initialLimit: 3,
      reverse: true,
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
        {visibleItems.map((certificate) => (
          <EducationCards key={certificate.id} {...certificate} />
        ))}
      </article>

      {hasMore && (
        <div className="flex justify-center mt-4">
          <button onClick={toggleItems} className="btn dos shadow-xl">
            <span className="flex items-center gap-2 normal-case">
              {isShowingAll ? t("viewLess") : t("viewMore")}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Education;
