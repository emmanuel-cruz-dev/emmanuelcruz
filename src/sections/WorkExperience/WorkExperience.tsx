import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import WorkExperienceCard from "./WorkExperienceCard";
import { getWorkExperiences } from "../../data/workExperiences";
import { useItemPagination } from "../../hooks/useItemPagination";

function WorkExperience() {
  const { t } = useTranslation();
  const workExperiences = getWorkExperiences(t);
  const { sectionRef, visibleItems, isShowingAll, toggleItems, hasMore } =
    useItemPagination({
      items: workExperiences,
      initialLimit: 3,
      reverse: true,
    });

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="experience"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <header ref={sectionRef} className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.experience.title")}
          </h2>
          <h3 className="text-lg xl:w-10/12 mx-auto">
            {t("sections.experience.description")}
          </h3>
        </header>
      </AnimatedComponent>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:w-11/12 mx-auto">
        {visibleItems.map((experience) => (
          <WorkExperienceCard key={experience.id} {...experience} />
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

export default WorkExperience;
