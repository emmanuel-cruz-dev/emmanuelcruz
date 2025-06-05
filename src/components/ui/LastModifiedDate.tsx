import { FaCalendarAlt } from "react-icons/fa";
import useLastModifiedDate from "../../hooks/useLastModifiedDate";
import { FC } from "react";
import { LastModifiedDateProps } from "@/types/types";
import {
  LAST_UPDATE_TEXT_EN,
  LAST_UPDATE_TEXT_ES,
} from "../../constants/constants";

const LastModifiedDate: FC<LastModifiedDateProps> = ({ currentLanguage }) => {
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
