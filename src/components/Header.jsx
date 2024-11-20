import { useTranslation } from "react-i18next";
import logoBlanco from "../assets/icons/logo-blanco.png";
import logoNegro from "../assets/icons/logo-negro.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "./ThemeContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`flex justify-between items-center p-4 px-6 lg:px-10 md:h-20 sticky top-0 z-30 ${
        theme === "dark" ? "bg-dark" : "bg-light"
      }`}
    >
      <a className="my-auto z-20" href="https://emmanuel-cruz.netlify.app/">
        <img
          className="w-8"
          src={theme === "dark" ? logoBlanco : logoNegro}
          alt="Una letra e, entre corchetes"
        />
      </a>

      <ul
        className={`absolute inset-0 grid gap-12 text-center place-content-center z-10 whitespace-nowrap ${
          theme === "dark" ? "bg-dark" : "bg-light"
        } ${
          isMenuOpen ? "block h-screen" : "hidden"
        } md:flex md:justify-between md:w-3/6 md:relative md:gap-4 md:h-auto`}
      >
        <li onClick={closeMenu} className="nav-item">
          <Link to="/#hero">{t("navbar.home")}</Link>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <Link to="/#about">{t("navbar.about")}</Link>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <Link to="/#projects">{t("navbar.projects")}</Link>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <Link to="/#skills">{t("navbar.skills")}</Link>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <Link to="/#contact">{t("navbar.contact")}</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center z-10">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center"
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
          htmlFor=""
          aria-label="Toggle menu"
        >
          <input
            className="absolute opacity-0 w-full h-full cursor-pointer"
            type="checkbox"
            onClick={toggleMenu}
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
};

export default Header;
