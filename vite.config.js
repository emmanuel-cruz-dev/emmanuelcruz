import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { execSync } from "child_process";

// Función para obtener la fecha del último commit
function getLastCommitDate() {
  try {
    return execSync("git log -1 --format=%cd").toString().trim();
  } catch (error) {
    console.warn("No se pudo obtener la fecha del último commit:", error);
    return new Date().toISOString();
  }
}

export default defineConfig({
  plugins: [react()],
  define: {
    __LAST_UPDATE__: JSON.stringify(getLastCommitDate()),
  },
});
