import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FormValues, ToastType } from "@/types/types";

export const useContactForm = () => {
  const [toast, setToast] = useState<{
    show: boolean;
    type: ToastType;
    message: string;
  }>({ show: false, type: "", message: "" });
  const [showToastItem, setShowToast] = useState(false);
  const { t } = useTranslation();
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const showToast = (type: ToastType, message: string) => {
    setShowToast(true);
    setToast({ show: true, type, message });
  };

  // Función que actualiza los valores de los campos
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
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
    } else {
      console.error("El formulario no está disponible.");
      showToast("error", t("sections.contact.error"));
      setIsSending(false);
    }
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
