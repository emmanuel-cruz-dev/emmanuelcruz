import BlackCat from "../assets/images/black-cat.png";
import {
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import Toast from "./Toast";

const Contact = () => {
  const { t } = useTranslation();

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
          <article>
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
              <h3>Trabajemos juntos!</h3>

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt /> Ubicado en Buenos aires, Argentina
              </span>
            </div>
            <div className="flex gap-4 justify-center">
              <a
                title="Linkedin"
                className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
                href="https://www.linkedin.com/in/emmanuel-cruz-6a242430b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-full h-full" />
              </a>
              <a
                title="Github"
                className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
                href="https://github.com/EmmaLCruz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-full h-full" />
              </a>
              <a
                title="Curriculum Vitae"
                className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
                href="/Emmanuel-Cruz-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileAlt className="w-full h-full" />
              </a>
              <a
                title="Email"
                className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
                href="mailto:emmanuelgerr@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPaperPlane className="w-full h-full" />
              </a>
              <button className=" w-20 btn--red" onClick={() => {}}>
                Toast
              </button>
            </div>
          </article>
        </article>

        {/* <Toast
          message="¡Éxito! Mensaje enviado correctamente."
          type="success"
        /> */}

        <Toast
          message="Algo salió mal. Volvé a intentarlo más tarde."
          type="error"
        />
      </article>
    </section>
  );
};

export default Contact;
