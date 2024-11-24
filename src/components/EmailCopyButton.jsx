import { useTheme } from "./ThemeContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const EmailCopyButton = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const email = "emmanuelgerr@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Restablece el estado después de 2 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el email: ", err);
      });
  };

  return (
    <button
      onClick={copyEmailToClipboard}
      className={`${
        theme === "dark" ? "shadow__dark" : "shadow__light"
      } btn btn dos text-sm py-7`}
    >
      <span className="flex items-center gap-2">
        {copied ? t("sections.hero.emailCopied") : t("sections.hero.email")}
        <span className="material-icons-outlined">mail</span>
      </span>
    </button>
  );
};

export default EmailCopyButton;
