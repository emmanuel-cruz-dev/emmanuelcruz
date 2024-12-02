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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          utils: ["i18next", "react-i18next"],
          "yet-another-react-lightbox": ["yet-another-react-lightbox"],
          "react-slick": ["react-slick"],
          "slick-carousel": ["slick-carousel"],
          emailjs: ["@emailjs/browser"],
          "node-fetch": ["node-fetch"],
          "react-flag-kit": ["react-flag-kit"],
          "react-icons": ["react-icons"],
          "react-slick": ["react-slick"],
          "react-slick-next": ["react-slick-next"],
          "react-slick-prev": ["react-slick-prev"],
          "react-slick-dot": ["react-slick-dot"],
          "react-slick-dots": ["react-slick-dots"],
        },
      },
    },
  },
  define: {
    __LAST_UPDATE__: JSON.stringify(getLastCommitDate()),
  },
});
