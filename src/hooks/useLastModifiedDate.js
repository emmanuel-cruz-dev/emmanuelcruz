import { useEffect, useState } from "react";

const useLastModifiedDate = (currentLanguage) => {
  const [lastModified, setLastModified] = useState(null);

  useEffect(() => {
    const formatDateByLanguage = (date) => {
      const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
      };

      const locale = currentLanguage === "es" ? "es-ES" : "en-US";
      return date.toLocaleDateString(locale, options);
    };

    // Intenta importar buildInfo.json, si falla usa la fecha actual
    const getLastModified = async () => {
      try {
        const buildInfo = await import("../buildInfo.json");
        return new Date(buildInfo.lastModified);
      } catch (error) {
        console.log("Using current date for development", error);
        return new Date();
      }
    };

    getLastModified().then((date) => {
      setLastModified(formatDateByLanguage(date));
    });
  }, [currentLanguage]);

  return lastModified;
};

export default useLastModifiedDate;
