import { useTheme } from "./ThemeContext";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import Toast from "./Toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [showToastItem, setShowToast] = useState(false);

  const form = useRef();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isSending, setIsSending] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const showToast = (type, message) => {
    setShowToast(true);
    setToast({ show: true, type, message });
  };

  // Función que actualiza los valores de los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const cleanForm = () => {
    setFormValues({
      user_name: "",
      user_email: "",
      message: "",
    });

    setIsSending(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_2soir9w", "template_7xdnr2c", form.current, {
        publicKey: "NVL36_MsNJ__5erJH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          showToast("success", t("sections.contact.success"));
          cleanForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
          showToast("error", t("sections.contact.error"));
          cleanForm();
        }
      );
  };

  return (
    <article>
      <div
        className={`${
          theme === "dark" ? "shadow__dark" : "shadow__light"
        } flex flex-col gap-4 p-6 py-8 mx-auto md:mx-0 max-w-96 md:max-w-none lg:h-96`}
      >
        <h2 className="text-2xl font-bold mb-4 xl:text-3xl">
          {t("sections.contact.subtitle")}
        </h2>
        <form
          className="text-sm flex flex-col justify-around h-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid lg:grid-cols-2 lg:gap-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-gray-700"
              ></label>
              <input
                id="name"
                name="user_name"
                type="text"
                value={formValues.user_name}
                onChange={handleChange}
                placeholder={t("sections.contact.name")}
                title={t("sections.contact.nameTitle")}
                className="w-full border bg-white/20 border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              ></label>
              <input
                id="email"
                name="user_email"
                type="email"
                value={formValues.user_email}
                onChange={handleChange}
                placeholder={t("sections.contact.email")}
                title={t("sections.contact.emailTitle")}
                className="w-full bg-white/20 border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-1 text-gray-700"
            ></label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder={t("sections.contact.message")}
              title={t("sections.contact.messageTitle")}
              rows="5"
              className="w-full bg-white/20 border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 transition-colors duration-300"
          >
            {isSending
              ? t("sections.contact.sending")
              : t("sections.contact.send")}
          </button>
        </form>
      </div>

      <div className="toast__container">
        {showToastItem && (
          <Toast
            type={toast.type}
            message={toast.message}
            show={toast.show}
            onClose={handleCloseToast}
          />
        )}
      </div>
    </article>
  );
};

export default ContactForm;
