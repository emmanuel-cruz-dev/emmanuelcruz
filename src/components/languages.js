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
        phrase: "There is no plan B for success",
        channels: "Code Channels",
        freecodecamp: "Technical courses in spanish",
        alexcg: "Modern web development",
        projects: "Projects in progress",
        eros: "Bookstore website",
        nephews: "Artists platform",
        privacy: "Privacy policy",
        terms: "Terms of service",
        rights: "All rights reserved",
        paragraph: "Developed by",
        place: "in",
      },
      sections: {
        welcome: "Hello! I'm Emmanuel.",
        hero: {
          title: "frontend developer",
          description:
            "Passionate about technology and creativity, always looking for new opportunities to learn and improve in the world of web development.",
          cv: "Download",
          email: "Copy Email",
          emailCopied: "¡Email copied!",
        },
        about: {
          title: "A little about me",
          description:
            "Discover how my experience and skills can add value to your projects.",
          hi: "I'm",
          paragraph:
            "Enthusiast of functional aesthetics and usability in projects. My interest in problem solving and creativity led me to the world of web development, where I constantly strive to learn and improve my skills.",
          contactMe: "Contact me",
          courses: "online courses",
          practice: "practice hours",
          subtitle: "Want to",
          copy: "Discover my latest projects, created with dedication and focus on every detail.",
          button: "See more",
        },
        skills: {
          title: "Tech Stack",
          description:
            "Technologies and methodologies that I use to take your projects to the next level",
          subtitle1: "Web Development",
          subtitle2: "Frameworks and Libraries",
          subtitle3: "Development Tools",
          subtitle4: "Design and Prototyping",
          subtitle5: "Methodologies",
          html: "Hypertext Markup Language",
          css: "Cascading Style Sheets",
          javascript: "Web programming language",
          react: "JavaScript library for building user interfaces",
          tailwind: "Utility CSS framework",
          bootstrap: "Front-End development framework",
          nodejs: "JavaScript runtime environment",
          figma: "User interface design tool",
          git: "Version control system",
          github: "Collaborative development platform",
          sass: "Syntactically Awesome Style Sheets",
          webflow: "Web design and development platform",
          photoshop: "Image editing software",
          vscode: "Source code editor",
          mobileFirst: "Design approach that prioritizes mobile devices",
          responsive: "Adaptive design for any device",
          bem: "Block Element Modifier",
        },
        contact: {
          title: "I'm just a message away",
          description:
            "Available for projects, inquiries, and collaborations. Don't hesitate to write me.",
        },
        projects: {
          title: "Featured Works",
          description: "Explore a sample of my work and skills in action.",
        },
        // más secciones...
      },
      lastUpdate: "Last updated",
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
        phrase: "No hay plan B para el éxito",
        channels: "Canales de código",
        freecodecamp: "Cursos técnicos en español",
        alexcg: "Desarrollo web moderno",
        projects: "Proyectos en Curso",
        eros: "Sitio web de librería",
        nephews: "Plataforma de artistas",
        privacy: "Política de privacidad",
        terms: "Términos del servicio",
        rights: "Derechos reservados",
        paragraph: "Desarrollado por",
        place: "en",
      },
      sections: {
        welcome: "Hola! Soy Emmanuel.",
        hero: {
          title: "desarrollador frontend",
          description:
            "Apasionado por la tecnología y la creatividad, siempre en busca de nuevas oportunidades para aprender y mejorar en el mundo del desarrollo web.",
          cv: "Descargar",
          email: "Copiar Email",
          emailCopied: "¡Email copiado!",
        },
        about: {
          title: "Un poco sobre mi",
          description:
            "Descubrí cómo mi experiencia y habilidades pueden agregar valor a tus proyectos.",
          hi: "Soy",
          paragraph:
            "Entusiasta de la estética funcional y la usabilidad en los proyectos. Mi interés por la resolución de problemas y la creatividad me llevaron al mundo del desarrollo web, donde me esfuerzo constantemente por aprender y mejorar mis habilidades.",
          contactMe: "Contactame",
          courses: "cursos en línea",
          practice: "horas de práctica",
          subtitle: "Querés",
          copy: "Descubrí mis últimos proyectos, creados con dedicación y enfoque en cada detalle.",
          button: "Ver más",
        },
        skills: {
          title: "Stack Tecnológico",
          description:
            "Tecnologías y metodologías que utilizo para llevar tus proyectos al siguiente nivel",
          subtitle1: "Desarrollo Web",
          subtitle2: "Frameworks y Bibliotecas",
          subtitle3: "Herramientas de Desarrollo",
          subtitle4: "Diseño y Prototipado",
          subtitle5: "Metodologías",
          html: "Lenguaje de Marcado de Hipertexto",
          css: "Hojas de Estilo en Cascada",
          javascript: "Lenguaje de programación web",
          react:
            "Biblioteca de JavaScript para construir interfaces de usuario",
          tailwind: "Framework de CSS utilitario",
          bootstrap: "Marco de desarrollo de Front-End",
          nodejs: "Entorno de ejecución de JavaScript",
          figma: "Herramienta de diseño de interfaz de usuario",
          git: "Sistema de control de versiones",
          github: "Plataforma de desarrollo colaborativo",
          sass: "Hojas de Estilo Sintácticamente Asombrosas",
          webflow: "Plataforma de diseño y desarrollo web",
          photoshop: "Software de edición de imágenes",
          vscode: "Editor de código fuente",
          mobileFirst: "Enfoque de diseño que prioriza dispositivos móviles",
          responsive: "Diseño adaptable a cualquier dispositivo",
          bem: "Modelo de elementos en bloque",
        },
        contact: {
          title: "Estoy a un mensaje de distancia",
          description:
            "Disponible para proyectos, consultas y colaboraciones. No dudes en escribirme.",
        },
        projects: {
          title: "Trabajos Destacados",
          description:
            "Explora una muestra de mi trabajo y habilidades en acción.",
        },
        // más secciones...
      },
      lastUpdate: "Última actualización",
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
