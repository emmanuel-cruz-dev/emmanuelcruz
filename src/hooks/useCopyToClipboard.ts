import { useState } from "react";

export const useCopyToClipboard = (text: string, resetInterval = 2000) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), resetInterval);
      })
      .catch((err) => {
        console.error("Error al copiar el email: ", err);
      });
  };

  return { copied, copyToClipboard };
};
