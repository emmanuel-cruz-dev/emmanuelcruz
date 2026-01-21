import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeContextType } from "../types/types";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};
