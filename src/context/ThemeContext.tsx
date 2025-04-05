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

// Hook para acceder al contexto del tema
// export const useTheme = () => useContext(ThemeContext);

// export const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
//   }
//   return context;
// };
