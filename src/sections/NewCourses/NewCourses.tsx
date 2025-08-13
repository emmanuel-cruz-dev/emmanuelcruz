import getNewCourses from "../../data/newCourses";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import NewCoursesCard from "./NewCoursesCard";
import { useTranslation } from "react-i18next";

function NewCourses() {
  const { t } = useTranslation();
  const newCourses = getNewCourses(t);

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 xl:w-10/12 mx-auto select-none"
      id="new-courses"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <header className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.newCourses.title")}
          </h2>
          <h3 className="text-lg">{t("sections.newCourses.description")}.</h3>
        </header>
      </AnimatedComponent>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8">
        {newCourses.map((course, index) => (
          <NewCoursesCard key={index} {...course} />
        ))}
      </article>
    </section>
  );
}

export default NewCourses;
