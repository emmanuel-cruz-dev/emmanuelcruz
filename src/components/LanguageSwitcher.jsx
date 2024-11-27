import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = () => {
    const newLanguage = currentLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="flex gap-2 cursor-pointer opacity-85 hover:opacity-100 transition-all duration-500 ease-in-out">
      <button title={t("navbar.title")} onClick={changeLanguage}>
        <FlagIcon code={currentLanguage === "es" ? "AR" : "US"} size={32} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
