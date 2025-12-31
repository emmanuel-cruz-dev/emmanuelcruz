import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { contactSchema, ContactFormData } from "../schemas/contactSchema";
import { ToastType } from "../types/types";

export const useContactForm = () => {
  const [toast, setToast] = useState<{
    show: boolean;
    type: ToastType;
    message: string;
  }>({ show: false, type: "", message: "" });

  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    watch,
    setValue,
    trigger,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const formValues = watch();

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  const showToast = (type: ToastType, message: string) => {
    setToast({ show: true, type, message });
  };

  const cleanForm = () => {
    reset();
    setIsSending(false);
  };

  const sanitizeFormData = (data: ContactFormData) => {
    return {
      user_name: data.user_name.trim(),
      user_email: data.user_email.trim().toLowerCase(),
      message: data.message.trim(),
    };
  };

  const sendEmail = async (data: ContactFormData) => {
    setIsSending(true);

    try {
      const sanitizedData = sanitizeFormData(data);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        sanitizedData,
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

  const validateField = async (fieldName: keyof ContactFormData) => {
    await trigger(fieldName);
  };

  return {
    toast,
    isSending,
    formValues,
    errors,
    isValid,
    isDirty,

    register,
    handleSubmit: handleSubmit(sendEmail),
    setValue,
    validateField,
    handleCloseToast,
    cleanForm,
  };
};
