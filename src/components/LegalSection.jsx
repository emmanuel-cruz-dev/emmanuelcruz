import { useState } from "react";
import { useTranslation } from "react-i18next";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="legal-item">
      <button className="legal-title w-full text-left" onClick={toggle}>
        {title}
      </button>
      {isOpen && <p className="legal-content">{content}</p>}
    </div>
  );
};

const LegalSection = () => {
  const { t } = useTranslation();

  return (
    <div className="legal-sections">
      <AccordionItem
        title={t("footer.privacy")}
        content="Contenido de la política de privacidad..."
      />
      <AccordionItem
        title={t("footer.terms")}
        content="Contenido de los términos del servicio..."
      />
      <AccordionItem
        title={t("footer.rights")}
        content="Contenido sobre derechos reservados..."
      />
    </div>
  );
};

export default LegalSection;
