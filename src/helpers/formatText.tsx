import { useTheme } from "../hooks/useThemeProvider";
import React from "react";

export const FormatTextWithLabels = (text: string): React.JSX.Element => {
  const colonIndex = text.indexOf(":");
  const label = text.substring(0, colonIndex + 1);
  const content = text.substring(colonIndex + 1);
  const { theme } = useTheme();

  return (
    <p>
      <span
        className={`font-semibold ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {label}
      </span>
      <span className="font-normal">{content}.</span>
    </p>
  );
};
