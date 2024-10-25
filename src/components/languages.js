import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Carga de recursos de traducción
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        title: "Switch to Spanish",
        lightMode: "Switch to dark mode",
        darkMode: "Switch to light mode",
      },
      footer: {
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      sections: {
        welcome: "Hello! I'm Emmanuel.",
        about: {
          title: "Frontend Developer",
          description:
            "Passionate about technology and creativity. Always looking to learn and improve in the world of web development.",
          cv: "Download",
          email: "Copy Email",
          emailCopied: "Email copied",
        },
        projects: {
          title: "Projects",
          description: "Here are some of my projects...",
        },
        // más secciones...
      },
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        title: "Cambiar a Inglés",
        lightMode: "Cambiar a modo oscuro",
        darkMode: "Cambiar a modo claro",
      },
      footer: {
        rights: "Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos del Servicio",
      },
      sections: {
        welcome: "Hola! Soy Emmanuel.",
        about: {
          title: "Desarrollador Frontend",
          description:
            "Apasionado por la tecnología y la creatividad. Siempre en busca de aprender y mejorar en el mundo del desarrollo web.",
          cv: "Descargar",
          email: "Copiar Email",
          emailCopied: "Email copiado",
        },
        projects: {
          title: "Proyectos",
          description: "Aquí están algunos de mis proyectos...",
        },
        // más secciones...
      },
    },
  },
};

i18n
  .use(initReactI18next) // pasar i18n a react-i18next
  .init({
    resources,
    lng: "es", // idioma por defecto
    fallbackLng: "en", // idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya se encarga de esto
    },
  });

export default i18n;
