import { useTranslation } from "react-i18next";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import EducationCards from "./EducationCards";
import getCertificates from "../../data/certificates";

function Education() {
  const { t } = useTranslation();
  const certificates = getCertificates(t);

  return (
    <section
      className="scroll-top py-10 flex flex-col gap-8 w-11/12 mx-auto select-none"
      id="certifications"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <header className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.certifications.title")}
          </h2>
          <h3 className="text-lg">
            {t("sections.certifications.description")}.
          </h3>
        </header>
      </AnimatedComponent>
      <article className="flex flex-col gap-6 xl:w-10/12 mx-auto">
        {certificates.map((certificate, index) => (
          <EducationCards key={index} {...certificate} />
        ))}
      </article>
    </section>
  );
}

export default Education;
