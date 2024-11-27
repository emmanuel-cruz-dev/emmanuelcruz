import { useTheme } from "./ThemeContext";
import AnimatedComponent from "./AnimatedComponent";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import Toast from "./Toast";

const Contact = () => {
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const { t } = useTranslation();
  const { theme } = useTheme();

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ ...toast, show: false });
    }, 5000); // Oculta el toast después de 5 segundos
  };

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

      <article className="flex flex-row gap-4 py-16">
        <article className="order-2 md:order-none flex-1">
          <ContactForm />
          <div className="button hidden">
            <button
              onClick={() =>
                showToast("success", t("sections.contact.success"))
              }
              className="w-20 bg-black hover:bg-green-500"
            >
              Success
            </button>
            <button
              onClick={() => showToast("error", t("sections.contact.error"))}
              className="w-20 bg-black hover:bg-colorTertiary"
            >
              Error
            </button>
          </div>
        </article>

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

      {/* <Toast
          message="¡Éxito! Mensaje enviado correctamente."
          type="success"
        /> */}
      <div className="toast__container">
        <Toast type={toast.type} message={toast.message} show={toast.show} />
      </div>
      {/* <Toast
          message="Algo salió mal. Volvé a intentarlo más tarde."
          type="error"
        /> */}
    </section>
  );
};

export default Contact;
