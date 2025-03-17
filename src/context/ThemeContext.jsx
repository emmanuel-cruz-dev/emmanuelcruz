import { createContext, useContext } from "react";
import useThemeContext from "../hooks/useTheme";

// Crear el contexto para el tema
const ThemeContext = createContext();

// Proveedor de tema
export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para acceder al contexto del tema
export const useTheme = () => useContext(ThemeContext);
