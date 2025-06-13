import React from "react";

export const formatTextWithLabels = (text: string): React.JSX.Element => {
  const colonIndex = text.indexOf(":");
  const label = text.substring(0, colonIndex + 1);
  const content = text.substring(colonIndex + 1);

  return (
    <p>
      <span className="font-semibold text-neutral-300/90">{label}</span>
      <span className="font-normal">{content}.</span>
    </p>
  );
};
