import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const useContactForm = () => {
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [showToastItem, setShowToast] = useState(false);
  const { t } = useTranslation();
  const form = useRef();

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

  return {
    toast,
    showToastItem,
    isSending,
    formValues,
    form,
    handleCloseToast,
    handleChange,
    sendEmail,
  };
};
