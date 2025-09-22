import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { FormValues, ToastType } from "../types/types";

export const useContactForm = () => {
  const [toast, setToast] = useState<{
    show: boolean;
    type: ToastType;
    message: string;
  }>({ show: false, type: "", message: "" });

  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);

  const [isSending, setIsSending] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  const showToast = (type: ToastType, message: string) => {
    setToast({ show: true, type, message });
  };

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

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("El formulario no está disponible.");
      showToast("error", t("sections.contact.error"));
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      console.log("SUCCESS!");
      showToast("success", t("sections.contact.success"));
      cleanForm();
    } catch (error) {
      console.error("Error enviando email:", error);
      showToast("error", t("sections.contact.error"));
      setIsSending(false);
    }
  };

  return {
    toast,
    isSending,
    formValues,
    form,
    handleCloseToast,
    handleChange,
    sendEmail,
  };
};
