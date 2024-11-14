import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const LastModifiedDate = ({ currentLanguage }) => {
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
        console.log("Using current date for development");
        return new Date();
      }
    };

    getLastModified().then((date) => {
      setLastModified(formatDateByLanguage(date));
    });
  }, [currentLanguage]);

  const lastUpdateText =
    currentLanguage === "es" ? "Última actualización" : "Last update";

  return (
    <div className="flex items-center gap-2 text-gray-600">
      <FaCalendarAlt className="w-8 h-8" />
      <p className="text-[10px]">
        {lastUpdateText}:
        <br />
        <span className="whitespace-nowrap">{lastModified}</span>
      </p>
    </div>
  );
};

export default LastModifiedDate;
