import BlackCat from "../assets/images/black-cat.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import Toast from "./Toast";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const { t } = useTranslation();

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ ...toast, show: false });
    }, 5000); // Oculta el toast después de 5 segundos
  };

  return (
    <section className="scroll-top py-10 w-11/12 mx-auto" id="contact">
      <div className="text-center mb-5">
        <h2 className="font-bold text-3xl mb-4">
          {t("sections.contact.title")}
        </h2>
        <h3 className="text-lg">{t("sections.contact.description")}</h3>
      </div>
      <article className="flex flex-col gap-10 justify-between py-16">
        <article className="flex flex-col md:flex-row gap-8 items-center justify-around">
          <article className="order-2 md:order-none">
            <ContactForm />
          </article>

          <article className="flex flex-col text-center gap-4">
            <figure>
              <img
                className="w-40 mx-auto rounded-full"
                src={BlackCat}
                alt="Foto de perfil"
              />
            </figure>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt /> Ubicado en Buenos aires, Argentina
              </span>
            </div>
            <div className="flex gap-4 justify-center">
              <SocialLinks />
              <button
                onClick={() =>
                  showToast("success", "¡Éxito! Mensaje enviado correctamente.")
                }
                className="w-20 bg-black hover:bg-green-500"
              >
                Success
              </button>
              <button
                onClick={() =>
                  showToast(
                    "error",
                    "Algo salió mal. Volvé a intentarlo más tarde."
                  )
                }
                className="w-20 bg-black hover:bg-colorTertiary"
              >
                Error
              </button>
            </div>
          </article>
        </article>

        {/* <Toast
          message="¡Éxito! Mensaje enviado correctamente."
          type="success"
        /> */}
        <Toast type={toast.type} message={toast.message} show={toast.show} />
        {/* <Toast
          message="Algo salió mal. Volvé a intentarlo más tarde."
          type="error"
        /> */}
      </article>
    </section>
  );
};

export default Contact;
