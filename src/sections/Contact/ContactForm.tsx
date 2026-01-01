import { useTheme } from "../../hooks/useThemeProvider";
import { useTranslation } from "react-i18next";
import Toast from "../../components/ui/Toast";
import { useContactForm } from "../../hooks/useContactForm";
import { getInputClasses } from "../../utils/utils";

function ContactForm() {
  const {
    toast,
    isSending,
    formValues,
    errors,
    isValid,
    isDirty,
    register,
    handleSubmit,
    validateField,
    handleCloseToast,
  } = useContactForm();
  const { t } = useTranslation();
  const { theme } = useTheme();

  const getErrorMessage = (fieldName: keyof typeof errors) => {
    return errors[fieldName]?.message;
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
          onSubmit={handleSubmit}
          noValidate
        >
          <header className="grid lg:grid-cols-2 lg:gap-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-gray-700"
              ></label>
              <input
                id="name"
                type="text"
                placeholder={`${t("sections.contact.name")}*`}
                title={t("sections.contact.nameTitle")}
                className={getInputClasses(!!errors.user_name)}
                autoComplete="off"
                {...register("user_name", {
                  onBlur: () => validateField("user_name"),
                })}
                aria-invalid={!!errors.user_name}
                aria-describedby={errors.user_name ? "name-error" : undefined}
              />
              {errors.user_name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span>⚠️</span>
                  {getErrorMessage("user_name")}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              ></label>
              <input
                id="email"
                type="email"
                placeholder={`${t("sections.contact.email")}*`}
                title={t("sections.contact.emailTitle")}
                className={getInputClasses(!!errors.user_email)}
                autoComplete="off"
                {...register("user_email", {
                  onBlur: () => validateField("user_email"),
                })}
                aria-invalid={!!errors.user_email}
                aria-describedby={errors.user_email ? "email-error" : undefined}
              />
              {errors.user_email && (
                <p
                  id="email-error"
                  className="mt-1 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span>⚠️</span>
                  {getErrorMessage("user_email")}
                </p>
              )}
            </div>
          </header>

          <main className="mb-4">
            <label
              htmlFor="message"
              className="block mb-1 text-gray-700"
            ></label>
            <textarea
              id="message"
              placeholder={`${t("sections.contact.message")}*`}
              title={t("sections.contact.messageTitle")}
              rows={5}
              className={getInputClasses(!!errors.message)}
              {...register("message", {
                onBlur: () => validateField("message"),
              })}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-sm text-red-600 flex items-center gap-1"
                role="alert"
              >
                <span>⚠️</span>
                {getErrorMessage("message")}
              </p>
            )}

            <div className="mt-1 text-xs text-gray-500 text-right">
              {formValues.message?.length || 0} / 300
            </div>
          </main>
          <button
            type="submit"
            disabled={isSending || !isValid || !isDirty}
            className={`w-full font-medium py-2 px-4 transition-colors duration-300 ${
              isSending || !isValid || !isDirty
                ? "bg-gray-400 cursor-not-allowed text-gray-200"
                : "bg-blue-700 hover:bg-blue-800 text-white"
            }`}
            aria-describedby="submit-help"
          >
            {isSending
              ? t("sections.contact.sending")
              : t("sections.contact.send")}
          </button>

          <p
            id="submit-help"
            className="mt-2 text-xs text-gray-500 text-center"
          >
            {t("sections.contact.required")}
          </p>
        </form>
      </div>

      <footer className="toast__container">
        <Toast
          type={toast.type}
          message={toast.message}
          show={toast.show}
          onClose={handleCloseToast}
        />
      </footer>
    </article>
  );
}

export default ContactForm;
