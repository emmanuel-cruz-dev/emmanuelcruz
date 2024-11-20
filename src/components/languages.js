import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Carga de recursos de traducción
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Me",
        certifications: "Certifications",
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
        platzi: "Online professional learning",
        projects: "Projects in progress",
        eros: "Bookstore website",
        nephews: "Artists platform",
        award: "Achievements",
        congratulations:
          "Congratulations! You've reached the epic end of my portfolio. You've earned the",
        rank: "professional navigator",
        thanks: "medal. Thanks for visiting!",
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
        certifications: {
          title: "Formation and Certifications",
          description:
            "Courses, titles and certifications that support my knowledge and skills",
          platzi:
            "Course that encompasses the fundamentals of programming and computational logic",
          javascript:
            "Certification dedicated to the development of algorithms and data structures in JavaScript",
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
          subtitle: "Get in touch",
          name: "Name",
          email: "Email Address",
          message: "Message...",
          send: "Send",
          sending: "Sending message...",
          nameTitle: "Please enter your name",
          emailTitle: "Please enter your email address",
          messageTitle: "Please enter your message",
        },
        projects: {
          title: "Featured Works",
          description: "Explore a sample of my work and skills in action.",
          pollos:
            "This site brings the fictional restaurant from Breaking Bad into the digital world. Inspired by the visual style of restaurants like KFC, this site combines an attractive design with details that refer to the series. Explore a visual experience that will make you feel like you're in a real Gus Fring franchise.",
          button: "Visit site",
          portfolio:
            "This project showcases my ability to create responsive and efficient web interfaces, featuring dark mode options and language selection. Here you will find projects that reflect my commitment to detail, performance, and functionality in frontend development",
          link: "More details",
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
        certifications: "Certificaciones",
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
        platzi: "Aprendizaje profesional en línea",
        projects: "Proyectos en Curso",
        eros: "Sitio web de librería",
        nephews: "Plataforma de artistas",
        award: "Logros",
        congratulations:
          "¡Felicidades! Alcanzaste el épico final de mi portfolio. Te ganaste la medalla de",
        rank: "navegante profesional.",
        thanks: "¡Gracias por tu visita!",
        paragraph: "Desarrollado por",
        place: "en",
      },
      sections: {
        welcome: "Hola! Soy Emmanuel",
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
        certifications: {
          title: "Formación y Certificaciones",
          description:
            "Cursos, títulos y certificaciones que avalan mis conocimientos y habilidades",
          platzi:
            "Curso que abarca fundamentos de programación y lógica computacional",
          javascript:
            "Certificación dedicada al desarrollo de algoritmos y estructuras de datos en JavaScript",
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
          subtitle: "Contactame",
          name: "Nombre",
          email: "Correo electrónico",
          message: "Mensaje...",
          send: "Enviar",
          sending: "Enviando mensaje...",
          nameTitle: "Ingresa tu nombre",
          emailTitle: "Ingresa tu correo electrónico",
          messageTitle: "Ingresa tu mensaje",
        },
        projects: {
          title: "Trabajos Destacados",
          description:
            "Explora una muestra de mi trabajo y habilidades en acción.",
          pollos:
            "Este sitio lleva el restaurante ficticio de Breaking Bad al mundo digital. Inspirado en el estilo visual de restaurantes como KFC, esta página combina un diseño atractivo con detalles que remiten a la serie. Explora una experiencia visual que te hará sentir en una verdadera franquicia de Gus Fring.",
          button: "Visitar sitio",
          portfolio:
            "Este proyecto demuestra mi habilidad para crear interfaces web responsivas y eficientes, cuenta con opciones de modo oscuro y selección de idioma. Aquí encontrarás proyectos que reflejan mi compromiso con el detalle, el rendimiento y la funcionalidad en desarrollo frontend",
          link: "Más detalles",
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
      escapeValue: false,
    },
  });

export default i18n;
