import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

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
      .sendForm("service_q56xg3q", "template_7xdnr2c", form.current, {
        publicKey: "NVL36_MsNJ__5erJH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          cleanForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
          cleanForm();
        }
      );
  };

  return (
    <div className="flex flex-col justify-around gap-4 bg-white/30 shadow-md p-6 max-w-lg xl:max-w-md mx-auto md:mx-0 h-full">
      <h2 className="text-2xl font-bold mb-4 xl:text-3xl">
        {t("sections.contact.subtitle")}
      </h2>
      <form
        className="text-sm flex flex-col justify-between h-full"
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
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-gray-700"></label>
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
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4"
        >
          {isSending
            ? t("sections.contact.sending")
            : t("sections.contact.send")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
