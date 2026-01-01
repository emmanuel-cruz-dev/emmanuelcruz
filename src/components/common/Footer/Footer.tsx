import { useTranslation } from "react-i18next";
import SocialLinks from "../../ui/SocialLinks";
import AnimatedComponent from "../../ui/AnimatedComponent";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer text-white select-none" id="footer">
      <article className="flex flex-col lg:flex-row gap-6 md:gap-4 justify-between items-center p-8 text-xs">
        <div className="order-last lg:order-first w-[150px]">
          <SocialLinks />
        </div>
        <div className="flex flex-col gap-8 md:gap-4">
          <ul className="footer__list uppercase flex flex-col md:flex-row text-center gap-6 font-semibold">
            <li>
              <a href="#hero">{t("navbar.home")}</a>
            </li>
            <li>
              <a href="#about">{t("navbar.about")}</a>
            </li>
            <li>
              <a href="#experience">{t("navbar.experience")}</a>
            </li>
            <li>
              <a href="#projects">{t("navbar.projects")}</a>
            </li>
            <li>
              <a href="#contact">{t("navbar.contact")}</a>
            </li>
          </ul>
          <AnimatedComponent animation="fade" delay={0}>
            <p className="footer__link text-center text-slate-400 uppercase">
              © 2024 · {t("footer.paragraph")} Emmanuel Cruz · Buenos Aires,
              Argentina
            </p>
          </AnimatedComponent>
        </div>
        <div className="w-[150px] hidden md:block"></div>
      </article>
    </footer>
  );
}

export default Footer;
