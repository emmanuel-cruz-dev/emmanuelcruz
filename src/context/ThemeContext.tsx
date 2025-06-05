import { createContext, FC } from "react";
import useThemeContext from "../hooks/useTheme";
import { ThemeContextType, ThemeProviderProps } from "@/types/types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
