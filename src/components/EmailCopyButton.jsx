import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


const EmailCopyButton = () => {
  const { t } = useTranslation(); // Accede a la función de traducción
  const email = "emmanuelgerr@gmail.com"; // Reemplaza con tu dirección de correo
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Restablece el estado después de 2 segundos
      })
      .catch(err => {
        console.error("Error al copiar el email: ", err);
      });
  };

  return (
    <button 
      onClick={copyEmailToClipboard}
      className='btn'
    >
      {copied ? t('sections.about.emailCopied') : t('sections.about.email')}
      <span className="material-icons-outlined">mail</span>
    </button>
  );
};

export default EmailCopyButton;
