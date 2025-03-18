import { useEffect, useState } from "react";

const THEME_DARK = "dark";
const THEME_LIGHT = "light";
const LOCAL_STORAGE_KEY = "theme";

const useThemeContext = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || THEME_DARK
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === THEME_DARK) {
      root.classList.add(THEME_DARK);
    } else {
      root.classList.remove(THEME_DARK);
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK
    );
  };

  return { theme, toggleTheme };
};

export default useThemeContext;
