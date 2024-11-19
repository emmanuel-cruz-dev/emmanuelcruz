import { useTranslation } from "react-i18next";
import EmailCopyButton from "./EmailCopyButton";
import { AiOutlineDownload } from "react-icons/ai";
import SocialLinks from "./SocialLinks";

const Links = () => {
  const { t } = useTranslation(); // Accede a la función de traducción

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <p className="md:max-w-[30rem] text-md lg:text-lg">
        {t("sections.hero.description")}
      </p>
      <div className="flex flex-col gap-8">
        <SocialLinks />
        <div className="flex gap-2 md:gap-4">
          <a
            className="btn btn--red text-sm py-7"
            href="/Emmanuel-Cruz-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("sections.hero.cv")} CV
            <AiOutlineDownload size={30} />
          </a>
          <EmailCopyButton />
        </div>
      </div>
    </div>
  );
};

export default Links;
