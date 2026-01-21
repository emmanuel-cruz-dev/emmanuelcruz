import { FlagIcon } from "react-flag-kit";
import { useLanguageSwitcher } from "../../hooks";

function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, t } = useLanguageSwitcher();

  return (
    <article className="flex gap-2 cursor-pointer opacity-85 hover:opacity-100 transition-all duration-500 ease-in-out">
      <button title={t("navbar.title")} onClick={changeLanguage}>
        <FlagIcon code={currentLanguage === "es" ? "AR" : "US"} size={32} />
      </button>
    </article>
  );
}

export default LanguageSwitcher;
