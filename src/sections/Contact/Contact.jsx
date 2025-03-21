import { useTheme } from "../../context/ThemeContext";
import AnimatedComponent from "../../components/ui/AnimatedComponent";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className="scroll-top py-10 w-11/12 xl:w-10/12 mx-auto relative select-none"
      id="contact"
    >
      <AnimatedComponent animation="fade" delay={1}>
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl mb-4">
            {t("sections.contact.title")}
          </h2>
          <h3 className="text-lg">{t("sections.contact.description")}</h3>
        </div>
      </AnimatedComponent>

      <article className="flex gap-8 py-16">
        <div className="flex-1">
          <ContactForm />
        </div>

        <article
          className={`${
            theme === "dark" ? "shadow__dark" : "shadow__light"
          } contact__info hidden md:block flex-1`}
        >
          <div className="flex items-end h-full pb-3">
            <div className="flex justify-center items-center gap-2 bg-black/80 text-white p-4 w-fit mx-auto">
              <span className="text-xl">
                <FaMapMarkerAlt />
              </span>
              Buenos aires, Argentina
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Contact;
