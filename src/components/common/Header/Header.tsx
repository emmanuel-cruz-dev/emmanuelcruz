import { useTranslation } from "react-i18next";
import { useTheme, useMenu } from "../../../hooks";
import LanguageSwitcher from "../../ui/LanguageSwitcher";
import WhiteLogo from "../../../assets/icons/e-logo-white.png";
import Logo from "../../../assets/icons/e-logo.png";

function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <header
      className={`header flex justify-between items-center p-4 px-6 lg:px-10 md:h-20 sticky top-0 z-30 ${
        theme === "dark"
          ? "bg-dark navbar__shadow__dark"
          : "bg-light navbar__shadow__light"
      }`}
      id="header"
    >
      <a className="my-auto z-20" href="/" title={t("navbar.home")}>
        <img
          className="w-8 opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out"
          src={theme === "dark" ? WhiteLogo : Logo}
          alt="Una letra e, entre corchetes"
          loading="lazy"
          width="100"
          height="100"
        />
      </a>

      <ul
        className={`navbar__list absolute inset-0 grid gap-12 text-center place-content-center z-10 ${
          theme === "dark" ? "bg-dark" : "bg-light"
        } ${
          isMenuOpen ? "block h-screen" : "hidden"
        } md:flex md:justify-between md:relative md:gap-4 md:h-auto xl:w-3/6`}
      >
        <li onClick={closeMenu} className="nav-item">
          <a href="#hero">{t("navbar.home")}</a>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <a href="#about">{t("navbar.about")}</a>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <a href="#experience">{t("navbar.experience")}</a>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <a href="#skills">{t("navbar.skills")}</a>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <a href="#contact">{t("navbar.contact")}</a>
        </li>
      </ul>

      <div className="flex gap-4 items-center z-10">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center opacity-85 hover:opacity-100 transition-all duration-500 ease-in-out"
        >
          {theme === "dark" ? (
            <span
              title={t("navbar.darkMode")}
              className="material-icons-outlined"
            >
              dark_mode
            </span>
          ) : (
            <span
              title={t("navbar.lightMode")}
              className="material-icons-outlined"
            >
              light_mode
            </span>
          )}
        </button>
        <LanguageSwitcher />
        <label
          className="nav__label flex items-center justify-center md:hidden"
          htmlFor="toggle-menu"
          aria-label="Toggle menu"
        >
          <input
            className="absolute opacity-0 w-full h-full cursor-pointer"
            type="checkbox"
            onClick={toggleMenu}
            id="toggle-menu"
          />
          {isMenuOpen ? (
            <span className="material-icons-outlined text-3xl">close</span>
          ) : (
            <span className="material-icons-outlined text-3xl">menu</span>
          )}
        </label>
      </div>
    </header>
  );
}

export default Header;
