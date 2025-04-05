import { createContext, FC } from "react";
import useThemeContext from "../hooks/useTheme";
import { ThemeContextType, ThemeProviderProps } from "@/types/types";

// Crear el contexto para el tema
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Proveedor de tema
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
