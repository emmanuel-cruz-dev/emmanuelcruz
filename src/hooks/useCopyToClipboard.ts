import { useState } from "react";

export const useCopyToClipboard = (text, resetInterval = 2000) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), resetInterval); // Restablece el estado después de 2 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el email: ", err);
      });
  };

  return [copied, copyToClipboard];
};
