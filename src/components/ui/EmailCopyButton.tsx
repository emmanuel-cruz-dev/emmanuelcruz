import { useTheme } from "../../hooks/useThemeProvider";
import { useTranslation } from "react-i18next";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";

function EmailCopyButton() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const email = "emmanuelgerr@gmail.com";
  const [copied, copyToClipboard] = useCopyToClipboard(email);

  return (
    <button
      onClick={copyToClipboard}
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
}

export default EmailCopyButton;
