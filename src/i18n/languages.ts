import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Me",
        certifications: "Studies",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        title: "Switch to Spanish",
        lightMode: "Switch to dark mode",
        darkMode: "Switch to light mode",
      },
      footer: {
        phrase: "There is no plan B for success",
        channels: "Recommended channels",
        freecodecamp: "Technical courses in spanish",
        platzi: "Online professional learning",
        projects: "Course practices",
        foodie: "Cooking recipes website",
        baristas: "Coffee shop website",
        award: "Achievements",
        congratulations:
          "Congratulations! You've reached the epic end of my portfolio. You've earned the",
        rank: "professional navigator",
        thanks: "medal. Thanks for visiting!",
        paragraph: "Developed by",
        recommended: "Go to YouTube channel",
      },
      sections: {
        welcome: "Hello! I'm Emmanuel",
        hero: {
          title: "frontend developer",
          description:
            "Passionate about technology and creativity, always looking for new opportunities to learn and improve in the world of web development.",
          cv: "Download",
          email: "Copy Email",
          emailCopied: "¡Email copied!",
        },
        about: {
          title: "A Little About Me",
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
            "Technologies and tools: HTML, CSS, JavaScript, Node.js, Express, Git, and GitHub",
          javascript:
            "Key concepts: Algorithms, data structures, Object-Oriented Programming (OOP) and Functional Programming (FP)",
          responsive:
            "Technologies and tools: HTML, CSS, Flexbox, CSS Grid, Responsive Design and web accessibility",
          htmlcss:
            "Technologies and concepts: Semantic HTML, CSS, Responsive Design and Mobile first",
          uxresearch:
            "Tools and methodologies: Figma, Canva, Behance, UX research (quantitative/qualitative methods), heuristic analysis, user flows",
          nucba: "Tools: Notion, Framer, Figma and Webflow",
          url: "Go to website",
          img: "Expand image",
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
          typescript: "Superset of JavaScript with static typing",
          react: "JavaScript library for building user interfaces",
          reactNative:
            "JavaScript framework for building native mobile aplications",
          angular: "JavaScript framework for building web applications",
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
        newCourses: {
          title: "Currently Learning",
          description:
            "Expanding my knowledge of Backend and Fullstack development through these courses",
          aluraLatam:
            "Training in backend development with Java and Spring Boot, including relational databases with MySQL and deployment in Oracle Cloud",
          academiaForIt:
            "Focus on best development practices with TypeScript, advanced use of Git, Docker, TDD methodologies, Clean Code, and Clean Architecture",
          talentoTech:
            "Specialization in backend development with Node.js, Express, and Firestore, working with the modern JavaScript and Firebase ecosystem",
        },
        contact: {
          title: "I'm Just a Message Away",
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
          success: "Success! Message sent successfully.",
          error: "Something went wrong. Please try again later.",
        },
        projects: {
          title: "Featured Works",
          description: "Explore a sample of my work and skills in action.",
          pollos:
            "This site brings the fictional restaurant from Breaking Bad into the digital world. Inspired by the visual style of restaurants like KFC, this site combines an attractive design with details that refer to the series. Explore a visual experience that will make you feel like you're in a real Gus Fring franchise",
          lockKey:
            "Password manager designed to offer secure and efficient credential management. The project was developed as part of a No Country work simulation, geared toward collaborative experiences. (Test version, not final)",
          portfolio:
            "This project showcases my ability to create responsive and efficient web interfaces, featuring dark mode options and language selection. Here you will find projects that reflect my commitment to detail, performance, and functionality in frontend development",
          jinjer:
            "Music artist platform inspired by the band Jinjer. The site offers a complete experience: bilingual navigation (English/Spanish) with interactive sections, including news, biographies, tour dates, discography, music player, multimedia gallery and an online store",
          literarium:
            "Digital library modern that blends the traditional library experience with cutting-edge technology. Intuitive navigation between detailed sections, content adapted to each section, and responsive design for a personalized experience",
          button: "Visit site",
          link: "More details",
          buttonTitle: "Watch the live demo of the project",
          githubTitle: "Explore the project source code",
        },
      },
      scrollToTop: "Scroll to top",
      lastUpdate: "Last updated",
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        certifications: "Estudios",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        title: "Cambiar a Inglés",
        lightMode: "Cambiar a modo oscuro",
        darkMode: "Cambiar a modo claro",
      },
      footer: {
        phrase: "No hay plan B para el éxito",
        channels: "Canales recomendados",
        freecodecamp: "Cursos técnicos en español",
        platzi: "Aprendizaje profesional en línea",
        projects: "Prácticas de cursos",
        foodie: "Web de recetas de cocina",
        baristas: "Sitio web de cafetería",
        award: "Logros",
        congratulations:
          "¡Felicidades! Alcanzaste el épico final de mi portfolio. Te ganaste la medalla de",
        rank: "navegante profesional.",
        thanks: "¡Gracias por tu visita!",
        paragraph: "Desarrollado por",
        recommended: "Ir al canal de YouTube",
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
          title: "Un Poco Sobre mí",
          description:
            "Descubrí cómo mi experiencia y habilidades pueden agregar valor a tus proyectos.",
          hi: "Soy",
          paragraph:
            "Entusiasta de la estética funcional y la usabilidad en los proyectos. Mi interés por la resolución de problemas y la creatividad me llevaron al mundo del desarrollo web, donde me esfuerzo por aprender y mejorar mis habilidades.",
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
            "Tecnologías y herramientas: HTML, CSS, JavaScript, Node.js, Express, Git y GitHub",
          javascript:
            "Conceptos clave: Algoritmos, estructuras de datos, Programación Orientada a Objetos (OOP) y Programación Funcional (FP)",
          responsive:
            "Tecnologías y herramientas: HTML, CSS, Flexbox, CSS Grid, Diseño Responsivo y accesibilidad web",
          htmlcss:
            "Tecnologías y conceptos: HTML semántico, CSS, Diseño Responsivo y Mobile first",
          uxresearch:
            "Herramientas y metodologías: Figma, Canva, Behance, investigación UX (métodos cuantitativos/cualitativos), análisis heurístico, user flows",
          nucba: "Herramientas: Notion, Framer, Figma y Webflow",
          url: "Ir al sitio web",
          img: "Expandir imagen",
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
          typescript: "Superset de JavaScript con tipado estático",
          react:
            "Biblioteca de JavaScript para construir interfaces de usuario",
          reactNative:
            "Framework de JavaScript para crear aplicaciones móviles nativas",
          angular: "Framework de JavaScript para construir aplicaciones web",
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
        newCourses: {
          title: "Actualmente Cursando",
          description:
            "Ampliando mis conocimientos de desarrollo Backend y Fullstack a través de estos cursos",
          aluraLatam:
            "Formación en desarrollo backend con Java y Spring Boot, incluyendo bases de datos relacionales con MySQL y despliegue en Oracle Cloud",
          academiaForIt:
            "Enfoque en buenas prácticas de desarrollo con TypeScript, uso avanzado de Git, Docker, metodologías TDD, Clean Code y arquitectura limpia",
          talentoTech:
            "Especialización en desarrollo backend con Node.js, Express y Firestore, trabajando con el ecosistema moderno de JavaScript y Firebase",
        },
        contact: {
          title: "Estoy a un Mensaje de Distancia",
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
          success: "¡Éxito! Mensaje enviado correctamente.",
          error: "Algo salió mal. Intenta de nuevo más tarde.",
        },
        projects: {
          title: "Trabajos Destacados",
          description:
            "Explora una muestra de mi trabajo y habilidades en acción.",
          pollos:
            "Este sitio lleva el restaurante ficticio de Breaking Bad al mundo digital. Inspirado en el estilo visual de restaurantes como KFC, esta página combina un diseño atractivo con detalles que remiten a la serie. Explora una experiencia visual que te hará sentir en una franquicia de Gus Fring",
          lockKey:
            "Administrador de contraseñas pensado para ofrecer una gestión segura y eficiente de credenciales. El proyecto fue desarrollado en el marco de una simulación laboral de No Country, orientada a experiencias colaborativas. (Versión de prueba, no final)",
          portfolio:
            "Este proyecto demuestra mi habilidad para crear interfaces web responsivas y eficientes, cuenta con opciones de modo oscuro y selección de idioma. Aquí encontrarás proyectos que reflejan mi compromiso con el detalle, el rendimiento y la funcionalidad en desarrollo frontend",
          jinjer:
            "Plataforma de artista musical inspirada en la banda Jinjer. El sitio ofrece una experiencia completa: navegación bilingüe (inglés/español) con secciones interactivas, incluye noticias, biografías, fechas de gira, discografía, reproductor de música, galería multimedia y una tienda en línea",
          literarium:
            "Biblioteca digital moderna que fusiona la experiencia de una librería tradicional con tecnología de vanguardia. Navegación intuitiva entre secciones detalladas, contenido adaptado a cada sección y diseño responsivo para una experiencia personalizada",
          button: "Visitar sitio",
          link: "Más detalles",
          buttonTitle: "Ver la demo en vivo del proyecto",
          githubTitle: "Explorar el código fuente del proyecto",
        },
      },
      scrollToTop: "Ir hacia arriba",
      lastUpdate: "Última actualización",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
