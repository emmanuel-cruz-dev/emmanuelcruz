import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export const useLanguageSwitcher = () => {
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

  return { currentLanguage, changeLanguage, t };
};
