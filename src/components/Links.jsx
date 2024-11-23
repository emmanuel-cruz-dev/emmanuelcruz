import { useTranslation } from "react-i18next";
import EmailCopyButton from "./EmailCopyButton";
import { AiOutlineDownload } from "react-icons/ai";
import SocialLinks from "./SocialLinks";
import AnimatedComponent from "./AnimatedComponent";

const Links = () => {
  const { t } = useTranslation(); // Accede a la función de traducción

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <AnimatedComponent delay={2} animation="slide" direction="left">
        <p className="md:max-w-[30rem] text-md lg:text-lg">
          {t("sections.hero.description")}
        </p>
      </AnimatedComponent>
      <AnimatedComponent delay={3} animation="slide" direction="up">
        <div className="flex flex-col gap-8">
          <SocialLinks />
          <div className="flex gap-2 md:gap-4">
            <a
              className="btn btn--red uno text-sm py-7"
              href="/Emmanuel-Cruz-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                {t("sections.hero.cv")} CV
                <AiOutlineDownload size={30} />
              </span>
            </a>
            <EmailCopyButton />
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default Links;
