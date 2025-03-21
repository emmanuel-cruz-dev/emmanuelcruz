import { FaCalendarAlt } from "react-icons/fa";
import useLastModifiedDate from "../../hooks/useLastModifiedDate";

// Definir constantes para los textos
const LAST_UPDATE_TEXT_ES = "Última actualización";
const LAST_UPDATE_TEXT_EN = "Last update";

const LastModifiedDate = ({ currentLanguage }) => {
  const lastModified = useLastModifiedDate(currentLanguage);
  const lastUpdateText =
    currentLanguage === "es" ? LAST_UPDATE_TEXT_ES : LAST_UPDATE_TEXT_EN;

  return (
    <article className="flex items-center gap-2 text-gray-600">
      <FaCalendarAlt className="w-8 h-8" />
      <p className="text-[10px]">
        {lastUpdateText}:
        <br />
        <span className="whitespace-nowrap">{lastModified}</span>
      </p>
    </article>
  );
};

export default LastModifiedDate;
