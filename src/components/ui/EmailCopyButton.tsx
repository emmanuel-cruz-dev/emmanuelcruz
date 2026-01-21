import { useTranslation } from "react-i18next";
import { useTheme, useCopyToClipboard } from "../../hooks";
import { EMAIL } from "../../constants/constants";

function EmailCopyButton() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { copied, copyToClipboard } = useCopyToClipboard(EMAIL);

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
